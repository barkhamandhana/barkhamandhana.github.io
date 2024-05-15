// https://github.com/bronkula/apptools/blob/master/tools/drawtools.js
/* EVENTS.JS */
/*------------------------------- Point Detection Functions -----------------------*/
/* Return an array of either touches or a click */
const evPoints = e => e.type.substring(0,5)!="touch"?[e]:!e.touches.length?e.changedTouches:e.touches;
/* return an offset xy object for the position of the click or touch in the object */
/* pass in an optional object that will be used for basis */
const getEXY = (e,o) => { let rect = (o||e.target).getBoundingClientRect(); return ({ x:e.pageX-rect.left, y:e.pageY-rect.top }); }
/* Return the first xy position from an event, whether touch or click */
const getEventXY = (e,o) => getEXY(evPoints(e)[0],o);

const clamp = (min,max) => n => {
    if(n > max) {
        return max;
    } else if (n < min) {
        return min;
    }
    return n;
};


$(function(){
    $(".main-image").on("mousemove touchmove", function(event){
        let pos = getEventXY(event);

        let zoomposx = clamp(0, 500)(pos.x-50);
        let zoomposy = clamp(0, 300)(pos.y-50);

        $(this).closest(".zoom").find(".zoomer").css({
            transform: 'translate(' + zoomposx + 'px, ' + zoomposy + 'px)'
        });

        $(this).closest(".zoom").find(".zoomed-image").css({
            "background-position": (-zoomposx*2) + 'px ' + (-zoomposy*4.9) + 'px'
        });
    });
});