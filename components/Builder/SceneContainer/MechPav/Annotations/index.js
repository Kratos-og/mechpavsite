import BackPackAnnotations from "./BackPackAnnotations";
import LeftArmAnnotation from "./LeftArmAnnotation";
import LegAnnotation from "./LegAnnotation";
import RightArmAnnotation from "./RightArmAnnotation";
import TorsoAnnotations from "./TorsoAnnotation";

const Annotations = props => {
    return (
        <>
            {props.selected?.torso !== undefined && !props.saveInit && props.activeTab == 0 && <TorsoAnnotations selected={props.selected?.torso} />}
            {props.selected?.leftarm !== undefined && !props.saveInit && props.activeTab == 0 && <LeftArmAnnotation selected={props.selected?.leftarm} />}
            {props.selected?.rightarm !== undefined && !props.saveInit && props.activeTab == 0 && <RightArmAnnotation selected={props.selected?.rightarm} />}
            {props.selected?.legs !== undefined && !props.saveInit && props.activeTab == 0 && <LegAnnotation selected={props.selected?.legs} />}
            {props.selected?.backpack !== undefined && !props.saveInit && props.activeTab == 0 && <BackPackAnnotations selected={props.selected?.backpack} />}
        </>
    )
}

export default Annotations;