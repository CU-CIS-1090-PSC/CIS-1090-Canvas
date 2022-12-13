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
    //❓❓ Question 4
    return [1,0,1];
}

/**
 * I call this draw function 30 times per second.
 * @param ctx - The 2d drawing context
 * @param t -The time in seconds
 */
function draw(ctx, t) {
    //See https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D
  //This draws a star filled in and color is black. 
    ctx.moveTo(108, 0.0);
    ctx.lineTo(141, 70);
    ctx.lineTo(218, 78.3);
    ctx.lineTo(162, 131);
    ctx.lineTo(175, 205);
    ctx.lineTo(108, 170);
    ctx.lineTo(41.2, 205);
    ctx.lineTo(55, 131);
    ctx.lineTo(1, 78);
    ctx.lineTo(75, 68);
    ctx.lineTo(108, 0);
    ctx.closePath();
    ctx.fill();
    
}



export default { name: "My Star", shade, draw }