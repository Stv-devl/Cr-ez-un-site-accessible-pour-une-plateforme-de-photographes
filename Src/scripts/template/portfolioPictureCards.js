class PortfolioPictureCards {
  constructor(data) {
    this.portfolio = data;
  }
  getPortfolioImageCardDOM() {
    const article = document.createElement("article");
    article.setAttribute("class", "picture_card");
    const container = document.createElement("div");
    container.setAttribute("class", "image_container");
    if (this.portfolio.image) {
      const img = document.createElement("img");
      img.setAttribute("src", this.portfolio.image);
      img.setAttribute("class", "pictures");
      article.appendChild(container);
      container.appendChild(img);
    } else {
      const video = document.createElement("video");
      video.setAttribute("src", this.portfolio.video);
      video.setAttribute("class", "videos");
      article.appendChild(container);
      container.appendChild(video);
    }
    /*information_wrapper*/
    const informationwrapper = document.createElement("div");
    informationwrapper.setAttribute("class", "information_wrapper");
    const titles = document.createElement("p");
    titles.setAttribute("class", "img_title");
    titles.textContent = this.portfolio.title;
    /****like_wrapper****/
    const likewrapper = document.createElement("div");
    likewrapper.setAttribute("class", "like_wrapper");
    const likenumber = document.createElement("p");
    likenumber.setAttribute("class", "like_number");
    likenumber.textContent = this.portfolio.like;
    const i = document.createElement("i");
    i.setAttribute("class", "fa-solid fa-heart");

    informationwrapper.appendChild(titles);
    informationwrapper.appendChild(likewrapper);
    likewrapper.appendChild(likenumber);
    likewrapper.appendChild(i);
    article.appendChild(informationwrapper);

    return article;
  }
}
