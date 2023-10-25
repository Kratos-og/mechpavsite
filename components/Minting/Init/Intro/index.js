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
                        "> 5 CLASSES, 5 INTERCHANGEABLE MECH PARTS, MULTIPLE SKIN VARIATIONS AND OVER 9 MILLION COMBINATIONS. COLLECT, TRADE AND BUILD WITH INTERCHANGEABLE NFT MECH PARTS TO CREATE YOUR OWN UNIQUE GAME-READY AVATAR."
                    }
                    speed={20}
                />
            )}
        </>
    )
}

export default Intro;