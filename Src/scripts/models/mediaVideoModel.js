class MediasVideo {
  constructor(data) {
    this._video = data.video;
    this._date = data.date;
    this._id = data.id;
    this._like = data.likes;
    this._photographerId = data.photographerId;
    this._title = data.title;
    this._price = data.price;
  }
  get date() {
    return this._date;
  }
  get id() {
    return this._id;
  }
  get like() {
    return this._like;
  }
  get photographerId() {
    return this._photographerId;
  }
  get title() {
    return this._title;
  }
  get price() {
    return this._price;
  }
  get video() {
    return `./Src/assets/images/${this._video}`;
  }
}
