<?php

namespace app\index\controller;

class Index extends \think\Controller
{

    public function index()
    {
        if (!$this->loginOk())
            return $this->redirect(url('index.php/index/index/login'));
        return $this->fetch();
    }

    public function login()
    {
        cookie(['expire' => 7200]);

        $param = input('post.');
        if (empty($param))
            return $this->fetch();
        if (!captcha_check($param['yz']))
            return $this->error('验证码错误');
        if (strcmp($param['zh'], ADMIN_ZH) != 0 && strcmp($param['mm'], ADMIN_MM) != 0)
            return $this->error('用户或密码错误');

        cookie('zh', $param['zh']);
        cookie('mm', $param['mm']);

        $this->redirect(url('index.php/index/index/index'));
    }

    public function loginOk()
    {
        if (cookie('zh') == ADMIN_ZH && cookie('mm') == ADMIN_MM)
            return true;
        return false;
    }

    public function loginExit()//退出登录
    {
        cookie('zh', null);
        cookie('mm', null);

        return $this->redirect(url('index.php/index/index/login'));
    }
}