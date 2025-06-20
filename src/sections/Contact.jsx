import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';

import useAlert from '../hooks/useAlert.js';
import Alert from '../components/Alert.jsx';

const Contact = () => {
  const formRef = useRef();

  const { alert, showAlert, hideAlert } = useAlert();
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        'service_rj11lcm',
        'template_qhoe638',
        {
          from_name: form.name,
          to_name: 'Aadya Sharma',
          from_email: form.email,
          to_email: 'aadyasindia@gmail.com',
          message: form.message,
        },
        'Hz7QNhmRZkgwtCl4g',
      )
      .then(
        () => {
          setLoading(false);
          showAlert({
            show: true,
            text: 'Thank you for your message 😃',
            type: 'success',
          });

          setTimeout(() => {
            hideAlert(false);
            setForm({
              name: '',
              email: '',
              message: '',
            });
          }, [3000]);
        },
        (error) => {
          setLoading(false);
          console.error(error);

          showAlert({
            show: true,
            text: "I didn't receive your message 😢",
            type: 'danger',
          });
        },
      );
  };

  return (
    <section className="c-space my-30" id="contact">
      {alert.show && <Alert {...alert} />}

      <div className="relative min-h-screen flex items-center justify-center flex-col">
        <img src="/assets/terminal.png" alt="terminal-bg" className="absolute inset-0 min-h-screen" />

        <div className="contact-container">
          <h3 className="head-text">Let's talk</h3>
          <p className="text-lg text-white-600 mt-3">
          Have a question, collaboration idea, or just want to say hi?
          I’d love to hear from you! Whether it’s about a potential project, feedback, or a shared passion for tech and creativity, feel free to drop a message below and I’ll get back to you soon.
          </p>

          <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col space-y-7">
            <label className="space-y-3">
              <span className="field-label">Full Name</span>
              <input
        
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="ex., Aadya Sharma"
              />
            </label>

            <label className="space-y-3">
              <span className="field-label">Email address</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="ex., aadyasindia@gmail.com"
              />
            </label>

            <label className="space-y-3">
              <span className="field-label">Your message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="field-input"
                placeholder="Hi, let's work together..."
              />
            </label>

            <button className="field-btn" type="submit" disabled={loading}>
              {loading ? 'Sending...' : 'Send Message'}

              <img src="/assets/arrow-up.png" alt="arrow-up" className="field-btn_arrow" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

// const Contact = () => {
//   const formRef = useRef();
//   const [form, setForm] = useState({ name: '', email: '', message: '' });
//   const handleCange = ({ target: { name, value } }) => {
//     setForm({ ...form, [name]: value });
//   }
//   const handleSubmit = async (e) => {

//     e.preventDefault();

//     setLoading(true);

//     try {
//       await emailjs.send(
//         'service_rj11lcm',
//         'template_p65kd4l',
//         {
//           from_name: form.name,
//           to_name: 'Aadya Sharma',
//           from_email: form.email,
//           to_email: 'aadyasindia@gmail.com',
//           message: form.message,
//         },
//         'Hz7QNhmRZkgwtCl4g'
//       )
//       setLoading(false);
//       alert('Thank you for your message 😃');

//     } catch (error) {
//       setLoading(false);
//       console.error(error);
//       alert("I didn't receive your message 😢");
//     }



//   };
//   return (
//     <section className='c-space my-20'>
//       <div className='relative min-h-screen flex items-center justify-center flex-col'>
//         <img src='/assets/terminal.png' alt='terminal background' className='absolute insert-0 min-h-screen' />
//         <div className='contact-container'>
//           <h3 className='head-text'>Let's talk</h3>
//           <p className='text-lg text-white-600 mt-3'>Connect with me to explore collaboration opportunities</p>
//           <form ref={formRef} onSubmit={handleSubmit}
//             className='mt-12 flex flex-col space-y-7'>
//             <label className='space-y-3'>
//               <span className='field-label'>Full Name</span>
//               <input
//                 type='text'
//                 name='name'
//                 value={form.name}
//                 onChange={handleCange}
//                 required
//                 className='field-input'
//                 placeholder='Aadya Sharma'
//               />
//             </label>
//             <label className='space-y-3'>
//               <span className='field-label'>Email</span>
//               <input
//                 type='text'
//                 name='name'
//                 value={form.email}
//                 onChange={handleCange}
//                 required
//                 className='field-input'
//                 placeholder='aadyasindia@gmail.com'
//               />
//             </label>
//             <label className='space-y-3'>
//               <span className='field-label'>Your Message</span>
//               <textarea
//                 name='message'
//                 value={form.message}
//                 onChange={handleCange}
//                 required
//                 rows={5}
//                 className='field-input'
//                 placeholder='Hi lets work together...,'
//               />
//             </label>

//             <button className='field-btn' type='submit' disabled={loading}>
//               {loading ? 'Sending...' : 'Send Message'}
//               <img src='/assets/arrow-up.png' alt='arrow-up' className='field-btn_arrow' />
//             </button>


//           </form>
//         </div>
//       </div>

//     </section>
//   )
// }

export default Contact;
