import { useState } from 'react';
import emailjs from 'emailjs-com';
import socials from "../content/socials";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";


const EMAILJS_SERVER_ID = 'service_myportfolio';
const EMAILJS_TEMPLATE_ID = 'myportfoliotemplatejs'
const EMAILJS_PUBLIC_KEY = 'aEiE8lrk6V56j4q-M'
const Reachout = () => {
    const [formData, setFormData] = useState({
        senderName: '',
        senderEmail: '',
        subject: '',
        message: '',
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs
            .send(
                EMAILJS_SERVER_ID,  // Your EmailJS service ID
                EMAILJS_TEMPLATE_ID,  // Your EmailJS template ID
                formData,            // The form you want to send
                EMAILJS_PUBLIC_KEY       // Your EmailJS user ID
            )
            .then(
                (result) => {
                    console.log(result.text);
                    alert('Email sent successfully!');
                    setFormData({
                        senderName: '',
                        senderEmail: '',
                        subject: '',
                        message: '',
                    })
                },
                (error) => {
                    console.log(error.text);
                    alert('Error sending email.');
                }
            );
    };
    return (
        <div className="contact-section">
            <div className="contact-info">
                <h1>Let&apos;s talk about everything!</h1>
                <p>
                    Don&apos;t like forms? Send me an{" "}
                    <a href="mailto:ahsanazam46@gmail@gmail.com">email</a>. 👋
                    <br />
                    <br />
                    <h3>Or find me on:</h3>
                    <div className="hero-socials">
                        {socials.map((social, index) => (
                            <a key={index} href={social.url}>
                                <img src={`/socials/${social.icon}`} alt="" />
                            </a>
                        ))}
                    </div>
                </p>
                <div>
                    <p className="contact-links">
                        <MdEmail />
                        ahsanazam46@gmail.com
                    </p>
                    <br />
                    <p className="contact-links">
                        <FaPhoneAlt />
                        +92 343 7429047
                    </p>
                    <br />
                    <p className="contact-links">
                        <IoLocation />
                        Pakistan
                    </p>
                    <br />
                </div>
            </div>
            <div className="contact-form">
                <form name="contact" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="senderName"
                        placeholder="Your Name"
                        value={formData.senderName}
                        required
                        onChange={handleChange}
                    />
                    <input type="text" name="senderEmail" placeholder="Email" value={formData.senderEmail} required onChange={handleChange} />
                    <input type="text" name="subject" placeholder="Subject" value={formData.subject} required onChange={handleChange} />
                    <textarea
                        placeholder="Your Message"
                        name="message"
                        value={formData.message}
                        required
                        onChange={handleChange}
                    ></textarea>
                    <input type="submit" value="Send" />
                </form>
            </div>
        </div>
    );
};

export default Reachout;
