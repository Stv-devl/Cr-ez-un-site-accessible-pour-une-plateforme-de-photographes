class MediaTextCard {
  constructor(data) {
    this.text = data;
  }
  getTextCardDOM() {
    const informationwrapper = document.createElement("div");
    informationwrapper.setAttribute("class", "information_wrapper");
    /*information_wrapper*/
    const titles = document.createElement("p");
    titles.setAttribute("class", "img_title");
    titles.textContent = this.text.title;
    /****like_wrapper****/
    const likewrapper = document.createElement("div");
    likewrapper.setAttribute("class", "like_wrapper");
    const likenumber = document.createElement("p");
    likenumber.setAttribute("class", "like_number");
    likenumber.textContent = this.text.like;
    const i = document.createElement("i");
    i.setAttribute("class", "fa-solid fa-heart");
    i.setAttribute("aria-hidden", "true");
    informationwrapper.appendChild(titles);
    informationwrapper.appendChild(likewrapper);
    likewrapper.appendChild(likenumber);
    likewrapper.appendChild(i);
    return informationwrapper;
  }
}
export default MediaTextCard;
