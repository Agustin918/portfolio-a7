import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import AnimatedPage from '../components/AnimatedPage';

const NotFound = () => {
    return (
        <AnimatedPage>
            <div className="section">
                <div className="container" style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minHeight: '60vh',
                    textAlign: 'center'
                }}>
                    <motion.h1 
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 100 }}
                        style={{
                            fontSize: '6rem',
                            fontWeight: '200',
                            marginBottom: '1rem',
                            letterSpacing: '-0.05em'
                        }}
                    >
                        404
                    </motion.h1>
                    <p style={{
                        fontSize: '1.1rem',
                        color: 'var(--text-secondary)',
                        marginBottom: '2.5rem',
                        maxWidth: '400px'
                    }}>
                        La página que buscás no existe o fue movida.
                    </p>
                    <Link
                        to="/"
                        style={{
                            padding: '0.8rem 2.5rem',
                            backgroundColor: 'var(--accent)',
                            color: '#fff',
                            fontSize: '0.85rem',
                            letterSpacing: '0.1em',
                            textTransform: 'uppercase',
                            transition: 'background-color 0.3s ease'
                        }}
                    >
                        Volver al inicio
                    </Link>
                </div>
            </div>
        </AnimatedPage>
    );
};

export default NotFound;
