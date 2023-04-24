class PhotographersModel {
  constructor(data) {
    this._city = data.city;
    this._country = data.country;
    this._id = data.id;
    this._name = data.name;
    this._portrait = data.portrait;
    this._tagline = data.tagline;
    this._price = data.price;
    console.log(data);
  }
  get city() {
    return this._city;
  }
  get country() {
    return this._country;
  }
  get id() {
    return this._id;
  }
  get name() {
    return this._name;
  }
  get portrait() {
    return `./Src/assets/photographers/${this._portrait}`;
  }
  get tagline() {
    return this._tagline;
  }
  get price() {
    return this._price;
  }
}

export default PhotographersModel;
