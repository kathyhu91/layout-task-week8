console.log("swip");
// import Swiper bundle with all modules installed
import Swiper from "swiper/bundle";
import { Scrollbar } from "swiper/modules";

// import styles bundle
import "swiper/css/bundle";
// init Swiper:
const swiperScroll = new Swiper("#swiperScroll", {
  loop: false,
  direction: "vertical",
  slidesPerView: "auto",
  noSwiping: true,
  breakpoints: {
    992: {
      direction: "horizontal",
      noSwiping: false,
      slidesPerView: 3,
      spaceBetween: 24,
      
    },
  },
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
  },
  mousewheel: true,
});

const swiperNavigation = new Swiper("#swiperNavigation", {
  slidesPerView: 1,
  autoplay: 
    {
      enabled: true,
      delay: 1000,
    },
  breakpoints: {
    768: {
      autoplay: { enabled: false }
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
