const Item = props => {
    return (
        <div className={`w-24 p-2 flex flex-col items-center gap-4 justify-center font-bold cursor-pointer text-sm rounded-md h-24 blurred-bg ${props.active ? 'border-2 border-white' : ''}`} onClick={() => props.onClick(props.type)}>
            <img src={`/assets/images/controls/${props.name.split(' ').join('').toLowerCase()}.png`} className="w-8" />
            {props.name}
        </div>
    )
}

export default Item;