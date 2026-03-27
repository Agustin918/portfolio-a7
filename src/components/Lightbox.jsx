import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Lightbox.css';

const Lightbox = ({ images, currentIndex, onClose, onNext, onPrev }) => {
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') onClose();
            if (e.key === 'ArrowRight') onNext();
            if (e.key === 'ArrowLeft') onPrev();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [onClose, onNext, onPrev]);

    return (
        <AnimatePresence>
            {currentIndex !== null && (
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="lightbox-overlay" 
                    onClick={onClose}
                >
                    <button className="lightbox-close" onClick={onClose}>✕</button>
                    
                    <button className="lightbox-nav prev" onClick={(e) => { e.stopPropagation(); onPrev(); }}>‹</button>
                    
                    <motion.div 
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="lightbox-content" 
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img 
                            key={currentIndex} // Importante para animar cambio de imagen
                            src={images[currentIndex]} 
                            alt={`Imagen ${currentIndex + 1}`} 
                            className="lightbox-image"
                        />
                        <div className="lightbox-counter">
                            {currentIndex + 1} / {images.length}
                        </div>
                    </motion.div>

                    <button className="lightbox-nav next" onClick={(e) => { e.stopPropagation(); onNext(); }}>›</button>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Lightbox;
