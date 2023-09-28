import Slider from "rc-slider";
import { useState } from "react";

const TraitCount = props => {
    const [val, setVal] = useState(0);

    const onChange = (val) => {
        setVal(val);
        props.onChange('traitCount', val)
    }
    return (
        <div className='mt-5'>
            <div className='text-sm'>Trait Count</div>
            <div className='mt-3'>
                <Slider step={1} min={9} max={11} value={props.filters?.traitCount ?? 9} onChange={onChange} marks={{
                    9: {
                        style: {
                            color: 'red',
                        },
                        label: <strong>9</strong>,
                    },
                    10: '10',
                    11: {
                        style: {
                            color: 'red',
                        },
                        label: <strong>11</strong>,
                    },
                }} />
            </div>
        </div>
    )
}


export default TraitCount;