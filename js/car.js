class Car {
  constructor() {
    const img = document.createElement('img');
    img.onload = () => {
      this.img = img;
      
      const imgRatio = img.naturalWidth/img.naturalHeight;
      this.x = x;
      this.y =y;
      this.w = 100;
      this.h = imgRatio * this.w;
      // TODO
    }
    img.src = "images/car.png";
  }

  draw() {
    if (!this.img) return; // if `this.img` is not loaded yet => don't draw

    // TODO
  }

  moveLeft() {
    // TODO
  }
  moveRight() {
    // TODO
  }
}