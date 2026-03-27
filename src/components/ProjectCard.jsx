import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './ProjectCard.css';

const ProjectCard = ({ project, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: [0.165, 0.84, 0.44, 1] }}
        >
            <Link to={`/proyectos/${project.id}`} className="project-card">
                <div className="project-image-container">
                    {project.coverImage ? (
                        <img
                            src={project.coverImage}
                            alt={project.title}
                            className="project-image"
                            loading="lazy"
                        />
                    ) : (
                        <div className="project-placeholder">
                            <span className="placeholder-text">Obra en proceso</span>
                        </div>
                    )}
                </div>
                <div className="project-info">
                    <h3 className="project-title">{project.title}</h3>
                    <div className="project-specs">
                        {project.year} | {project.area} | {project.location}
                    </div>
                </div>
            </Link>
        </motion.div>
    );
};

export default ProjectCard;
