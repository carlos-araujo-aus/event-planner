import React from 'react';
import './EventPlanner.css';

const ContactSection = () => {
    return (
        <>
            <section className='contact'>

                <h2>Contact Us</h2>

                <form>

                    <input type="text" placeholder="Name" />
                    <input type="email" placeholder="Email" />
                    <textarea placeholder="Message"></textarea>
                    <button className='submit-button'>Submit</button>

                </form>

            </section>
        
        </>
    )
}

export default ContactSection;