import BackPackAnnotations from "./BackPackAnnotations";
import LeftArmAnnotation from "./LeftArmAnnotation";
import LegAnnotation from "./LegAnnotation";
import RightArmAnnotation from "./RightArmAnnotation";
import TorsoAnnotations from "./TorsoAnnotation";

const Annotations = props => {
    return (
        <>
            {props.selected?.torso !== undefined && <TorsoAnnotations selected={props.selected?.torso} />}
            {props.selected?.leftarm !== undefined && <LeftArmAnnotation selected={props.selected?.leftarm} />}
            {props.selected?.rightarm !== undefined && <RightArmAnnotation selected={props.selected?.rightarm} />}
            {props.selected?.legs !== undefined && <LegAnnotation selected={props.selected?.legs} />}
            {props.selected?.backpack !== undefined && <BackPackAnnotations selected={props.selected?.backpack} />}
        </>
    )
}

export default Annotations;