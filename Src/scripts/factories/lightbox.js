//factory
function lightBoxFactory(pictureId, data) {
  //filter picture clicked with pictureId
  let = firstPicture = data.filter(function (findId) {
    return findId.id == pictureId;
  });

  console.log(pictureId);

  for (let i = 0; i < data.length; i++) {
    console.log(i);
  }

  const { image, video } = data;
  const picture = `./src/assets/images/${firstPicture[0].image}`;
  const getVideo = `./src/assets/images/${firstPicture[0].video}`;

  function getLightBoxDOMpage() {
    const imageWrapper = document.createElement("div");
    imageWrapper.setAttribute("class", "image_wrapper");

    if (firstPicture[0].hasOwnProperty("image")) {
      const img = document.createElement("img");
      img.setAttribute("src", picture);
      img.setAttribute("class", "lightbox_pictures");
      imageWrapper.appendChild(img);
    } else {
      const video = document.createElement("video");
      video.setAttribute("src", getVideo);
      video.setAttribute("class", "videos");
      imageWrapper.appendChild(video);
    }
    return imageWrapper;
  }

  return { pictureId, image, video, getLightBoxDOMpage };
}
