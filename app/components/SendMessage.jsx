"use client"
import emailjs from '@emailjs/browser';
import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
const SendMessage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [subject, setSubject] = useState('');
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
    
        emailjs
          .sendForm(
            process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
            process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
            form.current,
            process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
          )
          .then(
            () => {
              console.log('Email sent successfully!');
              // Clear form fields
              setName('');
              setEmail('');
              setMessage('');
              setSubject('');
              // Show success modal
              setShowSuccessModal(true);
              setIsSubmitting(false);
            },
            (error) => {
              console.log('Email send failed...', error.text);
              setIsSubmitting(false);
              alert('Failed to send message. Please try again.');
            }
          );
    };
    
    const closeModal = () => {
        setShowSuccessModal(false);
    };
    
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ 
                opacity: 1, 
                y: 0,
            }}
            viewport={{ once: true }}
            transition={{
                duration: 0.8,
                ease: "easeOut",
            }}
        >
            <section className="py-16 bg-gradient-to-br from-slate-900 via-slate-950 to-black text-white">
                <div className="container text-center">
                    <h2 className="text-3xl font-bold mb-6">Ready to send Message</h2>
                    <div className="flex justify-center">
                        <div className="bg-slate-800 p-8 rounded-lg shadow-xl max-w-md w-full">
                            <form ref={form} className="mt-6" onSubmit={sendEmail}>
                                <div className="mb-4">
                                    <label htmlFor="name" className="block text-white font-semibold">
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        value={name}
                                        name="user_name"
                                        required
                                        onChange={(e) => setName(e.target.value)}
                                        className="w-full px-4 py-2 mt-1 border text-black border-blue-700 rounded-md focus:ring-blue-500 focus:border-blue-500"
                                        placeholder="Enter your full name"
                                    />
                                    <label htmlFor="subject" className="block text-white font-semibold mt-4">
                                        Subject
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        value={subject}
                                        name="user_subject"
                                        required
                                        onChange={(e) => setSubject(e.target.value)}
                                        className="w-full px-4 py-2 mt-1 text-black border border-blue-700 rounded-md focus:ring-blue-500 focus:border-blue-500"
                                        placeholder="Enter your subject"
                                    />
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="email" className="block text-white font-semibold">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="user_email"
                                        value={email}
                                        required
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full px-4 py-2 mt-1 border text-black border-blue-700 rounded-md focus:ring-blue-500 focus:border-blue-500"
                                        placeholder="Enter your email"
                                    />
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="message" className="block text-white font-semibold">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={message}
                                        required
                                        onChange={(e) => setMessage(e.target.value)}
                                        className="w-full text-black px-4 py-6 mt-1 border border-blue-700 rounded-md focus:ring-blue-500 focus:border-blue-500"
                                        placeholder="Enter your message"
                                    />
                                </div>

                                <motion.button
                                    whileHover={{ 
                                        scale: 1.02,
                                        transition: { duration: 0.2 }
                                    }}
                                    whileTap={{ 
                                        scale: 0.98,
                                        transition: { duration: 0.1 }
                                    }}
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-blue-600 cursor-pointer text-white py-2 border-2 border-blue-600 hover:bg-white hover:text-blue-600 rounded-3xl transition disabled:opacity-70"
                                >
                                    {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
                                </motion.button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Success Modal */}
            {showSuccessModal && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                    <div className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full text-center">
                        <div className="mb-4 flex justify-center">
                            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                            </div>
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">Message Sent Successfully!</h3>
                        <p className="text-gray-600 mb-6">Thank you for contacting us. We'll get back to you as soon as possible.</p>
                        <button
                            onClick={closeModal}
                            className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </motion.div>
    );
};

export default SendMessage;