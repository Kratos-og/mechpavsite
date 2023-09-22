import { scroll } from 'framer-motion';
import Script from 'next/script';
import { useEffect } from 'react';

const Model = props => {
    let prevScroll = 0;

    useEffect(() => {
        scroll(onScroll, { axis: "y", source: document.getElementById("cont") })
    }, [])

    const onScroll = (y) => {
        const val = y.toFixed(2) * 100;
        let theta, phi, radius, camTheta, camPhi;
        if (val < 33) {
            if (prevScroll < val) {
                //down
                let perc = (val / 33) * 100;
                //goal -> camOrbit = -60deg 110deg 2m, camTarget = 0m 1.1m 0m
                theta = 0 - (perc * (60 / 100));
                phi = 105 + (perc * (5 / 100));
                radius = 6 - (perc * (4 / 100));
                camPhi = 1 + (perc * (0.1 / 100))
                orbitModel(theta, phi, radius, 0, camPhi);
            }
            else if (prevScroll > val) {
                //up
                //goal -> camOrbit = 0deg 105deg 6m, camTarget = 0m 1m 0m
                let perc = (val / 33) * 100 - 100;
                theta = -60 - (perc * (60 / 100));
                phi = 110 + (perc * (5 / 100));
                radius = 2 - (perc * (4 / 100))
                camPhi = 1.1 + (perc * (0.1 / 100))
                orbitModel(theta, phi, radius, 0, camPhi);
            }
        }
        else if (val < 67 && val > 33) {
            if (prevScroll < val) {
                //down
                //goal -> camOrbit = -220deg 45deg 7m, camTarget = 1m 1.5m 0m
                let perc = ((val - 33) / 33) * 100;
                theta = -60 - (perc * (160 / 100));
                phi = 110 - (perc * (65 / 100));
                radius = 2 + (perc * (5 / 100));
                camTheta = 0 + (perc * (1 / 100));
                camPhi = 1.1 + (perc * (0.4 / 100));
                orbitModel(theta, phi, radius, camTheta, camPhi);
            }
            else if (prevScroll > val) {
                //up
                //goal -> camOrbit = -60deg 110deg 2m, camTarget = 0m 1.1m 0m
                let perc = ((val - 33) / 33) * 100 - 100;
                theta = -216 - (perc * (160 / 100));
                phi = 46 - (perc * (65 / 100));
                radius = 7 + (perc * (5 / 100));
                camTheta = 1 + (perc * (1 / 100));
                camPhi = 1.5 + (perc * (0.4 / 100));
                orbitModel(theta, phi, radius, camTheta, camPhi);
            }
        }
        else if (val <= 100 && val > 67) {
            if (prevScroll < val) {
                //down
                //goal -> camOrbit = -90deg 90deg 6m, camTarget = 0m 1.25m 0m
                let perc = ((val - 67) / 33) * 100;
                theta = -220 + (perc * (130 / 100));
                phi = 45 + (perc * (45 / 100));
                radius = 7 - (perc * (1 / 100));
                camTheta = 1 - (perc * (1 / 100));
                camPhi = 1.5 - (perc * (0.25 / 100));
                orbitModel(theta, phi, radius, camTheta, camPhi);
            }
            else if (prevScroll > val) {
                //up
                //goal -> camOrbit = -220deg 45deg 7m, camTarget = 1m 1.5m 0m
                let perc = ((val - 67) / 33) * 100 - 100;
                theta = -90 + (perc * (130 / 100));
                phi = 90 + (perc * (45 / 100));
                radius = 6 - (perc * (1 / 100));
                camTheta = 0 - (perc * (1 / 100));
                camPhi = 1.25 - (perc * (0.25 / 100));
                orbitModel(theta, phi, radius, camTheta, camPhi);
            }
        }
        prevScroll = val;
    }

    const orbitModel = (theta, phi, radius, camTheta, camPhi) => {
        const modelViewer = document.querySelector('#mech-model');
        //console.log(theta.toFixed(2), phi.toFixed(2), radius.toFixed(2), camTheta.toFixed(2), camPhi.toFixed(2))

        modelViewer.cameraOrbit = `${theta}deg ${phi}deg ${radius}m`;
        modelViewer.cameraTarget = `${camTheta}m ${camPhi}m 0m`;
    }
    return (
        <div className='w-full h-full fixed z-20'>
            <Script src="https://ajax.googleapis.com/ajax/libs/model-viewer/3.1.1/model-viewer.min.js" type='module'></Script>
            <model-viewer id="mech-model" src="/assets/models/defender.glb" camera-orbit="0deg 105deg 6m" camera-target="0m 1m 0m"></model-viewer>
        </div>
    )
}

export default Model;