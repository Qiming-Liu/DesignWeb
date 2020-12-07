<?php

namespace app\index\controller;

use think\Db;

class Index extends \think\Controller
{

    public function about()
    {
        return $this->fetch();
    }

    public function cases()
    {
        $db = Db::name('cases')->select();
        $casespc = "";
        $casesmb = "";
        for ($id = 0; $id <= count($db)-1; $id++) {
            //电脑端
            $i = ($id + 1)%3;
            if($i==0) $i=3;
            if($i==1) $casespc = $casespc.'<div class="case_row">';
            $casespc = $casespc.
                '<div class="case_box size_small">
                    <a href="/index/index/content?name=cases&id='.($id + 1).'">
                        <div class="av-container av-visible">
                            <div class="inner_structure aniview aniview_queue_'.$i.' animated ani_slide_up"
                                 data-av-animation="ani_slide_up" style="opacity: 0;">
                                <div class="the_put_box">
                                    <div class="case_cover_box loader_container">
                                        <img src="/index/public/static/images/work_00'.($id + 1).'.jpg"
                                             data-src="/index/public/static/images/work_00'.($id + 1).'.jpg"
                                             alt="" style="top: 0px; opacity: 1;">
                                    </div>
                                    <div class="case_info_card">
                                        <p class="category_card font-13-vw bg_2">'.$db[$id]['sign'].'</p>
                                        <p class="title">'.$db[$id]['title'].'</p>
                                        <p class="location font_strsub">'.$db[$id]['style'].'</p>
                                        <p class="other_info">
                                            <span>'.$db[$id]['date'].'</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                                                class="_common_like_point">'.$db[$id]['visit'].'</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>';
            if($i==3) $casespc = $casespc.'</div>';
            //手机端
            $casesmb = $casesmb.
                '<div class="_card_item '.($i==1?'big':'small').'" onclick="javascript:window.location.href=\'/index/index/content?name=cases&id='.($id + 1).'\'">
                    <div class="av-container av-visible">
                        <div class="aniview aniview_queue_3 animated ani_slide_up"
                             data-av-animation="ani_slide_up" style="opacity: 0;">
                            <div class="_card_wrapper">
                                <div class="__card_cover bg_'.($i==1?1:2).'">
                                    <div class="___cover_img loader_container">
                                        <img src="/index/public/static/images/work_00'.($id + 1).'.jpg"
                                             data-src="/index/public/static/images/work_00'.($id + 1).'.jpg"
                                             alt="" style="top: 0px; opacity: 1;">
                                    </div>
                                    <div class="___sign">'.$db[$id]['sign'].'</div>
                                </div>
                                <div class="__card_info">
                                    <div class="___info_main_body">
                                        <p class="_info_author">'.$db[$id]['title'].'</p>
                                        <p class="_info_title font_strsub">'.$db[$id]['style'].'</p>
                                        <i class="mobile_part_line"></i>
                                        <p class="_info_oi">
                                            <span>'.$db[$id]['date'].'</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            <span class="like_point4mobile">'.$db[$id]['visit'].'</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>';
        }
        $this->assign('casespc', $casespc);
        $this->assign('casesmb', $casesmb);

        return $this->fetch();
    }

    public function figure()
    {
        return $this->fetch();
    }

    public function fronter()
    {
        return $this->fetch();
    }

    public function index()
    {
        $db = Db::name('cases')->select();
        for ($id = 0; $id <= 7; $id++) {
            $this->assign('title' . ($id + 1), $db[$id]['title']);
            $this->assign('style' . ($id + 1), $db[$id]['style']);
            $this->assign('sign' . ($id + 1), $db[$id]['sign']);
            $this->assign('date' . ($id + 1), $db[$id]['date']);
            $this->assign('visit' . ($id + 1), $db[$id]['visit']);
        }
        return $this->fetch();
    }

    public function news()
    {
        $db = Db::name('news')->select();
        for ($id = 0; $id <= 8; $id++) {
            $this->assign('title' . ($id + 1), $db[$id]['title']);
            $this->assign('style' . ($id + 1), $db[$id]['style']);
            $this->assign('sign' . ($id + 1), $db[$id]['sign']);
            $this->assign('date' . ($id + 1), $db[$id]['date']);
            $this->assign('visit' . ($id + 1), $db[$id]['visit']);
        }
        return $this->fetch();
    }

    public function partner()
    {
        return $this->fetch();
    }
}


