const Item = props => {
    return (
        <div className={`flex flex-col gap-2 tracking-widest cursor-pointer items-center text-xs p-2 py-3 relative`} onClick={props.onClick}>
            <div className="absolute h-full w-2 right-0 top-0 border-r-2 top-bottom-overflow-fade max-md:hidden"></div>
            <img src={'/assets/images/environments/' + props.id + '.png'} className="w-40 h-20 object-cover" />
            <div>{props.name}</div>
        </div>
    )
}

export default Item;