import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function AnimatedTextWord(props) {
    const characterAnimation = {
        hidden: {
            opacity: 0,
            y: `0.25em`,
        },
        visible: {
            opacity: 1,
            y: `0em`,
            transition: {
                duration: 1,
                ease: [0.2, 0.65, 0.3, 0.9],
            },
        },
    };
    let text = props.children.split(' ');
    const ctrls = useAnimation();
    const wordAnimation = {
        hidden: {},
        visible: {},
    };
    const { ref, inView } = useInView({
        threshold: 0.5,
        triggerOnce: true,
    });

    useEffect(() => {
        if (inView) {
            ctrls.start("visible");
        }
        if (!inView) {
            ctrls.start("hidden");
        }
    }, [ctrls, inView]);
    return (
        <div>
            {
                text.map((word, index) => (
                    <motion.div ref={ref}
                        aria-hidden="true"
                        key={index}
                        initial="hidden"
                        animate={ctrls}
                        className="whitespace-nowrap inline-block mr-1"
                        variants={wordAnimation}
                        transition={{
                            delayChildren: index * 0.25,
                            staggerChildren: 0.05,
                        }}>
                        {word.split("").map((character, index) => (
                            <motion.div
                                aria-hidden="true"
                                key={index}
                                className="inline-block"
                                variants={characterAnimation}
                            >
                                {character}
                            </motion.div>
                        )
                        )}
                    </motion.div>
                )
                )
            }
        </div>
    );
}
