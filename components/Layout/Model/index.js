
import { scroll } from 'framer-motion';
import Script from 'next/script';
import { useEffect } from 'react';
const Model = props => {
    const snapPoints = [0, 33, 67, 100];

    useEffect(() => {
        scroll(onScroll, { axis: "y", source: document.getElementById("cont") })
    }, [])

    const onScroll = (y) => {
        let index = snapPoints.indexOf(y.toFixed(2) * 100);
        if (index >= 0)
            orbitModel(index);
    }

    const getScrollIndex = (val, dir) => {
        console.log('getScrollIndex', val, dir)
        if (val <= 33) {
            if (!dir) return 1;
            else return 0;
        }
    }

    const orbitModel = (index) => {
        const modelViewer = document.querySelector('#mech-model');
        const orbitCycle = [
            "-90deg 90deg 6m", //"1m 1.5m 0m"
            '140deg 45deg 7m', // "1m 1.5m 0m"
            '-60deg 110deg 2m', // 0m 1m 0m
            "-360deg 105deg 6m",
        ];

        const currentOrbitIndex = orbitCycle.indexOf(modelViewer.cameraOrbit);
        if (modelViewer.cameraOrbit !== orbitCycle[index]) {
            modelViewer.cameraOrbit = orbitCycle[index];
        }

    }
    return (
        <div className='w-full h-full'>
            <Script src="https://ajax.googleapis.com/ajax/libs/model-viewer/3.1.1/model-viewer.min.js" type='module'></Script>
            <model-viewer id="mech-model" src="/assets/models/mechpav.glb" camera-orbit="-90deg 90deg 6m"></model-viewer>
        </div>
    )
}

export default Model;