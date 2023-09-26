import { scroll, useMotionValueEvent } from 'framer-motion';
import Script from 'next/script';
import { useEffect, useState } from 'react';
import Pointer1 from '../../Home/Hero/Pointers/Pointer1';
import Pointer2 from '../../Home/Hero/Pointers/Pointer2';
import Pointer3 from '../../Home/Hero/Pointers/Pointer3';
import Pointer4 from '../../Home/Section2/Pointers/Pointer4';
import Pointer5 from '../../Home/Section2/Pointers/Pointer5';
import Pointer6 from '../../Home/Section2/Pointers/Pointer6';
import Pointer7 from '../../Home/Section3/Pointers/Pointer7';
import Pointer8 from '../../Home/Section3/Pointers/Pointer8';
import Pointer9 from '../../Home/Section3/Pointers/Pointer9';
import Pointer10 from '../../Home/Section4/Pointers/Pointer10';
import Pointer11 from '../../Home/Section4/Pointers/Pointer11';
import Pointer12 from '../../Home/Section4/Pointers/Pointer12';

const Model = props => {
    const [show, setShow] = useState(false);
    const [sec, setSec] = useState(null)
    let prevScroll = 0;

    useEffect(() => {
        scroll(onScroll, { axis: "y", source: document.getElementById("cont") });
        const modelViewer = document.querySelector('#mech-model');
        modelViewer.addEventListener('progress', (event) => {
            props.setModelLoad(event.detail.totalProgress * 100)
            if (event.detail.totalProgress == 1) {
                setTimeout(() => {
                    setShow(true)
                }, [500])
                setTimeout(() => {
                    setSec(0)
                }, 800)
            }
        })
    }, []);

    useMotionValueEvent(props.progress, "change", (latest) => {
        let prevScroll = latest.toFixed(2) * 100;
        if (prevScroll == 0) {
            setSec(0)
        }
        else if (prevScroll == 33) {
            setSec(1)
        }
        else if (prevScroll == 67) {
            setSec(2)
        }
        else if (prevScroll == 100) {
            setSec(3)
        }
    })

    const onScroll = (y) => {
        const val = y.toFixed(2) * 100;
        let theta, phi, radius, camTheta, camPhi, camRad;
        if (val < 33) {
            if (prevScroll < val) {
                //down
                let perc = (val / 33) * 100;
                //goal -> camOrbit = -60deg 110deg 2m, camTarget = 0m 1.1m -0.5m
                theta = 0 - (perc * (60 / 100));
                phi = 105 + (perc * (5 / 100));
                radius = 6 - (perc * (4 / 100));
                camPhi = 1 + (perc * (0.1 / 100))
                camRad = -0.3 - (perc * (0.2 / 100));
                orbitModel(theta, phi, radius, 0, camPhi, camRad);
            }
            else if (prevScroll > val) {
                //up
                //goal -> camOrbit = 0deg 105deg 6m, camTarget = 0m 1m 0m
                let perc = (val / 33) * 100 - 100;
                theta = -60 - (perc * (60 / 100));
                phi = 110 + (perc * (5 / 100));
                radius = 2 - (perc * (4 / 100))
                camPhi = 1.1 + (perc * (0.1 / 100));
                camRad = -0.5 - (perc * (0.2 / 100))
                orbitModel(theta, phi, radius, 0, camPhi, camRad);
            }
        }
        else if (val < 67 && val > 33) {
            if (prevScroll < val) {
                //down
                //goal -> camOrbit = -220deg 45deg 7m, camTarget = -1m 0.5m 0.1m
                let perc = ((val - 33) / 33) * 100;
                theta = -60 - (perc * (160 / 100));
                phi = 110 - (perc * (65 / 100));
                radius = 2 + (perc * (5 / 100));
                camTheta = 0 - (perc * (1 / 100));
                camPhi = 1.1 - (perc * (0.6 / 100));
                camRad = -0.5 + (perc * (0.6 / 100))
                orbitModel(theta, phi, radius, camTheta, camPhi, camRad);
            }
            else if (prevScroll > val) {
                //up
                //goal -> camOrbit = -60deg 110deg 2m, camTarget = 0m 1.1m -0.5m
                let perc = ((val - 33) / 33) * 100 - 100;
                theta = -214 - (perc * (160 / 100));
                phi = 46 - (perc * (65 / 100));
                radius = 7 + (perc * (5 / 100));
                camTheta = -1 - (perc * (1 / 100));
                camPhi = 0.5 - (perc * (0.6 / 100));
                camRad = 0.1 + (perc * (0.6 / 100))
                orbitModel(theta, phi, radius, camTheta, camPhi, camRad);
            }
        }
        else if (val <= 100 && val > 67) {
            if (prevScroll < val) {
                //down
                //goal -> camOrbit = -90deg 90deg 6m, camTarget = 0m 1.25m -1m
                let perc = ((val - 67) / 33) * 100;
                theta = -220 + (perc * (130 / 100));
                phi = 45 + (perc * (45 / 100));
                radius = 7 - (perc * (1 / 100));
                camTheta = -1 + (perc * (1 / 100));
                camPhi = 0.5 + (perc * (0.75 / 100));
                camRad = 0.1 - (perc * (1.1 / 100))
                orbitModel(theta, phi, radius, camTheta, camPhi, camRad);
            }
            else if (prevScroll > val) {
                //up
                //goal -> camOrbit = -220deg 45deg 7m, camTarget = -1m 0.5m 0.1m
                let perc = ((val - 67) / 33) * 100 - 100;
                theta = -90 + (perc * (130 / 100));
                phi = 90 + (perc * (45 / 100));
                radius = 6 - (perc * (1 / 100));
                camTheta = 0 + (perc * (1 / 100));
                camPhi = 1.25 + (perc * (0.75 / 100));
                camRad = -1 - (perc * (1.1 / 100))
                orbitModel(theta, phi, radius, camTheta, camPhi, camRad);
            }
        }
        prevScroll = val;
    }

    const orbitModel = (theta, phi, radius, camTheta, camPhi, camRad = 0) => {
        const modelViewer = document.querySelector('#mech-model');
        //console.log(theta.toFixed(2), phi.toFixed(2), radius.toFixed(2), camTheta.toFixed(2), camPhi.toFixed(2))


        modelViewer.cameraOrbit = `${theta}deg ${phi}deg ${radius}m`;
        modelViewer.cameraTarget = `${camTheta}m ${camPhi}m ${camRad}m`;
    }
    return (
        <div className='w-full h-full fixed top-0 pointer-events-none'>
            <Script src="https://ajax.googleapis.com/ajax/libs/model-viewer/3.1.1/model-viewer.min.js" type='module'></Script>
            <model-viewer loading="eager" style={{ opacity: show ? 1 : 0 }} id="mech-model" src="/assets/models/defender.glb" camera-orbit="0deg 105deg 6m" camera-target="0m 1m -0.3m">
                <div slot="hotspot-joint" data-position="-0.5149577618441041m 2.09811277128951m 0.1024543010534596m" data-normal="-0.6801849221212255m -0.5010402242127877m 0.5350767846204335m" data-visibility-attribute="visible">
                    {sec == 0 && <Pointer1 />}
                </div>
                <div slot="hotspot-power" data-position="0.43510659046118166m 2.3449143444104177m -0.020444515362532667m" data-normal="0.3562008098499449m -0.7497927133223989m 0.5576126523949025m" data-visibility-attribute="visible">
                    {sec == 0 && <Pointer2 />}
                </div>
                <div slot="hotspot-comms" data-position="0.552986303782536m 1.191848466727976m 0.0461898164571104m" data-normal="-0.008542551277086018m 0.04836819180809083m 0.9987930430469038m" data-visibility-attribute="visible">
                    {sec == 0 && <Pointer3 />}
                </div>
                <div slot="hotspot-thrusters" data-position="-0.27510633454099054m 1.8884688337958009m -0.5783333303111975m" data-normal="-0.7956495794291473m 0.6055132102890399m 0.017190082014992083m" data-visibility-attribute="visible">
                    {sec == 1 && <Pointer4 />}
                </div>
                <div slot="hotspot-sphere" data-position="0.12111167112024407m 1.5207365652739415m 0.12019724007161348m" data-normal="0.2072737367225641m -0.07405186667697373m 0.9754762524565737m" data-visibility-attribute="visible">
                    {sec == 1 && <Pointer5 />}
                </div>
                <div slot="hotspot-specs" data-position="-0.3802012979830295m 0.91970893734972m -0.027219689063627428m" data-normal="-0.3108169827807575m 0.5162640218460754m 0.7980377578550913m" data-visibility-attribute="visible">
                    {sec == 1 && <Pointer6 />}
                </div>
                <div slot="hotspot-relay" data-position="-0.3260658813478937m 2.2191808755076137m 0.08110660898803036m" data-normal="0.9590549161033266m 0.27799174600638094m 0.05416878298767026m" data-visibility-attribute="visible">
                    {sec == 2 && <Pointer7 />}
                </div>
                <div slot="hotspot-ecu" data-position="0.1823259967367047m 1.580797887443596m -0.07378811475978522m" data-normal="0.4506055410952404m 0.08581378728688681m -0.8885891290386951m" data-visibility-attribute="visible">
                    {sec == 2 && <Pointer8 />}
                </div>
                <div slot="hotspot-amplifier" data-position="0.037157066288441065m 1.7368252730522067m -0.48900141689526055m" data-normal="-0.026045127223037635m 0.619920137782393m -0.7842325382944746m" data-visibility-attribute="visible">
                    {sec == 2 && <Pointer9 />}
                </div>
                <div slot="hotspot-conn" data-position="-0.2199260402848111m 2.262953753075747m -0.432881495629741m" data-normal="-0.9705128685499225m 0.15024632149775904m 0.18849619321194044m" data-visibility-attribute="visible">
                    {sec == 3 && <Pointer10 />}
                </div>
                <div slot="hotspot-charge" data-position="-0.7626033461071079m 2.3600790048999243m -0.005532984158591282m" data-normal="-0.9048021907510201m -0.4247098253749699m -0.030895951872657455m" data-visibility-attribute="visible">
                    {sec == 3 && <Pointer11 />}
                </div>
                <div slot="hotspot-capsule" data-position="-0.11624147465525236m 1.850261758646575m 0.22435609312602545m" data-normal="-0.62m -0.48m -1m" data-visibility-attribute="visible">
                    {sec == 3 && <Pointer12 />}
                </div>
            </model-viewer>
        </div>
    )
}

export default Model;