import Link from "next/link";

const PavItem = props => {
    return (
        <Link href={"/pav/" + props.name.toLowerCase()}>
            <div className="w-full md:w-[250px] flex flex-col items-center blurredBg relative rounded-lg p-5 text-white cursor-pointer hover:-translate-y-1 transition-all">
                <img src={`/assets/images/pavs/${props.name}.jpg`} className="w-full bottom-5 rounded-md" />
                <div className="w-full text-center">
                    <div className="font-bold mt-4">{props.name}</div>
                    <div className="flex flex-col gap-2 mt-4">
                        <div className="text-xs mt-1 font-bold flex items-center justify-between">
                            <div className=" text-gray">Rarity</div>
                            <div>{props.rarity}</div>
                        </div>
                        <div className="text-xs mt-1 font-bold flex items-center justify-between">
                            <div className=" text-gray">Mech Compatible</div>
                            <div>{props.mechCompatible ? 'Yes' : 'No'}</div>
                        </div>
                        <div className="text-xs mt-1 font-bold flex items-center justify-between">
                            <div className=" text-gray">Supply</div>
                            <div>{props.supply}</div>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default PavItem;