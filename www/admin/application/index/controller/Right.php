<?php

namespace app\index\controller;

use think\Db;

class Right extends \think\Controller
{

    public function swiper()
    {
        if (!$this->loginOk())
            return $this->redirect(url('index.php/index/index/login'));
        return $this->fetch();
    }

    public function beautiful()
    {
        if (!$this->loginOk())
            return $this->redirect(url('index.php/index/index/login'));

        $db = Db::name('beautiful')->select();

        $this->assign('beautiful', $db[0]);

        return $this->fetch();
    }

    public function fronter()
    {
        if (!$this->loginOk())
            return $this->redirect(url('index.php/index/index/login'));
        return $this->fetch();
    }

    public function news($id)
    {
        if (!$this->loginOk())
            return $this->redirect(url('index.php/index/index/login'));

        $db = Db::name('news')->select();
        $this->assign('news', $db[$id-1]);
        return $this->fetch();
    }

    public function figure($id)
    {
        if (!$this->loginOk())
            return $this->redirect(url('index.php/index/index/login'));

        $db = Db::name('figure')->select();

        $this->assign('figure', $db[$id-1]);

        $imgid = "null";
        switch ($id){
            case '1' :{$imgid = 'a';break;}
            case '2' :{$imgid = 'b';break;}
            case '3' :{$imgid = 'c';break;}
            case '4' :{$imgid = 'd';break;}
            case '5' :{$imgid = 'e';break;}
            case '6' :{$imgid = 'f';break;}
        }
        $this->assign('imgid', $imgid);

        return $this->fetch();
    }

    public function about()
    {
        if (!$this->loginOk())
            return $this->redirect(url('index.php/index/index/login'));
        return $this->fetch();
    }

    public function cases($id)
    {
        if (!$this->loginOk())
            return $this->redirect(url('index.php/index/index/login'));

        $db = Db::name('cases')->select();

        $this->assign('cases', $db[$id-1]);

        return $this->fetch();
    }

    public function loginOk()
    {
        if (cookie('zh') == ADMIN_ZH && cookie('mm') == ADMIN_MM)
            return true;
        return false;
    }
}


