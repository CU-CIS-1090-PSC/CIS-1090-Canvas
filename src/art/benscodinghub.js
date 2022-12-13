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
    return [x, y, .50]; //pretty rainbow
}

/**
 * I call this draw function 30 times per second.
 * @param ctx - The 2d drawing context
 * @param t -The time in seconds
 * 
 */

//Our Tetris blocks are using 18.5 x 18.5 proportion wise
//The correct units between eachother are 19

function WeirdShapeUpwards(ctx, t){
    ctx.fillStyle = 'Yellow';
    ctx.fillRect(38, 179.9, 18.5, 18.5);
    ctx.fillRect(38, 160.9, 18.5, 18.5);
    ctx.fillRect(19, 160.9, 18.5, 18.5);
    ctx.fillRect(19, 141.9, 18.5, 18.5);
}

function WeirdShape(ctx, t){
    ctx.fillStyle = 'Purple';
    ctx.fillRect(76, 179.9, 18.5, 18.5);
    ctx.fillRect(76, 160.9, 18.5, 18.5);
    ctx.fillRect(95, 160.9, 18.5, 18.5);
    ctx.fillRect(57, 179.9, 18.5, 18.5);
}

function LongStick(ctx, t){
    ctx.fillStyle = 'Cyan';
    ctx.fillRect(114, 217.9, 18.5, 18.5);
    ctx.fillRect(114, 198.9, 18.5, 18.5);
    ctx.fillRect(114, 179.9, 18.5, 18.5);
    ctx.fillRect(114, 160.9, 18.5, 18.5);
}

function LongStick2(ctx, t){
    ctx.fillStyle = 'Orange';
    ctx.fillRect(133, 103.9, 18.5, 18.5);
    ctx.fillRect(133, 84.9, 18.5, 18.5);
    ctx.fillRect(133, 65.9, 18.5, 18.5);
    ctx.fillRect(133, 46.9, 18.5, 18.5);
}

function LeftLBlock(ctx, t){
    ctx.fillStyle = 'Red';
    ctx.fillRect(19, 179.9, 18.5, 18.5);
    ctx.fillRect(19, 198.9, 18.5, 18.5);
    ctx.fillRect(19, 217.9, 18.5, 18.5);
    ctx.fillRect(38, 217.9, 18.5, 18.5);
}
function RightLBlock(ctx, t){
    ctx.fillStyle = 'Red';
    ctx.fillRect(76, 217.9, 18.5, 18.5);
    ctx.fillRect(95, 217.9, 18.5, 18.5);
    ctx.fillRect(95, 198.9, 18.5, 18.5);
    ctx.fillRect(95, 179.9, 18.5, 18.5);
}

function TBlock(ctx, t){
    ctx.fillStyle = 'Green';
    ctx.fillRect(57, 217.9, 18.5, 18.5);
    ctx.fillRect(57, 198.9, 18.5, 18.5);
    ctx.fillRect(38, 198.9, 18.5, 18.5);
    ctx.fillRect(76, 198.9, 18.5, 18.5);
}


