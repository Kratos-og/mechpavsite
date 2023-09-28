
import { IoClose } from 'react-icons/io5';
const Modal = props => {
    return (
        <div className={`w-screen h-screen fixed flex items-center justify-center left-0 z-[501] -top-100 ${props.show ? 'top-0' : ''}`}>
            <div className={`w-[95%] md:w-[750px] ${props.sm ? 'md:w-[550px]' : ''} relative rounded-xl h-[625px] blurred-bg z-[100001] transition-all delay-75 ${props.show ? 'opacity-100' : 'opacity-0'}`}>
                <div className="absolute top-6 right-10 cursor-pointer z-50">
                    <IoClose onClick={props.close} className="text-xl" />
                </div>
                {props.children}
            </div>
        </div>
    )
}

export default Modal;