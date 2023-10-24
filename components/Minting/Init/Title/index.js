import { Typewriter } from "react-simple-typewriter";

const Title = props => {
    return (
        <p className=" text-xs border-b-2 border-[#423F3E] p-5 text-[#14fecdff]">
            <Typewriter
                words={["MECH PAVS", "MECH MINTING START . . . "]}
                cursorStyle="_"
                cursor
                cursorColor="#14fecdff"
                loop={1}
            />
        </p>
    )
}

export default Title;