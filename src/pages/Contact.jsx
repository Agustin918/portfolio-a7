import React, { useState, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import AnimatedPage from '../components/AnimatedPage';
import './Contact.css';

const Contact = () => {
    const formRef = useRef();
    const [status, setStatus] = useState('idle'); // 'idle', 'sending', 'success', 'error'
    const [formData, setFormData] = useState({
        name: '',
        surname: '',
        email: '',
        phone: '',
        details: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('sending');

        const webhookUrl = import.meta.env.VITE_MAKE_WEBHOOK_URL;

        if (!webhookUrl || webhookUrl.includes('url_aqui')) {
            console.error('URL de Webhook de Make.com no configurada');
            setStatus('error');
            return;
        }

        fetch(webhookUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                ...formData,
                timestamp: new Date().toLocaleString(),
                project: 'a7 Arquitectura Portfolio'
            }),
        })
        .then((response) => {
            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', surname: '', email: '', phone: '', details: '' });
                setTimeout(() => setStatus('idle'), 5000);
            } else {
                throw new Error('Error en la respuesta del servidor');
            }
        })
        .catch((error) => {
            console.error('Error enviando a n8n:', error);
            setStatus('error');
            setTimeout(() => setStatus('idle'), 5000);
        });
    };

    return (
        <AnimatedPage>
            <div className="section">
                <Helmet>
                    <title>Contacto | a7 Arquitectura</title>
                    <meta name="description" content="¿Tienes un proyecto en mente? Ponte en contacto con nosotros para una consulta personalizada." />
                </Helmet>
                <div className="container">
                    <div className="contact-wrapper">
                        <motion.div 
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: [0.165, 0.84, 0.44, 1] }}
                            className="contact-info"
                        >
                            <h1 className="page-title">Contacto</h1>
                            <div className="contact-details">
                                <div className="contact-item">
                                    <span className="label">Hablemos de tu proyecto</span>
                                    <p style={{ marginTop: '1rem', fontSize: '1.2rem', fontWeight: '200' }}>
                                        Ingeniero Maschwitz, Buenos Aires
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.form 
                            ref={formRef}
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: [0.165, 0.84, 0.44, 1] }}
                            className="contact-form" 
                            onSubmit={handleSubmit}
                        >
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Nombre"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    disabled={status === 'sending'}
                                />
                                <input
                                    type="text"
                                    name="surname"
                                    placeholder="Apellido"
                                    value={formData.surname}
                                    onChange={handleChange}
                                    required
                                    disabled={status === 'sending'}
                                />
                            </div>
                            <input
                                type="email"
                                name="email"
                                placeholder="Mail"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                disabled={status === 'sending'}
                            />
                            <input
                                type="tel"
                                name="phone"
                                placeholder="Teléfono"
                                value={formData.phone}
                                onChange={handleChange}
                                disabled={status === 'sending'}
                            />
                            <textarea
                                name="details"
                                placeholder="Detalles de proyecto"
                                rows="5"
                                value={formData.details}
                                onChange={handleChange}
                                required
                                disabled={status === 'sending'}
                            ></textarea>
                            
                            <button 
                                type="submit" 
                                className={`submit-btn ${status === 'sending' ? 'loading' : ''}`}
                                disabled={status === 'sending'}
                            >
                                {status === 'sending' ? 'ENVIANDO...' : 'ENVIAR'}
                            </button>

                            <AnimatePresence>
                                {status === 'success' && (
                                    <motion.p 
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0 }}
                                        style={{ color: 'green', fontSize: '0.9rem', marginTop: '1rem' }}
                                    >
                                        ¡Mensaje enviado con éxito! Nos contactaremos pronto.
                                    </motion.p>
                                )}
                                {status === 'error' && (
                                    <motion.p 
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0 }}
                                        style={{ color: 'red', fontSize: '0.9rem', marginTop: '1rem' }}
                                    >
                                        Hubo un error al enviar el mensaje. Por favor, intenta por mail directo.
                                    </motion.p>
                                )}
                            </AnimatePresence>
                        </motion.form>
                    </div>
                </div>
            </div>
        </AnimatedPage>
    );
};

export default Contact;
