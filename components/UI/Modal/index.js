
import { IoClose } from 'react-icons/io5';
const Modal = props => {

    return (
        <div className={`w-screen h-screen fixed flex items-center justify-center right-[10%] z-[501] -top-100 ${props.show ? '-top-7' : ''}`}>
            <div className={`w-[95%] md:w-[750px] ${props.sm ? 'md:w-[550px]' : ''} relative rounded-xl h-[625px] z-[100001] transition-all delay-75 ${props.show ? 'opacity-100' : 'opacity-0'} bg-white cursor-pointer ]`}>
                <div className="absolute top-6 right-10 py-1 px-3 z-50 flex cursor-pointer rounded-[0.3rem]  gap-5 items-center">
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