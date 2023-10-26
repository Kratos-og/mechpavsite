const Unbox = props => {
    return (
        <div className="w-full min-h-screen flex items-center justify-center">

            <div className="flex flex-col text-center">
                <img src="/assets/images/crate_img.png" className="w-[200px] cursor-pointer object-cover crate" />
                <div className="text-[10px] uppercase font-bold text-pavia-green">Mech Crate</div>
                <div className="mt-2 font-semibold">MechCrate#00001</div>
            </div>
        </div>
    )
}

export default Unbox;