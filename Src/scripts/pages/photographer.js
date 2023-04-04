//api
import photographersApi from "../api/api.js";
//factory
import MediasFactory from "../factories/mediaFactory.js";
//model
/*
import MediasImage from "../models/mediaImageModel.js";
import MediasVideo from "../models/mediaVideoModel.js";
import Photographers from "../models/photographersModel.js";*/
import ProfilModel from "../models/profilModel.js";
//template
import LightBoxImageCard from "../template/lightboxImageCard.js";
/*
import MediaTextCard from "../template/MediaTextCards.js";
import photographersCard from "../template/photographersCards.js";*/
import PortfolioPictureCards from "../template/portfolioPictureCards.js";
import ProfilCard from "../template/ProfilCard.js";
//template
import ContactForm from "../utils/contactForm.js";

class App {
  constructor() {
    this.dataApi = new photographersApi("./Src/data/photographers.json");
    this.mediaSection = document.querySelector(".medias_articles");
    this.photographHeader = document.querySelector(".photograph-header");
    this.photographFooter = document.querySelector(".footer");
    this.choice = "popular";
  }

  async displayData() {
    const gettAllData = await this.dataApi.get();
    const mediasData = gettAllData.media;
    const photographersData = gettAllData.photographers;

    //delete all display from page when change the filter (popular, date, title)
    this.mediaSection.innerHTML = "";
    this.photographHeader.innerHTML = "";
    this.photographFooter.innerHTML = "";

    //get photographer Id from local storage,
    const recupId = JSON.parse(localStorage.getItem("Saving Id"))[0];

    //filter photographer profil with Id
    const photographeProfilFilter = photographersData.filter(
      (getId) => getId.id == recupId
    );
    //filter mediasData for get images corresponding to photographerId
    const mediasDataFilter = mediasData.filter(
      (getId) => getId.photographerId == recupId
    );

    //filter popularity, date and title
    switch (this.choice) {
      case "title":
        mediasDataFilter.sort((a, b) => (a.title > b.title ? 1 : -1));
        break;
      case "date":
        mediasDataFilter.sort((a, b) => (a.date > b.date ? 1 : -1));
        break;
      default:
        mediasDataFilter.sort((a, b) => b.likes - a.likes);
    }

    //Create the media objects
    const sendMediaDatas = mediasDataFilter.map(
      (media) => new MediasFactory(media)
    );

    // Display the media objects
    sendMediaDatas.forEach((image) => {
      const imageTemplate = new PortfolioPictureCards(image);
      this.mediaSection.appendChild(imageTemplate.getPortfolioImageCardDOM());
    });

    // Display the photographer profile
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

    const lightBox = new LightBox(mediasDataFilter);
    const contactform = new ContactForm();
    lightBox.lightbox();
    this.likeImage();
    contactform.launch();
  }

  likeImage() {
    const likeWrapper = document.querySelectorAll(".like_wrapper");
    const footerLikeNumber = document.querySelector(".footer_like_number");

    likeWrapper.forEach((likeWrapper) => {
      likeWrapper.addEventListener("click", (e) => {
        e.preventDefault();
        likeWrapper.classList.toggle("toggle_active");

        let like = likeWrapper.parentElement.children[2];
        let likenumber = parseInt(like.textContent); //parsint for make the text be number
        if (likeWrapper.classList.contains("toggle_active")) {
          like.textContent = likenumber + 1;
          launchCounting();
        } else {
          like.textContent = likenumber - 1;
          launchCounting();
        }
      });
    });

    function launchCounting() {
      let total = [];
      likeWrapper.forEach((likewrapper) => {
        total.push(parseInt(likewrapper.parentElement.children[2].textContent));
      });
      let displayToFooter = total.reduce((a, b) => a + b, 0);
      footerLikeNumber.textContent = displayToFooter;
    }
    launchCounting();
  }

  //dropdown function
  dropdown() {
    const dropdownItems = document.querySelectorAll(".dropdown_text");
    const dropdownIcone = document.querySelector(".dropdown_icone");
    const activeDropdown = document.getElementById("activeDropdown");
    const dropDownBtn = document.getElementById("dropDownBtn");
    const popular = document.getElementById("popular");
    const title = document.getElementById("title");
    const date = document.getElementById("date");

    function openPopup() {
      activeDropdown.classList.add("active");
      dropdownIcone.classList.add("rotate");
      dropdownItems.forEach((item) => item.setAttribute("tabindex", "0"));
      dropDownBtn.setAttribute("aria-expanded", "true");
      dropDownBtn.setAttribute("tabindex", "0");
    }

    function closePopup() {
      activeDropdown.classList.remove("active");
      dropdownIcone.classList.remove("rotate");
      dropdownItems.forEach((item) => item.setAttribute("tabindex", "-1"));
      dropDownBtn.setAttribute("aria-expanded", "false");
      dropDownBtn.setAttribute("tabindex", "0");
    }

    dropDownBtn.addEventListener("click", () => {
      if (activeDropdown.classList.contains("active")) return closePopup();
      else {
        return openPopup();
      }
    });
    popular.addEventListener("click", () => {
      popular.style.display = "none";
      dropDownBtn.textContent = "Popularité";
      this.choice = "popular";
      closePopup();
      app.displayData();
    });
    title.addEventListener("click", () => {
      popular.style.display = "flex";
      dropDownBtn.textContent = "Title";
      this.choice = "title";
      closePopup();
      app.displayData();
    });
    date.addEventListener("click", () => {
      popular.style.display = "flex";
      dropDownBtn.textContent = "Date";
      this.choice = "date";
      closePopup();
      app.displayData();
    });
  }
}

