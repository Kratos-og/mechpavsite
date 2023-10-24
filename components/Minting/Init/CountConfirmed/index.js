
import Text from "../../Text";

const CountConfirmed = ({ activeIndex, setActiveIndex }) => {
    return (
        <>
            <p className="text-gray-500 pb-1 pt-5">
                {activeIndex >= 14 && (
                    <Text
                        index={14}
                        onDone={setActiveIndex}
                        text={"> < INFO > "}
                        speed={30}
                    />
                )}
            </p>
            <p className=" text-[#14fecdff]">
                {activeIndex >= 15 && (
                    <Text
                        index={15}
                        onDone={setActiveIndex}
                        text={`> Confirmed . . .`}
                        speed={30}
                    />
                )}
            </p>
        </>
    )
}

export default CountConfirmed;