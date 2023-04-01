class ContactForm {
  constructor() {
    this.dataApi = new photographersApi("./Src/data/photographers.json");
    this.photographerName = document.querySelector(".photographer_name");
    this.inputs = document.querySelectorAll(".input");
    this.form = document.querySelector("form");
    this.error = {
      name: "Vous devez écrire entre 3 et 20 caractères sans caractères spéciaux",
      email: "L'email n'est pas valide",
      text: "Vous devez écrire 10 caractères au minimum",
    };
    this.validateForm = {
      firstname: false,
      lastname: false,
      email: false,
      textArea: false,
    };
    this.inputId;
    this.errorMessage;
    this.inputValue;
  }

  async displayPhotographerName() {
    const gettAllData = await this.dataApi.get();
    const photographersData = gettAllData.photographers;
    //get photographer Id from local storage,
    const recupId = JSON.parse(localStorage.getItem("Saving Id"))[0];
    //filter photographer profil with Id
    const photographeProfilFilter = photographersData.filter(
      (getId) => getId.id == recupId
    );
    //display photographer name on dom
    this.photographerName.textContent = photographeProfilFilter[0].name;
  }

  //function for display error message and border or delete it
  errorDisplay() {
    const inputId = document.getElementById(this.inputId);
    const errorMessageElement = document.getElementById(`${this.inputId}Error`);
    inputId.style.border = this.errorMessage ? "solid 2px red" : ""; //if have an error message, border will be red else it will have no border
    errorMessageElement.textContent = this.errorMessage;
  }
  inputChecker(inputRegex) {
    if (!this.inputValue.match(inputRegex)) {
      this.validateForm[this.inputId] = false;
      this.errorDisplay();
    } else {
      this.errorMessage = "";
      this.validateForm[this.inputId] = true;
      this.errorDisplay();
    }
  }
  //set error message and send regex to verification function
  namesChecker() {
    const inputRegex = /^[a-zA-Z0-9_.-]{3,20}$/;
    this.errorMessage = this.error.name;
    this.inputChecker(inputRegex);
  }
  //set error message and send regex to verification function
  emailChecker() {
    const inputRegex = /^[\w_.-]+@[\w-]+\.[a-z]{2,3}$/i;
    this.errorMessage = this.error.email;
    this.inputChecker(inputRegex);
  }
  //set error message and send regex to verification function
  textAreaChecker() {
    const inputRegex = /^.{10,}$/;
    this.errorMessage = this.error.text;
    this.inputChecker(inputRegex);
  }
  //for every input register writing in inputs
  getInputData() {
    this.inputs.forEach((input) => {
      input.addEventListener("input", (e) => {
        switch (e.target.id) {
          case "firstname":
            this.inputValue = e.target.value;
            this.inputId = "firstname";
            this.namesChecker();
            break;
          case "lastname":
            this.inputValue = e.target.value;
            this.inputId = "lastname";
            this.namesChecker();
            break;
          case "email":
            this.inputValue = e.target.value;
            this.inputId = "email";
            this.emailChecker();
            break;
          case "textArea":
            this.inputValue = e.target.value;
            this.inputId = "textArea";
            this.textAreaChecker();
            break;
          default:
            null;
        }
      });
    });
  }
  //If everything is complete send thanks lessage, if not alert message ask to fill the forms
  submit() {
    this.form.addEventListener("submit", (e) => {
      e.preventDefault();
      if (
        this.validateForm.firstname === true &&
        this.validateForm.lastname === true &&
        this.validateForm.email === true &&
        this.validateForm.textArea === true
      ) {
        this.inputs.forEach((input) => (input.value = ""));
        this.validateForm = {
          firstname: false,
          lastname: false,
          email: false,
          textArea: false,
        };
        alert("Merci, message envoyé");
      } else {
        alert("Veuillez remplir le formulaire correctement");
      }
    });
  }
}

function displayModal() {
  const contactform = new ContactForm();
  const modal = document.getElementById("contact_modal");
  modal.style.display = "block";
  contactform.displayPhotographerName();
  contactform.getInputData();
  contactform.submit();
}
function closeModal() {
  const modal = document.getElementById("contact_modal");
  modal.style.display = "none";
}