/*
class LikeImplementing {
  constructor() {}
}*/

class LightBox {
  constructor(data) {
    this.imageContainer = document.querySelectorAll(".image_container");
    this.lightBoxWrapper = document.querySelector(".lightbox_wrapper");
    this.closing = document.getElementById("closing");
    this.nextBtn = document.getElementById("nextBtn");
    this.previousBtn = document.getElementById("previousBtn");
    this.lightboxContainer = document.getElementById("lightboxContainer");
    this.data = data;
    this.getIndexNumber = 0;
    this.pictureSrc = "";
    //filter data for get all url
    this.getAllUrl = data.map((data) => {
      return data.image || data.video;
    });
  }

  lightbox() {
    //When we click on 1 picture of portfolio
    this.imageContainer.forEach((article) => {
      article.addEventListener("click", () => {
        //get the url of clicked picture
        this.pictureSrc = article.children[0].getAttribute("src").split("/")[4];
        //get Array number will implement a number for each picture, here we find the array index of the picture who is clicked
        this.getIndexNumber = this.getAllUrl.findIndex(
          (e) => e === this.pictureSrc
        );
        this.openLightbox();
        this.displayLightbox();
        this.slideLightbox();
      });
    });
  }

  slideLightbox() {
    //event at click on cross, remove image_wrapper when we close the lightbox
    this.closing.addEventListener("click", () => {
      this.deleteImageWrapper();
      this.closeLightbox();
    });
    //next event, at click on next, remove image_wrapper, change number of getArrayNumber
    this.nextBtn.addEventListener("click", () => {
      this.deleteImageWrapper();
      this.slideRight();
    });
    //previous event, at click on next, remove image_wrapper, change number of getArrayNumber
    this.previousBtn.addEventListener("click", () => {
      this.deleteImageWrapper();
      this.slideLeft();
    });
    //keyboard event left
    window.addEventListener("keydown", (event) => {
      const keyboardNumber = event.key;
      if (keyboardNumber == "ArrowLeft") {
        this.deleteImageWrapper();
        this.slideLeft();
      }
    });
    //keyboard event Right
    window.addEventListener("keydown", (event) => {
      const keyboardNumber = event.key;
      if (keyboardNumber == "ArrowRight") {
        this.deleteImageWrapper();
        this.slideRight();
      }
    });
    //keyboard event Delete and escape
    window.addEventListener("keydown", (event) => {
      const keyboardNumber = event.key;
      if (keyboardNumber == "Escape" || keyboardNumber == "Delete") {
        this.deleteImageWrapper();
        this.closeLightbox();
      }
    });
  }
  //when we move on left or right or close we will delete the image wrapper
  deleteImageWrapper() {
    const imageWrapper = document.getElementById("imageWrapper");
    imageWrapper ? imageWrapper.remove() : null;
  }
  //slide on righ
  slideRight() {
    if (this.getIndexNumber >= this.getAllUrl.length - 1) {
      this.getIndexNumber = 0;
    } else {
      this.getIndexNumber++;
    }
    return this.displayLightbox();
  }
  //slide on left
  slideLeft() {
    if (this.getIndexNumber <= 0) {
      this.getIndexNumber = this.getAllUrl.length - 1;
    } else {
      this.getIndexNumber--;
    }
    return this.displayLightbox();
  }
  //display the light box in the dom
  displayLightbox() {
    const imageWrapper = document.getElementById("imageWrapper");
    //get data of picture who is selected in lightbox with the getArrayNumber
    const getDataCard = [this.data[this.getIndexNumber]];
    //create lightBoxCard methode and launch the dom, only if imageWrapper doesn't exist (if not all the time a user press Entrer we will get a new imageWrapper)
    if (!imageWrapper) {
      getDataCard.forEach((data) => {
        const lightBoxCard = new LightBoxImageCard(data);
        this.lightBoxWrapper.appendChild(lightBoxCard.lightBoxImageCardDom());
      });
    }
  }
  openLightbox() {
    this.lightboxContainer.style.display = "flex";
  }
  closeLightbox() {
    this.lightboxContainer.style.display = "none";
  }
}

const app = new App();

function init() {
  app.displayData();
  app.dropdown();
}

init();

export default App;
