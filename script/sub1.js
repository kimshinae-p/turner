$(function () {
    var swiper = new Swiper('.gallery-center_inner ', {
        slidesPerView: 1,//보여지는 갤러리 수
        spaceBetween: 40,//갤러리 사이 간격
        centeredSlides: true,//센터모드
        speed: 1500,//버튼을 슬라이드가 넘어가는 시간
        autoplay: {
            delay: 2500,//자동으로 넘어가기 전 머무르는 시간
            disableOnInteraction: false,
        },
        loop: true,//슬라이드 무한반복
        navigation: {//화살표 버튼
            nextEl: '.gallery-center .swiper-button-next',
            prevEl: '.gallery-center .swiper-button-prev',
        },
        pagination: {//블릿 버튼
            el: '.gallery-center .swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            // 화면의 넓이가 500px 이상일 때
  500: {
    slidesPerView: 1.5,
    spaceBetween: 65
  },
  // 화면의 넓이가 712px 이상일 때
  712: {
    slidesPerView: 2,
    spaceBetween: 65
  },
   // 화면의 넓이가 928px 이상일 때
   928: {
    slidesPerView: 2.5,
    spaceBetween: 65
  },
  // 화면의 넓이가 1238px 이상일 때
  1238: {
    slidesPerView: 3,
    spaceBetween: 65
  },
  // 화면의 넓이가 1320px 이상일 때
  1320: {
    slidesPerView: 3.5,
    spaceBetween: 30
  }
},
    });


    var swiper = new Swiper('.flowslide_inner ', {
        slidesPerView: 2,//보여지는 갤러리 수
        spaceBetween: 60,//갤러리 사이 간격
        speed: 3000,//버튼을 슬라이드가 넘어가는 시간
        autoplay: {
            delay: 0,//자동으로 넘어가기 전 머무르는 시간
            disableOnInteraction: false,
        },
        loop: true,//슬라이드 무한반복
        breakpoints: {
  // 화면의 넓이가 520px 이상일 때
  497: {
    slidesPerView: 3,
    spaceBetween: 40
  },
  // 화면의 넓이가 520px 이상일 때
  671: {
    slidesPerView: 3.5,
    spaceBetween: 40
  },
  // 화면의 넓이가 520px 이상일 때
  790: {
    slidesPerView: 4,
    spaceBetween: 40
  },
  // 화면의 넓이가 520px 이상일 때
  952: {
    slidesPerView: 4.5,
    spaceBetween: 30
  },
  // 화면의 넓이가 520px 이상일 때
  1094: {
    slidesPerView: 5.5,
    spaceBetween: 30
  },
  // 화면의 넓이가 1320px 이상일 때
  1320: {
    slidesPerView: 6,
    spaceBetween: 30
  }
},
    });

    $('.flowslide .swiper-slide').on('mouseover', function () {
        swiper.autoplay.stop();
    });
    $('.flowslide .swiper-slide').on('mouseout', function () {
        swiper.autoplay.start();
    });
    AOS.init({
        duration: 1200 //aos 나타나는 속도
    });
});