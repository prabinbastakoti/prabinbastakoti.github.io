import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import "./contact.scss";

const Contact = () => {
  const formRef = useRef();
  const [state, setState] = useState({ type: "", message: "", sending: false });

  const sendEmail = async (event) => {
    event.preventDefault();
    setState({ type: "", message: "", sending: true });

    try {
      await emailjs.sendForm(
        "service_g0mueah",
        "template_hzeh0x1",
        formRef.current,
        "Mw9UkDsQIzGw09274",
      );

      setState({
        type: "success",
        message: "Message received. I will get back to you shortly.",
        sending: false,
      });
      formRef.current.reset();
    } catch (error) {
      setState({
        type: "error",
        message: "Something went wrong while sending. Please try again.",
        sending: false,
      });
    }
  };

  return (
    <div className='contact container'>
      <motion.div
        className='contact__intro panel'
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.45 }}
      >
        <p className='eyebrow'>Contact</p>
        <h2 className='sectionTitle'>
          Let&apos;s craft your next digital product.
        </h2>
        <p>
          Share your goals, timeline, and scope. I usually respond within one
          business day with a clear next step.
        </p>

        <div className='contact__info'>
          <p>
            <strong>Email</strong>
            <span>info@prabinbastakoti.com.np</span>
          </p>
          <p>
            <strong>Phone</strong>
            <span>+977 9809224210</span>
          </p>
          <p>
            <strong>Location</strong>
            <span>Kathmandu, Nepal</span>
          </p>
        </div>
      </motion.div>

      <motion.form
        className='contact__form panel'
        ref={formRef}
        onSubmit={sendEmail}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.45, delay: 0.12 }}
      >
        <label htmlFor='name'>Name</label>
        <input
          id='name'
          type='text'
          required
          name='name'
          placeholder='Your name'
        />

        <label htmlFor='email'>Email</label>
        <input
          id='email'
          type='email'
          required
          name='email'
          placeholder='Your email'
        />

        <label htmlFor='message'>Message</label>
        <textarea
          id='message'
          rows={6}
          name='message'
          required
          placeholder='Tell me a little about your project, expected timeline, and goals'
        />

        <button
          className='btn btn--primary'
          type='submit'
          disabled={state.sending}
        >
          {state.sending ? "Sending..." : "Send Message"}
        </button>

        {state.message && (
          <p className={`contact__message contact__message--${state.type}`}>
            {state.message}
          </p>
        )}
      </motion.form>
    </div>
  );
};

export default Contact;
