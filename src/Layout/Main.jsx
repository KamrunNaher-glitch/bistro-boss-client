import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Routes/Shared/Footer/Footer";
import Navbar from "../Routes/Shared/Footer/Navbar/Navbar";


const Main = () => {
    const location = useLocation();
    console.log(location);
    const noHeaderFooter = location.pathname.includes("Login") || location.pathname.includes('SignUp')
    return (
        <div>
            {noHeaderFooter || <Navbar></Navbar>}
            <Outlet></Outlet>
            {noHeaderFooter ||<Footer></Footer>}
        </div>
    );
};

export default Main;