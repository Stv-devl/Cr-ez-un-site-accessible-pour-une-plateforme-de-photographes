class LightBoxVideoCard {
  constructor(data) {
    this.lightBoxVideo = data;
    console.log(data);
  }
  lightBoxVideoCardDom() {
    const videosource = `./src/assets/images/${this.lightBoxVideo.video}`;
    const video = document.createElement("video");
    const imageWrapper = document.createElement("div");
    imageWrapper.setAttribute("class", "image_wrapper");
    video.setAttribute("src", videosource);
    video.setAttribute("class", "lightbox_videos");
    imageWrapper.appendChild(video);
    return imageWrapper;
  }
}
