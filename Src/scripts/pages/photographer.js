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
      const videoTemplate = new PortfolioVideoCards(video);
      this.mediaSection.appendChild(videoTemplate.getPortfolioVideoCardDOM());
    });
    //send image card to be display in dom
    mediasImageFilter.forEach((image) => {
      const imageTemplate = new PortfolioPictureCards(image);
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
    dropdown();
  }
}

const app = new App();
function init() {
  app.displayData();
}

init();

function lightbox(data) {
  const imageContainer = document.querySelectorAll(".image_container");
  let getArrayNumber;

  //When we click on 1 picture of portfolio
  imageContainer.forEach((article) => {
    article.addEventListener("click", (e) => {
      //get the url of clicked picture
      let pictureSrc = article.children[0].getAttribute("src").split("/")[4];
      //filter data for get all url
      const getAllUrl = data.map((data) => {
        return data.image || data.video;
      });
      //get Array number will implement a number for each picture, here we find the array index of the picture who is clicked
      getArrayNumber = getAllUrl.findIndex((e) => e === pictureSrc);

      openLightbox();
      displayLightbox(data);
      slideLightbox(data, getAllUrl);
    });
  });

  function slideLightbox(data, getAllUrl) {
    //event at click on cross, remove image_wrapper when we close the lightbox
    closing.addEventListener("click", (e) => {
      deleteImageWrapper();
      closeLightbox();
    });
    //next event, at click on next, remove image_wrapper, change number of getArrayNumber
    nextBtn.addEventListener("click", (next) => {
      deleteImageWrapper();
      slideRight(data, getArrayNumber, getAllUrl);
    });
    //previous event, at click on next, remove image_wrapper, change number of getArrayNumber
    previousBtn.addEventListener("click", (previous) => {
      deleteImageWrapper();
      slideLeft(data, getAllUrl);
    });

    //keyboard event left
    window.addEventListener("keydown", (event) => {
      const keyboardNumber = event.key;
      if (keyboardNumber == "ArrowLeft") {
        deleteImageWrapper();
        slideLeft(data, getAllUrl);
      }
    });
    //keyboard event Right
    window.addEventListener("keydown", (event) => {
      const keyboardNumber = event.key;
      if (keyboardNumber == "ArrowRight") {
        deleteImageWrapper();
        slideRight(data, getAllUrl);
      }
    });

    //keyboard event Delete and escape
    window.addEventListener("keydown", (event) => {
      const keyboardNumber = event.key;
      console.log(keyboardNumber);
      if (keyboardNumber == "Escape" || keyboardNumber == "Delete") {
        deleteImageWrapper();
        closeLightbox();
      }
    });

    function deleteImageWrapper() {
      closing.parentElement.children[2].remove();
    }

    function slideRight(data, getAllUrl) {
      if (getArrayNumber >= getAllUrl.length - 1) {
        getArrayNumber = 0;
      } else {
        getArrayNumber++;
      }
      return displayLightbox(data);
    }
    function slideLeft(data, getAllUrl) {
      if (getArrayNumber <= 0) {
        getArrayNumber = getAllUrl.length - 1;
      } else {
        getArrayNumber--;
      }
      return displayLightbox(data);
    }
  }

  function displayLightbox(data) {
    const lightBoxWrapper = document.querySelector(".lightbox_wrapper");
    //get data of picture who is selected in lightbox with the getArrayNumber
    const getDataCard = [data[getArrayNumber]];
    //send datas to factory, launch the dom
    getDataCard.forEach((data) => {
      const lightBoxCard = new LightBoxFactory(data);
      lightBoxWrapper.appendChild(lightBoxCard);
    });
  }
}

//dropdown function
function dropdown() {
  dropDownBtn.addEventListener("click", (e) => {
    if (activeDropdown.classList == "dropdown_wrapper active")
      return closePopup();
    else {
      return openPopup();
    }
  });

  popular.addEventListener("click", (e) => {
    closePopup();
    popular.style.display = "none";
    btnText.textContent = "Popularité";
  });

  title.addEventListener("click", (e) => {
    popular.style.display = "flex";
    btnText.textContent = "Title";
    closePopup();
  });

  date.addEventListener("click", (e) => {
    popular.style.display = "flex";
    btnText.textContent = "Date";
    closePopup();
  });
}
