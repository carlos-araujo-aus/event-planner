import React from 'react';
import './EventPlanner.css'; // Import CSS file for styling
import Footer from './Footer';
import ContactSection from './ContactSection';
import TestimonialsSection from './TestimonialsSection';
import FeaturesSection from './FeaturesSection';
import EventsCategoriesSection from './EventsCategoriesSection';

const EventPlanner = () => {
    return (
        <div className="event-planner-container">

            <header>
                <h1>Welcome to Event Planner</h1>
            </header>

            <section className='description'>
                <p>Plan and organize your events effortlessly with Event Planner. From
                birthdays to corporate meetings, we have got you covered.</p>
                <button className='get-started-button'>Get Started</button>
            </section>

            <EventsCategoriesSection/>
            <FeaturesSection/>
            <TestimonialsSection/>
            <ContactSection/>
            <Footer/>

        </div>
    );
};

export default EventPlanner;
