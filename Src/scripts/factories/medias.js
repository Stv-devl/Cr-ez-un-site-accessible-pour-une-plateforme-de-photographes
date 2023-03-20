//factory
function mediasFactory(data) {
  const { title, likes, image, video, id } = data;
  const picture = `./src/assets/images/${image}`;
  const getVideo = `./src/assets/images/${video}`;

  /*get title() {
    return this._title.hasOwnProperty("fr")
      ? this._title["fr"]
      : this._title["en"];
  }*/

  function getProfileDOMpage() {
    const article = document.createElement("article");
    article.setAttribute("class", "picture_card");
    article.setAttribute("id", id);
    //chose image or video (do an other function)
    if (data.hasOwnProperty("image")) {
      const img = document.createElement("img");
      img.setAttribute("src", picture);
      img.setAttribute("class", "pictures");

      article.appendChild(img);
    } else {
      const video = document.createElement("video");
      video.setAttribute("src", getVideo);
      video.setAttribute("class", "videos");
      article.appendChild(video);
    }
    /*information_wrapper*/
    const informationwrapper = document.createElement("div");
    informationwrapper.setAttribute("class", "information_wrapper");
    const titles = document.createElement("p");
    titles.setAttribute("class", "img_title");
    titles.textContent = title;
    /****like_wrapper****/
    const likewrapper = document.createElement("div");
    likewrapper.setAttribute("class", "like_wrapper");

    const likenumber = document.createElement("p");
    likenumber.setAttribute("class", "like_number");
    likenumber.textContent = likes;

    const i = document.createElement("i");
    i.setAttribute("class", "fa-solid fa-heart");

    article.appendChild(informationwrapper);
    informationwrapper.appendChild(titles);
    informationwrapper.appendChild(likewrapper);
    likewrapper.appendChild(likenumber);
    likewrapper.appendChild(i);
    return article;
  }

  return { title, likes, image, video, id, getProfileDOMpage };
}
