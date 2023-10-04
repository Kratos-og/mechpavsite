const MechCompatible = props => {
    return (
        <label className="label cursor-pointer flex flex-col items-start gap-4">
            <div className="flex items-center justify-between w-full rounded-full p-2">
                <label htmlFor="mechOnly" className="label-text text-white font-bold w-full cursor-pointer" >Mech Compatible</label>
                <input id="mechOnly" type="radio" name="mechCompatible" className="radio radio-primary " checked={props.filters?.mechCompatible} onChange={(e) => props.onFiltersChange('mechCompatible', e.target.checked)} />
            </div>
            <div className="flex items-center justify-between w-full rounded-full p-2">
                <label htmlFor="nonMech" className="label-text text-white font-bold cursor-pointer w-full">Non-Mech Compatible</label>
                <input id="nonMech" type="radio" name="mechCompatible" className="radio radio-primary " checked={props.filters?.mechCompatible} onChange={(e) => props.onFiltersChange('mechCompatible', e.target.checked)} />
            </div>
        </label>
    )
}

export default MechCompatible;

