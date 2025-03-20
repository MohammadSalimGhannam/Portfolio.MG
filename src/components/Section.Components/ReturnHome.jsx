import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const RetuenHome = () => {
    return (
        <motion.div
            style={{
                width: "30px",
                height: "30px",
                backgroundColor: "var(--primary-color)",
                borderRadius: "50%",
                position: "sticky",
                bottom: "30px",
                zIndex: "101",
                marginLeft: "auto",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                cursor: 'pointer',
            }}
            animate={{
                y: [0, -10, 0],
            }}
            transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
            }}
        >
            <a  href="#Home"
                style={{color: 'white'}}>
                    <FontAwesomeIcon icon={faArrowUp} />
            </a>
        </motion.div>
    );
};

export default RetuenHome;