import Dot from "./Dot";
import Vect2 from "./Utils/vect2";

function Collision(dots: Dot[]): void {
  for (let i = 0; i < dots.length; i++) {
    for (let j = 0; j < dots.length && j != i; j++) {
      let radiusSum = dots[i].radius + dots[j].radius;

      if (Vect2.dist(dots[i].pos, dots[j].pos) < radiusSum) {
        let diff = Vect2.sub(dots[i].pos, dots[j].pos);
        let diffLenght = Vect2.mag(diff);
        let percentage = ((radiusSum - diffLenght) / diffLenght) * 0.5;
        let offset = Vect2.mul(diff, percentage * 2);

        dots[i].pos.x += offset.x;
        dots[i].pos.y += offset.y;
        dots[j].pos.x -= offset.x;
        dots[j].pos.y -= offset.y;

        dots[i].accl.x = -dots[i].accl.x * 0.9;
        dots[i].accl.y = -dots[i].accl.y * 0.9;
        dots[j].accl.y = -dots[j].accl.y * 0.9;
        dots[j].accl.x = -dots[j].accl.x * 0.9;
      }
    }
  }
}

export default Collision;
