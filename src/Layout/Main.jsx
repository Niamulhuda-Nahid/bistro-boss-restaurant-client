import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const Main = () => {
    const location = useLocation();
    const noHeaderFooter = location.pathname.includes('login');
    const noHeaderFooterRegister = location.pathname.includes('register');
    
    return (
        <div>
            {/* navbar */}
            {noHeaderFooter || noHeaderFooterRegister || <Navbar></Navbar>}

            {/* outlet */}
            <div className={`min-h-[319px]`}>
                <Outlet></Outlet>
            </div>

            {/* footer */}
           {noHeaderFooter || noHeaderFooterRegister || <Footer></Footer>}
        </div>
    );
};

export default Main;