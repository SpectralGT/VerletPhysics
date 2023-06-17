import Dot from "./Dot";
import Vect2 from "./Utils/vect2";

class Stick {
  startPoint: Dot;
  endPoint: Dot;
  length: number = 100;
  stiffness: number = 2;
  color: string = "#f5476a";

  constructor(dot1: Dot, dot2: Dot, length?: number) {
    this.startPoint = dot1;
    this.endPoint = dot2;

    if (length == undefined) {
      this.length = this.startPoint.pos.dist(this.endPoint.pos);
    } else {
      this.length = length as number;
    }
  }

  update() {
    let diff = Vect2.sub(this.startPoint.pos, this.endPoint.pos);
    let diffLenght = Vect2.mag(diff);
    let diffFactor = ((this.length - diffLenght) / diffLenght) * 0.5;
    let offset = Vect2.mul(diff, diffFactor);

    this.startPoint.pos.x += offset.x;
    this.startPoint.pos.y += offset.y;
    this.endPoint.pos.x -= offset.x;
    this.endPoint.pos.y -= offset.y;

    // this.endPoint.accl = this.startPoint.accl;
    this.startPoint.accl =this.endPoint.accl;
  }

  render(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = "#ffffff";

    ctx.beginPath();
    ctx.moveTo(this.startPoint.pos.x, this.startPoint.pos.y);
    ctx.lineTo(this.endPoint.pos.x, this.endPoint.pos.y);

    ctx.stroke();
  }
}

export default Stick;
