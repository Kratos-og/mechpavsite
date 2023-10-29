export default function CustomName(props) {
  return (
    <>
      <div className={`${props.activeSlideIndex == props.index ? 'bg-black absolute top-6 px-[20%]' : "bg-black absolute top-[25%] left-[33%] scale-75"} text-white px-5 py-2 rounded-md z-10 flex gap-5 tracking-widest`}>
        <p className="font-extrabold text-pavia-green">|</p>{props.children}<p className="font-extrabold text-pavia-green">|</p>
      </div>
      <div className="absolute w-full bottom-5 flex gap-3 z-10">

      {props.activeSlideIndex == props.index &&  <button className=' w-full mt-5 py-7 text-sm newButton relative text-pavia-green group font-light' onClick={() => setStart(true)}>
          <div className='frame w-full h-full p-1 group-hover:p-2 ease-in-out duration-300'>
          <div className="lines"></div>
          <div className="angles"></div>
          <div className='bg-gray-900 w-full h-full flex justify-center items-center'>
            <p>EDIT LOADOUT</p>
          </div>
          </div>
          </button>}
          {props.activeSlideIndex == props.index &&  <button className=' w-full mt-5 py-7  text-sm newButton relative text-pavia-green group font-light' onClick={() => setStart(true)}>
          <div className='frame w-full h-full p-1 group-hover:p-2 ease-in-out duration-300'>
          <div className="lines"></div>
          <div className="angles"></div>
          <div className='bg-gray-900 w-full h-full flex justify-center items-center'>
            <p>DELETE</p>
          </div>
          </div>
          </button>}

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