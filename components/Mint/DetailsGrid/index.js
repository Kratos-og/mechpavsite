import Link from "next/link";
import { useRouter } from "next/router";

const DetailsGrid = props => {
    const router = useRouter();

    const openMinting = () => {
        router.push('/minting');
    }

    const openUnbox = () => {
        router.push('/unbox');
    }
    return (
        <div className="w-full uppercase text-lg flex flex-col justify-center gap-4 relative">
            <div className="flex items-center gap-10">
                <div className="w-1/2 text-right text-pavia-green">Price</div>
                <div className="w-1/2 text-left">400 ADA</div>
            </div>
            <div className="flex items-center gap-10">
                <div className="w-1/2 text-right text-pavia-green">WHITELIST MINT OPENS</div>
                <div className="w-1/2 whitespace-nowrap text-left text-pavia-green cursor-pointer" onClick={openMinting}>Live Now</div>

            </div>
            <div className="flex items-center gap-10">
                <div className="w-1/2 text-right text-pavia-green">PUBLIC MINT OPENS</div>
                <div className="w-1/2 whitespace-nowrap text-left text-pavia-green cursor-pointer" onClick={openMinting}>Live Now</div>
            </div>
            <div className="flex items-center gap-10">
                <div className="w-1/2 text-right text-pavia-green">MINT DURATION</div>
                <div className="w-1/2 text-left">OPEN UNTIL SOLD OUT</div>
            </div>
            <div className="flex items-center gap-10">
                <div className="w-1/2 text-right text-pavia-green">CRATE OPENING</div>
                <div className="w-1/2 whitespace-nowrap text-left text-pavia-green cursor-pointer" onClick={openUnbox}>Live Now</div>
            </div>
            <div className="flex items-center gap-10">
                <div className="w-1/2 text-right text-pavia-green">TOTAL MECH CRATES</div>
                <div className="w-1/2 text-left">5000</div>
            </div>
            <div className="flex items-center gap-10">
                <div className="w-1/2 text-right text-pavia-green">MAX CRATES PER WALLET</div>
                <div className="w-1/2 text-left">10</div>
            </div>
            <div className="flex items-center gap-10">
                <div className="w-1/2 text-right text-pavia-green">LOCATION</div>
                <div className="w-1/2 text-left">PAVS.IO</div>
            </div>
            <div className="flex items-center gap-10">
                <div className="w-1/2 text-right text-pavia-green">WHITELIST</div>
                <div className="w-1/2 text-left">LAND AND PAV HOLDERS FOR THE FIRST 48 HOURS</div>
            </div>
            <div className="flex items-center gap-10">
                <div className="w-1/2 text-right text-pavia-green">ROYALTIES</div>
                <div className="w-1/2 text-left">5%</div>
            </div>
            <div className="w-0.5 h-[110%] absolute bg-pavia-green left-1/2"></div>
        </div>
    )
}

export default DetailsGrid;