
import MenuItem from '../../../../Routes/Shared/Footer/MenuItem/MenuItem';
import Cover from '../../../../Routes/Shared/Cover/Cover';
import { Link } from 'react-router-dom';

const MenuCategory = ({items,title,img}) => {
    return (
        <div className='pt-8'>
            {title && <Cover img={img} title={title}></Cover>}
            <div className='grid md:grid-cols-2 gap-10 my-16 '>
                {
                    items.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div> 

           <div className='text-center'>
            <Link to={`/order/${title}`}>
           <button className="btn btn-outline border-0 border-b-4 mt-4 ">Order Now</button>
           </Link>
           </div>
        </div>
    );
};

export default MenuCategory;
