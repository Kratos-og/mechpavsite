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
                        "> WELCOME TO THE MECHPAV MINT.  THIS MINT IS NOW PUBLIC AND AVAILABLE TO ALL!"
                    }
                    speed={20}
                />
            )}
        </>
    )
}

export default Intro;