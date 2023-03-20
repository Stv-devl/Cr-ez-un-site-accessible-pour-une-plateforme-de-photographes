//get Json with Fetch send variable photographers with Json data
async function getPhotographers(photographers, medias, photographerProfil) {
  try {
    const response = await fetch(`./Src/data/photographers.json`);

    if (!response.ok) {
      throw new Error("HTTP error, status = " + response.status);
    }
    const data = await response.json();
    //photohraphers data
    photographers = data.photographers;

    //get photographer Id from local storage
    let recupId = JSON.parse(localStorage.getItem("Saving Id"))[0];

    //filter media with photographer Id
    medias = data.media.filter(function (getId) {
      return getId.photographerId == recupId;
    });
    //filter photographer profil with photographer Id
    photographerProfil = data.photographers.filter(function (findId) {
      return findId.id == recupId;
    });

    return {
      photographers,
      medias,
      photographerProfil,
    };
  } catch (error) {
    return;
  }
}
