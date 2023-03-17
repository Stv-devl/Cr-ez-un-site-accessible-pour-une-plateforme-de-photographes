class GetPhotographers {
  constructor(data) {
    this.name = data.name;
    this.id = data.id;
    this.city = data.city;
    this.tagline = data.tagline;
    this.price = data.price;
    this.portait = data.portait;
  }

  get name() {
    return this.name;
  }
  get id() {
    return this.id;
  }
  get city() {
    return this.city;
  }
  get tagline() {
    return this.tagline;
  }
  get price() {
    return this.price;
  }
  get portrait() {
    return `./Src/assets/images/photographers//${this.portait}`;
  }
}
