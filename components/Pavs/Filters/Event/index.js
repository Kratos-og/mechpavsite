const Event = props => {
    return (
        <div className='mt-4'>
            <div tabIndex={0} className="collapse collapse-arrow ">
                <input type="checkbox" />
                <div className="collapse-title text-white font-semibold bg-[#3e3c3c] px-5 rounded-lg text-sm flex items-center">
                    Event
                </div>
                <div className="collapse-content bg-[#282727]">
                    <div className='flex flex-col text-sm gap-4 py-5 px-1'>
                        <div className="flex justify-between items-center px-3 py-3 cursor-pointer" onClick={(e) => props.onChange('airdropped')} >
                            <div>1st Generation</div>
                            <input type="checkbox" id="airdropped" className="checkbox checkbox-primary checkbox-sm" checked={props.types?.includes('airdropped')} />
                        </div>
                        <div className="flex justify-between items-center px-3 py-3 cursor-pointer" onClick={(e) => props.onChange('specialEvent')}>
                            <div>Special Event</div>
                            <input type="checkbox" id="special" className="checkbox checkbox-primary checkbox-sm" checked={props.types?.includes('specialEvent')} />
                        </div>
                        {/* <div className="flex justify-between items-center px-3 py-3 cursor-pointer" onClick={(e) => props.onChange('claimed')}>
                            <div>Claimed</div>
                            <input type="checkbox" id="claimed" className="checkbox checkbox-primary checkbox-sm" checked={props.types?.includes('claimed')} />
                        </div> */}
                        <div className="flex justify-between items-center px-3 py-3 cursor-pointer" onClick={(e) => props.onChange('cyberLiveEvent')}>
                            <div >Cyber Live Event</div>
                            <input type="checkbox" id="cyber" className="checkbox checkbox-primary checkbox-sm" checked={props.types?.includes('cyberLiveEvent')} />
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Event;