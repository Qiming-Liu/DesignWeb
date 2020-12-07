var $window = $(window);
var $body = $('html,body');
var isMobile = ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) );
var skr = null;
//页面滚动
var aniview_option = {
    animateThreshold: 100,
    scrollPollInterval: 50
};
var $aniview_obj = $('.aniview');
$aniview_obj.AniView(aniview_option);
//-->头部导航
var $page_header_container = $('#page_header_container');
var $detail_main_content_container = $('#case_detail_container .detail_main_content_container');
var $page_index_highlights_container = $('#page_main_body .page_index_highlights_container');
var $introduce_container = $('#superstar_detail_container .introduce_container');
// 移动头
var $page_header4mobile = $('#mobile_page_header_container');
var $index_h_scroll = $('._mobile .sign_to_show');
if($page_header_container.hasClass('_can_be_scroll')){
    $window.on('scroll',function(){
        if($window.scrollTop() > 100){
            $page_header_container.addClass('__hide');
            if(isMobile){
                $page_header4mobile.addClass('__hide');
            }
        }else{
            $page_header_container.removeClass('__hide');
            if(isMobile){
                $page_header4mobile.removeClass('__hide');
            }
        }
    });
    //滚动一段距离就出现
    if($detail_main_content_container.length == 1){
        $detail_main_content_container.waypoint(function(direction){
            if(direction == 'down'){
                $page_header_container.addClass('__show').removeClass('_with_opacity_bg');
            }else{
                //
                $page_header_container.removeClass('__show __hide').addClass('_with_opacity_bg');
            }
        });
    }
    if($page_index_highlights_container.length == 1){
        $page_index_highlights_container.waypoint(function(direction){
            if(direction == 'down'){
                $page_header_container.addClass('__show').removeClass('_with_opacity_bg');
            }else{
                //
                $page_header_container.removeClass('__show __hide').addClass('_with_opacity_bg');
            }
        });
    }
    if($introduce_container.length == 1){
        $introduce_container.waypoint(function(direction){
            if(direction == 'down'){
                $page_header_container.addClass('__show').removeClass('_with_opacity_bg');
            }else{
                //
                $page_header_container.removeClass('__show __hide').addClass('_with_opacity_bg');
            }
        });
    }
    if(isMobile){
        if($index_h_scroll.length == 1){
            $index_h_scroll.waypoint(function(direction){
                if(direction == 'down'){
                    $page_header4mobile.addClass('__show').removeClass('_with_opacity_bg');
                }else{
                    //
                    $page_header4mobile.removeClass('__show __hide').addClass('_with_opacity_bg');
                }
            });
        }
    }

}
//-->companynewsskrollr
if($window.width() <= 1023) {
    if( skr != null ) {
        skr.destroy();
    }
} else {
    if(!isMobile){
        skr = skrollr.init({
            smoothScrolling: false,
            forceHeight: false
        });
    }

}


//最流行周、月切换
var $title_obj = $('.popular_main_container .title p');
var $ranking_boroad = $('#ranking_boroad');
var move_width = parseInt($ranking_boroad.width());
var $ranking_wrap = $ranking_boroad.find('.ranking_wrap');
$title_obj.on('click',function(){
    var $this = $(this);
    var zindex = $this.index();
    $this.addClass('active').siblings('p').removeClass('active');
    if(zindex == 0){
        $ranking_wrap.css({
            'transform':'translateX(0)',
            '-webkit-transform':'translateX(0)'
        });
    }else{
        $ranking_wrap.css({
            'transform':'translateX(-50%)',
            '-webkit-transform':'translateX(-50%)'
        });
    }
});

