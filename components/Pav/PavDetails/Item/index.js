const Item = props => {
    return (
        <div>
            <div className="flex gap-10 items-center">
                <img src={`/assets/images/abilities/${props.image}.png`} className='w-10' />
                <div className="md:w-80">
                    <div className="text-lg font-bold capitalize flex items-center gap-10">
                        <span>{props.name}</span>
                        <div className="text-pavs-red">{props.value}</div>
                    </div>
                    <div className="text-xs tracking-wide">
                        {props.children}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Item;