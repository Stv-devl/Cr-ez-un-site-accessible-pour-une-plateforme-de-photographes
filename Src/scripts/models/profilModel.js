import Photographers from "../models/photographersModel.js";

//extends Photographers pattern to gets the data for photographers profil
class ProfilModel extends Photographers {
  constructor(data) {
    super(data);
    this.profils = data;
  }
}

export default ProfilModel;
