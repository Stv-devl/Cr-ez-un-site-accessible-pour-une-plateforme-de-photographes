//api
import photographersApi from "../api/api.js";
//template
import photographersCard from "../template/photographersCards.js";

class App {
  constructor() {
    //get the Api
    this.dataApi = new photographersApi("./Src/data/photographers.json");
    //selection dom section for send articles
    this.photographersSection = document.querySelector(".photographer_section");
  }

  async displayData() {
    //get data from Api
    const { photographers } = await this.dataApi.get();

    //send photophraphers datas to class photographers
    photographers.forEach((photographer) => {
      const photographerTemplate = new photographersCard(photographer);
      this.photographersSection.appendChild(
        photographerTemplate.getUserCardDOM()
      );
    });
    getPhotographerId();
  }
}

//at click we keep the photographe id & send to save local storage
function getPhotographerId() {
  const photographerBtn = document.querySelectorAll(".photographer_btn");
  photographerBtn.forEach((element) => {
    element.addEventListener("click", () => {
      let elementId = element.parentElement.id;
      saveToLocalstorage(elementId);
    });
  });
}

//save photographer Id to local storage
function saveToLocalstorage(elementId) {
  let savingId = [];
  savingId.push(elementId);
  localStorage.setItem("Saving Id", JSON.stringify(savingId));
}

const app = new App();

function init() {
  app.displayData();
}

init();
