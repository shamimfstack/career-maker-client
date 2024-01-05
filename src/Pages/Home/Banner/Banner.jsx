// import { Swiper, SwiperSlide } from "swiper/react";
import "./Banner.css";
// import BannerTemplate from "./BannerTemplate/BannerTemplate";
// import plumberImg from "../../../../public/images/plumbing.jpg";
// import electricalImg from "../../../../public/images/electrical.jpg";
// import carpentryImg from "../../../../public/images/carpentry.jpg";
// import paintingImg from "../../../../public/images/painting.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Banner = () => {
  const style = {
    // backgroundImage: "url(https://i.ibb.co/MCmq9PS/banner-img.jpg)",
  };
  return (
    <div className="md:h-screen flex flex-col-reverse md:flex-row justify-between py-8 items-center bg-gradient-to-r from-[#07607c] to-[#41caf4]" style={style}>
      <div className="space-y-2 mx-auto">
        <h2 className="text-3xl md:text-4xl text-white font-bold text-center">Make Your Career as Your Passion</h2>
        <p className="text-xl font-semibold text-white text-center">Here are a lot of opportunities to choice as your career </p>
        <div className="flex justify-center">
        <button className="bg-green-400 text-white font-bold px-2 md:px-4 lg:px-5 py-2 md:py-3 rounded-xl">
          Let's Explore
        </button>
        </div>
      </div>
      <div className="mx-auto">
        <img className="w-2/3 mx-auto" src="https://i.ibb.co/L1Ykv2S/storyset-removebg-preview.png" alt="" />
      </div>
    </div>
  );
};

export default Banner;
