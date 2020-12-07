{__NOLAYOUT__}
{include file="index@tpl/header" /}
<body>
<style type="text/css">
    .system-message {
        padding: 24px 48px;
    }

    .system-message h1 {
        font-size: 100px;
        font-weight: normal;
        line-height: 120px;
        margin-bottom: 12px;
    }

    .system-message .jump {
        padding-top: 10px;
    }

    .system-message .jump a {
        color: #333;
    }

    .system-message .detail {
        font-size: 12px;
        line-height: 20px;
        margin-top: 12px;
        display: none;
    }
</style>
<div class="container-scroller">
    <div class="container-fluid page-body-wrapper">
        <div class="row">
            <div class="content-wrapper full-page-wrapper d-flex align-items-center text-center error-page">
                <div class="col-lg-6 mx-auto">
                    <div class="system-message">
                        <?php switch ($code) {?>
                        <?php case 1:?>
                        <h1>:)</h1>
                        <p class="success"><?php echo(strip_tags($msg));?></p>
                        <?php break;?>
                        <?php case 0:?>
                        <h1 class="display-1 mb-0">:(</h1>
                        <h2 class="mb-4"><?php echo(strip_tags($msg));?></h2>
                        <?php break;?>
                        <?php } ?>
                        <p class="detail"></p>
                        <p class="jump">
                            页面自动跳转等待时间： <b id="wait"><?php echo($wait);?></b>
                        </p>
                        <a id="href" class="btn btn-primary mt-5 btn-rounded btn-lg" href="<?php echo($url);?>">回到主页</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<script type="text/javascript">
    (function () {
        var wait = document.getElementById('wait'),
            href = document.getElementById('href').href;
        var interval = setInterval(function () {
            var time = --wait.innerHTML;
            if (time <= 0) {
                location.href = href;
                clearInterval(interval);
            }
            ;
        }, 1000);
    })();
</script>
{include file="index@tpl/footer" /}
