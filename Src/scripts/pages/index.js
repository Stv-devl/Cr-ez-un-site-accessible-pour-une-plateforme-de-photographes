//displaydata, launch photographerFactory(), send each photographer data to factory photographerFactory
async function displayData(photographers) {
  const photographersSection = document.querySelector(".photographer_section");

  //get data from each photographer
  photographers.forEach((photographer) => {
    const photographerModel = photographerFactory(photographer);
    const userCardDOM = photographerModel.getUserCardDOM();
    photographersSection.appendChild(userCardDOM);
  });

  const photographerBtn = document.querySelectorAll(".photographer_btn");

  //at click keep the photographe id & send to save local storage
  photographerBtn.forEach((element) => {
    element.addEventListener("click", (e) => {
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

// Get data from fetch, launch display function with photograpers data
async function init() {
  const { photographers } = await getPhotographers();
  displayData(photographers);
}

init();
