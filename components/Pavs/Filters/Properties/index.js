import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import Bravery from './Bravery';
import Cunning from './Cunning';
import Intelligence from './Intelligence';
import Speed from './Speed';
import TraitCount from './TraitCount';
import Weight from './Weight';

const PropertiesFilters = props => {

    return (
        <div className='mt-4'>
            <div tabIndex={0} className="collapse collapse-arrow ">
                <input type="checkbox" />
                <div className="collapse-title text-white font-semibold bg-[#3e3c3c] px-5 rounded-lg text-sm flex items-center">
                    Properties
                </div>
                <div className="collapse-content bg-[#282727] -mt-2">
                    <div className='flex flex-col gap-4 py-5 pb-7 px-1'>
                        <Speed onChange={props.onFiltersChange} filters={props.filters} />
                        <Weight onChange={props.onFiltersChange} filters={props.filters} />
                        <Bravery onChange={props.onFiltersChange} filters={props.filters} />
                        <Cunning onChange={props.onFiltersChange} filters={props.filters} />
                        <Intelligence onChange={props.onFiltersChange} filters={props.filters} />
                        <TraitCount onChange={props.onFiltersChange} filters={props.filters} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PropertiesFilters;