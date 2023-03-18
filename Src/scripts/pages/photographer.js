//get Json with Fetch send variable photographers with Json data
async function getMedias(medias) {
  try {
    const response = await fetch(`./Src/data/photographers.json`);

    if (!response.ok) {
      throw new Error("HTTP error, status = " + response.status);
    }
    const data = await response.json();

    //get photographer Id from local storage
    let savingId = JSON.parse(localStorage.getItem("Saving Id")); /*||[]*/
    let recupId = savingId[0];
    //get all medias
    let getMedias = data.media;
    //filter media with photographer Id
    medias = getMedias.filter(function (getId) {
      return getId.photographerId == recupId;
    });

    return {
      medias,
    };
  } catch (error) {
    return;
  }
}
//displaydata
async function displayData(medias) {
  const mediaSection = document.querySelector(".medias_articles");

  console.log(medias);

  medias.forEach((media) => {
    console.log(media);
    const mediasModel = mediasFactory(media);
    const mediaCardDOM = mediasModel.getProfileDOMpage();
    mediaSection.appendChild(mediaCardDOM);
  });
}

// Get data from fetch, launch display function with photograpers data
async function init() {
  const { medias } = await getMedias();
  displayData(medias);
}

init();