var $content_slider = $('.page_index_highlights_container .content-slider');
$(function(){
    $content_slider.css('height',parseInt($('.page_index_highlights_container .item-slider').height()));
});
responsiveSlider();
//slider
function responsiveSlider() {
    $(".slider-bloc").each(function () {
        var a = $(this),
            b = this;
        if (1 != a.data("is_slider")) {
            a.data("is_slider", 1);
            var c = a.find(".nav-slider .item-nav"),
                d = $(a.find(".content-rel-slider")[0]),
                e = $(a.find(".content-abs-slider")[0]);
            a.find(".item-slider").each(function (a) {
                $(this).attr("data-inc", a + 1)
            }), a.find(".item-slider").clone().appendTo(e), a.find(".item-slider").clone().appendTo(e);
            var f = a.find(".item-slider"),
                g = a.hasClass("full-slider"),
                h = 0,
                i = function (a) {
                    e.css({
                        width: "100%"
                    }), g && f.css({
                        width: d.width()
                    }), e.css({
                        width: $(f[0]).width() * f.length
                    });
                    Math.ceil(d.width() / $(f[0]).width());
                    f.length * $(f[0]).width() < d.width() ? e.css({
                        left: 0
                    }) : 0 == a && e.css({
                        left: -$(f[0]).width()
                    })
                },
                j = function (b) {
                    var c = Math.ceil(d.width() / $(f[0]).width());
                    durationanim = 2 >= c ? 300 : 800;
                    var g = $(f[0]).width();
                    if (b + c - 1 >= f.length ? b = 0 : 0 > b && (b = f.length - c), f[b]) {
                        if (f.length * g < d.width()) return;
                        if (a.hasClass("moving")) return;
                        a.addClass("moving"), a.find(".item-slider").removeClass("current"), $(a.find(".item-slider")[1]).addClass("current");
                        var i = "next",
                            j = 1,
                            k = e.position().left,
                            l = -g * c - g;
                        if (1 > b) {
                            i = "prev";
                            for (var m = 0; c > m; m++) $(a.find(".item-slider")[f.length - 1]).prependTo(e);
                            k -= g * c, l = -g
                        } else j += c;
                        f = a.find(".item-slider"), h = 1;
                        var o = e.find(".item-slider.current").index();
                        if (!isMobile && c > 1) {
                            "next" == i ? (initforfirstslide = o, lastforfirstslide = o + c - 1, initforsecondslide = o + c, lastforsecondslide = o + 2 * c - 1) : (initforfirstslide = o - c, lastforfirstslide = o - 1, initforsecondslide = o, lastforsecondslide = o + c - 1);
                            for (var m = initforfirstslide; m <= lastforfirstslide; m++) {
                                var p = durationanim / 2,
                                    q = durationanim / 2;
                                "next" == i ? movexfirstslide = -$(f[m]).width() * (c - (m - o + 1)) / 4 : movexfirstslide = $(f[m]).width() * (m - o + 1) / 4;
                                var r = new TimelineLite({
                                    paused: !0
                                });
                                r.fromTo($(f[m]), p / 1e3, {
                                    x: 0,
                                    force3D: !0,
                                    ease: Cubic.easeInOut
                                }, {
                                    x: movexfirstslide,
                                    force3D: !0,
                                    ease: Cubic.easeInOut
                                }), r.to($(f[m]), q / 1e3, {
                                    x: 0,
                                    force3D: !0,
                                    ease: Cubic.easeInOut
                                }), r.play()
                            }
                            for (var m = initforsecondslide; m <= lastforsecondslide; m++) {
                                var p = durationanim / 2,
                                    q = durationanim / 2;
                                "next" == i ? movexsecondslide = $(f[m]).width() * (m - o - c + 1) / 4 : movexsecondslide = $(f[m]).width() * (m - o + 1) / 4;
                                var r = new TimelineLite({
                                    paused: !0
                                });
                                r.fromTo($(f[m]), p / 1e3, {
                                    x: 0,
                                    force3D: !0,
                                    ease: Cubic.easeInOut
                                }, {
                                    x: movexsecondslide,
                                    force3D: !0,
                                    ease: Cubic.easeInOut
                                }), r.to($(f[m]), q / 1e3, {
                                    x: 0,
                                    force3D: !0,
                                    ease: Cubic.easeInOut
                                }), r.play()
                            }
                        }
                        if (TweenMax.fromTo(e, durationanim / 1e3, {
                                left: k,
                                force3D: !0,
                                ease: n
                            }, {
                                left: l,
                                force3D: !0,
                                ease: n,
                                onComplete: function () {
                                    if ("next" == i) {
                                        h--;
                                        for (var b = 0; c > b; b++) $(a.find(".item-slider")[0]).appendTo(e);
                                        e.css({
                                            left: -g
                                        })
                                    }
                                    f.removeClass("current"), $(f[1]).addClass("current"), f = a.find(".item-slider"), a.removeClass("moving")
                                }
                            }), a.find(".nav-bullet").length > 0) {
                            var s = a.find(".nav-bullet .bullet").length - 1,
                                t = $(a.find(".item-slider")[j]).attr("data-inc"),
                                u = t * s / (f.length / 4);.5 == u && (u = .4), currentbullet = Math.round(u), a.find(".nav-bullet .bullet").removeClass("current"), $(a.find(".nav-bullet .bullet")[currentbullet]).addClass("current")
                        }
                    }
                };
            c.each(function () {
                var a = $(this);
                a.on({
                    click: function () {
                        var b = a.hasClass("prev-button") ? 0 : 2;
                        return j(b), !1
                    }
                })
            }), _touchstart = !1, swipedirection = !1, _lastcoord = 0, coord = 0, initmoveposition = 0, touchmove = !1;
            var k = new Hammer(b),
                l = e.position().left,
                m = l,
                n = Cubic.easeInOut;
            k.on("panstart", function (b) {
                a.hasClass("moving") || (n = Strong.easeOut, l = e.position().left, m = l)
            }), k.on("panend", function (b) {
                a.hasClass("moving") || (2 == b.direction && j(1), 4 == b.direction && j(0), 1 == b.direction && TweenMax.to(e, .6, {
                    left: m,
                    force3D: !0,
                    ease: Strong.easeOut,
                    throwProps: !0
                }))
            }), k.on("panleft panright", function (b) {
                a.hasClass("moving") || (0 == l && (l = e.position().left), TweenMax.to(e, .6, {
                    left: l + b.deltaX,
                    force3D: !0,
                    ease: Strong.easeOut,
                    throwProps: !0
                }))
            }), $(window).on("resize", function () {
                i(!1)
            }), $(a.find(".item-slider")[f.length - 1]).appendTo(e), e.css({
                left: -$(f[0]).width() * (h + 1)
            }), f = a.find(".item-slider"), $(f[1]).addClass("current"), h++, i(!0)
        }
    })
}

