import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_f7mxomb',
        'contact_form',
        form.current,
        'CqdMPnR641yxueMAp'
      )
      .then(
        (result) => {
          alert('Correo enviado correctamente');
        },
        (error) => {
          alert(`Ocurrio un error, intente nuevamente - ${error}`);
        }
      );
    e.target.reset();
  };

  return (
    <>
      <div className='flex flex-col items-center w-full min-h-screen pt-20 pb-4 px-4'>
        <div className='w-2/3 text-center pb-6'>
          <h2>CONTACT ME</h2>
          <p className='text-sm pt-6'>
            If you are interested in my work and want to know more about me or
            my projects, you can send me a message.
            Let’s talk.
          </p>
        </div>
        <form ref={form} onSubmit={sendEmail} className='w-1/2'>
          <div className='space-y-1 pt-4'>
            <label className='block text-sm'>Enter your name</label>
            <input
              className='border text-sm bg-transparent border-gray-400 w-full p-2 focus:outline-none focus:shadow-outline'
              type='text'
              name='user_name'
              required
              placeholder='Write your name'
            />
          </div>
          <div className='space-y-1 pt-4'>
            <label className='block text-sm'>Enter your mail</label>
            <input
              className='border text-sm bg-transparent border-gray-400 w-full p-2 focus:outline-none focus:shadow-outline'
              type='text'
              name='user_email'
              required
              placeholder='Write your email'
            />
          </div>
          <div className='space-y-1 pt-4'>
            <label className='block text-sm'>Leave a message</label>
            <textarea
              className='border text-sm bg-transparent border-gray-400 w-full p-2 focus:outline-none focus:shadow-outline'
              rows={4}
              type='text'
              name='message'
              required
              placeholder='Leave a message'
            />
          </div>
        </form>
        <button
          className='border border-gray-500 rounded-md w-24 h-12 hover:bg-gray-400 hover:text-white text-sm my-4'
          type='submit'
        >
          Send
        </button>
        <p className='text-sm pt-4 pb-2'>
          Or you can take a look in my instagram profile
        </p>
        <img src='src\images\instagram.svg' alt='Instagram logo' />
      </div>
    </>
  );
};

export default Contact;
