class LightBoxVideoCard {
  constructor(data) {
    this.lightBoxVideo = data;
    console.log(this.lightBoxVideo.title);
  }
  lightBoxVideoCardDom() {
    const videosource = `./Src/assets/images/${this.lightBoxVideo.video}`;
    const video = document.createElement("video");
    const imageWrapper = document.createElement("div");
    imageWrapper.setAttribute("class", "image_wrapper");
    video.setAttribute("controls", "");
    video.setAttribute("preload", "metadata");
    video.setAttribute("class", "lightbox_videos");
    const source = document.createElement("source");
    source.setAttribute("src", videosource);
    source.setAttribute("type", "video/mp4");
    const title = document.createElement("p");
    title.setAttribute("class", "lightbox_title");
    title.textContent = this.lightBoxVideo.title;
    video.appendChild(source);
    imageWrapper.appendChild(video);
    imageWrapper.appendChild(title);
    return imageWrapper;
  }
}
