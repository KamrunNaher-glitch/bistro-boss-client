const MenuItem = ({ item }) => {
    const { name, image, recipe, price } = item;

    return (
        <div className="flex gap-4">
            {/* Image */}
            <img
                style={{ borderRadius: '0 200px 200px 200px' }}
                className="w-[100px] h-[80px] object-cover"
                src={image}
                alt={name}
            />

            {/* Text & Price Container */}
            <div className="flex-1">
                {/* Name and Price on same line */}
                <div className="flex justify-between items-center">
                    <h3 className="uppercase font-semibold">{name}------</h3>
                    <p className="text-yellow-500 font-semibold">${price}</p>
                </div>

                {/* Recipe text */}
                <p className="text-sm text-gray-600">{recipe}</p>
            </div>
        </div>
    );
};

export default MenuItem;
