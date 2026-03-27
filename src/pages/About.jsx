import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import AnimatedPage from '../components/AnimatedPage';
import './About.css';

const About = () => {
    return (
        <AnimatedPage>
            <div className="section">
                <Helmet>
                    <title>Nosotros | a7 Arquitectura</title>
                    <meta name="description" content="Conoce a a7 Arquitectura, un estudio en Ingeniero Maschwitz dedicado a crear espacios con sensaciones y compromiso ambiental." />
                </Helmet>
                <div className="container">
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="page-title"
                    >
                        Nosotros
                    </motion.h1>
                    
                    <div className="about-grid">
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="about-text"
                        >
                            <p>
                                Somos un estudio de arquitectura, ubicados en <strong>Ingeniero Maschwitz</strong>. Nos dedicamos a la realización de proyecto, dirección y construcción de obras de arquitectura en general, de acuerdo a las necesidades de nuestros clientes.
                            </p>
                            <p>
                                Creemos y sentimos una arquitectura de líneas modernas, con espacios ricos en vivencias y volúmenes llenos de sensaciones que le dan a la obra arquitectónica un carácter <strong>UNICO</strong>, generándole valor agregado a la calidad de vida. Utilizamos diversos formatos constructivos, tradicional o en seco. Los materiales como la madera, piedra, vidrio, chapas en sus diferentes formas y texturas y los colores con sus diferentes luces y sombras, nos identifican.
                            </p>
                            <p>
                                Estamos comprometidos con el cuidado del medio ambiente, respetando y valorizando el entorno y la naturaleza en nuestras obras. Intentamos siempre, y dentro de las posibilidades de nuestros clientes, la utilización de energías renovables como también techos verdes y distintos sistemas que ayuden al cuidar el planeta.
                            </p>
                            <p>
                                La relación <strong>HUMANA</strong> establecida con nuestros clientes es un punto de gran importancia dentro de los valores del estudio. La conformación de un equipo de trabajo, entre arquitectos, comitente y constructores, donde el objetivo primario es conformar la obra de arquitectura, disfrutando el proceso, es la esencia de <strong>a7</strong>.
                            </p>
                            <p>
                                Algunas de nuestras obras, que aquí compartimos con Ustedes, conforman una paleta de materiales y colores que llenan de sensaciones a la arquitectura proyectada.
                            </p>
                        </motion.div>
                        
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: [0.165, 0.84, 0.44, 1] }}
                            className="about-image-container"
                        >
                            <img
                                src="/about-hero.jpg"
                                alt="a7 Arquitectura Studio"
                                className="about-image"
                            />
                        </motion.div>
                    </div>

                    <section className="about-values">
                        <div className="values-grid">
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="value-item"
                            >
                                <h4>Sostenibilidad</h4>
                                <p>Comprometidos con el medio ambiente, integrando energías renovables y techos verdes.</p>
                            </motion.div>
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="value-item"
                            >
                                <h4>Materialidad</h4>
                                <p>Madera, piedra, vidrio y metal se combinan para crear texturas y sensaciones únicas.</p>
                            </motion.div>
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="value-item"
                            >
                                <h4>Relación Humana</h4>
                                <p>El trabajo en equipo con el cliente es la esencia y el motor de cada proyecto.</p>
                            </motion.div>
                        </div>
                    </section>
                </div>
            </div>
        </AnimatedPage>
    );
};

export default About;
