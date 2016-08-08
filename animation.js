(function() {

    var walkDirection = 1;
    var deltaS;
    var mStage;
    var i = 0;
    var isGoing = false;
    var initialY;
    var currentY;
    var width;
    var height;
    var animationContainer;
    var container;
    var container;
    var position;
    var viewHeight;
    var viewY;
    var scrollHandleHeight;
    var scrollBar;
    var button;
    var spped;

    function animation(exportRoot, options) {

        if (options == null || options.animationContainer == null || options.animationContainer == undefined) {
            return;
        }
        speed = options.speed;
        animationContainer = options.animationContainer;
        container = animationContainer.objectToAnimate;
        scrollHandleHeight = 20;
        viewHeight = (options.maskHeight != null) ? options.maskHeight : 100;
        viewY = animationContainer.y;
        initialY = container.y;

        height = container.getBounds().height;
        width = container.getBounds().width;

        position = height;

        stage.enableMouseOver(10);
        stage.addEventListener('mouseover', mouseOverHandler);
        stage.addEventListener('mouseout', mouseOutHandler);

        container.addEventListener('click', clicked);
        createjs.Ticker.timingMode = createjs.Ticker.RAF;
        createjs.Ticker.addEventListener("tick", tick);

        isGoing = true;

        var viewerW = width;
        var viewerH = viewHeight;
        var pageH = height;

        //if (options.scrollBarVisible != undefined && options.scrollBarVisible == false) return;

        var scrollW = (options.scrollBarWidth != null || options.scrollBarWidth != undefined) ? options.scrollBarWidth : 12;
        var btnColor = (options.scrollBarBtnColor != null || options.scrollBarBtnColor != undefined) ? options.scrollBarBtnColor : "blue";
        var overColor = (options.scrollBarBtnOverColor != null || options.scrollBarBtnOverColor != undefined) ? options.scrollBarBtnOverColor : "grey";
        var backgroundColor = (options.scrollBarBackgroundColor != null || options.scrollBarBackgroundColor != undefined) ? options.scrollBarBackgroundColor : "black";

        button = new zim.Button({
            width: scrollW,
            height: viewHeight / pageH * viewHeight,
            label: "",
            color: btnColor,
            rollColor: overColor,
            corner: 0
        });

        scrollbar = new zim.Slider({
            min: 0,
            max: -(pageH - viewHeight),
            step: 0,
            button: button,
            barLength: viewHeight,
            barWidth: scrollW,
            barColor: backgroundColor,
            vertical: true,
            inside: true
        });

        exportRoot.addChild(scrollbar);
        scrollbar.x = animationContainer.x + viewerW - (scrollW / 2);
        scrollbar.y = viewY + 1;
        scrollbar.on("change", function() {
            container.y = 0 + scrollbar.currentValue;

            position = height + container.y;

        });
        scrollbar.visible = false;

        console.log(animationContainer.x, viewerW);
    }

    function tick(event) {
        var string = i++;
        var y = container.y;
        deltaS = walkDirection * (event.delta / 1000);
        setMovementForObject(container, (speed != null || speed != unde) ? speed : 24);
    }

    function mouseOverHandler(e) {
        scrollbar.visible = true;
        createjs.Ticker.removeEventListener("tick", tick);
    }

    function mouseOutHandler(e) {
        scrollbar.visible = false;
        createjs.Ticker.addEventListener("tick", tick);
    }

    function clicked(e) {
        if (isGoing == false) {
            isGoing = true;
            createjs.Ticker.addEventListener("tick", tick);
            //container.alpha = .5;
        } else {
            isGoing = false;
            createjs.Ticker.removeEventListener("tick", tick);
            // container.alpha = 1;
        }
    }

    function setMovementForObject(object, speed) {
        currentY = object.y;
        object.y = (object.y - deltaS * speed);

        position = position - (currentY - object.y);

        var percent = (((height - position) / height));

        button.y = (viewHeight * percent) + 10;

        if (position <= 0) {
            object.y = initialY;
            position = height;
        }
    }

    window.animation = animation;
})()