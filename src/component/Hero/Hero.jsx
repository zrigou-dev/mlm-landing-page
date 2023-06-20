import React from "react";
import logo from "../../assets/logo.svg";
import "./Hero.css";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        <div className="logo">
          <img src={logo} alt="logo" className="logo-hero" />
        </div>
        <div className="content-hero">
          <h5 className="global-head">
            Faites décoller votre activité en MLM jusqu'au 7ème ciel <br /> Des
            méthodes qui ont fait leurs preuves et sans investir des milliers
            d'euros.
          </h5>
          <p>
            Et si on vous accompagnait main dans la main pour
            <br />
            Atteindre votre liberté financière et devenir un véritable chef
            d'entreprise ? <br />
            Rejoignez-nous et profitez d'un an d'accompagnement à seulement 0,20
            centime par jour.
          </p>
          <h5 className="global-head">Offrez-vous un accompagnement sur mesure et bénéficiez d'une réduction de 53% !</h5>
          <div className="btn-hero">
            <button className="btn-reserve"><Link to="reserve" smooth={true} duration={500}>Réservez dès maintenant </Link></button>
            <button className="btn-recevoir" ><Link to="extrait-gratuit" smooth={true} duration={700}>Je veux recevoir mon extrait GRATUIT !</Link></button>
          </div>
          <h5 className="global-head">Avant que le prix soit de nouveau à plein tarif.</h5>
        </div>
      </div>
    </div>
  );
};

export default Hero;
