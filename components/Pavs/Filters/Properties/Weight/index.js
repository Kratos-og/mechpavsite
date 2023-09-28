import Slider from "rc-slider";
import { useState } from "react";

const Weight = props => {
    const [val, setVal] = useState(0);

    const onChange = (val) => {
        setVal(val);
        props.onChange('weight', val)
    }
    return (
        <div className='mt-5'>
            <div className='text-sm'>Weight</div>
            <div className='mt-3 flex gap-3'>
                <Slider min={0} max={100} value={props.filters?.weight ?? 0} onChange={onChange} marks={{
                    0: {
                        style: {
                            color: 'red',
                        },
                        label: <strong>0</strong>,
                    },
                    100: {
                        style: {
                            color: 'red',
                        },
                        label: <strong>100</strong>,
                    },
                }} />
            </div>
        </div>
    )
}


export default Weight;