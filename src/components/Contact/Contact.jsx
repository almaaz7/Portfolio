import React, { useContext, useState } from 'react'
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import './Contact.css'
import { themeContext } from '../../Context';

const Contact = () => {
    const form = useRef();
    const [done, setDone] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_de4dijy', 'template_j2f0zjd', form.current, 'FeRWPfggMtVPSgUbo')
            .then((result) => {
                console.log(result.text);
                setDone(true);
            }, (error) => {
                console.log(error.text);
            });
    };
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div className="contact-form" id='contact'>
            <div className="w-left">
                <div className="awesome">
                    <span style={{color: darkMode?'white':''}} >Get in Touch</span>
                    <span>Contact me</span>
                    <div className="blur s-blur1" style={{ background: '#AFBF1FF94' }}></div>
                </div>
            </div>
            <div className="c-right">
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="user_name" className='user' placeholder='Name' />
                    <input type="email" name="user_email" className='user' placeholder='Email' />
                    <textarea name="message" className='user' placeholder='Message' />
                    <button type="submit" className='button'>Send</button>
                    <span>{done && "Thanks for contacting me."}</span>
                    <div className="blur c-blur" style={{ background: "var(--purple" }}></div>
                </form>

            </div>
        </div>
    )
}

export default Contact