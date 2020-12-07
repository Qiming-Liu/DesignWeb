<?php

namespace app\index\controller;

use think\Db;

class Content extends \think\Controller
{

    public function index($name, $id)
    {
        $db = Db::name($name)->select();

        if (empty($db)) {
            return abort(404);
        } else {
            $this->assign('db', $db[$id - 1]);
        }

        switch ($name) {
            case "cases":{
                $this->assign('src', 'work_00' . $id);
                break;
            }
            case "beautiful":{
                $this->assign('src', 'most_' . $id);
                break;
            }
            case "news":{
                $this->assign('src', 'news/'. $id);
                break;
            }
            case "figure":{
                $imgid = "null";
                switch ($id){
                    case '1' :{$imgid = 'a';break;}
                    case '2' :{$imgid = 'b';break;}
                    case '3' :{$imgid = 'c';break;}
                    case '4' :{$imgid = 'd';break;}
                    case '5' :{$imgid = 'e';break;}
                    case '6' :{$imgid = 'f';break;}
                }
                $this->assign('src', $imgid.'2');
                break;
            }
        }

        return $this->fetch();
    }
}


