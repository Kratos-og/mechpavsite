import BgAnim from "@/components/Unboxing/BgAnim";
import Wallet from "@/components/Unboxing/Wallet";

const Unbox = props => {


    return (
        <div className="w-full min-h-screen p-20">
            <div className="w-full relative border flex items-center justify-center border-gray-700 h-[600px] rounded-2xl">
                <div className="cursor-pointer absolute w-[95%] left-7 font-bold -top-5 p-5 border rounded-xl bg-white text-black uppercase">Mech Crates Unboxing</div>
                <Wallet />
                <div className="absolute font-bold bottom-5 right-5 px-8 py-3 border cursor-pointer hover:bg-white hover:text-black transition-all">
                    Continue <span className="ml-2">&rarr;</span>
                </div>
            </div>

        </div>
    )
}

export default Unbox;