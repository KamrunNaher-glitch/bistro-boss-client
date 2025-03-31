import React from 'react';
import MenuItem from '../../../../Routes/Shared/Footer/MenuItem/MenuItem';
import Cover from '../../../../Routes/Shared/Cover/Cover';

const MenuCategory = ({items,title,img}) => {
    return (
        <div className='pt-8'>
            {title && <Cover img={img} title={title}></Cover>}
            <div className='grid md:grid-cols-2 gap-10 my-16 '>
                {
                    items.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div> 
        </div>
    );
};

export default MenuCategory;
