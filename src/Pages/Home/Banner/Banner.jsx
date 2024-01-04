import { Swiper, SwiperSlide } from "swiper/react";
import "./Banner.css";
// import BannerTemplate from "./BannerTemplate/BannerTemplate";
// import plumberImg from "../../../../public/images/plumbing.jpg";
// import electricalImg from "../../../../public/images/electrical.jpg";
// import carpentryImg from "../../../../public/images/carpentry.jpg";
// import paintingImg from "../../../../public/images/painting.jpg";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const Banner = () => {
  const style = {
    backgroundImage: "https://i.ibb.co/MCmq9PS/banner-img.jpg"
  };
  return (
    // <Swiper
    //   spaceBetween={50}
    //   slidesPerView={3}
    //   onSlideChange={() => console.log('slide change')}
    //   onSwiper={(swiper) => console.log(swiper)}
    // >
    //   <SwiperSlide>
    //     <BannerTemplate image={plumberImg} title="Plumber"></BannerTemplate>
    //   </SwiperSlide>
    //   <SwiperSlide>
    //     <BannerTemplate image={electricalImg} title={"Electrical"}></BannerTemplate>
    //   </SwiperSlide>
    //   <SwiperSlide>
    //     <BannerTemplate image={carpentryImg} title={"Carpenter"}></BannerTemplate>
    //   </SwiperSlide>
    //   <SwiperSlide>
    //     <BannerTemplate image={paintingImg} title={"Painting"}></BannerTemplate>
    //   </SwiperSlide>

    // </Swiper>
    <div className="h-screen flex justify-center items-center" style={style}>
      <Swiper
        spaceBetween={30}
        effect={'fade'}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        // modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
