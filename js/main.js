$(function(){

      
  //맨위로버튼이 스크롤 내리면 나타남
  $(window).scroll(function(){

    curr = $(this).scrollTop();

    if(curr > 100){
      $('.fixed_icon').addClass('show');
    }else{
      $('.fixed_icon').removeClass('show');
    }

  })

  //top 버튼 클릭하면 맨 위로 올라감
  $('.fixed_icon').click(function(e){
    e.preventDefault();
    $('html, body').stop().animate({scrollTop:0},500);
  })




//sc_01 탭메뉴 만들기
$('.main_btn').click(function(e){
  e.preventDefault();

  target = $(this).children('.main_btn_link').attr('href');

  $('.main_btn').removeClass('on');
  $(this).addClass('on');

  $('.main_banner').removeClass('on');
  $(target).addClass('on');


  if($(this).siblings('.main_banner').hasClass('issue_bnr')){
    newsSlider02.autoplay.stop();

      if($(this).siblings('.main_banner').find('.s_play').hasClass('pause')){
        newsSlider01.autoplay.stop();
      }else{
        newsSlider01.autoplay.start();
      }

  }else{
    newsSlider01.autoplay.stop();

    if($(this).siblings('.main_banner').find('.s_play').hasClass('pause')){
      newsSlider02.autoplay.stop();
    }else{
      newsSlider02.autoplay.start();
    }

  }
});


//sc_01 issue_bnr
    var newsSlider01 = new Swiper('.issue_bnr', {
      loop: true,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: '.sc_01 .s_next',
        prevEl: '.sc_01 .s_prev',
      },
      pagination: {
        el: '.sc_01 .swiper-pagination',
        type: 'fraction',
      },
    });

//sc_01 issue_bnr 정지, 재생
  $('.issue_bnr .s_play').click(function(e){
    e.preventDefault();

    if($(this).hasClass('pause')){
      $(this).removeClass('pause');
      newsSlider01.autoplay.start();
    }else{
      $(this).addClass('pause');
      newsSlider01.autoplay.stop();
    };
  });


//sc_01 issue_bnr
var newsSlider02 = new Swiper('.part_bnr', {
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: '.sc_01 .s_next',
    prevEl: '.sc_01 .s_prev',
  },
  pagination: {
    el: '.sc_01 .swiper-pagination',
    type: 'fraction',
  },
});
newsSlider02.autoplay.stop();

//sc_01 issue_bnr 정지, 재생
$('.part_bnr .s_play').click(function(e){
e.preventDefault();

if($(this).hasClass('pause')){
  $(this).removeClass('pause');
  newsSlider02.autoplay.start();
}else{
  $(this).addClass('pause');
  newsSlider02.autoplay.stop();
};
});


  //sc_09
  var popupSlide = new Swiper('.popup_slide_bnr', {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.sc_09 .s_next',
      prevEl: '.sc_09 .s_prev',
    },
    pagination: {
      el: '.sc_09 .swiper-pagination',
      type: 'fraction',
    },
  });
  
  //sc_01 정지, 재생
  $('.popup_controls .s_play').click(function(e){
    e.preventDefault();

    if($(this).hasClass('pause')){
      $(this).removeClass('pause');
      popupSlide.autoplay.start();
    }else{
      $(this).addClass('pause');
      popupSlide.autoplay.stop();
    };
  });



  //sc_10 서브메뉴
  $('.link_menu a').click(function(e){
    e.preventDefault();
    
    h = $(this).siblings('.sub_box').children('.sub').outerHeight();

    if($(this).siblings('.sub_box').height() > 0){
      $('.link_menu a').removeClass('up');
      $('.sub_box').stop().animate({height:0},200);
    }else{
      $('.sub_box').stop().animate({height:0},200);
      $(this).siblings('.sub_box').stop().animate({height:h},200);
      $('.link_menu a').removeClass('up');
      $(this).addClass('up');
    }



    $('.sub li:last-child a').keydown(function(e){
      var v_keyCode = event.keyCode || event.which;
      if(v_keyCode == 9){
          if(!event.shiftKey){
            $('.sub_box').stop().animate({height:0},200);
          }
      }
    })
    $('.sub li:first-child a').keydown(function(e){
      var v_keyCode = event.keyCode || event.which;
      if(v_keyCode == 9){
          if(event.shiftKey){
            $(this).siblings('.sub_box').stop().animate({height:h},200);
          }
      }
  })

  })
})