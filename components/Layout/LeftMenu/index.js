import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";

const LeftMenu = props => {
    const router = useRouter();

    const openLink = (type) => {
        router.push(type);
        props.toggleMenu();
    }
    return (
        <div className={`fixed w-screen h-screen top-0 z-50 ${props.show ? 'left-0' : 'left-full'}`}>
            <div className="w-full h-full backdrop-blur-[10px]" onClick={props.toggleMenu}></div>
            <AnimatePresence>
                {props.show &&
                    <motion.div style={{ left: 0 }} exit={{ left: '-30%', transition: { duration: 0.3 } }} className="w-[20rem] fixed top-0 bg-black z-50 h-screen p-5 md:p-8 border-r">
                        <div className="w-full relative">
                            <motion.div
                                initial={{ left: '10%' }}
                                animate={{ rotateZ: '180deg', left: '75%', transition: { duration: 0.4 } }}
                                exit={{ left: '10%', rotateZ: 0, opacity: 0, transition: { duration: 0.2 } }}
                                className="p-3 md:p-4 top-4 absolute bg-white rounded-full flex items-center justify-center cursor-pointer" onClick={() => props.toggleMenu(true)}>
                                <div onClick={props.toggleMenu} className="w-4 md:w-7 text-black trans">
                                    <svg className="burger" viewBox="0 0 32 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <line x1="32" y1="1" x2="11" y2="0.999998" stroke="currentColor" stroke-width="2"></line>
                                        <line x1="32" y1="8" x2="-8.74228e-08" y2="8" stroke="currentColor" stroke-width="2"></line><line x1="32" y1="16" x2="9" y2="16" stroke="currentColor" stroke-width="2"></line>
                                    </svg>
                                </div>
                            </motion.div>
                        </div>
                        <nav className="menu mt-28">
                            <ul className="flex flex-col gap-5">
                                <li className="cursor-pointer hover:text-pavia-green text-lg transition-all" onClick={() => openLink('/')}>Home</li>
                                <li className="cursor-pointer hover:text-pavia-green text-lg transition-all" onClick={() => openLink('mint')}>Mech Mint</li>
                                <li className="cursor-pointer hover:text-pavia-green text-lg transition-all" onClick={() => openLink('pavs')}>Pavs</li>
                                <li className="cursor-pointer hover:text-pavia-green text-lg transition-all" onClick={() => openLink('Lore')}>Lore</li>
                                <li className="cursor-pointer hover:text-pavia-green text-lg transition-all" onClick={() => openLink('builder')}>Mech Builder</li>
                            </ul>
                        </nav>
                    </motion.div>
                }
            </AnimatePresence>
        </div >
    )
}

export default LeftMenu;