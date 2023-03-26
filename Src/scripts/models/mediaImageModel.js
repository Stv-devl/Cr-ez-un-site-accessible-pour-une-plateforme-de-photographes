class MediasImage {
  constructor(data) {
    this._image = data.image;
  }
  get image() {
    return `./Src/assets/images/${this._image}`;
  }
}
