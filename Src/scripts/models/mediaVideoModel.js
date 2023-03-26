class MediasVideo {
  constructor(data) {
    this._video = data.video;
  }
  get video() {
    return `./Src/assets/images/${this._video}`;
  }
}
