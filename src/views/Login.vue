<template>
    <div class="login-page">
        <div class="login-form" style="position: absolute;left: 50%;margin-left: -160px;margin-top: 100px;">

            <div class="login-content">

                <div class="form-login-error">
                    <h3>Invalid login</h3>
                    <p>Enter <strong>demo</strong>/<strong>demo</strong> as login and password.</p>
                </div>

                <form method="post" role="form" id="form_login">

                    <div>

                        <div class="input-group" style="width: 100%">
                            <img src="../../static/images/logo.png">
                        </div>

                    </div>
                    <div class="form-group">

                        <div class="input-group">
                            <div class="input-group-addon">
                                <i class="fa fa-user"></i>
                            </div>

                            <input type="text" class="form-control" name="username" id="username" placeholder="Username" autocomplete="off" required
                                pattern="\w+" @oninvalid="validatelt(this,'请输入有效的用户名！')" />
                        </div>

                    </div>

                    <div class="form-group">

                        <div class="input-group">
                            <div class="input-group-addon">
                                <i class="fa fa-key"></i>
                            </div>

                            <input type="password" class="form-control" name="password" id="password" placeholder="Password" autocomplete="off" required/>
                        </div>

                    </div>

                    <div class="form-group">
                        <router-link :to="{name: 'Dashboard'}" class="nav-link ">
                            <button type="submit" class="btn btn-primary btn-block btn-login">
                                <i class="fa fa-sign-in"></i>
                                Login In
                            </button>
                        </router-link>
                    </div>

                </form>

            </div>
        </div>

        <footer class="row" id="footer-bar" style="opacity: 1; position: absolute; top:95%; left:50%; margin-left: -160px">
            <p class="col-xs-12" id="footer-copyright" style="color: white;">
                <font style="font-family: Tahoma;">©</font>&nbsp;2017&nbsp;<a href="http://www.wxchina.com" target="_blank"><img style="width: 24px; height: 24px;" src="../../static/images/xuanwu.ico" ng-src="../../static/images/xuanwu.ico">&nbsp;广州市玄武无线科技股份有限公司</a>
            </p>
        </footer>
        <canvas id="canvas"></canvas>
    </div>
</template>

<script>
export default {
    data () {
        return {
        }
    },
    mounted() {
        backgroundAnimate()
    },
    methods: {
        //自定义表单验证
        validatelt: function(inputelement, err) {
            if (inputelement.validity.patternMismatch) {
                inputelement.setCustomValidity(err);
            } else {
                inputelement.setCustomValidity("");
                return true;
            }
        }
    }
}

var backgroundAnimate = function() {
    //定义画布宽高和生成点的个数
    var WIDTH = window.innerWidth,
        HEIGHT = window.innerHeight,
        POINT = 35;

    var canvas = document.getElementById('canvas');
    canvas.width = WIDTH,
        canvas.height = HEIGHT;
    var context = canvas.getContext('2d');
    context.strokeStyle = 'rgba(0,0,0,1)',
        context.strokeWidth = 1,
        context.fillStyle = 'rgba(0,0,0,1)';
    var circleArr = [];

    //线条：开始xy坐标，结束xy坐标，线条透明度
    function Line(x, y, _x, _y, o) {
        this.beginX = x,
            this.beginY = y,
            this.closeX = _x,
            this.closeY = _y,
            this.o = o;
    }
    //点：圆心xy坐标，半径，每帧移动xy的距离
    function Circle(x, y, r, moveX, moveY) {
        this.x = x,
            this.y = y,
            this.r = r,
            this.moveX = moveX,
            this.moveY = moveY;
    }
    //生成max和min之间的随机数
    function num(max, _min) {
        var min = arguments[1] || 0;
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    // 绘制原点
    function drawCricle(cxt, x, y, r, moveX, moveY) {
        var circle = new Circle(x, y, r, moveX, moveY)
        cxt.beginPath()
        cxt.arc(circle.x, circle.y, circle.r, 0, 2 * Math.PI)
        cxt.closePath()
        cxt.fill();
        return circle;
    }
    //绘制线条
    function drawLine(cxt, x, y, _x, _y, o) {
        var line = new Line(x, y, _x, _y, o)
        cxt.beginPath()
        cxt.strokeStyle = 'rgba(0,0,0,' + o + ')'
        cxt.moveTo(line.beginX, line.beginY)
        cxt.lineTo(line.closeX, line.closeY)
        cxt.closePath()
        cxt.stroke();

    }
    //初始化生成原点
    function init() {
        circleArr = [];
        for (var i = 0; i < POINT; i++) {
            circleArr.push(drawCricle(context, num(WIDTH), num(HEIGHT), num(15, 2), num(10, -10) / 40, num(10, -10) / 40));
        }
        draw();
    }

    //每帧绘制
    function draw() {
        context.clearRect(0, 0, canvas.width, canvas.height);
        for (var i = 0; i < POINT; i++) {
            drawCricle(context, circleArr[i].x, circleArr[i].y, circleArr[i].r);
        }
        for (var i = 0; i < POINT; i++) {
            for (var j = 0; j < POINT; j++) {
                if (i + j < POINT) {
                    var A = Math.abs(circleArr[i + j].x - circleArr[i].x),
                        B = Math.abs(circleArr[i + j].y - circleArr[i].y);
                    var lineLength = Math.sqrt(A * A + B * B);
                    var C = 1 / lineLength * 7 - 0.009;
                    var lineOpacity = C > 0.03 ? 0.03 : C;
                    if (lineOpacity > 0) {
                        drawLine(context, circleArr[i].x, circleArr[i].y, circleArr[i + j].x, circleArr[i + j].y, lineOpacity);
                    }
                }
            }
        }
    }

    //调用执行

    init();
    setInterval(function () {
        for (var i = 0; i < POINT; i++) {
            var cir = circleArr[i];
            cir.x += cir.moveX;
            cir.y += cir.moveY;
            if (cir.x > WIDTH) cir.x = 0;
            else if (cir.x < 0) cir.x = WIDTH;
            if (cir.y > HEIGHT) cir.y = 0;
            else if (cir.y < 0) cir.y = HEIGHT;
        }
        draw();
    }, 16);
}
</script>

<style>
body {
    overflow:scroll;
    overflow-x:hidden;
    overflow-y:hidden;
}
</style>