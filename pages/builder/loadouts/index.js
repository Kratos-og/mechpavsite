import Settings from "@/components/Builder/SceneContainer/Settings";
import { Canvas } from "@react-three/fiber";
import { useRef, useState } from "react";
import { SceneContainer } from "./SceneContainer";
import { SceneContainerB } from "./SceneContainerB";
import { AiOutlineDoubleRight } from "react-icons/ai";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from 'swiper';
import "swiper/css/thumbs";
import "swiper/css/navigation";

export default function Loadouts() {
  const data = { torso: ["torsoDEF", "torsoDSE", "torsoDSP"], rightarm: ["armRDEF", "armRDSE", "armRDSP"], leftarm: ["armLDEF", "armLDSE", "armLDSP"], backpack: ["backpackDEF", "backpackDSE", "backpackDSP"], legs: ["legsDEF", "legsDSE", "legsDSP"] }
  const [index, setIndex] = useState(1)
  const [selectedParts, setSelectedParts] = useState({ torso: data.torso[index], rightarm: data.rightarm[index], leftarm: data.leftarm[index], backpack: data.backpack[index], legs: data.legs[index] });

  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const onEnvChange = (env) => {
    localStorage.setItem("env", env);
    setEnv(env);
  };
  return (
    <div className="h-screen w-screen">

      <div className="w-full h-full flex">
        <Swiper modules={[Navigation]} slidesPerView={3} onSlideChange={(swiper) => setActiveSlideIndex(swiper.activeIndex)} grabCursor className="w-full h-full" navigation={true}>
          <SwiperSlide></SwiperSlide>
          <SwiperSlide>
            <div className={`relative flex w-full h-full duration-300 items-center justify-center py-10 `} key={index}>
              <Canvas>
                <SceneContainer active position={[1.5, 0, 0]} scale={activeSlideIndex == 0 ? 7 : 3} index={1} selectedParts={{ torso: data.torso[0], rightarm: data.rightarm[0], leftarm: data.leftarm[0], backpack: data.backpack[0], legs: data.legs[0] }} />
              </Canvas>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={`relative flex w-full h-full duration-300 items-center justify-center py-10 `} key={index}>
              <Canvas>
                <SceneContainer active position={[1.5, -6, 0]} scale={activeSlideIndex == 1 ? 7 : 3} index={1} selectedParts={{ torso: data.torso[1], rightarm: data.rightarm[1], leftarm: data.leftarm[1], backpack: data.backpack[1], legs: data.legs[1] }} />
              </Canvas>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={`relative flex w-full h-full duration-300 items-center justify-center py-10 `} key={index}>
              <Canvas>
                <SceneContainer active position={[1.5, 0, 0]} scale={activeSlideIndex == 2 ? 7 : 3} index={1} selectedParts={{ torso: data.torso[2], rightarm: data.rightarm[2], leftarm: data.leftarm[2], backpack: data.backpack[2], legs: data.legs[2] }} />
              </Canvas>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={`relative flex w-full h-full duration-300 items-center justify-center py-10 `} key={index}>
              <Canvas>
                <SceneContainer active position={[1.5, -6, 0]} scale={activeSlideIndex == 3 ? 7 : 3} index={1} selectedParts={{ torso: data.torso[3], rightarm: data.rightarm[3], leftarm: data.leftarm[3], backpack: data.backpack[3], legs: data.legs[3] }} />
              </Canvas>
            </div>
          </SwiperSlide>
          <SwiperSlide></SwiperSlide>
        </Swiper>
      </div>

    </div>
  );
}
Loadouts.DisplayName = "Loadouts";
