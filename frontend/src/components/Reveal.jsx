import { motion } from "framer-motion";

/**
 * Reusable scroll-triggered reveal wrapper.
 * Fades + slides content up when it enters the viewport.
 */
export const Reveal = ({
    children,
    delay = 0,
    y = 30,
    duration = 0.8,
    className = "",
    once = true,
    ...rest
}) => (
    <motion.div
        initial={{ opacity: 0, y }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once, margin: "-80px" }}
        transition={{
            duration,
            delay,
            ease: [0.22, 1, 0.36, 1],
        }}
        className={className}
        {...rest}
    >
        {children}
    </motion.div>
);

export const StaggerGroup = ({ children, className = "", stagger = 0.08 }) => (
    <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={{
            hidden: {},
            visible: { transition: { staggerChildren: stagger } },
        }}
        className={className}
    >
        {children}
    </motion.div>
);

export const StaggerItem = ({ children, className = "", y = 24 }) => (
    <motion.div
        variants={{
            hidden: { opacity: 0, y },
            visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
            },
        }}
        className={className}
    >
        {children}
    </motion.div>
);