//slider想上go
var $slider = $('._pc .item-slider');
if(!isMobile){
    $slider.each(function(index,ele){
        new Waypoint({
            element: $(ele),
            handler: function(direction) {
                if(!$(ele).find('.waypoint_ani').hasClass('animated')){
                    $(ele).find('.waypoint_ani').css({
                        'transition-delay':0.01*index+'s'
                    });
                    $(ele).find('.waypoint_ani').addClass('animated');
                }
            },
            offset: '85%'
        })
    })
}else{
    var $slider4mobile = $('._mobile .slider_go_up');
    $slider4mobile.each(function(index,ele){
        new Waypoint({
            element: $(ele),
            handler: function(direction) {
                if(!$(ele).find('.waypoint_ani').hasClass('animated')){
                    $(ele).find('.waypoint_ani').css({
                        'transition-delay':0.1*index+'s'
                    });
                    $(ele).find('.waypoint_ani').addClass('animated');
                }
            },
            offset: '85%'
        })
    })
}

// 从右往左出现
var $_from_right_to_left_effect = $('._from_right_to_left_effect');
if(!isMobile){
    $_from_right_to_left_effect.each(function(index,ele){
        new Waypoint({
            element: $(ele),
            handler: function(direction) {
                if(!$(ele).hasClass('animated')){
                    $(ele).css({
                        'transition-delay':0.1*index+'s'
                    });
                    $(ele).addClass('animated');
                }
            },
            offset: '85%'
        })
    });
}

