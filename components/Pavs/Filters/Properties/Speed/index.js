import { useState } from "react";
import Slider from "rc-slider";

const Speed = props => {
    const [val, setVal] = useState(0);

    const onSpeedChange = (val) => {
        setVal(val);
        props.onChange('speed', val)
    }
    return (
        <div className='mt-2'>
            <div className='text-sm'>Speed</div>
            <div className='mt-3 flex gap-3'>
                <Slider min={0} max={100} value={props.filters?.speed ?? 0} onChange={onSpeedChange} marks={{
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


export default Speed;