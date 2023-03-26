class MediasFactory {
  constructor(data) {
    if (!data.video) {
      return new MediasImage(data);
    } else if (!data.image) {
      return new MediasVideo(data);
    } else {
      throw "Error";
    }
  }
}
