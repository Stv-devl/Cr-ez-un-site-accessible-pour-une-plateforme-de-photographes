class LightBoxFactory {
  constructor(data) {
    if (!data.video) {
      const lightBoxImageCard = new LightBoxImageCard(data);
      return lightBoxImageCard.lightBoxImageCardDom();
    } else if (!data.image) {
      const lightBoxVideoCard = new LightBoxVideoCard(data);
      return lightBoxVideoCard.lightBoxVideoCardDom();
    } else {
      throw "Error";
    }
  }
}
