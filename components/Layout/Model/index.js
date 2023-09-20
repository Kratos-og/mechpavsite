
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
        // if (index > 0)
        //     orbitModel(index);
        const val = y.toFixed(2) * 100;
        let perc = (val / 33) * 100;
        let theta, phi, radius;
        const currentVals = document.querySelector('#mech-model')?.cameraOrbit?.split(' ');
        if (val < 33) {
            if (prevScroll < val) {
                //down
                //goal - -60deg 110deg 2m
                theta = parseInt(currentVals[0]) - ((perc / 100) * (60 + parseInt(currentVals[0])));
                phi = 105 + ((perc / 100) * 5);
                radius = 6 - ((perc / 100) * 4)
                orbitModel(theta, phi, radius);
            }
            else if (prevScroll > val) {
                //up
                theta = -60 + ((perc / 100) * 60);
                phi = 110 - ((perc / 100) * 5);
                radius = 2 + ((perc / 100) * 4)
                console.log(parseInt(currentVals[0]), (perc / 100) * 60)
                orbitModel(0, 105, 6);
            }
        }

        prevScroll = val;
    }

    const orbitModel = (theta, phi, radius) => {
        const modelViewer = document.querySelector('#mech-model');
        const orbitCycle = [
            "0deg 105deg 6m",
            '-60deg 110deg 2m', // 0m 1m 0m
            '140deg 45deg 7m', // "1m 1.5m 0m"
            "-90deg 90deg 6m", //"1m 1.5m 0m" 
        ];
        //console.log(theta, phi, radius)
        //if (modelViewer.cameraOrbit !== orbitCycle[index]) {
        modelViewer.cameraOrbit = `${theta}deg ${phi}deg ${radius}m`;
        //}

    }
    return (
        <div className='w-full h-full'>
            <Script src="https://ajax.googleapis.com/ajax/libs/model-viewer/3.1.1/model-viewer.min.js" type='module'></Script>
            <model-viewer id="mech-model" src="/assets/models/defender.glb" camera-orbit="0deg 105deg 6m" ></model-viewer>
        </div>
    )
}

export default Model;