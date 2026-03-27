import { motion } from 'framer-motion';

const pageVariants = {
    initial: {
        opacity: 0,
        y: 10
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.165, 0.84, 0.44, 1] // Cubic bezier de DESIGN.md
        }
    },
    exit: {
        opacity: 0,
        y: -10,
        transition: {
            duration: 0.4,
            ease: [0.165, 0.84, 0.44, 1]
        }
    }
};

const AnimatedPage = ({ children }) => {
    return (
        <motion.div
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
        >
            {children}
        </motion.div>
    );
};

export default AnimatedPage;
