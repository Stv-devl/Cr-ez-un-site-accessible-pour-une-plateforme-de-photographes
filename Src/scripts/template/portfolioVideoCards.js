class PortfolioVideoCards {
  constructor(data) {
    this.portfolio = data;
  }
  getPortfolioVideoCardDOM() {
    const article = document.createElement("article");
    article.setAttribute("class", "picture_card");
    const container = document.createElement("div");
    container.setAttribute("class", "image_container");
    const video = document.createElement("video");
    video.setAttribute("src", this.portfolio.video);
    video.setAttribute("class", "videos");
    article.appendChild(container);
    container.appendChild(video);
    return article;
  }
}
