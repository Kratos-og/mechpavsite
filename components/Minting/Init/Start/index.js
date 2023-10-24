import Text from "../../Text";

const Start = ({ activeIndex, setActiveIndex }) => {
    return (
        <>
            <p className="pt-3 text-gray-500 pb-1">
                {activeIndex >= 0 ? (
                    <Text
                        index={0}
                        onDone={setActiveIndex}
                        text={"> < STARTING . . . >"}
                        speed={30}
                    />
                ) : null}
            </p>
            {
                activeIndex >= 1 && (
                    <Text
                        index={1}
                        onDone={setActiveIndex}
                        text={"> WELCOME TO MECH PAV MINTING . . ."}
                        speed={30}
                    />
                )
            }
        </>
    )
}

export default Start;