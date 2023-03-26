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
    article.setAttribute("id", this.profils.id);
    const img = document.createElement("img");
    img.setAttribute("src", this.profils.portrait);
    const h2 = document.createElement("h2");
    h2.textContent = this.profils.name;
    const h3 = document.createElement("h3");
    h3.textContent = `${this.profils.city}, ${this.profils.country}`;
    const h4 = document.createElement("h4");
    h4.textContent = this.profils.tagline;
    const p = document.createElement("p");
    p.setAttribute("class", "salary");
    p.textContent = `${this.profils.price}$/jour`;
    article.appendChild(a);
    a.appendChild(img);
    a.appendChild(h2);
    article.appendChild(h3);
    article.appendChild(h4);
    article.appendChild(p);

    return article;
  }
}