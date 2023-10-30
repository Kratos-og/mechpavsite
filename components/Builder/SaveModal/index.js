const SaveModal = props => {
    return (
        <div className="absolute w-full top-0 left-0 h-full flex items-center z-40 justify-center">
            <div className="w-[400px] h-[450px] rounded-sm p-5 bg-black/60">
                <div>
                    <div className="uppercase tracking-wider">Save loadout</div>
                    <div className="h-0.5 w-full bg-gradient-to-r from-white via-white to-transparent mt-3"></div>
                </div>
                <div className="py-5">
                    <div className="text-sm font-medium uppercase">Name your Mech</div>
                    <div className="mt-2 border-l-2">
                        <div className="h-0.5 w-full bg-gradient-to-r from-white via-white to-transparent mt-3"></div>
                        <input type="text" className="bg-transparent h-full text-white text-sm outline-none px-2 mt-1" placeholder="Mech Name" />
                        <div className="h-0.5 w-full bg-gradient-to-r from-white via-white to-transparent mt-2"></div>
                    </div>
                    <div className="mt-4">
                        <div className="text-sm font-medium uppercase">Mech Parts</div>
                        <div className="text-sm font-bold py-2">
                            <div className=" ml-1 py-1 flex items-center justify-between">
                                <span>Torso</span>
                                <span className="text-pavia-green">Defender | Ryzen</span>
                            </div>
                            <div className=" ml-1 py-1 flex items-center justify-between">
                                <span>Left Arm</span>
                                <span className="text-pavia-green">Defender | Ryzen</span>
                            </div>
                            <div className=" ml-1 py-1 flex items-center justify-between">
                                <span>Right Arm</span>
                                <span className="text-pavia-green">Defender | Ryzen</span>
                            </div>
                            <div className=" ml-1 py-1 flex items-center justify-between">
                                <span>Backpack</span>
                                <span className="text-pavia-green">Defender | Ryzen</span>
                            </div>
                            <div className=" ml-1 py-1 flex items-center justify-between">
                                <span>Legs</span>
                                <span className="text-pavia-green">Defender | Ryzen</span>
                            </div>
                        </div>
                        <div className="flex items-center justify-center mt-5" onClick={props.onClick}>
                            <div className="px-10 bg-white text-black tracking-wider py-3 w-fit">CONFIRM</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SaveModal;