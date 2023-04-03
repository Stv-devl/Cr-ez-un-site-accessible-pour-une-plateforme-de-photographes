class photographersCard {
  constructor(data) {
    this.profils = data;
  }
  //create 1 article for each photographers, && add data in html
  getUserCardDOM() {
    const article = document.createElement("article");
    const a = document.createElement("a");
    a.setAttribute("href", `photographer.html`);
    a.setAttribute("class", "photographer_btn");
    a.setAttribute("aria-label", ` ${this.profils.name} profil page`);
    article.setAttribute("id", this.profils.id);
    const img = document.createElement("img");
    img.setAttribute("src", this.profils.portrait);
    img.setAttribute("alt", this.profils.name);
    const h2 = document.createElement("h2");
    h2.textContent = this.profils.name;
    const h3 = document.createElement("h3");
    h3.textContent = `${this.profils.city}, ${this.profils.country}`;
    const pTagline = document.createElement("p");
    pTagline.textContent = this.profils.tagline;
    pTagline.setAttribute("class", "photographer_tag");
    const p = document.createElement("p");
    p.setAttribute("class", "salary");
    p.textContent = `${this.profils.price}$/jour`;
    article.appendChild(a);
    a.appendChild(img);
    a.appendChild(h2);
    article.appendChild(h3);
    article.appendChild(pTagline);
    article.appendChild(p);

    return article;
  }
}

export default photographersCard;
