
import Text from "../../Text";

const CountDetails = ({ activeIndex, setActiveIndex, confirmedQty, mintDetails }) => {
    const price = mintDetails?.price / 1e6;
    return (
        <>
            <p className="text-gray-500 pb-1 pt-5">
                {activeIndex >= 11 && (
                    <Text
                        index={11}
                        onDone={setActiveIndex}
                        text={"> < INFO > "}
                        speed={30}
                    />
                )}
            </p>
            <p className=" text-[#14fecdff]">
                {activeIndex >= 12 && (
                    <Text
                        index={12}
                        onDone={setActiveIndex}
                        text={`> you have selected ${confirmedQty}x Crates `}
                        speed={30}
                    />
                )}
            </p>
            <p className=" text-[#14fecdff] text-white">
                {activeIndex >= 13 && (
                    <Text
                        index={13}
                        onDone={setActiveIndex}
                        text={`> Total: ${confirmedQty * price
                            } ADA `}
                        speed={30}
                    />
                )}
            </p>
        </>
    )
}

export default CountDetails;