//详情页加往上飘
var $detail_contents = $('#case_detail_container .go_up');
if(!isMobile){
    $detail_contents.each(function(index,ele){
        new Waypoint({
            element: $(ele),
            handler: function(direction) {
                var $this = $(ele);
                var $load_img = $this.children('img');
                if(!$this.hasClass('animated')){
                    if($load_img.length > 0){
                        var src = $load_img.attr('_src');
                        var image = new Image();
                        $load_img.css({
                            'opacity':0,
                            'transform':'scale(1.05)'
                        });
                        if(image.complete){
                            $load_img.attr('src',src);
                        }
                        image.onload = function(){
                            $load_img.attr('src',src);
                            $this.css('background-image','none');
                            $load_img.css({
                                'opacity':1,
                                'transform':'scale(1)'
                            });
                        }
                        image.src = src;
                    }else{

                    }
                    $this.css({
                        'transition-delay':0.1+(index/100)*1+'s'
                    });
                    $this.addClass('animated');
                }
            },
            offset: '80%'
        })
    })
}else{
    var $mobile_case_details_container = $('#mobile_case_details_container .go_up');
    $mobile_case_details_container.each(function(index,ele){
        new Waypoint({
            element: $(ele),
            handler: function(direction) {
                var $this = $(ele);
                var $load_img = $this.children('img');
                if(!$this.hasClass('animated')){
                    if($load_img.length > 0){
                        var src = $load_img.attr('_src');
                        var image = new Image();
                        $load_img.css({
                            'opacity':0,
                            'transform':'scale(1.05)'
                        });
                        if(image.complete){
                            $load_img.attr('src',src);
                        }
                        image.onload = function(){
                            $load_img.attr('src',src);
                            $this.css('background-image','none');
                            $load_img.css({
                                'opacity':1,
                                'transform':'scale(1)'
                            });
                        }
                        image.src = src;
                    }else{

                    }
                    $this.css({
                        'transition-delay':0.1+(index/100)*2+'s'
                    });
                    $this.addClass('animated');
                }
            },
            offset: '80%'
        })
    })
}


// 公司详情页slider
var $main_company_summary_slider = $('.main_company_summary_slider');
var $__text_slider_container = $('#__text_slider_container');
var $company_detail_top_nav = $('#company_detail_top_nav');
var $_company_skrollable_text = $('#_company_skrollable_text');

if($main_company_summary_slider.size() == 1){
    $main_company_summary_slider.cycle({
        slides          : '> div',
        timeout         : false,
        speed           : 1000,
        log			    : false,
        prev            : '#company_slider_nav .slider_prev',
        next            : '#company_slider_nav .slider_next',
        swipe           : false,
        fx              : 'tileBlind',
        tileCount       : 1,
        easing			: 'easeOutCubic'
    });
    $main_company_summary_slider.on('cycle-before',function(event, opts, currEl, nextEl, fwdFlag){
        var $next = $(nextEl);
        var pos = $next.data('pos');
        if(pos == 1){
            var $now_p = $_company_skrollable_text.find('p').eq(0);
            var $next_p = $_company_skrollable_text.find('p').eq(pos);
        }else{
            var $now_p = $_company_skrollable_text.find('p').eq(1);
            var $next_p = $_company_skrollable_text.find('p').eq(pos);
        }
        $__text_slider_container.find('.__text_slider_item').css('display','none').eq(pos).css('display','block');
        $company_detail_top_nav.find('.title_grid').removeClass('active').eq(pos).addClass('active');
        TweenMax.fromTo($now_p, .5, {autoAlpha: 1}, {autoAlpha: 0,force3D: true,ease: Sine.easeNone});
        TweenMax.staggerFromTo($next_p, 1.2, {y: 30,autoAlpha: 0}, {y: 0,autoAlpha: 1,force3D: true,ease: Power2.easeOut,delay: 0.5,onStart: function(){TweenMax.set($next_p, {autoAlpha: 1})}}, 0.1);
    });
}

