//factory for photographers data
function photographerFactory(data) {
  const { name, portrait, city, country, tagline, price, id } = data;
  const picture = `./src/assets/photographers/${portrait}`;

  //create 1 article for each photographers, && add data in html
  function getUserCardDOM() {
    const article = document.createElement("article");
    const a = document.createElement("a");
    a.setAttribute("href", `photographer.html`);
    a.setAttribute("class", "photographer_btn");
    article.setAttribute("id", id);
    const img = document.createElement("img");
    img.setAttribute("src", picture);
    const h2 = document.createElement("h2");
    h2.textContent = name;
    const h3 = document.createElement("h3");
    h3.textContent = `${city}, ${country}`;
    const h4 = document.createElement("h4");
    h4.textContent = tagline;
    const p = document.createElement("p");
    p.setAttribute("class", "salary");
    p.textContent = `${price}$/jour`;
    article.appendChild(a);
    a.appendChild(img);
    a.appendChild(h2);
    article.appendChild(h3);
    article.appendChild(h4);
    article.appendChild(p);

    return article;
  }

  //create html for photographer profile
  function photographerProfil() {
    //profil container
    const profilcontainer = document.createElement("div");
    profilcontainer.setAttribute("class", "profil_container");
    //profil_wrapper
    const profilWrapper = document.createElement("div");
    profilWrapper.setAttribute("class", "profil_wrapper");

    const h1 = document.createElement("h1");
    h1.textContent = name;
    const h2 = document.createElement("h2");
    h2.textContent = `${city}, ${country}`;
    const profilText = document.createElement("p");
    profilText.textContent = tagline;
    //button
    const button = document.createElement("button");
    const text = document.createTextNode("Contactez-moi");
    button.setAttribute("class", "contact_button");
    button.setAttribute("onclick", "displayModal()");
    //img
    const profilImg = document.createElement("img");
    profilImg.setAttribute("class", "profil_image");
    profilImg.setAttribute("src", picture);
    //appendchild
    profilcontainer.appendChild(profilWrapper);
    profilWrapper.appendChild(h1);
    profilWrapper.appendChild(h2);
    profilWrapper.appendChild(profilText);
    profilcontainer.appendChild(button);
    button.appendChild(text);
    profilcontainer.appendChild(profilImg);
    return profilcontainer;
  }

  function photographerLike() {
    const likeContainer = document.createElement("div");
    likeContainer.setAttribute("class", "like_container");

    const likeWrapper = document.createElement("div");
    likeWrapper.setAttribute("class", "like_wrapper");
    const likeNumber = document.createElement("p");
    likeNumber.setAttribute("class", "like_number");
    likeNumber.textContent = "297 081";
    const likeIcone = document.createElement("i");

    likeIcone.setAttribute("class", "fa-solid fa-heart");
    const salary = document.createElement("p");
    salary.setAttribute("class", "salary");
    salary.textContent = `${price}$/jour`;

    //appendchild
    likeContainer.appendChild(likeWrapper);
    likeContainer.appendChild(salary);
    likeWrapper.appendChild(likeNumber);
    likeWrapper.appendChild(likeIcone);
    return likeContainer;
  }

  return {
    name,
    picture,
    city,
    country,
    tagline,
    price,
    id,
    getUserCardDOM,
    photographerProfil,
    photographerLike,
  };
}
