$(function () {
    var swiper = new Swiper('.flowslide_inner ', {
      slidesPerView: 3,//보여지는 갤러리 수
      spaceBetween: 0,//갤러리 사이 간격
      speed: 3000,//버튼을 슬라이드가 넘어가는 시간
      autoplay: {
        delay: 0,//자동으로 넘어가기 전 머무르는 시간
        disableOnInteraction: false,
      },
      loop: true,//슬라이드 무한반복

      breakpoints: {
        // 화면의 넓이가 520px 이상일 때
        520: {
          slidesPerView: 4,
          spaceBetween: 0
        },
        // 화면의 넓이가 1320px 이상일 때
        1320: {
          slidesPerView: 5,
          spaceBetween: 0
        }
      },
    });

    $('.flowslide .swiper-slide').on('mouseover', function () {
      swiper.autoplay.stop();
    });
    $('.flowslide .swiper-slide').on('mouseout', function () {
      swiper.autoplay.start();
    });


    var swiper2 = new Swiper('.gallery-center_inner ', {
      slidesPerView: 1,//보여지는 갤러리 수
      spaceBetween: 30,//갤러리 사이 간격
      centeredSlides: true,//센터모드
      speed: 1500,//버튼을 슬라이드가 넘어가는 시간
      autoplay: {
        delay: 1000,//자동으로 넘어가기 전 머무르는 시간
        disableOnInteraction: false,
      },
      loop: true,//슬라이드 무한반복
      breakpoints: {
        // 화면의 넓이가 425px 이상일 때
        425: {
          slidesPerView: 2,
          spaceBetween: 65
        },
        // 화면의 넓이가 520px 이상일 때
        520: {
          slidesPerView: 4,
          spaceBetween: 65
        },
        // 화면의 넓이가 1320px 이상일 때
        1320: {
          slidesPerView: 5,
          spaceBetween: 80
        }
      },
    });

    AOS.init({
      duration: 1200 //aos 나타나는 속도
    });

  });