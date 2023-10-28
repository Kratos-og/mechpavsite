import Settings from "@/components/Builder/SceneContainer/Settings";
import { Canvas } from "@react-three/fiber";
import { useRef, useState } from "react";
import { SceneContainer } from "../../../components/Loadouts/SceneContainer";
import { AiOutlineDoubleRight } from "react-icons/ai";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
// import { Navigation } from 'swiper';
import "swiper/css/thumbs";
import "swiper/css/navigation";
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper';

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
    <div className="h-screen w-screen loadoutsBg">

      <div className="w-full h-full flex">
        <Swiper cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
  slidesPerView={3} onSlideChange={(swiper) => setActiveSlideIndex(swiper.activeIndex)} className="w-full h-full mySwiper">
          <SwiperSlide></SwiperSlide>
          <SwiperSlide>
            <div className={`relative flex flex-col w-full h-full duration-300 items-center justify-center py-10`} key={index}>
              <div className={`${activeSlideIndex == 0 ? 'bg-black absolute top-10':"bg-black absolute top-[25%] left-[33%] scale-75"} text-pavia-green px-10 py-2 rounded-md `}>TITANIUM</div>
              <Canvas>
                <SceneContainer active position={activeSlideIndex == 0 ? [2, -7, 0]:[1.5, 0, 0]} scale={activeSlideIndex == 0 ? 8 : 3} index={1} selectedParts={{ torso: data.torso[0], rightarm: data.rightarm[0], leftarm: data.leftarm[0], backpack: data.backpack[0], legs: data.legs[0] }} />
              </Canvas>
              <div className={`${activeSlideIndex == 0 ? 'bg-black absolute bottom-10 left-[25%]':"hidden"} text-pavia-green px-10 py-2 rounded-md `}>EDIT</div>
              <div className={`${activeSlideIndex == 0 ? 'bg-black absolute bottom-10 right-[25%]':"hidden"} text-pavia-green px-10 py-2 rounded-md `}>DELETE</div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={`relative flex flex-col w-full h-full duration-300 items-center justify-center py-10 `} key={index}>
            <div className={`${activeSlideIndex == 1 ? 'bg-black absolute top-10':"bg-black absolute top-[25%] left-[33%] scale-75"} text-pavia-green px-10 py-2 rounded-md `}>VORTEX</div>
              <Canvas>
                <SceneContainer active position={activeSlideIndex == 1 ? [1.5, -5, 0]:[1.5, 0, 0]} scale={activeSlideIndex == 1 ? 7 : 3} index={1} selectedParts={{ torso: data.torso[1], rightarm: data.rightarm[1], leftarm: data.leftarm[1], backpack: data.backpack[1], legs: data.legs[1] }} />
              </Canvas>
              <div className={`${activeSlideIndex == 1 ? 'bg-black absolute bottom-10 left-[25%]':"hidden"} text-pavia-green px-10 py-2 rounded-md `}>EDIT</div>
              <div className={`${activeSlideIndex == 1 ? 'bg-black absolute bottom-10 right-[25%]':"hidden"} text-pavia-green px-10 py-2 rounded-md `}>DELETE</div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={`relative flex flex-col w-full h-full duration-300 items-center justify-center py-10 `} key={index}>
            <div className={`${activeSlideIndex == 2 ? 'bg-black absolute top-10':"bg-black absolute top-[25%] left-[33%] scale-75"} text-pavia-green px-10 py-2 rounded-md `}>CALYPSO</div>
              <Canvas>
                <SceneContainer active position={activeSlideIndex == 2 ? [1.5, -5, 0]:[1.5, 0, 0]} scale={activeSlideIndex == 2 ? 7 : 3} index={1} selectedParts={{ torso: data.torso[2], rightarm: data.rightarm[2], leftarm: data.leftarm[2], backpack: data.backpack[2], legs: data.legs[2] }} />
              </Canvas>
              <div className={`${activeSlideIndex == 2 ? 'bg-black absolute bottom-10 left-[25%]':"hidden"} text-pavia-green px-10 py-2 rounded-md `}>EDIT</div>
              <div className={`${activeSlideIndex == 2 ? 'bg-black absolute bottom-10 right-[25%]':"hidden"} text-pavia-green px-10 py-2 rounded-md `}>DELETE</div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={`relative flex flex-col w-full h-full duration-300 items-center justify-center py-10 `} key={index}>
            <div className={`${activeSlideIndex == 3 ? 'bg-black absolute top-10':"bg-black absolute top-[25%] left-[33%] scale-75"} text-pavia-green px-10 py-2 rounded-md `}>WARDON</div>
              <Canvas>
                <SceneContainer active position={activeSlideIndex == 3 ? [1.5, -5, 0]:[1.5, 0, 0]} scale={activeSlideIndex == 3 ? 7 : 3} index={1} selectedParts={{ torso: data.torso[3], rightarm: data.rightarm[3], leftarm: data.leftarm[3], backpack: data.backpack[3], legs: data.legs[3] }} />
              </Canvas>
              <div className={`${activeSlideIndex == 3 ? 'bg-black absolute bottom-10 left-[25%]':"hidden"} text-pavia-green px-10 py-2 rounded-md `}>EDIT</div>
              <div className={`${activeSlideIndex == 3 ? 'bg-black absolute bottom-10 right-[25%]':"hidden"} text-pavia-green px-10 py-2 rounded-md `}>DELETE</div>
            </div>
          </SwiperSlide>
          <SwiperSlide></SwiperSlide>
          <SwiperSlide></SwiperSlide>
          <SwiperSlide></SwiperSlide>
        </Swiper>
      </div>

    </div>
  );
}
Loadouts.DisplayName = "Loadouts";
