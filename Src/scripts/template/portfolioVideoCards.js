class PortfolioVideoCards {
  constructor(data) {
    this.portfolio = data;
  }
  getPortfolioVideoCardDOM() {
    const article = document.createElement("article");
    article.setAttribute("class", "picture_card");
    const container = document.createElement("button");
    container.setAttribute("class", "image_container");
    container.setAttribute(
      "aria-label",
      `${this.portfolio.title}, closeup view`
    );

    const video = document.createElement("video");
    video.setAttribute("src", this.portfolio.video);
    video.setAttribute("class", "videos");
    video.setAttribute(
      "title",
      `${this.portfolio.title} from ${this.portfolio.name}`
    );
    article.appendChild(container);
    container.appendChild(video);

    /*information_wrapper*/
    const informationwrapper = document.createElement("div");
    informationwrapper.setAttribute("class", "information_wrapper");
    const titles = document.createElement("h3");
    titles.setAttribute("class", "img_title");
    titles.textContent = this.portfolio.title;
    /****like_wrapper****/
    const likewrapper = document.createElement("button");
    likewrapper.setAttribute("class", "like_wrapper");
    const i = document.createElement("i");
    i.setAttribute("class", "fa-solid fa-heart");
    i.setAttribute("aria-label", "likes");
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

export default PortfolioVideoCards;
