import SpinnerSm from "@/components/UI/SpinnerSm";
import { act, useLoader } from "@react-three/fiber";
import { useState } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper";
import "swiper/css/thumbs";
import "swiper/css/navigation";
import data from "./data";
import { TiLockClosed } from "react-icons/ti";

const Options = (props) => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  let items = [];
  const [loading, setLoading] = useState(null);
  const onItemSelect = (active, index) => {
    try {
      setLoading({ active, index });
      let model = useLoader(
        GLTFLoader,
        `${process.env.NEXT_PUBLIC_MECH_FILES}/${
          data[props.active][index]?.model
        }.gltf`
      );
      if (model?.scene) {
        props.onSelect(active, index);
        setLoading(null);
      }
    } catch (err) {
      Promise.resolve(err).then((e) => {
        props.onSelect(active, index);
        setLoading(null);
      });
    }
  };
  console.log(props.ownNFTs)
  if (props.active && !props.showOnlyOwnNFTs) {
    items = data[props.active]?.map((item, index) => (
      <SwiperSlide key={index}>
        <div
          className={`relative flex items-center justify-center py-10 ${
            index === activeSlideIndex
              ? "scale-[1.5] duration-200 ease-in-out"
              : "scale-75 duration-200 ease-in-out "
          }`}
          onClick={() => onItemSelect(props.active, index)}
          key={index}
        >
          {loading &&
          loading.active == props.active &&
          loading.index == index ? (
            <div className="absolute top-6 right-4 scale-75">
              <SpinnerSm />
            </div>
          ) : null}
          {!props.ownNFTs?.includes(index) && (
            <div className="absolute top-[17%] right-4">
              <TiLockClosed />
            </div>
          )}
          <p className="w-full h-full">
            <img
              src={`/assets/images/previews/${props.active}/${item.img}.png`}
              className=""
            />
          </p>
        </div>
      </SwiperSlide>
    ));
  }
  if(props.showOnlyOwnNFTs){
    items = data[props.active]?.map((item, index) => (
        props.ownNFTs?.includes(index) && (
        <SwiperSlide key={index}>
          <div
            className={`relative flex items-center justify-center py-10 ${
              index === activeSlideIndex
                ? "scale-[1.5] duration-200 ease-in-out"
                : "scale-75 duration-200 ease-in-out "
            }`}
            onClick={() => onItemSelect(props.active, index)}
            key={index}
          >
            {loading &&
            loading.active == props.active &&
            loading.index == index ? (
              <div className="absolute top-6 right-4 scale-75">
                <SpinnerSm />
              </div>
            ) : null}
            <p className="w-full h-full">
            <img
            src={`/assets/images/previews/${props.active}/${item.img}.png`}
            className=""
          />
          </p>
          </div>
          </SwiperSlide>
          )
      ));
  }

  return (
    <div className="relative  rounded-md ">
      <Swiper
        modules={[Navigation]}
        slidesPerView={3}
        grabCursor
        className="w-full h-full"
        navigation={true}
        onSlideChange={(swiper) => setActiveSlideIndex(swiper.activeIndex)}
      >
        <SwiperSlide> </SwiperSlide>
        {items}
        <SwiperSlide> </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Options;
