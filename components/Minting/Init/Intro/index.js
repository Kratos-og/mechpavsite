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
                        "> Welcome to the MechPav mint!  This is currently 48hr Whitelist Mint and you will require either a Pavia Land NFT OR a PAV NFT in your purchasing wallet to take part.  This mint will go Public on Oct 27th at 11AM UTC | 6AMCDT"
                    }
                    speed={20}
                />
            )}
        </>
    )
}

export default Intro;