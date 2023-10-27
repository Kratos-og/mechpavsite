const Item = props => {
    return (
        <div className={`flex flex-col gap-2 cursor-pointer blurred-bg p-2 rounded-lg font-semibold ${props.selected ? 'border-2 border-white' : ''}`} onClick={props.onClick}>
            <img src={'/assets/images/environments/' + props.id + '.png'} className="w-40 h-20 object-cover rounded-lg" />
            <div>{props.name}</div>
        </div>
    )
}

export default Item;