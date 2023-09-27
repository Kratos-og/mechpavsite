import { motion } from 'framer-motion';

const Mouse = () => {
    return (
        <motion.svg className="scroll" viewBox="0 0 82 97" fill="none" xmlns="http://www.w3.org/2000/svg" >
            <line className="scroll__line" x1="42" y1="32" x2="42" y2="40" stroke="#14fecd" stroke-width="2" ></line>
            <path className="scroll__mouse" d="M38.5 25L33 30V51.5L38.5 56H45L50 51.5V30L45 25H38.5Z" stroke="currentColor" ></path>
            <path className="scroll__tri" d="M39.0003 69.8275L41.8279 72.6551L44.6554 69.8275H39.0003Z" fill="#14fecd" ></path>
            <path className="scroll__tri" d="M39.0003 81.8275L41.8279 84.6551L44.6554 81.8275H39.0003Z" fill="#14fecd" ></path>
            <path className="scroll__tri" d="M39.0003 93.8275L41.8279 96.6551L44.6554 93.8275H39.0003Z" fill="#14fecd" ></path>
            <motion.path
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                exit={{ pathLength: -1 }}
                transition={{
                    duration: 0.5,
                    ease: "easeOut",
                    repeat: Infinity,
                    repeatType: "loop",
                    repeatDelay: 3
                }}
                className="opacity-70"
                d="M29.9786 74.7458C21.9947 72.1382 15.194 66.7845 10.7849 59.6359C6.37587 52.4874 4.64415 44.0072 5.89751 35.7024C7.15086 27.3975 11.3081 19.8061 17.6304 14.2771C23.9527 8.74814 32.0306 5.63984 40.4284 5.5046C48.8262 5.36937 56.9999 8.21595 63.497 13.5385C69.9941 18.861 74.3936 26.3147 75.9137 34.5748C77.4338 42.835 75.9761 51.3666 71.7995 58.6534C67.6229 65.9402 60.9981 71.5101 53.1023 74.3734" stroke="#14fecd" ></motion.path>
            <motion.path
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                    delay: 1,
                    duration: 0.3,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "loop",
                    repeatDelay: 3
                }}
                className="opacity-30"
                d="M28.4263 79.4987C19.3179 76.5239 11.5593 70.4161 6.52927 62.2607C1.49924 54.1054 -0.476393 44.4307 0.953494 34.9562C2.38338 25.4817 7.12616 16.821 14.3389 10.5133C21.5517 4.20563 30.7673 0.659535 40.3479 0.505251C49.9284 0.350966 59.2534 3.59848 66.6656 9.67065C74.0777 15.7428 79.0969 24.2463 80.8311 33.6699C82.5654 43.0934 80.9023 52.8267 76.1374 61.1398C71.3726 69.4529 63.8147 75.8073 54.8069 79.0739" stroke="#14fecd">
            </motion.path>
        </motion.svg>
    )
}

export default Mouse;