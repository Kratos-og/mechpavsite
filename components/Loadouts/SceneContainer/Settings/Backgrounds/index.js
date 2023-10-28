import Item from "./Item";

const Backgrounds = props => {
    const data = [{ name: 'Industrial Sunset', id: 'industrial_sunset' }, { name: 'kloofendal', id: 'kloofendal' }, { name: 'kloppenheim', id: 'kloppenheim' }, { name: 'Modern Buildings', id: 'modern_buildings' },
    { name: 'Old Depot', id: 'old_depot' }, { name: 'Peppermint Powerplant', id: 'peppermint_powerplant' }, { name: 'Syferfontein', id: 'syferfontein' }, { name: 'Workshop', id: 'workshop' }];

    const items = data.map(item => <Item {...item} key={item.id} onClick={() => props.setEnv(item.id)} selected={props.env == item.id} />)

    return (
        <div className="flex flex-wrap gap-8 items-center justify-center text-center">
            {items}
        </div>
    )
}

export default Backgrounds;