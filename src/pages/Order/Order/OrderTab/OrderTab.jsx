import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules'; 

import FoodCard from '../../../../components/FoodCard/FoodCard';

const OrderTab = ({ items }) => {
    const paginationConfig = {
        clickable: true,
        renderBullet: function (index, className) {
            return `<span class="${className}">${index + 1}</span>`;
        },
    };

    return (
        <div>
            <Swiper
                pagination={paginationConfig}
                modules={[Pagination]} 
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='grid md:grid-cols-3 gap-10'>
                        {items.map(item => (
                            <FoodCard key={item._id} item={item} />
                        ))}
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default OrderTab;

