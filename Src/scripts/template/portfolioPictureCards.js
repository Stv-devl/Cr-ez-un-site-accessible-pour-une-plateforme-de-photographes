class PortfolioPictureCards {
  constructor(data) {
    this.portfolio = data;
  }
  getPortfolioImageCardDOM() {
    const article = document.createElement("article");
    article.setAttribute("class", "picture_card");
    const container = document.createElement("div");
    container.setAttribute("class", "image_container");
    const img = document.createElement("img");
    img.setAttribute("src", this.portfolio.image);
    img.setAttribute("class", "pictures");
    article.appendChild(container);
    container.appendChild(img);
    return article;
  }
}
