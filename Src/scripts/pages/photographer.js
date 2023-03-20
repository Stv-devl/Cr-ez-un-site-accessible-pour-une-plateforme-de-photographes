//displaydata
async function displayData(medias, photographerProfil) {
  const mediaSection = document.querySelector(".medias_articles");
  const photographHeader = document.querySelector(".photograph-header");

  console.log(photographerProfil);

  medias.forEach((media) => {
    const mediasModel = mediasFactory(media);
    const mediaCardDOM = mediasModel.getProfileDOMpage();
    mediaSection.appendChild(mediaCardDOM);
  });
  photographerProfil.forEach((profil) => {
    const photographerProfilModel = photographerFactory(profil);
    const photographerProfilDOM = photographerProfilModel.photographerProfil();
    photographHeader.appendChild(photographerProfilDOM);
  });
}

// Get data from fetch, launch display function with photograpers data
async function init() {
  const { medias } = await getPhotographers();
  const { photographerProfil } = await getPhotographers();
  displayData(medias, photographerProfil);
}

init();
