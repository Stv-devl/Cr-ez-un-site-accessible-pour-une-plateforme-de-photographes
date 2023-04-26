class PortfolioPictureCards {
  constructor(data) {
    this.portfolio = data;
  }
  getPortfolioImageCardDOM() {
    const article = document.createElement("article");
    article.setAttribute("class", "picture_card");
    const container = document.createElement("button");
    container.setAttribute("class", "image_container");
    container.setAttribute(
      "aria-label",
      `${this.portfolio.title}, closeup view`
    );
    const img = document.createElement("img");
    img.setAttribute("src", this.portfolio.image);
    img.setAttribute("class", "pictures");
    img.setAttribute("alt", `${this.portfolio.title}`);
    article.appendChild(container);
    container.appendChild(img);

    /*information_wrapper*/
    const informationwrapper = document.createElement("div");
    informationwrapper.setAttribute("class", "information_wrapper");
    const titles = document.createElement("h3");
    titles.setAttribute("class", "img_title");
    titles.textContent = this.portfolio.title;
    /****like_wrapper****/
    const likewrapper = document.createElement("button");
    likewrapper.setAttribute("class", "like_wrapper");
    likewrapper.setAttribute("aria-label", "like this picture");
    const i = document.createElement("i");
    i.setAttribute("class", "fa-solid fa-heart");
    /****span for text in button****/
    const textbutton = document.createElement("span");
    textbutton.setAttribute("class", "text_button");
    textbutton.textContent = this.portfolio.like;
    informationwrapper.appendChild(titles);
    informationwrapper.appendChild(likewrapper);
    informationwrapper.appendChild(textbutton);
    likewrapper.appendChild(i);
    article.appendChild(informationwrapper);

    return article;
  }
}

export default PortfolioPictureCards;
