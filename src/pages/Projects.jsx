import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { projectsData } from '../data/projects';
import ProjectCard from '../components/ProjectCard';
import AnimatedPage from '../components/AnimatedPage';
import './Projects.css';

const Projects = () => {
    return (
        <AnimatedPage>
            <div className="section">
                <Helmet>
                    <title>Proyectos | a7 Arquitectura</title>
                    <meta name="description" content="Galería de proyectos residenciales, comerciales y culturales realizados por a7 Arquitectura." />
                </Helmet>
                <div className="container">
                    <motion.h1 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="page-title"
                        style={{ marginBottom: '3rem' }}
                    >
                        Proyectos
                    </motion.h1>

                    <div className="projects-gallery">
                        {projectsData.map((project, index) => (
                            <ProjectCard key={project.id} project={project} index={index} />
                        ))}
                    </div>
                </div>
            </div>
        </AnimatedPage>
    );
};

export default Projects;
