import { useState } from "react";
import Header from "./Header";
import LeftMenu from "./LeftMenu";
import { motion } from "framer-motion";
import useMenuAnimation from "./LeftMenu/useMenu";
import Footer from "./Footer";
import MetaTags from "./MetaTags";

const Layout = props => {
    const [showMenu, setShowMenu] = useState(false);
    const scope = useMenuAnimation(showMenu);

    const toggleMenu = () => {
        if (!showMenu) {
            document.getElementById('cont').style.overflowY = 'hidden';
        }
        else {
            document.getElementById('cont').style.overflowY = 'auto';
        }
        setShowMenu(!showMenu)
    }
    return (
        <div ref={scope}>
            <MetaTags />
            <Header toggleMenu={toggleMenu} />
            <LeftMenu show={showMenu} toggleMenu={toggleMenu} />
            <motion.div animate={{ scale: showMenu ? 0.85 : 1, transition: { duration: 0.4 } }} className="overflow-x-hidden">
                {props.children}
            </motion.div>
            {props.component !== 'Home' && props.component !== 'Lore' && props.component !== 'Minting' && props.component!=="Builder" && props.component!== "Loadouts" && <Footer />}
        </div>
    )
}

export default Layout;