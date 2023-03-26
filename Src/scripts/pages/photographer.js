class App {
  constructor() {
    this.dataApi = new photographersApi("./Src/data/photographers.json");
    this.mediaSection = document.querySelector(".medias_articles");
    this.photographHeader = document.querySelector(".photograph-header");
    this.photographFooter = document.querySelector(".footer");
  }

  async displayData() {
    const gettAllData = await this.dataApi.get();
    const mediasData = gettAllData.media;
    const photographersData = gettAllData.photographers;

    //get photographer Id from local storage,
    const recupId = JSON.parse(localStorage.getItem("Saving Id"))[0];
    //filter mediasData for get images corresponding to photographerId
    const mediasDataFilter = mediasData.filter(function (getId) {
      return getId.photographerId == recupId;
    });
    //send Media Datas to factory
    const sendMediaDatas = mediasDataFilter.map(
      (media) => new MediasFactory(media)
    );

    //filter mediasDataFilter for get only videos
    const mediasVideoFilter = sendMediaDatas.filter(function (getVideo) {
      return getVideo.video;
    });
    //filter mediasDataFilter for get only images
    const mediasImageFilter = sendMediaDatas.filter(function (getImage) {
      return getImage.image;
    });
    //send video card to be display in dom
    mediasVideoFilter.forEach((video) => {
      const videoTemplate = new portfolioVideoCards(video);
      this.mediaSection.appendChild(videoTemplate.getPortfolioVideoCardDOM());
    });
    //send image card to be display in dom
    mediasImageFilter.forEach((image) => {
      const imageTemplate = new portfolioPictureCards(image);
      this.mediaSection.appendChild(imageTemplate.getPortfolioImageCardDOM());
    });

    const articleCard = document.querySelectorAll(".picture_card");
    //send text card to be display in dom
    mediasDataFilter
      .map((data) => new MediasText(data))
      //index get the index of the map array
      .forEach((data, index) => {
        const mediaTextTemplate = new MediaTextCard(data);
        articleCard[index].appendChild(mediaTextTemplate.getTextCardDOM());
      });

    //filter photographer profil with Id
    const photographeProfilFilter = photographersData.filter(function (getId) {
      return getId.id == recupId;
    });

    //send text card to photographerProfil
    photographeProfilFilter
      .map((data) => new ProfilModel(data))
      .forEach((data) => {
        const mediaProfileTemplate = new ProfilCard(data);
        this.photographHeader.appendChild(
          mediaProfileTemplate.getProfilCardDOM()
        );
        this.photographFooter.appendChild(
          mediaProfileTemplate.getFooterCardDOM()
        );
      });
    lightbox(mediasDataFilter);
  }
}

const app = new App();
function init() {
  app.displayData();
}

init();

function lightbox(data) {
  const pictureCard = document.querySelectorAll(".picture_card");

  //When we click on 1 picture of portfolio
  pictureCard.forEach((article) => {
    article.addEventListener("click", (e) => {
      //get the url of clicked picture
      let pictureSrc = article.children[0].getAttribute("src").split("/")[4];
      let getArrayNumber;

      //filter data for get all url
      const getAllUrl = data.map((data) => {
        return data.image || data.video;
      });

      //get Array number will implement a number for each picture, here we find the array index of the picture who is clicked
      getArrayNumber = getAllUrl.findIndex((e) => e === pictureSrc);

      openLightbox();
      displayLightbox(data, getArrayNumber);
      slideLightbox(data, getArrayNumber, getAllUrl);
    });
  });
  //event at click on cross, remove image_wrapper when we close the lightbox
  closing.addEventListener("click", (e) => {
    e.target.parentElement.parentElement.children[2].remove();
    closeLightbox();
  });

  //next event, at click on next, remove image_wrapper, change number of getArrayNumber
  function slideLightbox(data, getArrayNumber, getAllUrl) {
    nextBtn.addEventListener("click", (next) => {
      next.target.parentNode.parentNode.parentNode.children[2].remove();

      if (getArrayNumber >= getAllUrl.length - 1) {
        getArrayNumber = 0;
      } else {
        getArrayNumber++;
      }
      displayLightbox(data, getArrayNumber);
    });

    //previous event, at click on next, remove image_wrapper, change number of getArrayNumber
    previousBtn.addEventListener("click", (previous) => {
      previous.target.parentNode.parentNode.parentNode.children[2].remove();

      if (getArrayNumber <= 0) {
        getArrayNumber = getAllUrl.length - 1;
      } else {
        getArrayNumber--;
      }
      displayLightbox(data, getArrayNumber);
    });
  }
}

function displayLightbox(data, getArrayNumber) {
  const lightBoxWrapper = document.querySelector(".lightbox_wrapper");
  //get data of picture who is selected in lightbox with the getArrayNumber
  const getDataCard = [data[getArrayNumber]];

  //send datas to factory, launch the dom
  getDataCard.forEach((data) => {
    const lightBoxCard = new LightBoxFactory(data);
    lightBoxWrapper.appendChild(lightBoxCard);
  });
}
