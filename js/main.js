$(document).ready(function () {
  $(".nav").hover(function () {
    $(this).find(".nav_overMenu").stop().slideToggle(300)
  });

  $('.specialHall_list li').hover(function(){
    $(this).addClass('active')
    $(this).removeClass('active')
  })
 
});
console.log('hello');

new Swiper('#movieChart_list', {
  spaceBetween: 30, // 슬라이드 사이 여백
  slidesPerView: 5, // 한 번에 보여줄 슬라이드 개수
  slidesPerGroup: 5, // 한 번에 슬라이드 할 개수(전체 개수로 나뉘어야 함)
  navigation: {
    prevEl: '.swiper-button-prev',
    nextEl: '.swiper-button-next'
  }
})

const eventList = new Swiper('.event_list ', {
  spaceBetween: 30, // 슬라이드 사이 여백
  slidesPerView: 3, // 한 번에 보여줄 슬라이드 개수
  autoplay: {
    delay: 2500,
    // disableOnInteraction: false,
  },
  navigation: {
    prevEl: '.swiper-button-prev',
    nextEl: '.swiper-button-next'
  }
})

let sw = 0;
$('.btn_eventControl').click(function(){
  if(sw == 0){
    $('.btn_eventControl').addClass('active');
    eventList.autoplay.stop();
    sw=1;
  }else {
    $('.btn_eventControl').removeClass('active');
    eventList.autoplay.start();
    sw=0;
  }
})

