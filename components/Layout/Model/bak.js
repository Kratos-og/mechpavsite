
import { scroll } from 'framer-motion';
import Script from 'next/script';
import { useEffect } from 'react';
const Model = props => {
    const snapPoints = [0, 33, 67, 100];
    let prevScroll = 0;
    useEffect(() => {
        scroll(onScroll, { axis: "y", source: document.getElementById("cont") })
    }, [])

    const onScroll = (y) => {
        // let index = snapPoints.indexOf(y.toFixed(2) * 100);
        // if (index >= 0)
        //     orbitModel(index);
        const val = y.toFixed(2) * 100;
        console.log(val, prevScroll)
        if (val < 33) {
            if (prevScroll < val) {
                //down
                console.log('down')
                orbitModel(1);
            }
            else if (prevScroll > val) {
                //up
                console.log('up')
                orbitModel(0);
            }
        }
        else if (val < 67 && val > 33) {
            if (prevScroll < val) {
                //down
                console.log('down')
                orbitModel(2);
            }
            else if (prevScroll > val) {
                //up
                console.log('up')
                orbitModel(1);
            }
        }
        else if (val <= 100 && val > 67) {
            if (prevScroll < val) {
                //down
                console.log('down')
                orbitModel(3);
            }
            else if (prevScroll > val) {
                //up
                console.log('up')
                orbitModel(2);
            }
        }
        prevScroll = val;
    }

    const orbitModel = (index) => {
        const modelViewer = document.querySelector('#mech-model');
        const orbitCycle = [
            "0deg 105deg 6m",
            '-60deg 110deg 2m', // 0m 1m 0m
            '140deg 45deg 7m', // "1m 1.5m 0m"
            "-90deg 90deg 6m", //"1m 1.5m 0m"
        ];

        const cameraTargets = [
            "0m 1m 0m",
            '0m 1m 0m', // 0m 1m 0m
            '1m 1.5m 0m', // "1m 1.5m 0m"
            "0m 1.25m 0m", //"1m 1.5m 0m"
        ];

        const currentOrbitIndex = orbitCycle.indexOf(modelViewer.cameraOrbit);
        if (modelViewer.cameraOrbit !== orbitCycle[index]) {
            modelViewer.cameraOrbit = orbitCycle[index];
            modelViewer.cameraTarget = cameraTargets[index];
        }

    }
    return (
        <div className='w-full h-full'>
            <Script src="https://ajax.googleapis.com/ajax/libs/model-viewer/3.1.1/model-viewer.min.js" type='module'></Script>
            <model-viewer id="mech-model" src="/assets/models/defender.glb" camera-orbit="0deg 105deg 6m" ></model-viewer>
        </div>
    )
}

export default Model;