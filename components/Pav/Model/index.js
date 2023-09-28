import '@google/model-viewer';

const PavModel = props => {
    return (
        <model-viewer src={'/assets/pav.glb'} alt="3d model" camera-orbit="35deg 75deg 2m" camera-controls enable-pan disable-zoom autoplay class="modelViewer" animation-name="Running" shadow-intensity="1"></model-viewer>
    )
}

export default PavModel;