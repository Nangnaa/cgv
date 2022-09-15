const headerMemu = document.querySelector('header .badges');
const toTopEl = document.querySelector('.btn_gotoTop')
$(document).ready(function () {
  //메뉴 
  $(".nav").hover(function () {
    $(this).find(".nav_overMenu").stop().slideToggle(300)
  });

//메인프레임 사운드, 플레이
  let movieSelectionVideoObj = $('.video_wrap video')[0];
  $('.btn_movieSelection_soundOnOff').on({
    click: function () {
      if (movieSelectionVideoObj.muted) {
        movieSelectionVideoObj.muted = false;
        $(this).addClass('active');
      } else {
        movieSelectionVideoObj.muted = true;
        $(this).removeClass('active');
      }
    }
  });
  $('.btn_movieSelection_playStop').on({
    click: function () {
      if (movieSelectionVideoObj.paused) {
        movieSelectionVideoObj.play();
        $(this).addClass('active');
      } else {
        movieSelectionVideoObj.pause();
        $(this).removeClass('active');
      }
    }
  });

  //fixed 메뉴, top버튼
  $(this).on({
    scroll: function (e) {
      /* S GNB fixed */
      var headerOffsetT = $('.header').offset().top;
      var headerOuterH = $('.header').outerHeight(true);
      var fixedHeaderPosY = headerOffsetT + headerOuterH;
      var scrollT = $(this).scrollTop();
      var scrollL = $(this).scrollLeft();

      if (scrollT >= fixedHeaderPosY) {
        $('.nav').addClass('fixed');
        $('.fixedBtn_wrap').addClass('topBtn');
      } else {
        $('.nav').removeClass('fixed');
        $('.fixedBtn_wrap').removeClass('topBtn');
      }

      /* S > GNB fixed 좌우 스크롤
      Description
      - GNB가 fixed 되었을때 좌우 스크롤 되게 처리
      */
      if ($('.nav').hasClass('fixed')) {
        $('.nav').css({ 'left': -1 * scrollL })
      } else {
        $('.nav').css({ 'left': 0 })
      }
      /* E > GNB fixed 좌우 스크롤 */
      /* S GNB fixed */
    }
  });

  $('.btn_gotoTop').on({
    click: function () {
      $('html, body').stop().animate({
        scrollTop: '0'
      }, 400);
    }
  });

  // 무비 차트, 상영예정작
  $("#btnMovie").click(function () {
    $("#movieChart_list").show();
    $("#movieChart_list_Reser").hide();
  });

  $("#btnReserMovie").click(function () {
    $("#movieChart_list").hide();
    $("#movieChart_list_Reser").show();
  });

  $("#movieChart_list_Reser").hide();

  //event 멈추는 버튼
  let sw = 0;
  $('.btn_eventControl').click(function () {
    if (sw == 0) {
      $('.btn_eventControl').addClass('active');
      eventList.autoplay.stop();
      sw = 1;
    } else {
      $('.btn_eventControl').removeClass('active');
      eventList.autoplay.start();
      sw = 0;
    }
  })



  //특별관 마우스들어갈때 이미지 변경
  $('.specialHall_list a').on({
    mouseenter:function(e){
        var target = e.target;
        var idx = $(target).closest('li').index();

        var arrimgUrl = ["https://img.cgv.co.kr//Front/Main/2021/1209/16390080561620.png","https://img.cgv.co.kr//Front/Main/2022/0616/16553622935690.png","https://img.cgv.co.kr//Front/Main/2021/1130/16382612660240.png","https://img.cgv.co.kr//Front/Main/2021/1130/16382612660560.png"];

        $(target).closest('li').addClass('active').siblings('li').removeClass('active');
        $('.specialHall_link img').attr('src', arrimgUrl[idx]);
    }
});


  new Swiper('#movieChart_list', {
    spaceBetween: 30, // 슬라이드 사이 여백
    slidesPerView: 5, // 한 번에 보여줄 슬라이드 개수
    slidesPerGroup: 5, // 한 번에 슬라이드 할 개수(전체 개수로 나뉘어야 함)
    navigation: {
      prevEl: '.swiper-button-prev',
      nextEl: '.swiper-button-next'
    }
  })
  new Swiper('#movieChart_list_Reser', {
    spaceBetween: 30,
    slidesPerView: 5,
    slidesPerGroup: 5,
    navigation: {
      prevEl: '.swiper-button-prev',
      nextEl: '.swiper-button-next'
    }
  })
  

 

  const eventList = new Swiper('.event_list ', {
    spaceBetween: 30,
    slidesPerView: 3,
    autoplay: {
      delay: 2500,
    },
    navigation: {
      prevEl: '.swiper-button-prev',
      nextEl: '.swiper-button-next'
    }
  })



  const noticeList = new Swiper('.noticeClient_banner_list ', {
    loop: true,
    slidesPerView: 1, // 한 번에 보여줄 슬라이드 개수
    autoplay: {
      delay: 2500,
      // disableOnInteraction: false,
    },

  })

});