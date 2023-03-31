class ContactForm {
  constructor() {
    this.inputs = document.querySelectorAll(".input");
    this.firstname = null;
    this.lastname = null;
    this.email = null;
    this.textarea = null;
  }

  errorDisplay(message, itemId) {
    if (message != "") {
      document.getElementById(itemId).style.border = "solid 2px red";
      document.getElementById(itemId.concat("Error")).textContent = message;
    } else {
      document.getElementById(itemId).style.border = "";
      document.getElementById(itemId.concat("Error")).textContent = message;
    }
  }
  //variable for check firstname
  firstnameChecker() {
    if (value.length > 0 && (value.length < 3 || value.length > 20)) {
      this.errorDisplay(
        "firstname",
        "The first name must be between 3 and 20 characters"
      );
      this.firstname = null;
    } else if (!value.match(/^[a-zA-Z0-9_.-]*$/)) {
      this.errorDisplay(
        "firstname",
        "The first name must not contain special characters"
      );
      this.firstname = null;
    } else {
      this.errorDisplay("firstname", "");
      this.firstname = value;
    }
  }
  //variable for check lastname
  lastnameChecker() {
    if (value.length > 0 && (value.length < 3 || value.length > 20)) {
      this.errorDisplay(
        "lastname",
        "The Last name must be between 3 and 20 characters"
      );
      this.lastname = null;
    } else if (!value.match(/^[a-zA-Z0-9_.-]*$/)) {
      this.errorDisplay(
        "lastname",
        "The Last name must not contain special characters"
      );
      this.lastname = null;
    } else {
      this.errorDisplay("lastname", "");
      this.lastname = value;
    }
  }
  //variable for check Email
  emailChecker() {
    if (!value.match(/^[\w_.-]+@[\w-]+\.[a-z]{2,3}$/i)) {
      this.errorDisplay("email", "Email is not valid");
      this.email = null;
    } else {
      this.errorDisplay("email", "");
      this.email = value;
    }
  }
  //check Textarea
  textAreaChecker() {
    if (value.length > 0 && value.length < 3) {
      this.errorDisplay(
        "textArea",
        "The Last name must be between 3 and 20 characters"
      );
      this.textarea = null;
    } else {
      this.errorDisplay("textArea", "");
      this.textarea = value;
    }
  }

  //for every input register writing in inputs
  getInputData() {
    this.inputs.forEach((input) => {
      input.addEventListener("input", (e) => {
        switch (e.target.id) {
          case "firstname":
            this.firstnameChecker(e.target.value);
            break;
          case "lastname":
            this.lastnameChecker(e.target.value);
            break;
          case "email":
            this.emailChecker(e.target.value);
            break;
          case "textArea":
            this.emailChecker(e.target.value);
            break;
          default:
            null;
        }
      });
    });
  }
}

function displayModal() {
  const modal = document.getElementById("contact_modal");
  modal.style.display = "block";
  const contactForm = new ContactForm();
  contactForm.getInputData();
}

function closeModal() {
  const modal = document.getElementById("contact_modal");
  modal.style.display = "none";
}
