class Vect2 {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  static sub(vect1: Vect2, vect2: Vect2): Vect2 {
    return new Vect2(vect1.x - vect2.x, vect1.y - vect2.y);
  }

  static dist(vect1: Vect2, vect2: Vect2): number {
    return Math.sqrt(
      Math.pow(vect1.x - vect2.x, 2) + Math.pow(vect1.y - vect2.y, 2)
    );
  }

  static mul(vect: Vect2, quotient: number) {
    vect.x *= quotient;
    vect.y *= quotient;

    return vect;
  }

  static mag(vect: Vect2): number {
    return Math.sqrt(vect.x * vect.x + vect.y * vect.y);
  }

  setXY(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  mul(quotient: number) {
    this.x *= quotient;
    this.y *= quotient;
  }

  add(vectB: Vect2) {
    this.x += vectB.x;
    this.y += vectB.y;
  }

  magSq(): number {
    return this.x * this.x + this.y * this.y;
  }

  mag(): number {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }

  dist(vect2: Vect2): number {
    return Math.sqrt(
      Math.pow(this.x - vect2.x, 2) + Math.pow(this.y - vect2.y, 2)
    );
  }
}
export default Vect2;
