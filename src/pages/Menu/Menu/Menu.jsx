import { Helmet, } from 'react-helmet-async';
import Cover from '../../../Routes/Shared/Cover/Cover';
import menuImg from '../../../assets/menu/banner3.jpg'


const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss || Menu</title>
            </Helmet>
            <Cover img={menuImg} title="Our Menu"  details="Would you like to try a dish?"></Cover>
            
        </div>
    );
};

export default Menu;
