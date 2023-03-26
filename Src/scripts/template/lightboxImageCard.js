class LightBoxImageCard {
  constructor(data) {
    this.lightboxImage = data;
  }
  lightBoxImageCardDom() {
    const picture = `./Src/assets/images/${this.lightboxImage.image}`;

    const imageWrapper = document.createElement("div");
    imageWrapper.setAttribute("class", "image_wrapper");
    const img = document.createElement("img");
    img.setAttribute("src", picture);
    img.setAttribute("class", "lightbox_pictures");
    imageWrapper.appendChild(img);

    return imageWrapper;
  }
}
