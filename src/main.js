////////////////////////////////////////////////////////////////
//This first section is concerned with loading each "art"
// and letting the user select which one to show.
////////////////////////////////////////////////////////////////

//Load each art
//import axs108 from "./art/axs108.js"
import benscodinghub from "./art/benscodinghub.js"
//import captaina15 from "./art/captaina15.js"
import chinny911 from "./art/chinny911.js"
import drewbarring from "./art/drewbarring.js"
import fire from "./art/fire.js"
import fractal from "./art/fractal.js"
import ihadcode from "./art/ihadcode.js"
import ishasal from "./art/ishasal.js"
import juanalbap from "./art/juanalbap.js"
import mainaliashlesha from "./art/mainaliashlesha.js"
import metaballs from "./art/metaballs.js"
import royalv from "./art/royalv.js"
import rxt06130 from "./art/rxt06130.js"
import sunset from "./art/sunset.js"

//Put them in an array
let arts = [
   // axs108,
    benscodinghub,
    //captaina15,
    chinny911,
    drewbarring,
    fire,
    fractal,
    ihadcode,
    ishasal,
    juanalbap,
    mainaliashlesha,
    metaballs,
    royalv,
    rxt06130,
    sunset
];
//And set the first one as the current art to show
let currentArt = arts[0];

//Find the select box
let select = document.querySelector("#select");
//Fill in the choices
arts.forEach((c, i) => {
    select.appendChild(new Option(c.name, i, i));
});
//Add an event listener...
select.addEventListener('change', e => {
    //When the selection changes to a new number, make that
    //art the current art to show.
    currentArt = arts[select.value];
});


////////////////////////////////////////////////////////////////
//This section sets up to display the graphics
////////////////////////////////////////////////////////////////

const size = 256;
const app = document.querySelector("#app");
const c = document.querySelector("#canvas");

const ctx = c.getContext("2d");
const imageData = ctx.createImageData(size, size);

//Save the time we started
let start = new Date().getTime();

//This function draws one frame
function frame() {
    //How much time has passed since we started?
    let now = new Date().getTime();
    let t = now - start;

    //Execute the art's "Shade" function

    //For each pixel in the canvas...
    for (let x = 0; x < size; x++) {
        for (let y = 0; y < size; y++) {
            //Get the pixel for that location
            let c = currentArt.shade(x / size, y / size, t / 1000);

            //And put it in the correct place in the image data array
            let i = 4 * (size * y + x);
            imageData.data[i + 0] = c[0] * 255; //R
            imageData.data[i + 1] = c[1] * 255; //G
            imageData.data[i + 2] = c[2] * 255; //B
            imageData.data[i + 3] = 255;        //A
        }
    }
    //Draw it to the canvas
    ctx.putImageData(imageData, 0, 0);

    //Execute the art's "Draw" function
    currentArt.draw(ctx, t / 1000);

    //Please call this function again soon
    window.requestAnimationFrame(frame);
}
window.requestAnimationFrame(frame);