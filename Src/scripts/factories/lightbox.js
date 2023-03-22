//factory
function lightBoxFactory(pictureSrc, data) {
  const { image, video } = data;
  const picture = `./src/assets/images/${pictureSrc}`;

  function getLightBoxDOMpage() {
    const imageWrapper = document.createElement("div");
    imageWrapper.setAttribute("class", "image_wrapper");

    if (pictureSrc.split(".")[1] == "jpg") {
      const img = document.createElement("img");
      img.setAttribute("src", picture);
      img.setAttribute("class", "lightbox_pictures");
      imageWrapper.appendChild(img);
    } else {
      const video = document.createElement("video");
      video.setAttribute("src", picture);
      video.setAttribute("class", "videos");
      imageWrapper.appendChild(video);
    }

    const getAllUrl = data.map((data) => {
      return data.image || data.video;
    });

    let getArrayNumber = getAllUrl.findIndex((e) => e === pictureSrc);

    nextBtn.addEventListener("click", (next) => {
      const changePicture =
        next.target.parentNode.parentNode.parentNode.children[2].children[0];

      console.log(changePicture);

      getArrayNumber = ++getArrayNumber;
      if (getArrayNumber > getAllUrl.length - 1) {
        getArrayNumber = 0;
      }

      const movingImage = `./src/assets/images/${getAllUrl[getArrayNumber]}`;

      changePicture.setAttribute("src", movingImage);
    });

    previousBtn.addEventListener("click", (previous) => {
      const changePicture =
        previous.target.parentNode.parentNode.parentNode.children[2]
          .children[0];

      getArrayNumber = --getArrayNumber;
      if (getArrayNumber < 0) {
        getArrayNumber = getAllUrl.getArrayNumber - 1;
      }

      movingImage = `./src/assets/images/${getAllUrl[getArrayNumber]}`;
      changePicture.setAttribute("src", movingImage);
    });

    return imageWrapper;
  }

  return { pictureSrc, image, video, getLightBoxDOMpage };
}
