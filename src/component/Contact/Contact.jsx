import React, { useRef } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { toast } from 'react-toastify';
import emailjs from "@emailjs/browser"
import contact from '../../assets/contact.jpg';

export default function Contact() {

      const form = useRef();
  
      const sendEmail = (e) => {
          e.preventDefault();
          emailjs
            .sendForm('service_shadr0o', 'template_mj7rlbd', form.current, {
              publicKey: `${import.meta.env.VITE_PUBLIC_KEY}`,
            })
            .then(
              (result) => {
                console.log('SUCCESS!', result.text);
                e.target.reset();
                toast.success("Form submit successfully");
              },
              (error) => {
                console.log('FAILED...', error.text);
                toast.error("Form not submit successfully")
              },
            );
        };

    return (
        <section id="contact" className="md:min-h-screen w-full max-w-5xl mx-auto flex flex-col items-center mb-4 md:mb-0 text-center">
            <div className="flex flex-col">
                <span className="text-4xl font-semibold pt-12 mb-6">Let's Connect</span>
                <span className="text-lg font-normal px-8">Please fill out the form to contact me for any discussion</span>
            </div>
            <div className=" flex flex-col md:flex-row justify-evenly items-center mt-8 m-4 rounded-lg shadow-lg">
                <div className=" hidden md:block animate-fadeInLeft">
                    <img src={contact} alt="Contact" className="h-[550px] w-[700px] object-cover rounded-lg" />
                </div>
                <form ref={form} onSubmit={sendEmail} className="flex flex-col p-12 md:p-6 w-[90vw] md:w-[60vw] animate-fadeInRight">
                    <TextField className='mb-4' id="name" name='name' required label="Name" placeholder="Your Name" fullWidth />
                    <TextField className='mb-4' type='email' id="email" name='email' required label="Email" placeholder="Your Email" fullWidth />
                    <TextField className='mb-4' id='message' name='message' required label="Message" multiline rows={3} placeholder='Your Message' fullWidth />
                    <Button variant="contained" className="mt-4 w-full max-w-sm mx-auto" type="submit">Submit</Button>
                </form>
            </div>
        </section>
    );
}
