import moment from "moment/moment";
import { minifyAddress } from "../../../../Common/utils";

const Sale = props => {
    return (
        <div className="w-fit px-7 bg-gradient blurredBg h-20 p-3 rounded-md flex items-center gap-16">
            <img src={props.image} className="w-14 rounded-md" />
            <div className="flex flex-col gap-1 text-sm">
                <div className="font-bold text-xs text-pavs-red whitespace-nowrap">Asset Name</div>
                <div className="font-semibold">{props.name}</div>
            </div>
            <div className="flex flex-col gap-1 text-sm">
                <div className="font-bold text-xs text-pavs-red">Price</div>
                <div className="font-semibold">{props.price / 1e6} ADA</div>
            </div>
            <div className="flex flex-col gap-1 text-sm">
                <div className="font-bold text-xs text-pavs-red">Marketplace</div>
                <div className="font-semibold">CNFT.IO</div>
            </div>
            {/* <div className="flex flex-col gap-1 text-sm">
                <div className="font-bold text-xs text-pavs-red">Seller</div>
                <div className="font-semibold">addr1....ajaodmod</div>
            </div> */}
            <div className="flex flex-col gap-1 text-sm">
                <div className="font-bold text-xs text-pavs-red">Buyer</div>
                <div className="font-semibold">addr1....ada11es</div>
            </div>
            <div className="flex flex-col gap-1 text-sm">
                <div className="font-bold text-xs text-pavs-red">Tx. ID</div>
                <div className="font-semibold w-40">{minifyAddress(props.transactionHash, 10)}</div>
            </div>
            <div className="flex flex-col gap-1 text-sm">
                <div className="font-bold text-xs text-pavs-red">Sold On</div>
                <div className="font-semibold">{moment(props.time).fromNow()}</div>
            </div>
        </div>
    )
}

export default Sale;