function draw(ctx, t){
    //See https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D
    ctx.lineWidth = 1.5;
    ctx.strokeStyle = '#9a9a9a';
    ctx.fillStyle = '#787878';
    //put fillstyles before declaring strokerects to seperate different colors
    ctx.font = "15px serif";
    artistWatermark(ctx, t);
    ctx.strokeStyle = '#9a9a9a';
    ctx.fillRect(1, 10, 155, 18); //Top ceiling
    ctx.fillRect(1, 239, 155, 20); //Bottom floor
    ctx.fillRect(0, 10, 19, 250); //Left Pillar
    ctx.fillRect(152, 10, 19, 250); //Right Pillar
    ctx.fillStyle = 'Orange';
    LeftLBlock(ctx, t);
    TBlock(ctx, t);
    RightLBlock(ctx, t);
    LongStick(ctx, t);
    WeirdShape(ctx, t);
    WeirdShapeUpwards(ctx, t);
    LongStick2(ctx, t);
    ctx.fillStyle = '#787878';

    //Starting here, the bottom floor's details
    ctx.strokeRect(1, 238, 17, 17);
    ctx.strokeRect(20, 238, 17, 17);
    ctx.strokeRect(39, 238, 17, 17);
    ctx.strokeRect(58, 238, 17, 17);
    ctx.strokeRect(77, 238, 17, 17);
    ctx.strokeRect(96, 238, 17, 17);
    ctx.strokeRect(115, 238, 17, 17);
    ctx.strokeRect(134, 238, 17, 17);
    ctx.strokeRect(153, 238, 17, 17);

    //Left column's details
    ctx.strokeRect(1, 219, 17, 17);
    ctx.strokeRect(1, 200, 17, 17);
    ctx.strokeRect(1, 181, 17, 17);
    ctx.strokeRect(1, 162, 17, 17);
    ctx.strokeRect(1, 143, 17, 17);
    ctx.strokeRect(1, 124, 17, 17);
    ctx.strokeRect(1, 105, 17, 17);
    ctx.strokeRect(1, 86, 17, 17);
    ctx.strokeRect(1, 67, 17, 17);
    ctx.strokeRect(1, 48, 17, 17);
    ctx.strokeRect(1, 29, 17, 17);
    ctx.strokeRect(1, 10, 17, 17);

    //Right column's details
    ctx.strokeRect(153, 219, 17, 17);
    ctx.strokeRect(153, 200, 17, 17);
    ctx.strokeRect(153, 181, 17, 17);
    ctx.strokeRect(153, 162, 17, 17);
    ctx.strokeRect(153, 143, 17, 17);
    ctx.strokeRect(153, 124, 17, 17);
    ctx.strokeRect(153, 105, 17, 17);
    ctx.strokeRect(153, 86, 17, 17);
    ctx.strokeRect(153, 67, 17, 17);
    ctx.strokeRect(153, 48, 17, 17);
    ctx.strokeRect(153, 29, 17, 17);
    ctx.strokeRect(153, 10, 17, 17);

    //Ceiling's details
    ctx.strokeRect(20, 10, 17, 17);
    ctx.strokeRect(39, 10, 17, 17);
    ctx.strokeRect(58, 10, 17, 17);
    ctx.strokeRect(77, 10, 17, 17);
    ctx.strokeRect(96, 10, 17, 17);
    ctx.strokeRect(115, 10, 17, 17);
    ctx.strokeRect(134, 10, 17, 17);
    ctx.strokeStyle = '#303030';
    
    //This is my psuedo shading to fake the shadows
    //Right column's psuedo shading
    ctx.strokeRect(170.5, 13, 0, 250); //Right side, long
    ctx.strokeRect(155, 27.3, 14, 0.1);//Rest are the cracks
    ctx.strokeRect(155, 46.5, 14, 0.1);
    ctx.strokeRect(155, 65.5, 14, 0.1);
    ctx.strokeRect(155, 84.5, 14, 0.1);
    ctx.strokeRect(155, 103.5, 14, 0.1);
    ctx.strokeRect(155, 122.5, 14, 0.1);
    ctx.strokeRect(155, 141.5, 14, 0.1);
    ctx.strokeRect(155, 160.5, 14, 0.1);
    ctx.strokeRect(155, 179.5, 14, 0.1);
    ctx.strokeRect(155, 198.5, 14, 0.1);
    ctx.strokeRect(155, 217.5, 14, 0.1);
    ctx.strokeRect(155, 236.5, 14, 0.1);
    ctx.strokeRect(155, 255.5, 14, 0.1);

    //Bottom floor's pseudo shading
    ctx.strokeRect(1, 255.5, 152, 0.1); //bottom bottom
    ctx.strokeRect(151.2, 239, 0, 15); //side cracks
    ctx.strokeRect(132.2, 239, 0, 15);
    ctx.strokeRect(113.2, 239, 0, 15);
    ctx.strokeRect(94.2, 239, 0, 15);
    ctx.strokeRect(75.2, 239, 0, 15);
    ctx.strokeRect(56.2, 239, 0, 15);
    ctx.strokeRect(37.2, 239, 0, 15);
    ctx.strokeRect(18.2, 13.5, 0.1, 250); //Long inside shading

    //Left column's psuedo shading
    ctx.strokeRect(3, 236.5, 14, 0.1); //all cracks
    ctx.strokeRect(3, 217.5, 14, 0.1);
    ctx.strokeRect(3, 198.5, 14, 0.1);
    ctx.strokeRect(3, 179.5, 14, 0.1);
    ctx.strokeRect(3, 160.5, 14, 0.1);
    ctx.strokeRect(3, 141.5, 14, 0.1);
    ctx.strokeRect(3, 122.5, 14, 0.1);
    ctx.strokeRect(3, 103.5, 14, 0.1);
    ctx.strokeRect(3, 84.5, 14, 0.1);
    ctx.strokeRect(3, 65.5, 14, 0.1);
    ctx.strokeRect(3, 46.5, 14, 0.1);
    //Ceiling psuedo shading
    ctx.strokeRect(3, 27.5, 150, 0.1); //long
    ctx.strokeRect(151.2, 12.5, 0, 14.1);
    ctx.strokeRect(132.2, 12.5, 0, 14.1);
    ctx.strokeRect(113.2, 12.5, 0, 14.1);
    ctx.strokeRect(94.2, 12.5, 0, 14.1);
    ctx.strokeRect(75.2, 12.5, 0, 14.1);
    ctx.strokeRect(56.2, 12.5, 0, 14.1);
    ctx.strokeRect(37.2, 12.5, 0, 14.1);

    ctx.strokeStyle = '#9a9a9a';
}
function artistWatermark(ctx, t){
    ctx.strokeStyle = 'black';
    ctx.font = "15px serif";
    ctx.strokeText("Ben Z", 200, 250)
}

export default { name: "Tetris recreation", shade, draw, }