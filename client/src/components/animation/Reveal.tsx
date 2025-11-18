import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

interface Props {
    children: JSX.Element;
    width?: "100%";
}

export const Reveal = ({ children, width = "100%" }: Props) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const mainControls = useAnimation();
    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
            console.log("In view");
        }
    }, [isInView]);
    return (
        <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }}>
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 100 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.5, delay: 0.3 }}
            >
                {children}
            </motion.div>
            {/* TODO: Add slide div thingy */}
        </div >

    )
}