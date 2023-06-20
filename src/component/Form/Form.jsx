import React from "react";
import "./Form.css";
import logo from "../../assets/logo.svg";
import { useState } from "react";
import myPdf from "./pdf-mlm/extrait-mlm.pdf";
import { CgDanger } from "react-icons/cg";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [alert, setAlert] = useState(false);
  const pdfUrl = "extrait-mlm.pdf"

  function Submit(e) {
    e.preventDefault();
    if (name != "" && email != "") {
      setAlert(false);
      const formEle = document.querySelector("form");
      const formData = new FormData(formEle);
      fetch(
        "https://script.google.com/macros/s/AKfycbw-K22H_Z6ivD9U2Gd3SX4UhZyQEKuKwtgsxG_0b8uVviQq2fKGu7XNXGQBQKrXNfy-/exec",
        {
          method: "POST",
          body: formData,
        }
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        })
        .catch((error) => console.log(error));
      window.location.href = "https://www.facebook.com/groups/3368400540079422";
      // ****************************************************************
      const tempLink = document.createElement("a");
      tempLink.href = myPdf ;
      tempLink.download =pdfUrl
      // tempLink.setAttribute("download", "extrait-mlm.pdf");
      tempLink.click();
    } else {
      setAlert(true);
    }

    // formEle.removeChild(tempLink);
  }

  return (
    <div className="form" id="extrait-gratuit">
      <div className="container">
        <div className="logo-form">
          <img src={logo} alt="logo" />
        </div>
        <h5 className="global-head">
          Téléchargez gratuitement un extrait du cahier
        </h5>
        <p>
          Vous n'êtes pas encore certain(e) si ce cahier est fait pour vous ?
          Téléchargez gratuitement un extrait du cahier :
        </p>
        <form className="form" onSubmit={(e) => Submit(e)}>
          <input
            placeholder="Prénome"
            type="text"
            name="Name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <p className={alert ? "alert-form" : "alert-hidden"}>
            <CgDanger className="icon-danger" /> nous vous prions de bien
            vouloir compléter vos coordonnées
          </p>
          <br />

          <input
            placeholder="Email"
            type="text"
            name="Email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="inp-form"
          />

          <p className={alert ? "alert-form alert" : "alert-hidden alert"}>
            <CgDanger className="icon-danger" /> nous vous prions de bien
            vouloir compléter vos coordonnées
          </p>

          <br />
          <button type="submit" className="submit">
            télécharger maintenance{" "}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
