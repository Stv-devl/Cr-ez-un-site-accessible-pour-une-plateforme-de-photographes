class ProfilCard {
  constructor(data) {
    this.profil = data;
  }
  getProfilCardDOM() {
    //profil container
    const profilcontainer = document.createElement("div");
    profilcontainer.setAttribute("class", "profil_container");
    //profil_wrapper
    const profilWrapper = document.createElement("div");
    profilWrapper.setAttribute("class", "profil_wrapper");
    const h1 = document.createElement("h1");
    h1.setAttribute("tabindex", "0");
    h1.textContent = this.profil.name;
    h1.setAttribute("class", "profil_name");
    //text wrapper
    const profilTextWrapper = document.createElement("div");
    profilTextWrapper.setAttribute("class", "profil_text_wrapper");
    profilTextWrapper.setAttribute("tabindex", "0");
    const h2 = document.createElement("h2");
    h2.textContent = `${this.profil.city}, ${this.profil.country}`;
    h2.setAttribute("class", "profil_country");
    const profilText = document.createElement("p");
    profilText.textContent = this.profil.tagline;
    profilText.setAttribute("class", "profil_tagline");
    //button
    const button = document.createElement("button");
    const text = document.createTextNode("Contactez-moi");
    button.setAttribute("class", "contact_button");
    button.setAttribute("id", "openModal");
    button.setAttribute("aria-label", "Contact Me");
    button.setAttribute("tabindex", "0");
    //img
    const profilImg = document.createElement("img");
    profilImg.setAttribute("class", "profil_image");
    profilImg.setAttribute("alt", this.profil.name);
    profilImg.setAttribute("src", this.profil.portrait);
    profilImg.setAttribute("tabindex", "0");
    //appendchild
    profilcontainer.appendChild(profilWrapper);
    profilWrapper.appendChild(h1);
    profilWrapper.appendChild(profilTextWrapper);
    profilTextWrapper.appendChild(h2);
    profilTextWrapper.appendChild(profilText);
    profilcontainer.appendChild(button);
    button.appendChild(text);
    profilcontainer.appendChild(profilImg);
    return profilcontainer;
  }

  getFooterCardDOM() {
    const likeContainer = document.createElement("div");
    likeContainer.setAttribute("class", "footer_like_container");

    const likeWrapper = document.createElement("div");
    likeWrapper.setAttribute("class", "footer_like_wrapper");
    const likeNumber = document.createElement("p");
    likeNumber.setAttribute("class", "footer_like_number");
    likeNumber.setAttribute("tabindex", "0");

    likeNumber.textContent = "";
    const likeIcone = document.createElement("i");
    likeIcone.setAttribute("aria-label", "likes");
    likeIcone.setAttribute("class", "fa-solid fa-heart fa-lg");
    const salary = document.createElement("p");
    salary.setAttribute("class", "footer_salary");
    salary.textContent = `${this.profil.price}$ / jour`;

    //appendchild
    likeContainer.appendChild(likeWrapper);
    likeContainer.appendChild(salary);
    likeWrapper.appendChild(likeNumber);
    likeWrapper.appendChild(likeIcone);
    return likeContainer;
  }
}
export default ProfilCard;
