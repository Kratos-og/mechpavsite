import Event from "./Event";
import MechCompatible from "./MechCompatible";
import PropertiesFilters from "./Properties";

const Filters = props => {
    return (
        <div className="w-full h-screen lg:h-auto min-h-screen flex flex-col p-5 overflow-y-auto">
            <div className="font-bold text-lg">Filters</div>
            <div className="w-full flex justify-end text-xs font-bold cursor-pointer " onClick={props.clear}>
                <div className=" rounded-full">Clear All</div>
            </div>
            <div className="mt-4">
                <MechCompatible onFiltersChange={props.onFiltersChange} filters={props.filters} />
                <PropertiesFilters onFiltersChange={props.onFiltersChange} filters={props.filters} />
                <Event onChange={props.eventTypeChange} types={props.filters.types} />
            </div>
        </div>
    )
}

export default Filters;