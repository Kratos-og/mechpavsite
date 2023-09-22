import Mouse from "../../UI/Svg/Mouse";

const Hero = props => {
    return (
        <div className="w-full h-screen snap-child-start flex flex-col items-center justify-center relative overflow-x-hidden">
            <div className="text-[208px] 2xl:text-[298px] font-bold tracking-wider">MECH PAVS</div>
            <div className="w-full z-40 relative text-[11px] ml-[15%] tracking-widest">
                <div className="w-1/4 flex flex-col gap-4 -mt-10">
                    <div>CARDANO'S BIGGEST NFT MINT IS HAPPENING RIGHT HERE ON <b>OCTOBER 19TH</b>.</div>
                    <div>5 CLASSES, 5 PARTS, 5 SKINS AND OVER 1 MILLION COMBINATIONS. COLLECT AND BUILD INTERCHANGEABLE MECH PARTS TO BUILD A FULLY USEABLE AVATAR.</div>
                </div>

            </div>
            <div className="w-16 mt-20 absolute bottom-10 left-[10%]">
                <Mouse />
            </div>
        </div>
    )
}

export default Hero;