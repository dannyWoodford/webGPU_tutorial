import { App } from "./control/app";
import Stats from 'stats.js'

const canvas : HTMLCanvasElement = <HTMLCanvasElement> document.getElementById("gfx-main");

const app = new App(canvas);
app.InitializeRenderer();
app.run();


var stats = new Stats();
stats.showPanel( 0 ); // 0: fps, 1: ms, 2: mb, 3+: custom
stats.dom.style.position = "absolute"
document.getElementById("webgpu-container")?.appendChild( stats.dom );

function animate() {

	stats.begin();

	// monitored code goes here

	stats.end();

	requestAnimationFrame( animate );

}

requestAnimationFrame( animate );

console.log('webgpu stats', stats)
// stats.domElement = canvas