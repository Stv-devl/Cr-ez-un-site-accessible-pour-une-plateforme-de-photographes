class LightBoxImageCard {
  constructor(data) {
    this.lightboxImage = data;
    console.log(!this.lightboxImage.video);
  }
  lightBoxImageCardDom() {
    const imageWrapper = document.createElement("div");
    imageWrapper.setAttribute("class", "image_wrapper");
    imageWrapper.setAttribute("id", "imageWrapper");
    if (!this.lightboxImage.video) {
      const picture = `./Src/assets/images/${this.lightboxImage.image}`;
      const img = document.createElement("img");
      img.setAttribute("src", picture);
      img.setAttribute("class", "lightbox_pictures");
      imageWrapper.appendChild(img);
    } else {
      const videosource = `./Src/assets/images/${this.lightboxImage.video}`;
      const video = document.createElement("video");
      video.setAttribute("controls", "");
      video.setAttribute("preload", "metadata");
      video.setAttribute("class", "lightbox_videos");
      const source = document.createElement("source");
      source.setAttribute("src", videosource);
      console.log(source);
      source.setAttribute("type", "video/mp4");
      video.appendChild(source);
      imageWrapper.appendChild(video);
    }
    const title = document.createElement("p");
    title.setAttribute("class", "lightbox_title");
    title.textContent = this.lightboxImage.title;
    imageWrapper.appendChild(title);

    return imageWrapper;
  }
}
