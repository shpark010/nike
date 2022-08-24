$(function () {
    // 창의 width 변수
    let winWidth;

    // $(window).resize() : 창의 크기가 변경되면 실행하는 메소드
    $(window).resize(function () {
        winWidth = $(this).width();
        if(winWidth <= 1024 ) {
            $('.main-menu').off('mouseenter');
            $('.main-menu').off('mouseleave');
            $('nav').prependTo('.h-top');
            $('.jordan-logo').find('img').attr('src','images/AIR-JORDAN-LOGO-b.svg');
        }else {
            $('nav').appendTo('header');
            $('.main-menu').on({
                // 마우스 진입 메소드
                mouseenter:function () {
                    $('.sub-menu, .sub-bg').stop().show();
                },
                // 마우스 탈출 메소드
                mouseleave:function () {
                    $('.sub-menu, .sub-bg').stop().hide();
                }
            });
        }
    }); //resize이벤트 종료

    // 강제 이벤트 발생 메서드
    // 새창 오픈시에는 resize가 실행되지 않기 때문에 resize이벤트를 강제로 실행
    $(window).trigger('resize');
    
    // 햄버거 메뉴
    $('.menu-btn').click(function(event) {
        // 부모까지 이벤트 전달 막기
        event.stopPropagation();
        $('.index-wrap').css('filter','blur(10px)');
        // body와 html의 높이를 제한해 밖으로 못 벗어나게 함
        $('body, html').css({
            height:'100vh',
            overflow:'hidden'
        });
        $('.menu-area').show();
        $('.h-top').animate({
            right:'0%'
        },'fast');
        
    }); //테블릿, 모바일에서 사용하는 메뉴 종료

    // 하위메뉴 보이게(부모에게 click이벤트 전달 막기)
    $('.main-menu>li>a').click(function(event) {
        // (부모에게 click이벤트 전달 막기)
        event.stopPropagation();
        $(this).siblings('.sub-menu').animate({
            left:'0%'
        },'fast');
    });

    // 상위메뉴로 돌아가기(부모에게 click이벤트 전달 막기)
    $('.all>a').click(function(event) {
        // (부모에게 click이벤트 전달 막기)
        event.stopPropagation();
        $(this).parents('.sub-menu').animate({
            left:'150%'
        },'fast');
    });
    $('.menu-area').click(function() {
        $('.index-wrap').css('filter','blur(0px)');
        $('body, html').css({
            height:'auto',
            overflow:'visible'
        });
        $('.h-top').animate({
            right:'-100%'
        },'fast', function() {
            $('.menu-area').hide();
        });
    });

    // 모바일 버전 이미지 변경
    if(winWidth<=480) {
        $('.main-01 img').attr('src','images/M-01-mobile.png');
        $('.main-02 img').attr('src','images/M-02-mobile.png');
        $('.main-03 img').attr('src','images/M-03-mobile.png');
    }else {
        $('.main-01 img').attr('src','images/M-01.png');
        $('.main-02 img').attr('src','images/M-02.png');
        $('.main-03 img').attr('src','images/M-03.png');
    }

    // swiper 플러그인
    let swiperSlide = new Swiper('.Featured-slide', {

        // 모바일 기준(기본값이 모바일)
        // slidesPerView : 한 화면에 들어오는 슬라이드 갯수(auto는 css상에서 지정한 %비율만큼)
        slidesPerView:'auto',
        // 슬라이드 사이 간격
        spaceBetween:8,
        pagination:{
            // '현재 슬라이드 index/슬라이드 총수' 표기
            el:'.f-pager',
            // 클릭 가능하게
            clickable:true,
            // 버튼을 눌러 좌우로 이동
            type:'fraction'  
            // bullets : 동그라미로 표기(좌우버튼 필요 없음)
        },
        // fraction을 사용하면 navigation은 필수
        navigation: {
            prevEl:'.f-prev',
            nextEl:'.f-next'
        },
        // 반응형(화면 넓이에 따라 레이아웃 변경)
        // 기준을 잡아 그 기준에 맞게 화면에 들어올 슬라이드 갯수 설정
        breakpoints:{
            1025: {
                slidesPerView:3,
                spaceBetween:24
            },
            480: {
                slidesPerView:'auto',
                spaceBetween:16
            }
        }
    });
});