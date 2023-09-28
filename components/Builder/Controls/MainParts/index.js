import Item from "./Item";

const MainPartControls = props => {
    const onClick = (type) => {
        props.setActiveMainPart(type);
    }
    return (
        <div className="flex flex-col gap-4">
            <Item name="Torso" onClick={onClick} active={props.active == 'torso'} type={'torso'} />
            <Item name="Left Arm" onClick={onClick} active={props.active == 'leftarm'} type={'leftarm'} />
            <Item name="Right Arm" onClick={onClick} active={props.active == 'rightarm'} type={'rightarm'} />
            <Item name="Backpack" onClick={onClick} active={props.active == 'backpack'} type={'backpack'} />
            <Item name="Legs" onClick={onClick} active={props.active == 'legs'} type={'legs'} />
        </div>
    )
}

export default MainPartControls;