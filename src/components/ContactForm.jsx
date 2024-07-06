import React, { useRef } from 'react';
import swal from 'sweetalert';
import emailjs from '@emailjs/browser';
import { IoMdSend } from 'react-icons/io';

export const ContactForm = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_mhn1gcy', 'template_bxyzh4f', form.current, 'goUnFzQDNth6hywq4')
            .then((result) => {
                if (result.text) {
                    
                    swal("Email send success fully!");

                };
            }, (error) => {
                console.log(error);
                if (error.text) {
                    swal("Soothing is roang please try again!");
                };
            });
    };

    return (
        <form data-aos="fade-right" ref={form} onSubmit={sendEmail} className="max-w-md mx-auto mt-8 space-y-4">
            
            <input required placeholder='Enter Your Name' type="text" name="user_name" className="mt-1 p-2 w-full border-2 border-teal-500  bg-gray-700 rounded-md" />

            
            <input  required placeholder='Enter Your Email' type="email" name="user_email" className="mt-1 p-2 w-full border-2 border-teal-500 bg-gray-700 rounded-md" />

          
            <textarea required placeholder='Enter Your Message.....' name="message" className=" text-white border-2 border-teal-500 mt-1 p-2 h-44 w-full  bg-gray-700 rounded-md" />

            <div>
                <button
                    type="submit"
                    className="px-4 py-2 btn-primary text-white rounded-md hover:bg-blue-600 flex justify-center items-center font-semibold mt-3 gap-x-2"
                >
                    Submit Now <IoMdSend />
                </button>
            </div>


        </form>
    );
};
export default ContactForm;