export default class Vehicle {
  #img;

  constructor(data) {
    this.speed = data.speed;
    this.brand = data.brand;
    this.imagePath = data.image;

    this.build();
  }

  build() {
    this.#img = document.createElement("img");
    this.#img.src = this.imagePath;

    document.body.appendChild(this.#img);
  }

  destroy () {
    document.body.removeChild(this.#img);
  }
}
