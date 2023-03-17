function photographerFactory(data) {
  const { name, portrait, city, tagline, price } = data;

  const picture = `./src/assets/photographers/${portrait}`;

  function getUserCardDOM() {
    const article = document.createElement("article");
    const a = document.createElement("a");
    a.setAttribute("href", "photographer.html");
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
    a.appendChild(h3);
    a.appendChild(h4);
    a.appendChild(p);
    return article;
  }
  return { name, picture, city, tagline, price, getUserCardDOM };
}
