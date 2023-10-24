import { Typewriter } from "react-simple-typewriter";
import Text from "../../Text";

const Intro = ({ activeIndex, setActiveIndex }) => {
    return (
        <>
            <p className="pt-5 text-gray-500 pb-1">
                {activeIndex >= 2 && (
                    <Text
                        index={2}
                        onDone={setActiveIndex}
                        text={"> < INTRO >"}
                        speed={30}
                    />
                )}
            </p>
            {activeIndex >= 3 && (
                <Text
                    index={3}
                    onDone={setActiveIndex}
                    text={
                        "> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore itaque a aut fugiat labore veritatis nesciunt tempore aperiam voluptatum magnam."
                    }
                    speed={20}
                />
            )}
        </>
    )
}

export default Intro;