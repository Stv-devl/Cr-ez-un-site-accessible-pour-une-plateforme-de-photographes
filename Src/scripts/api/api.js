class Api {
  constructor(url) {
    this._url = url;
  }

  async get() {
    try {
      const response = await fetch(this._url);
      const data = await response.json();
      return data;
    } catch (error) {
      console.log("An error occurred:", error);
    }
  }
}

class photographersApi extends Api {
  constructor(url) {
    super(url);
  }
  /* //utile ou pas?
  async getPhotographers() {
    return await this.get();
  }*/
}
