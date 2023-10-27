const Crate = props => {
    return (
        <div className="flex flex-col text-center px-5 py-12 bg-gray-700/25">
            <img src="/assets/images/crate_img.png" className="w-[200px] cursor-pointer object-cover crate" />
            <div className="text-[10px] uppercase font-bold text-pavia-green">Mech Crate</div>
            <div className="mt-2 font-semibold">MechCrate#00001</div>
        </div>
    )
}