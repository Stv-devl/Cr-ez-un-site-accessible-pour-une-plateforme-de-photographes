class photographersApi {
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
export default photographersApi;

/*
class photographersApi extends Api {
  constructor(url) {
    super(url);
  }
}
*/
