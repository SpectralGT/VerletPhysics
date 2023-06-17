import Vect2 from "./Utils/vect2";

class Dot {
  pos: Vect2;
  oldPos: Vect2;
  vel: Vect2 = new Vect2(0, 0);
  accl: Vect2 = new Vect2(0, 0);
  force: Vect2 = new Vect2(10000, 20000);
  gravity: Vect2 = new Vect2(0, -100);
  mass: number = 1;
  radius: number = 20;
  color: string ="#"+ Math.floor(Math.random() * 16777215 ).toString(16);

  constructor(x: number, y: number) {
    this.pos = new Vect2(x, y);
    this.oldPos = this.pos;
    this.accl.setXY(this.force.x / this.mass, this.force.y / this.mass);
  }

  update(CANVAS_HEIGHT: number, deltaTime: number) {
    const prevPost = this.pos;

    this.pos.x =
      2 * this.pos.x - this.oldPos.x + this.accl.x * (deltaTime * deltaTime);
    this.pos.y =
      2 * this.pos.y - this.oldPos.y + this.accl.y * (deltaTime * deltaTime);

    this.oldPos = prevPost;

    this.accl.y += this.gravity.y;
  }

  constrain(CANVAS_HEIGHT: number, CANVAS_WIDTH: number) {
    //vertical constrains
    if (this.pos.y < this.radius) {
      this.pos.y = this.radius;
      this.accl.y = -this.accl.y;
    }

    if (this.pos.y > CANVAS_HEIGHT - this.radius) {
      this.pos.y = CANVAS_HEIGHT - this.radius;
      this.accl.y = -this.accl.y;
    }

    //horizontal constrains
    if (this.pos.x < this.radius) {
      this.pos.x = this.radius;
      this.accl.x = -this.accl.x;
    }

    if (this.pos.x > CANVAS_WIDTH - this.radius) {
      this.pos.x = CANVAS_WIDTH - this.radius;
      this.accl.x = -this.accl.x;
    }
  }

  render(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.pos.x, this.pos.y, this.radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();
  }
}

export default Dot;
