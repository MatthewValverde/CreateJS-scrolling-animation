(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 600,
	height: 300,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/ISIOnly.png?1470549708799", id:"ISIOnly"}
	]
};



lib.ssMetadata = [];


// symbols:



(lib.ISIOnly = function() {
	this.initialize(img.ISIOnly);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,270,1458);


(lib.objectToAnimate = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ISIOnly();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,270,1458);


(lib.animationTarget = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.objectToAnimate = new lib.objectToAnimate();

	this.timeline.addTween(cjs.Tween.get(this.objectToAnimate).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,270,1458);


// stage content:
(lib.exampleBanner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC99").s().p("Egu3AXbMAAAgu2MBdvAAAMAAAAu2gAiMTGMArAAAAIAA5XMgrAAAAg");
	this.shape.setTransform(300,150);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A1gMsIAA5XMArBAAAIAAZXg");
	mask.setTransform(423.5,191);

	// text
	this.animationContainer = new lib.animationTarget();
	this.animationContainer.setTransform(286,110);

	this.animationContainer.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.animationContainer).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(300,150,600,300);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;