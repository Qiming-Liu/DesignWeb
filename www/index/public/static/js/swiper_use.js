// 首页swiper
var isMobile = ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) );
var swiper;
if(isMobile){
    swiper = new Swiper('.full_screen_size_img4mobile .swiper-container', {
        autoplay:{
            delay:3000,
            stopOnLastSlide: false,
            disableOnInteraction: true
        },
        speed: 1000,
        autoplayDisableOnInteraction: false,
        loop: true,
        centeredSlides: true,
        breakpoints: {
            668: {
                slidesPerView: 1
            }
        }
    });
}else{
    var $page_main_body = $('#page_main_body');
    var $index_pc_bt = $page_main_body.find('.index_pc_bt');
    swiper = new Swiper('.page_big_image_container .swiper-container', {
        autoplay:{
            delay:3000,
            stopOnLastSlide: false,
            disableOnInteraction: true
        },
        speed: 1000,
        autoplayDisableOnInteraction: false,
        loop: true,
        centeredSlides: true,
        slidesPerView: 1.25,
        on:{
            init:function(){
                var width = parseInt($page_main_body.width());
                if($index_pc_bt.size() > 0){
                    $index_pc_bt.css('width',(width - this.slidesSizesGrid['0'])/2+'px');
                }
            }
        },
        onInit: function (swiper) {
            swiper.slides[2].className = "swiper-slide swiper-slide-active";//第一次打开不要动画

        },
        breakpoints: {
            668: {
                slidesPerView: 1
            }
        },
        lazy: {
            loadPrevNext: true,
        }
    });

    $index_pc_bt.eq(0).on('click',function(){
        swiper.slidePrev();
    });
    $index_pc_bt.eq(1).on('click',function(){
        swiper.slideNext();
    });

    swiper2 = new Swiper('.index_news_container .swiper-container',{
        autoplay:{
            delay:5000,
            stopOnLastSlide: false,
            disableOnInteraction: true
        },
        speed: 1000,
        autoplayDisableOnInteraction: false,
        loop: true,
        centeredSlides: true,
        breakpoints: {
            668: {
                slidesPerView: 1
            }
        }
    });

    $('#prev-hl-hl').on('click',function () {
        swiper2.slidePrev();
    });
    $('#next-hl-hl').on('click',function () {
        swiper2.slideNext();
    });
}

