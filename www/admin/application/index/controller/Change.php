<?php

namespace app\index\controller;

use think\Db;

class Change extends \think\Controller
{

    public function index()
    {
        if (!$this->loginOk())
            return abort(500);

        $file = request()->file('img');
        if (empty($file)) {
            $this->error('没有上传的图片');
        }
        $info = $file->validate(['size' => 1048576, 'ext' => 'jpg']);
        if ($info) {
            $image = \think\Image::open($file);
            $image->text('室内设计', 'hy.ttf', 12, '#ffffff', \think\Image::WATER_SOUTHEAST)
                ->save(APP_PATH . '../../index/public/static/images/' . request()->param()['src'] . '.jpg');
            return "快去看看吧！";
        } else
            return $file->getError();
    }

    public function news()
    {
        if (!$this->loginOk())
            return abort(500);

        $file = request()->file('img');
        if (empty($file)) {
            $this->error('没有上传的图片');
        }
        $info = $file->validate(['size' => 1048576, 'ext' => 'jpg']);
        if ($info) {
            $image = \think\Image::open($file);
            $image->text('室内设计', 'hy.ttf', 12, '#ffffff', \think\Image::WATER_SOUTHEAST)
                ->save(APP_PATH . '../../index/public/static/images/news/' . request()->param()['src'] . '.jpg');
            return "快去看看吧！";
        } else
            return $file->getError();
    }

    public function title($name, $id, $title, $style, $sign, $date, $visit)
    {
        if (!$this->loginOk())
            return abort(500);

        Db::table($name)
            ->update([
                'id' => $id,
                'title' => $title,
                'style' => $style,
                'sign' => $sign,
                'date' => $date,
                'visit' => $visit]);

        $this->success("修改成功");
    }

    public function content()
    {
        if (!$this->loginOk())
            return abort(500);

        $param = input('post.');
        $name = $param['name'];
        $id = $param['id'];
        $content = $param['content'];
        Db::table($name)
            ->update([
                'id' => $id,
                'content' => $content]);

        $this->success("修改成功");
    }

    public function loginOk()
    {
        if (cookie('zh') == ADMIN_ZH && cookie('mm') == ADMIN_MM)
            return true;
        return false;
    }
}


