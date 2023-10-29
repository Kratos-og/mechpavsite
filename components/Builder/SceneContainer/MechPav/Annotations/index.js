import BackPackAnnotations from "./BackPackAnnotations";
import LeftArmAnnotation from "./LeftArmAnnotation";
import LegAnnotation from "./LegAnnotation";
import RightArmAnnotation from "./RightArmAnnotation";
import TorsoAnnotations from "./TorsoAnnotation";

const Annotations = props => {
    return (
        <>
            <TorsoAnnotations selected={props.selected.torso}/>
            <LeftArmAnnotation selected={props.selected.leftarm}/>
            <RightArmAnnotation selected={props.selected.rightarm}/>
            <LegAnnotation selected={props.selected.legs}/>
            <BackPackAnnotations selected={props.selected.backpack}/>
        </>
    )
}

export default Annotations;