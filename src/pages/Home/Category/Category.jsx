import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import slide1 from '../../../assets/home/slide1.jpg';
import slide2 from '../../../assets/home/slide2.jpg';
import slide3 from '../../../assets/home/slide3.jpg';
import slide4 from '../../../assets/home/slide4.jpg';
import slide5 from '../../../assets/home/slide5.jpg';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const Category = () => {
  return (
    <section className="px-4 md:px-8 lg:px-16">
      <SectionTitle
        subHeading="---From 11:00am to 10:00pm---"
        heading="ORDER ONLINE"
      />
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="mySwiper mb-24"
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
      >
        {[{ img: slide1, label: "Salads" },
          { img: slide2, label: "Soup" },
          { img: slide3, label: "Pizza" },
          { img: slide4, label: "Dessert" },
          { img: slide5, label: "Salads" }]
          .map((item, index) => (
            <SwiperSlide key={index}>
              <img src={item.img} alt={item.label} />
              <h3 className='text-lg md:text-2xl lg:text-4xl uppercase text-center -mt-8 md:-mt-12 lg:-mt-16 text-white'>
                {item.label}
              </h3>
            </SwiperSlide>
          ))}
      </Swiper>
    </section>
  );
};

export default Category;
