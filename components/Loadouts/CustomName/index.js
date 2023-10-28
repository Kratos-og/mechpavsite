export default function CustomName (props) {
    return(
        <>
            <div className={`${props.activeSlideIndex == props.index ? 'bg-black absolute top-10 px-[30%]':"bg-black absolute top-[25%] left-[33%] scale-75"} text-white px-5 py-2 rounded-md z-10 flex gap-5 tracking-widest`}><p className="font-extrabold text-pavia-green">|</p>{props.children}<p className="font-extrabold text-pavia-green">|</p></div>
            <div className="absolute bottom-5 flex gap-3 z-10">
            <button className={`${props.activeSlideIndex == props.index ? 'bg-white/80':"hidden"} text-black px-10 py-2 rounded-md hover:bg-white hover:font-semibold`}>EDIT LOADOUT</button>
              <button className={`${props.activeSlideIndex == props.index ? 'bg-white/80':"hidden"} text-black px-10 py-2 rounded-md hover:bg-white hover:font-semibold`}>DELETE</button>
              <button className={`${props.activeSlideIndex == props.index ? 'bg-white/80':"hidden"} text-black px-10 py-2 rounded-md hover:bg-white hover:font-semibold`}>EDIT NAME</button>
            </div>
            {props.activeSlideIndex == props.index && <div className="absolute bottom-0 h-screen flex -z-[1] gap-0">
                <div className="bg-pavia-green/10 px-10 py-1 h-full"></div>
                <div className="bg-pavia-green/20 px-10 py-1 h-full"></div>
                <div className="bg-pavia-green/40 px-10 py-1 h-full"></div>
                <div className="bg-pavia-green/80 px-10 py-1 h-full"></div>
                <div className="bg-pavia-green/80 px-10 py-1 h-full"></div>
                <div className="bg-pavia-green/40 px-10 py-1 h-full"></div>
                <div className="bg-pavia-green/20 px-10 py-1 h-full"></div>
                <div className="bg-pavia-green/10 px-10 py-1 h-full"></div>
              </div>}
        </>
    )
};