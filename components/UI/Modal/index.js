
import { IoClose } from 'react-icons/io5';
const Modal = props => {
    document.addEventListener('keydown', handleKeyPress);
  function handleKeyPress(event) {
    if (event.key === "Escape") {
        props.close(false) 
  }
}
    return (
        <div className={`w-screen h-screen fixed flex items-center justify-center right-[10%] z-[501] -top-100 ${props.show ? '-top-7' : ''}`}>
            <div className={`w-[95%] md:w-[750px] ${props.sm ? 'md:w-[550px]' : ''} relative rounded-xl h-[625px] blurred-bg z-[100001] transition-all delay-75 ${props.show ? 'opacity-100' : 'opacity-0'} border-2 border-[#CDDEFF] cursor-pointer ]`}>
                <div className="absolute top-6 right-10 py-1 px-3 z-50 flex border-2 border-[#CDDEFF] cursor-pointer rounded-[0.3rem]  gap-5 items-center">
                <p className="bg-pavia-green font-black text-black text-xs p-1 rounded-[0.3rem]">[ ESC ]</p>
                    <p className='p-1 bg-white rounded-full'>
                    <IoClose onClick={()=>props.close(false)} className="text-sm text-black" />
                    </p>
                </div>
                {props.children}
            </div>
        </div>
    )
}

export default Modal;