//displaydata
async function displayData(medias, photographerProfil) {
  const mediaSection = document.querySelector(".medias_articles");
  const photographHeader = document.querySelector(".photograph-header");
  const photographFooter = document.querySelector(".footer");

  console.log(medias);

  //get data for pictures cards
  medias.forEach((media) => {
    const mediasModel = mediasFactory(media);
    const mediaCardDOM = mediasModel.getProfileDOMpage();
    mediaSection.appendChild(mediaCardDOM);
  });
  //get data for profil
  photographerProfil.forEach((profil) => {
    const photographerProfilModel = photographerFactory(profil);
    const photographerProfilDOM = photographerProfilModel.photographerProfil();
    photographHeader.appendChild(photographerProfilDOM);
    //get data for footer
    const photographerLikeDOM = photographerProfilModel.photographerLike();
    photographFooter.appendChild(photographerLikeDOM);
  });

  const pictureCard = document.querySelectorAll(".picture_card");
  const lightBoxWrapper = document.querySelector(".lightbox_wrapper");

  pictureCard.forEach((img) => {
    img.addEventListener("click", (e) => {
      let pictureId = img.id;
      displayLightbox(pictureId);
      const lightBoxModel = lightBoxFactory(pictureId, medias);
      const lightBoxDOM = lightBoxModel.getLightBoxDOMpage();
      lightBoxWrapper.appendChild(lightBoxDOM);
    });
  });

  closing.addEventListener("click", (e) => {
    closeLightbox();
    lightBoxWrapper.children[2].remove();
  });

  nextBtn.addEventListener("click", (e) => {
    console.log(firstPicture);
  });
}

// Get data from fetch, launch display function with photograpers data
async function init() {
  const { medias } = await getPhotographers();
  const { photographerProfil } = await getPhotographers();
  displayData(medias, photographerProfil);
}

init();
