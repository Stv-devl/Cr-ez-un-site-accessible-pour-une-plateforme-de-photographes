import MediasImage from "../models/mediaImageModel.js";
import MediasVideo from "../models/mediaVideoModel.js";

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

export default MediasFactory;
