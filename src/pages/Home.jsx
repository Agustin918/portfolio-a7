import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import AnimatedPage from '../components/AnimatedPage';
import { projectsData } from '../data/projects';
import ProjectCard from '../components/ProjectCard';
import './Home.css';

const Home = () => {
    // Tomamos los primeros 3 proyectos para mostrar en el Home
    const featuredProjects = projectsData.filter(p => p.coverImage).slice(0, 3);

    return (
        <AnimatedPage>
            <div className="home-wrapper">
                <Helmet>
                    <title>Inicio | a7 Arquitectura</title>
                    <meta name="description" content="Estudio de arquitectura a7. La arquitectura como obra de arte, viva y despojada de la intelectualización de la línea." />
                </Helmet>

                <div className="hero-container">
                    <motion.img
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        src="/home-hero.jpg"
                        alt="a7 Arquitectura Hero"
                        className="hero-image"
                        fetchpriority="high"
                        loading="eager"
                    />
                </div>

                <div className="container">
                    <div className="home-content">
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2, ease: [0.165, 0.84, 0.44, 1] }}
                            className="home-title page-title"
                        >
                            Arquitectura Viva
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.4, ease: [0.165, 0.84, 0.44, 1] }}
                            className="home-description"
                        >
                            "La arquitectura como obra de arte, nace del alma humana y está despojada de la intelectualización de la línea. La arquitectura viva tiene que ver con las formas del sentir."
                        </motion.p>
                    </div>

                    <section className="home-services">
                        <div className="services-grid">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="service-item"
                            >
                                <h3>PROYECTO</h3>
                                <p>Diseño arquitectónico integral y personalizado.</p>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="service-item"
                            >
                                <h3>DIRECCIÓN</h3>
                                <p>Supervisión técnica y control de calidad en obra.</p>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                                className="service-item"
                            >
                                <h3>CONSTRUCCIÓN</h3>
                                <p>Ejecución integral de obras de arquitectura.</p>
                            </motion.div>
                        </div>
                    </section>

                    <section className="home-featured-projects">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="featured-title"
                        >
                            Obras Destacadas
                        </motion.h2>

                        <div className="projects-grid">
                            {featuredProjects.map((project, index) => (
                                <ProjectCard key={project.id} project={project} index={index} />
                            ))}
                        </div>

                        <div className="view-all-container">
                            <Link to="/proyectos" className="view-all-link">
                                Ver todos los proyectos →
                            </Link>
                        </div>
                    </section>

                    <section className="home-contact-cta">
                        <Link to="/contactanos" className="contact-button">
                            CONTACTANOS
                        </Link>
                    </section>
                </div>
            </div>
        </AnimatedPage>
    );
};

export default Home;
