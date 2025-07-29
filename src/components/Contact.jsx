import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import img from '../assets/contact.webp';
import Input from './Input';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_liofqv5', 'template_50yb89u', form.current, 'frGbXjTvYLi_aFHgu')
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div id='contact' className='w-4/5 bg-white shadow m-auto font-sans flex rounded p-5 my-20'>
      <div className='w-1/2'>
       
        <img src={img} alt="Contact" className='' />
      </div>
      <div className='w-1/2 p-5 h-4/5'>
      <h1 className='text-center p-3 text-[32px] text-licol'>CONTACT ME</h1>
        <div className='flex flex-col w-full space-y-10'>
          
          <form ref={form} onSubmit={sendEmail}>
            <Input type='text' text='Full Name' name='user_name' />
            <Input type='email' text='Email' name='user_email' />
            <textarea name='message' placeholder='Message' className='border-[1px] border-licol rounded-md resize-none outline-none p-10 w-full mt-10'></textarea>
            <input value='Send' type='submit' className='w-32 h-10 bg-custom-gradient rounded-md  mt-5 text-white hover:bg-hov hover:transition duration-300 ease-in-out' />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
