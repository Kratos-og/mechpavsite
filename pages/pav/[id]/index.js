import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { data } from "../../../components/Common/pavsData";
import PavDetails from "../../../components/Pav/PavDetails";
import { MdOutlineKeyboardBackspace } from 'react-icons/md';
import Link from "next/link";
import Sales from "../../../components/Pav/Sales";

const Pav = props => {
    const router = useRouter();
    const [pavDetails, setPavDetails] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const pav = data.find(pav => pav.name.toLowerCase() === router.query.id);
        setPavDetails(pav);
        setLoading(false);
    }, [router.isReady])

    return (
        <div className="min-h-screen w-full bg-black bg-fixed py-20 text-white" id="cont">
            <div className="container m-auto">
                <div className="flex flex-col mt-10 gap-5 items-start px-10 xl:px-20">
                    <Link href="/pavs">
                        <div className="bg-white p-1 px-7 cursor-pointer hover:bg-pavs-red transition-all group rounded-full w-fit">
                            <MdOutlineKeyboardBackspace className="text-black text-xl group-hover:text-white" />
                        </div>
                    </Link>
                    <div className="text-3xl font-exBold">{pavDetails?.name} <span className="text-pavs-red">Pav</span></div>
                </div>
                <div className="px-10 flex flex-wrap-reverse md:flex-nowrap">
                    <div className="w-full md:w-[70%]">
                        <PavDetails {...pavDetails?.properties} mechCompatible={pavDetails?.mechCompatible} />
                    </div>
                    <div className="flex flex-col w-full md:w-[30%] gap-10 lg:h-[500px] max-md:pb-5">
                        <img src={`/assets/images/pavs/${pavDetails?.name}.jpg`} className="w-full rounded-md" />
                    </div>
                </div>
                <div className="w-full flex flex-col gap-10 py-10 items-start justify-center px-10 md:px-20 backdrop-saturate-200 bg-white/10 rounded-lg max-md:mt-10">
                    <div className="text-xl font-bold">Pav Sales History</div>
                    <Sales name={pavDetails?.name} image={`/assets/images/pavs/${pavDetails?.name}.jpg`} />
                </div>
            </div>
        </div>
    )
}

export default Pav;