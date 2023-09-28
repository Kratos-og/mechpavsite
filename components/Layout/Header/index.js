const Header = props => {
    return (
        <div className="fixed p-10 z-50 w-fit">
            <div className="p-4 bg-white rounded-full flex items-center justify-center cursor-pointer" onClick={props.toggleMenu}>
                <div className="w-7 text-black">
                    <svg className="burger" viewBox="0 0 32 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="32" y1="1" x2="11" y2="0.999998" stroke="currentColor" stroke-width="2"></line>
                        <line x1="32" y1="8" x2="-8.74228e-08" y2="8" stroke="currentColor" stroke-width="2"></line><line x1="32" y1="16" x2="9" y2="16" stroke="currentColor" stroke-width="2"></line>
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default Header;