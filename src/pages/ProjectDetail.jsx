import React, { useState, useCallback } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { projectsData } from '../data/projects';
import Lightbox from '../components/Lightbox';
import AnimatedPage from '../components/AnimatedPage';
import './ProjectDetail.css';

const ProjectDetail = () => {
    const { id } = useParams();
    const [selectedImageIndex, setSelectedImageIndex] = useState(null);

    const project = projectsData.find(p => p.id === parseInt(id));

    const closeLightbox = () => setSelectedImageIndex(null);

    const nextImage = useCallback(() => {
        if (project && project.images.length > 0) {
            setSelectedImageIndex((prev) => (prev + 1) % project.images.length);
        }
    }, [project]);

    const prevImage = useCallback(() => {
        if (project && project.images.length > 0) {
            setSelectedImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
        }
    }, [project]);

    if (!project) {
        return <div className="container section">Proyecto no encontrado</div>;
    }

    return (
        <AnimatedPage>
            <div className="section">
                <Helmet>
                    <title>{`${project.title} | a7 Arquitectura`}</title>
                    <meta name="description" content={project.description || `Detalles del proyecto ${project.title} de a7 Arquitectura.`} />
                </Helmet>
                <div className="container">
                    <Link to="/proyectos" className="back-link">
                        ← Volver a Proyectos
                    </Link>

                    <div className="project-detail-header">
                        <motion.h1 
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="project-detail-title"
                        >
                            {project.title}
                        </motion.h1>
                        <motion.p 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="project-detail-description"
                        >
                            {project.description || 'Descripción del proyecto pendiente.'}
                        </motion.p>
                    </div>

                    {project.images.length > 0 ? (
                        <div className="project-detail-grid">
                            {project.images.map((src, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.05 }}
                                    className="gallery-item"
                                    onClick={() => setSelectedImageIndex(index)}
                                >
                                    <img
                                        src={src}
                                        alt={`${project.title} - Imagen ${index + 1}`}
                                        className="gallery-image"
                                        loading="lazy"
                                    />
                                </motion.div>
                            ))}
                        </div>
                    ) : (
                        <div style={{ textAlign: 'center', padding: '4rem', color: '#999' }}>
                            Imágenes del proyecto pendientes.
                        </div>
                    )}
                </div>

                <Lightbox 
                    images={project.images}
                    currentIndex={selectedImageIndex}
                    onClose={closeLightbox}
                    onNext={nextImage}
                    onPrev={prevImage}
                />
            </div>
        </AnimatedPage>
    );
};

export default ProjectDetail;
