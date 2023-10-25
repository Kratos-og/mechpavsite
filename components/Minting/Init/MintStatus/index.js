import Countdown from "@/components/UI/Countdown";
import Text from "../../Text";
import { motion } from "framer-motion";

const MintStatus = ({ mintDetails, setActiveIndex, activeIndex }) => {
    const maxAllocation = mintDetails?.availableToUser;
    const stage = mintDetails?.stage;
    const status = mintDetails?.status;
    const hasToken = mintDetails?.hasToken;
    return (
        <>
            <p className="text-gray-500 pb-1">
                {mintDetails && (
                    <Text
                        index={8}
                        onDone={setActiveIndex}
                        text={"> < MINT > "}
                        speed={30}
                    />
                )}
            </p>
            <p className=" text-[#14fecdff]">
                {maxAllocation > 0 && status == 'None' && (
                    <div>
                        {activeIndex >= 9 && <Text
                            index={9}
                            onDone={setActiveIndex}
                            text={"> ALL SET FOR MECH MINTING . . . "}
                            speed={30}
                        />}
                        {activeIndex >= 10 &&
                            <div className="flex">
                                <div className="text-orange-400">
                                    <Text
                                        index={10}
                                        onDone={setActiveIndex}
                                        text={`> Crates available for user: ${maxAllocation}`}
                                        speed={30}
                                    />
                                </div>
                                {activeIndex == 11 && (
                                    <motion.p
                                        initial={{ rotateZ: 0 }}
                                        animate={{
                                            rotateZ: [0, 45, 90, 135, 180],
                                            transition: { duration: 0.4, repeat: Infinity },
                                        }}
                                        className="ml-3 text-white"
                                    >
                                        |
                                    </motion.p>
                                )}
                            </div>
                        }
                    </div>
                )}
                {/* {maxAllocation > 0 && status != 'None' && (
                    <div className="flex text-pavs-red">
                        <Text
                            index={9}
                            text={"> You already have a transaction in progress, please wait while it is complete . . . "}
                            speed={30}
                        />
                    </div>
                )} */}
                {activeIndex >= 9 && stage && ((stage?.rules == 'oneToMany' && hasToken && !maxAllocation) || (!maxAllocation && stage?.rules != 'oneToMany')) && (
                    <div className="flex text-pavs-red">
                        <Text
                            index={9}
                            text={"> You have already minted the maximum no. of crates . . . "}
                            speed={30}
                        />
                    </div>
                )}
                {!maxAllocation && stage?.rules == 'oneToMany' && !hasToken &&
                    <>
                        {
                            activeIndex >= 9 && <div className="flex text-pavs-red">
                                <Text
                                    index={9}
                                    onDone={setActiveIndex}
                                    text={"> This is a whitelist mint and you require either Pavia Land NFT or a PAV NFT in your purchasing wallet to take part. Sorry, we have been unable to detect either NFT in your wallet. But don’t worry, this mint soon becomes available to the public on Friday Oct 27th at 11AM UTC / 6AM CDT . . . "}
                                    speed={30}
                                />
                            </div>
                        }
                        {
                            activeIndex >= 10 &&
                            <div className="flex text-white">
                                <Text
                                    index={10}
                                    text={"> Public Mint Starts in . . . "}
                                    speed={30}
                                />
                            </div>
                        }
                        {
                            activeIndex >= 10 &&
                            <div className="py-2">
                                <Countdown time={stage.endDate} />
                            </div>
                        }
                    </>
                }
            </p>
        </>
    )
}

export default MintStatus;