import LeftArmAnnotation from "./LeftArmAnnotation";
import TorsoAnnotations from "./TorsoAnnotation";

const Annotations = props => {
    return (
        <>
            <TorsoAnnotations />
            <LeftArmAnnotation />
        </>
    )
}

export default Annotations;