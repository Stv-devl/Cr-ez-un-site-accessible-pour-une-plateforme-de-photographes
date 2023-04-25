class LightBoxImageCard {
  constructor(data) {
    this.lightboxImage = data;
    console.log(`${this.lightboxImage.video}`);
  }
  lightBoxImageCardDom() {
    const imageWrapper = document.createElement("div");
    imageWrapper.setAttribute("class", "image_wrapper");
    imageWrapper.setAttribute("id", "imageWrapper");
    if (!this.lightboxImage.video) {
      const picture = `${this.lightboxImage.image}`;
      const img = document.createElement("img");
      img.setAttribute("src", picture);
      img.setAttribute("class", "lightbox_pictures");
      img.setAttribute("alt", this.lightboxImage.title);
      imageWrapper.appendChild(img);
    } else {
      const videosource = `${this.lightboxImage.video}`;
      const video = document.createElement("video");
      video.setAttribute("controls", "");
      video.setAttribute("preload", "metadata");
      video.setAttribute("class", "lightbox_videos");
      video.setAttribute("title", this.lightboxImage.title);
      const source = document.createElement("source");
      source.setAttribute("src", videosource);
      source.setAttribute("type", "video/mp4");
      video.appendChild(source);
      imageWrapper.appendChild(video);
    }
    const title = document.createElement("h3");
    title.setAttribute("class", "lightbox_title");
    title.textContent = this.lightboxImage.title;
    imageWrapper.appendChild(title);

    return imageWrapper;
  }
}
export default LightBoxImageCard;
