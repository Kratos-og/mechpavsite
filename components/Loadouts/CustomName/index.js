export default function CustomName(props) {
  return (
    <>
      <div className={`${props.activeSlideIndex == props.index ? 'bg-black absolute top-6 px-[20%]' : "bg-black absolute top-[25%] left-[33%] scale-75"} text-white px-5 py-2 rounded-md z-10 flex gap-5 tracking-widest`}>
        <p className="font-extrabold text-pavia-green">|</p>{props.children}<p className="font-extrabold text-pavia-green">|</p>
      </div>
      <div className="absolute bottom-5 flex gap-3 z-10">
        <button className={`${props.activeSlideIndex == props.index ? 'bg-white/80' : "hidden"} text-black px-10 py-2 rounded-md hover:bg-white hover:font-semibold`}>EDIT LOADOUT</button>
        <button className={`${props.activeSlideIndex == props.index ? 'bg-white/80' : "hidden"} text-black px-10 py-2 rounded-md hover:bg-white hover:font-semibold`}>DELETE</button>

      </div>
      {props.activeSlideIndex == props.index && <div className="">
        {/* <div className="bg-white/10 px-10 py-1 h-full"></div> */}
        <div className="bg-white/10 px-10 py-1 h-screen top-0 absolute w-[100%] left-0 light"></div>
        <div className="bg-white/5 px-10 py-1 h-screen top-0 absolute w-[93%] left-5 light"></div>
        <div className="bg-white/5 px-10 py-1 h-screen top-0 absolute w-[85%] left-10 light"></div>
        {/* <div className="bg-white/80 px-10 py-1 h-screen top-0 absolute w-[60%] left-14"></div> */}
        {/* <div className="bg-white/40 px-10 py-1 h-full"></div>
                <div className="bg-white/20 px-10 py-1 h-full"></div> */}
        {/* <div className="bg-white/10 px-10 py-1 h-full"></div> */}
      </div>}
    </>
  )
};