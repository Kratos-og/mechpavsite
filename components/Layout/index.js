import Header from "./Header";
import LeftMenu from "./LeftMenu";

const Layout = props => {
    return (
        <div>
            <Header />
            <LeftMenu />
            {props.children}
        </div>
    )
}

export default Layout;