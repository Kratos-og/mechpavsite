import { useState } from "react";
import Header from "./Header";
import LeftMenu from "./LeftMenu";
import { motion } from "framer-motion";
const Layout = props => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        if(!showMenu){
            document.getElementById('cont').style.overflowY = 'hidden';
        }
        else{
            document.getElementById('cont').style.overflowY = 'auto';
        }
        setShowMenu(!showMenu)
    }
    return (
        <div>
            <Header toggleMenu={toggleMenu} />
            <LeftMenu show={showMenu} toggleMenu={toggleMenu} />
            <motion.div animate={{ scale: showMenu ? 0.85 : 1, transition: { duration: 0.4 } }} className="overflow-x-hidden">
                {props.children}
            </motion.div>
        </div>
    )
}

export default Layout;