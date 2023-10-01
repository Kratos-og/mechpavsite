import Button from "./Button";
const Item = props => {
    return (
        <Button>
            <div className="flex gap-10 items-center pl-5">
                <img src={`/assets/images/abilities/${props.image}.png`} className='w-10' />
                <div className="md:w-80 flex gap-3">
                <div>
                    <div className="text-lg font-bold capitalize flex items-center justify-between">
                        <span>{props.name}</span>
                    </div>
                    <div className="text-xs tracking-wide">
                        {props.children}
                    </div>
                </div>
                <div className=" flex justify-center">
                        <div className="text-pavs-red text-3xl font-bold m-auto border-2 border-red-600 p-2 rounded-xl">{props.value}</div>
                </div>
                </div>

            </div>
        </Button>
    )
}

export default Item;