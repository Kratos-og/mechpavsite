import { useEffect, useRef, useState } from "react";

const Countdown = props => {
    const [remaining, setRemaining] = useState({ 'days': 0, 'hours': '0', 'minutes': '0', 'seconds': '0' });
    const timerRef = useRef();

    useEffect(() => {
        const date = new Date(props.time).toISOString();
        const remaining = time_remaining(date);
        setRemaining(remaining);
        if (remaining.total) {
            setTimer();
        }
        else {
            if (props.done)
                props.done();
        }
        return () => {
            if (timerRef.current) {
                clearInterval(timerRef.current);
            }
        }
    }, []);

    const time_remaining = (endtime) => {
        const t = Date.parse(endtime) - Date.parse(new Date());
        let days = Math.floor(t / (1000 * 60 * 60 * 24));
        let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let seconds = Math.floor((t / 1000) % 60);
        let minutes = Math.floor((t / 1000 / 60) % 60);
        hours = hours > 9 ? hours : '0' + hours;
        minutes = minutes > 9 ? minutes : '0' + minutes;
        seconds = seconds > 9 ? seconds : '0' + seconds;
        if (t > 0)
            return { 'days': days, 'hours': hours, 'minutes': minutes, 'seconds': seconds, 'total': t };
        else
            return { 'days': 0, 'hours': '0', 'minutes': '0', 'seconds': '0', 'total': 0 };
    }

    const setTimer = () => {
        timerRef.current = setInterval(() => {
            const date = new Date(props.time).toISOString();
            const remaining = time_remaining(date);
            setRemaining(remaining);
            if (remaining.total <= 0) {
                clearInterval(timerRef.current);
                props.done();
            }
        }, 1000)
    }

    return (
        <div className="grid grid-flow-col gap-2 text-center auto-cols-max">
            <div className="flex flex-col items-center p-2 bg-fadedBlue dark:bg-fadedTurqoise rounded-lg text-white w-16">
                <span className=" font-bold text-xl leading-[1em]">
                    <span>{remaining.days}</span>
                </span>
                <span>days</span>
            </div>
            <div className="flex flex-col p-2 items-center bg-fadedBlue dark:bg-fadedTurqoise rounded-lg text-white w-16">
                <span className="countdown font-bold text-xl">
                    <span style={{ "--value": remaining.hours }}></span>
                </span>
                hours
            </div>
            <div className="flex flex-col p-2 items-center bg-fadedBlue dark:bg-fadedTurqoise rounded-lg text-white w-16">
                <span className="countdown font-bold text-xl">
                    <span style={{ "--value": remaining.minutes }}></span>
                </span>
                min
            </div>
            <div className="flex flex-col p-2 items-center bg-fadedBlue dark:bg-fadedTurqoise rounded-lg text-white w-16">
                <span className="countdown font-bold text-xl">
                    <span style={{ "--value": remaining.seconds }}></span>
                </span>
                sec
            </div>
        </div>
    )
}

export default Countdown;