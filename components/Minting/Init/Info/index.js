import { motion } from "framer-motion";
import Text from "../../Text";

const Info = ({ activeIndex, setActiveIndex }) => {
    return (
        <>
            <p className="pt-5 text-gray-500 pb-1">
                {activeIndex >= 4 && (
                    <Text
                        index={4}
                        onDone={setActiveIndex}
                        text={"> < INFO >"}
                        speed={30}
                    />
                )}
            </p>
            {activeIndex >= 5 && (
                <div className="flex">
                    <Text
                        index={5}
                        onDone={setActiveIndex}
                        text={"> Waiting for User Input . . . "}
                        speed={30}
                    />
                    {activeIndex == 6 && (
                        <motion.p
                            initial={{ rotateZ: 0 }}
                            animate={{
                                rotateZ: [0, 45, 90, 135, 180],
                                transition: { duration: 0.4, repeat: Infinity },
                            }}
                            className="ml-3"
                        >
                            |
                        </motion.p>
                    )}
                </div>
            )}
        </>
    )
}

export default Info;