import Collision from "./Collision.ts";
import Dot from "./Dot.ts";
import Stick from "./Stick.ts";

const canvas: HTMLCanvasElement = document.getElementById(
  "c"
) as HTMLCanvasElement;

const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

const CANVAS_HEIGHT = window.innerHeight;
const CANVAS_WIDTH = window.innerWidth;

canvas.height = CANVAS_HEIGHT;
canvas.width = CANVAS_WIDTH;

let dots: Dot[] = [];

for (let i = 0; i < 50; i++) {
  dots.push(new Dot(Math.random() * CANVAS_WIDTH, Math.random() * CANVAS_HEIGHT));
}
// let sticks: Stick[] = [];

// const dotA = new Dot(500, 600);
// const dotB = new Dot(600, 600);
// const dotC = new Dot(600, 500);
// const dotD = new Dot(500, 500);
// dots.push(dotA, dotB, dotC, dotD);

// const stickA = new Stick(dotA, dotB, 100);
// const stickB = new Stick(dotB, dotC, 100);
// const stickC = new Stick(dotC, dotD, 100);
// const stickD = new Stick(dotD, dotA, 100);
// const stickE = new Stick(dotA, dotC);
// const stickF = new Stick(dotB, dotD);
// sticks.push(stickA, stickB, stickC, stickD, stickE, stickF);

let deltaTime = 0;
let prevTime = Date.now();
let nowTime = prevTime;
function animate() {
  nowTime = Date.now();
  deltaTime = (nowTime - prevTime) / 1000;
  prevTime = nowTime;

  ctx?.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

  for (let d of dots) {
    d.update(CANVAS_HEIGHT, deltaTime);
    d.constrain(CANVAS_HEIGHT, CANVAS_WIDTH);
    d.render(ctx);
  }
  // for (let s of sticks) {
  //   s.update();
  //   s.render(ctx);
  // }

  Collision(dots);

  requestAnimationFrame(animate);
}

animate();
