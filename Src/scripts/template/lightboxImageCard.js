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
    const title = document.createElement("p");
    title.setAttribute("class", "lightbox_title");
    title.textContent = this.lightboxImage.title;
    imageWrapper.appendChild(img);
    imageWrapper.appendChild(title);

    return imageWrapper;
  }
}
