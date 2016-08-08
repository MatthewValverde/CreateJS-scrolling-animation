# CreateJS-scrolling-animation
CreateJS scrolling animation with scrollbar.

## How-to add the animation scripts to Adobe Animate.

Steps:
1. Publish settings -> Advanced Uncheck 'Overwrite HTML file on publish'
2. The object that is scrolling must be:
   * must be a bitmap (image)-- no primitive shapes.
   * the bitmap (image) must be enclosed in a MovieClip and given an instance name of objectToAnimate
   * The objectToAnimate object must also be enclosed in a MovieClip (a container) and given the instance name of animationContainer
   * The animationContainer is necessary to offset the x / y coordinates, and provide a better scrolling exp.
1. Make sure all transformation points are in the left corner for the object you are animating. (Please see video: https://youtu.be/j1RpIi3PlJw)
2. Publish app
3. Open HTML file
4. Copy and paste code (Please see video: https://youtu.be/izlCxNDHgIU)
5. The options for the animations are available as so:
   * maskHeight
   * speed
   * scrollBarVisible (default true)
   * scrollBarWidth
   * scrollBarBtnColor
   * scrollBarBtnOverColor
   * scrollBarBackgroundColor
   
   
   
## Videos:
How-to add scripts
https://youtu.be/izlCxNDHgIU

Moving the transformation point.
https://youtu.be/j1RpIi3PlJw

## Example is using the 'ZIM Slider Component'
https://zimjavascript.wordpress.com/2016/04/11/scrollbar-for-createjs-using-zim-slider-component-on-the-html-5-canvas-with-javascript/
