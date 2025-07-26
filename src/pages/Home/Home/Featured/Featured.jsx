import './Featured.css';
import featuredImg from '../../../../assets/home/featured.jpg';
import SectionTitle from '../../../../components/SectionTitle/SectionTitle';

const Featured = () => {
    return (
        <div>
            <SectionTitle subHeading="Check It Out" heading="Featured Item" />
            <div className="featured-item bg-fixed text-white pt-8 my-20">
                <div className="flex flex-col md:flex-row justify-center items-center bg-slate-500 bg-opacity-60 px-4 md:px-10 lg:px-36 py-10 md:py-20 space-y-6 md:space-y-0 md:space-x-10">
                    <div className="w-full md:w-1/2">
                        <img src={featuredImg} alt="Featured" className="w-full h-auto rounded" />
                    </div>
                    <div className="w-full md:w-1/2 text-center md:text-left">
                        <p className="text-sm md:text-base">Aug 20, 2029</p>
                        <p className="uppercase text-lg md:text-xl font-semibold my-2">Where can I get some?</p>
                        <p className="text-sm md:text-base">
                            Look no further! Our "Featured Items" are available now, only at Bistro Boss.
                            These are the dishes our chefs are most proud of, made with dedication and the finest ingredients.
                            Whether you're dining in, ordering takeout, or planning a special event,
                            your next delicious craving can be satisfied with just a click or a visit.
                            Come experience the best of Bistro Boss today!
                        </p>
                        <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;
