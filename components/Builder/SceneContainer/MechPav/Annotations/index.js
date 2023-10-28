import LeftArmAnnotation from "./LeftArmAnnotation";
import LegAnnotation from "./LegAnnotation";
import RightArmAnnotation from "./RightArmAnnotation";
import TorsoAnnotations from "./TorsoAnnotation";

const Annotations = props => {
    return (
        <>
            <TorsoAnnotations />
            <LeftArmAnnotation />
            <RightArmAnnotation/>
            <LegAnnotation/>
        </>
    )
}

export default Annotations;