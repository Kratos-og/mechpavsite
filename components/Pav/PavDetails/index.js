import Item from "./Item";

const PavDetails = props => {
    return (
        <div className="w-full h-full rounded-xl md:p-10 relative">
            <div className="flex gap-10 flex-wrap md:overflow-auto py-4 border-secondary relative justify-center">
                {/* <CgPushChevronDownO className="z-40 absolute text-2xl bottom-2 -right-0"/> */}
                <Item image="speed" value={props.speed} name="speed">
                    Pav&apos;s remarkable speed and agility make them nifty navigators, deftly dodging obstacles and threats.
                </Item>
                <Item image="bravery" value={props.bravery} name="Bravery">
                    Fearless and resolute, Pavs valiantly face challenges and defend their territory despite their diminutive size.
                </Item>
                <Item image="weight" value={props.weight} name="Weight">
                    Pav&apos;s diverse weights reflect their strength and adaptability, enhancing their unique personas.
                </Item>
                <Item image="cunning" value={props.cunning} name="Cunning">
                    With crafty cunning, Pavs skillfully navigate complex situations using wit and unpredictability.
                </Item>
                <Item image="intelligence" value={props.intelligence} name="Intelligence">
                    Pav&apos;s impressive intelligence allows for quick learning and problem-solving in diverse environments.
                </Item>
                <Item image="traits" value={props.traitCount} name="Trait Count">
                    Trait count indicates the number of unique attributes each Pav possesses, highlighting their dynamism and diversity.
                </Item>
                <Item image="special" value={props.special} name="Special">
                    Pavs are composed of a variety of unknown elements believed to be derived from nearby meteors and asteroids from local solar systems giving them mysterious powers.
                </Item>
                <Item image="eye" value={props.eyeColor} name="Eye Color">
                    Pav&apos;s mesmerising eyes boast a range of vibrant colours, from deep space blue to cosmic greens.
                </Item>
                <Item image="base" value={props.baseColor} name="Base Color">
                    The base colour of Pavs varies widely, providing excellent camouflage and contributing to their charming appearance.
                </Item>
                <Item image="mech" value={props.mechCompatible ? 'Yes' : 'No'} name="Mech Compatible">
                    Mech Compatible Pavs can adapt into mech suits, transforming them for enhanced Paiva exploration.
                </Item>
            </div>
        </div>
    )
}

export default PavDetails;