$__text_slider_container.on({
    'mouseenter':function(){
        var $this = $(this);
        $this.find('.__text_slider_item').removeClass('hasgoon');
        var height = parseInt($this.find('.__text_slider_item:visible .inner_div').height()) + parseInt($__text_slider_container.css('padding-top'));
        if(height > 635){
            $(this).css('height',parseInt($this.css('padding-bottom')) + height + 'px');
        }
    },
    'mouseleave':function(){
        var $this = $(this);
        $this.find('.__text_slider_item').addClass('hasgoon');
        $(this).css('height','635px');
    }
});

if(!isMobile){
    $('.tweenmaxgo').each(function(index,ele){
        new Waypoint({
            element: $(ele),
            handler: function(direction) {
                var $this = $(ele);
                if($this.css('opacity') == 0 && direction == 'down'){
                    TweenMax.staggerFromTo($this.children(), 1.2, {y: 30,autoAlpha: 0}, {y: 0,autoAlpha: 1,force3D: true,ease: Power2.easeOut,delay: 0.1,onStart: function(){TweenMax.set($this, {autoAlpha: 1})}}, 0.1);
                }

            },
            offset: '80%'
        })
    });
}

//打开移动端nav
function get_nav(){
    var $mobile_top_nav = $('#mobile_top_nav');
    var $mobile_page_header_container = $('#mobile_page_header_container');
    if($body.hasClass('_opend_top_nav')){
        $body.removeClass('_opend_top_nav');
        $mobile_page_header_container.removeClass('_opend_top_nav');
    }else{
        $window.scrollTop(0);
        $mobile_page_header_container.addClass('_opend_top_nav');
        $body.addClass('_opend_top_nav');
    }
}

window.onload=function () {
    document.addEventListener('touchstart',function (event) {
        if(event.touches.length>1){
            event.preventDefault();
        }
    })
    var lastTouchEnd=0;
    document.addEventListener('touchend',function (event) {
        var now=(new Date()).getTime();
        if(now-lastTouchEnd<=300){
            event.preventDefault();
        }
        lastTouchEnd=now;
    },false)
}

function showhint(){
    Mask.show();
}

var click_able = true;
function get_like(obj){
    var $this = $(obj);
    var work_id = $this.data('work-id');
    var $span = $this.find('span');
    var count = parseInt($span.data('count'));
    if(click_able){
        $span.text(count+1);
        click_able = false;
        $.ajax({
            type: 'post',
            url: '/work/like',
            data: {'work_id':work_id},
            dataType: 'json',
            beforeSend: function(){

            },
            success: function(data){

            },
            error: function(xhr, type){
                swal({
                    title: "服务器错误",
                    icon: "error",
                });
            }
        });
    }else{
        swal({
            title: "已经点过了哦",
            icon: "warning",
        });
    }

}

var $side_function_bts = $('#side_function_bts');
$('#toTop').on('click',function(){
    $body.animate({'scrollTop':'0'},666,function(){
        $side_function_bts.removeClass('show');
    });
});

if(!isMobile){
    new Waypoint({
        element: $('#page_footer'),
        handler: function(direction) {
            if(direction == 'down'){
                if(!$side_function_bts.hasClass('show')){
                    $side_function_bts.addClass('show');
                }
            }
        },
        offset: '300%'
    });
};

function showqr(obj){
    var $this = $(obj);
    var $qr = $this.children('._qr_code');
    if($qr.hasClass('_qr_code--active')){
        $qr.removeClass('_qr_code--active');
    }else{
        $qr.addClass('_qr_code--active');
    }
}

function mobile_p_click(obj){
    var $this = $(obj);
    var zindex = $this.index();
    var $_sub_text_container = $('._sub_text_container');
    if(!$this.hasClass('active')){
        $this.addClass('active').siblings('li').removeClass('active');
        $_sub_text_container.find('._sub_text_container_wrapper_container').eq(zindex).addClass('--active').siblings('div').removeClass('--active');
    }
}