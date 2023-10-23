import { motion } from "framer-motion";
import Text from "../../Text";

const WalletInfo = ({ activeIndex, setActiveIndex, walletDetails }) => {
    return (
        <>
            <p className=" text-[#14fecdff]">
                {activeIndex >= 6 && (
                    <Text
                        index={6}
                        onDone={setActiveIndex}
                        text={`> ${walletDetails.name} Wallet connected successfully . . . `}
                        speed={30}
                    />
                )}
            </p>
            {activeIndex >= 7 && (
                <div className="flex pb-5">
                    <Text
                        index={7}
                        text={"> Fetching Wallet Info . . . "}
                        speed={30}
                    />
                    {activeIndex == 7 && (
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

export default WalletInfo;