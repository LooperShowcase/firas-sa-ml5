class Obstacle {
  constructor() {
    this.size = 100;
    this.x = width;
    this.y = height - this.size;
  }

  show() {
    image(obsImg, this.x, this.y, this.size, this.size - 100);
  }
  move() {
    this.x -= 6;
    //this.x = this.x - 6;
  }
}
