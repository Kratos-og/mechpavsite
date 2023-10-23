const Item = props => {
    return (
        <div className={`flex flex-col items-center py-2 my-8 font-bold cursor-pointer text-sm rounded-md uppercase border-2 border-[#CDDEFF] text-white -rotate-90 ${props.active ? 'border-2 border-white' : ''}`} onClick={() => props.onClick(props.type)}>
            {/* <img src={`/assets/images/controls/${props.name.split(' ').join('').toLowerCase()}.png`} className="w-8" /> */}
            <p className="px-3">
            {props.name}
            </p>

        </div>
    )
}

export default Item;