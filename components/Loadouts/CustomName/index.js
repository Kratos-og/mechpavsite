import SpinnerSm from "@/components/UI/SpinnerSm";
import { useRouter } from "next/router";
import { useState } from "react"

export default function CustomName(props) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const onEdit = () => {
    setLoading(true);
    setTimeout(() => {
      sessionStorage.loadoutEdit = JSON.stringify(props.item);
      router.push('/builder');
    }, 1500)
  }

  return (
    <>
      <div className={`${props.activeSlideIndex == props.index ? 'bg-black absolute top-6 px-[20%]' : "bg-black absolute top-[25%] left-[33%] scale-75"} text-white px-5 py-2 rounded-md z-10 flex gap-5 tracking-widest`}>
        <p className="font-extrabold text-pavia-green">|</p>
        <span>{props.children}</span>
        <p className="font-extrabold text-pavia-green">|</p>
      </div>
      <div className="absolute w-full bottom-5 flex gap-3 z-10">
        {props.activeSlideIndex == props.index &&
          <div className="w-full flex items-center justify-center gap-5">
            {loading ? <SpinnerSm /> :
              <button className=' w-1/2 mt-5 py-7 text-sm newButton relative text-black group font-light' onClick={onEdit}>
                <div className='frame w-full h-full p-1 group-hover:p-2 ease-in-out duration-300'>
                  <div className="lines"></div>
                  <div className="angles"></div>
                  <div className='bg-white font-medium w-full uppercase h-full flex justify-center items-center'>
                    <p>EDIT Loadout</p>
                  </div>
                </div>
              </button>
            }
          </div>
        }

      </div>
      {props.activeSlideIndex == props.index && <div className="">
        <div className="bg-white/10 px-10 py-1 h-screen top-0 absolute w-[100%] left-0 light"></div>
        <div className="bg-white/5 px-10 py-1 h-screen top-0 absolute w-[93%] left-5 light"></div>
        <div className="bg-white/5 px-10 py-1 h-screen top-0 absolute w-[85%] left-10 light"></div>
      </div>}
    </>
  )
};