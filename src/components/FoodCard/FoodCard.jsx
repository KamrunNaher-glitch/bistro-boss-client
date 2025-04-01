import React from 'react';

const FoodCard = ({item}) => {
    const {name,image,recipe,price} = item;

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img src={image} alt="food" /></figure>
        <p className='bg-slate-900 text-white absolute right-0 mr-4 px-4 mt-4'>${price}</p>
        <div className="card-body flex flex-col items-center">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          
          <div className="card-actions justify-end">
            <button className="btn btn-outline bg-slate-300 border-0 border-b-4 border-orange-400 mt-4 ">Add to cart</button>
          </div>
        </div>
      </div>
    );
};

export default FoodCard;