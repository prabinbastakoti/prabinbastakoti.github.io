import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import './contact.scss';

const MESSAGE_DISMISS_SECONDS = 10;

const Contact = () => {
  const formRef = useRef();
  const [state, setState] = useState({ type: '', message: '', sending: false });
  const [secondsLeft, setSecondsLeft] = useState(MESSAGE_DISMISS_SECONDS);
  const [isMessageVisible, setIsMessageVisible] = useState(false);
  const [introLockHeight, setIntroLockHeight] = useState(0);
  const dismissTimeoutRef = useRef(null);
  const countdownIntervalRef = useRef(null);

  const clearMessageTimers = () => {
    if (dismissTimeoutRef.current) {
      clearTimeout(dismissTimeoutRef.current);
      dismissTimeoutRef.current = null;
    }

    if (countdownIntervalRef.current) {
      clearInterval(countdownIntervalRef.current);
      countdownIntervalRef.current = null;
    }
  };

  const showStatusMessage = (type, message) => {
    clearMessageTimers();
    setState({ type, message, sending: false });
    setSecondsLeft(MESSAGE_DISMISS_SECONDS);
    setIsMessageVisible(true);
  };

  useEffect(() => {
    if (!state.message || !isMessageVisible) {
      return;
    }

    countdownIntervalRef.current = setInterval(() => {
      setSecondsLeft((previous) => (previous > 0 ? previous - 1 : 0));
    }, 1000);

    dismissTimeoutRef.current = setTimeout(() => {
      setIsMessageVisible(false);
      clearMessageTimers();
    }, MESSAGE_DISMISS_SECONDS * 1000);

    return () => {
      clearMessageTimers();
    };
  }, [state.message, isMessageVisible]);

  useEffect(() => {
    return () => {
      clearMessageTimers();
    };
  }, []);

  useEffect(() => {
    const updateIntroLockHeight = () => {
      if (state.message || !formRef.current) {
        return;
      }

      setIntroLockHeight(formRef.current.offsetHeight);
    };

    updateIntroLockHeight();
    window.addEventListener('resize', updateIntroLockHeight);

    return () => {
      window.removeEventListener('resize', updateIntroLockHeight);
    };
  }, [state.message, state.sending]);

  const sendEmail = async (event) => {
    event.preventDefault();
    clearMessageTimers();
    setIsMessageVisible(false);
    setSecondsLeft(MESSAGE_DISMISS_SECONDS);
    setState({ type: '', message: '', sending: true });

    try {
      await emailjs.sendForm(
        'service_g0mueah',
        'template_hzeh0x1',
        formRef.current,
        'Mw9UkDsQIzGw09274',
      );

      showStatusMessage(
        'success',
        'Message received. I will get back to you shortly.',
      );
      formRef.current.reset();
    } catch (error) {
      showStatusMessage(
        'error',
        'Something went wrong while sending. Please try again.',
      );
    }
  };

  const handleMessageExitComplete = () => {
    if (state.message) {
      setState((previous) => ({ ...previous, type: '', message: '' }));
    }
  };

  const shouldLockIntroHeight = Boolean(state.message) && introLockHeight > 0;

  return (
    <div className="contact container">
      <motion.div
        className="contact__intro panel"
        style={
          shouldLockIntroHeight ? { height: `${introLockHeight}px` } : undefined
        }
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.45 }}
      >
        <p className="eyebrow">Contact</p>
        <h2 className="sectionTitle">
          Let&apos;s craft your next digital product.
        </h2>
        <p>
          Share your goals, timeline, and scope. I usually respond within one
          business day with a clear next step.
        </p>

        <div className="contact__info">
          <p>
            <strong>Email</strong>
            <span>info@prabinbastakoti.com.np</span>
          </p>
          <p>
            <strong>Location</strong>
            <span>Kathmandu, Nepal</span>
          </p>
        </div>
      </motion.div>

      <motion.form
        className="contact__form panel"
        ref={formRef}
        onSubmit={sendEmail}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.45, delay: 0.12 }}
      >
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          required
          name="name"
          placeholder="Your name"
        />

        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          required
          name="email"
          placeholder="Your email"
        />

        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          rows={6}
          name="message"
          required
          placeholder="Tell me a little about your project, expected timeline, and goals"
        />

        <button
          className="btn btn--primary"
          type="submit"
          disabled={state.sending}
        >
          {state.sending ? 'Sending...' : 'Send Message'}
        </button>

        <AnimatePresence onExitComplete={handleMessageExitComplete}>
          {state.message && isMessageVisible && (
            <motion.p
              className={`contact__message contact__message--${state.type}`}
              initial={{ opacity: 0, x: 18 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -36 }}
              transition={{ duration: 0.32, ease: 'easeOut' }}
            >
              <span>{state.message}</span>
              <span className="contact__messageTimer">{secondsLeft}s</span>
            </motion.p>
          )}
        </AnimatePresence>
      </motion.form>
    </div>
  );
};

export default Contact;
