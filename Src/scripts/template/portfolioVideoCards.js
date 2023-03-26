class PortfolioVideoCards {
  constructor(data) {
    this.portfolio = data;
  }
  getPortfolioVideoCardDOM() {
    const article = document.createElement("article");
    article.setAttribute("class", "picture_card");
    const video = document.createElement("video");
    video.setAttribute("src", this.portfolio.video);
    video.setAttribute("class", "videos");
    article.appendChild(video);
    return article;
  }
}
