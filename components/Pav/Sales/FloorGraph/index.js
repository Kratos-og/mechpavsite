import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend,
    Filler
} from 'chart.js';
import { useEffect, useState } from 'react';
import { Line, } from 'react-chartjs-2'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
);

const FloorGraph = props => {
    const [options, setOptions] = useState({});
    const [gradient, setGrandient] = useState(null);

    useEffect(() => {
        let ctx = document.getElementById('chart').getContext('2d');

        let gradient = ctx.createLinearGradient(0, 0, 0, 700);
        gradient.addColorStop(0, '#f70817');
        gradient.addColorStop(1, 'transparent');
        setGrandient(gradient)
    }, [])

    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

    const data = {
        labels,
        datasets: [
            {
                data: props.data?.map(sale => sale.price / 1e6),
                borderColor: '#f70817',
                backgroundColor: '#f70817',
                borderWidth: 1,
                fill: true,
                backgroundColor: gradient
            },
        ],
    };

    useEffect(() => {
        setOptions({
            responsive: true,
            plugins: {
                legend: {
                    display: false
                }
            },
            elements: {
                line: {
                    tension: 0.5,
                },
                point: {
                    radius: 2
                }
            },
            scales: {
                x: {
                    grid: {
                        display: false
                    }
                },
                y: {
                    gridLines: {
                        color: '#000'
                    }
                }
            },
            maintainAspectRatio: false
        });
    }, [])

    return (
        <div>
            <div className='w-full h-[450px]'>
                <Line options={options} data={data} id="chart" />
            </div>
        </div>
    )
}

export default FloorGraph;