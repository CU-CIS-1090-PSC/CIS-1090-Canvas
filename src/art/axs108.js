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
    let s = [0,0,0];
    if (Math.pow(1 - Math.abs(.39 - x)+(y - .2) * .1, 5) > .9) {
         s=hsl(y / 2 - .4, 1, .3);
        if (Math.pow(1- Math.abs(.39 - x)+ (y - .2)* .1, 5)> .9){
            s= hsl(.15, 1, .7);
        }
    }
    return s;
}


function draw(ctx, t) {
    function circle(x,y,r){
        ctx.beginPath();
    }
    //See https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'black';
    //ââ Question 5
    //ââ Question 6
    ctx.strokeRect(75, 100, 150 + 10 * Math.sin(t), 100 + 10 *Math.cos(t));
}

export default { name: "Audrey's homework", shade, draw }
