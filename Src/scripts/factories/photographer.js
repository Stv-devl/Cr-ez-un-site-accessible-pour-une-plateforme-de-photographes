//factory for photographers data
function photographerFactory(data) {
  const { name, portrait, city, tagline, price, id } = data;
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
    h3.textContent = city;
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

  return { name, picture, city, tagline, price, id, getUserCardDOM };
}
