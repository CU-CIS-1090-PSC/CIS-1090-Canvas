import { makeNoise3D } from "fast-simplex-noise";
import { hsl, gray } from "../color.js";

let n = makeNoise3D();

/**
 * I call this shade function once for every pixel in the image, and 
 * set the color equal to whatever you return.
 * 
 * I call it 30 times a second so you can animate things
 * 
 * @param x - The x position in the image, from 0 (left) to 1 (right)
 * @param y - The y position in the image, from 0 (top) to 1 (bottom)
 * @param t - The time passed, in seconds
 * @returns The RGB color to display at the x,y location at time t
 */
function shade(x, y, t) {
    //❓❓ Question 2
    //❓❓ Question 3
    
    return [0,0,0];
}

/**
 * I call this draw function 30 times per second.
 * @param ctx - The 2d drawing context
 * @param t -The time in seconds
 */
function draw(ctx, t) {
    function circle(x,y,r){
        ctx.beginPath();
    }
    //See https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'black';
    circle(108, 94, 2);
    ctx.fill();
    //❓❓ Question 6
   ctx.strokeRect(x,y,0); 
}





export default { name: "Captain America", shade, draw }

