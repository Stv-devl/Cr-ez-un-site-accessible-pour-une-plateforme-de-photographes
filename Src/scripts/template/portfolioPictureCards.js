class portfolioPictureCards {
  constructor(data) {
    this.portfolio = data;
  }
  getPortfolioImageCardDOM() {
    const article = document.createElement("article");
    article.setAttribute("class", "picture_card");
    const img = document.createElement("img");
    img.setAttribute("src", this.portfolio.image);
    img.setAttribute("class", "pictures");
    article.appendChild(img);
    return article;
  }
}
