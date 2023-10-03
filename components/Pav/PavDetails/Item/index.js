import Button from "./Button";
const Item = props => {
    return (
        <div className="flex gap-10 items-center pl-5 w-full lg:w-[45%]">
            <img src={`/assets/images/abilities/${props.image}.png`} className='w-10' />
            <div className=" flex items-center gap-3">
                <div className="">
                    <div className="text-lg font-bold capitalize flex items-center justify-between">
                        <span>{props.name}</span>
                    </div>
                    <div className="text-[11px]">
                        {props.children}
                    </div>
                </div>
                <div className="flex justify-center ">
                    <div className="text-pavs-red text-xl capitalize font-bold m-auto border-2 border-red-600 p-2 rounded-xl">{props.value}</div>
                </div>
            </div>
        </div>
    )
}

export default Item;