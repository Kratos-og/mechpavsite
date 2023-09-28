import axios from "../../Common/axios";
import { useEffect, useState } from "react";
import FloorGraph from "./FloorGraph";
import RecentSales from "./RecentSales";
import Loader from "../../UI/Loader";

const Sales = props => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);

    useEffect(() => {
        if (props.name)
            getData();
    }, [props.name]);

    const getData = async () => {
        try {
            setLoading(true);
            const res = await axios.get(`/pavs/statistics/${props.name}`);
            setData(res.data?.result);
            setLoading(false);
        }
        catch (err) { console.log(err) }
    }

    return (
        <div className="w-full">
            {loading ? <Loader /> :
                <>
                    <FloorGraph image={props.image} data={data} />
                    <RecentSales image={props.image} data={data} />
                </>
            }
        </div>
    )
}

export default Sales;