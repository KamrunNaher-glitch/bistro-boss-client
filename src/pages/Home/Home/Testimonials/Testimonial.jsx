import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../../components/SectionTitle/SectionTitle';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';



const Testimonial = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/reviews')
      .then(res => res.json())
      .then(data => setReviews(data))
  }, [])


  return (
    <section className='my-20 px-4 md:px-12 lg:px-24 '>
      <SectionTitle subHeading="---What Our Clients Say---" heading="TESTIMONIALS"
      ></SectionTitle>

      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

        {
          reviews.map(review => <SwiperSlide key={review._id}
          >
            <div className='flex flex-col items-center text-center px-2 md:px-8 lg:px-16 py-8'>
              <Rating
                style={{ maxWidth: 180 }}
                value={review.rating}
                readOnly
              />

              <p className='py-6 text-sm md:text-base text-gray-700'>{review.details}</p>
              <h3 className="text-xl md:text-2xl text-orange-500 font-semibold">{review.name}</h3>
            </div>
          </SwiperSlide>)
        }

      </Swiper>




    </section>
  );
};

export default Testimonial;

