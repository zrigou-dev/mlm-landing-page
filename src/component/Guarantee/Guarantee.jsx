import React from "react";
import "./Guarantee.css";
import logo from "../../assets/logo.svg";
import garantie from "../../assets/garantie.svg";
import { BsFillCheckCircleFill } from "react-icons/bs";
import rating from "../../assets/img-rating.svg";

const Guarantee = () => {
  return (
    <div  className="guarantee" >
      <div className="container">
        <h5 className="head-guarantee">
          <span>
            Nous sommes tellement certains que nos solutions vont vous aider que
            nous avons décidé de vous proposer une garantie Satisfait ou
            Remboursé !
          </span>
          <br />
          <span>
            Si au bout de 6 mois vous n'avez pas de résultat concrets alors que
            vous avez conscienscieusement rempli le cahier, contactez nous et
            nous vous rembourserons intégralement, quelle que soit la formule
            choisie !
          </span>
          <br />
          <span>
            En achetant des maintenant vous ne prenez donc aucun risque.
          </span>
        </h5>
        <div className="row g-5 cols-acheter" id="reserve">
          <div className="col-md-6  pro-mlm">
            <img
              src={garantie}
              alt="garantie 100%"
              className="garantie-image"
            />
            <div className="logo-guarante">
              <img src={logo} alt="logo image" />
            </div>
            <h3 className="head-col-gar">
              Pro du MLM
              <br />€ 570
            </h3>
            <p>
              pour ceux qui ont besoin d'un accompagnement très personnalisé
            </p>
            <ul>
              <li>
                <BsFillCheckCircleFill className="icon-done" />
                Cahier papier
              </li>
              <li>
                <BsFillCheckCircleFill className="icon-done" />
                Groupe privé
              </li>
              <li>
                <BsFillCheckCircleFill className="icon-done" />
                Formation sur 1 an
              </li>
              <li>
                <BsFillCheckCircleFill className="icon-done" />
                Coaching hebdomadaire 3 mois
              </li>
            </ul>
            <div className="btn-buy">
              <button className="btn-reserve">Prochainement</button>
            </div>
          </div>

          {/* ************************************************************************************** */}
          <div className="col-md-6  booster-mlm">
            <img
              src={garantie}
              alt="garantie 100%"
              className="garantie-image"
            />
            <div className="logo-guarante">
              <img src={logo} alt="logo image" />
            </div>
            <h3 className="head-col-gar">Mon Booster MLM</h3>
            <p>
              <span>147 €</span> <br />
              Offre de lancement
            </p>
            <h4>€ 77</h4>
            <ul>
              <li>
                <BsFillCheckCircleFill className="icon-done" />
                Cahier papier
              </li>
              <li>
                <BsFillCheckCircleFill className="icon-done" />
                Groupe privé telegram
              </li>
              <li>
                <BsFillCheckCircleFill className="icon-done" />
                Formation sur 1 an
              </li>
              {/* <li>
                <BsFillCheckCircleFill className="icon-done" />
                Coaching hebdomadaire 3 mois
              </li> */}
            </ul>
            <div className="btn-buy">
              <button className="btn-reserve"><a href="https://www.mlm.moncahiermlm.com/commander/?ajouter-au-panier=11"> ACHETER MAINTENANT</a></button>
            </div>
          </div>
        </div>
        {/* ****************************************************************************************************************************     */}
        <div className="row rating">
          <h5 className="global-head">Ce sont ses utilisateurs qui en parlent le mieux</h5>
          <div className=" col-lg-4 col-md-6 rating-col">
            <div className="contain-rating">
              <div className="total-info">
                <img src={rating} alt="person image" />
                <div className="info-rating">
                  <h4>Sandrine </h4>
                  <p>Toulouse</p>
                  <p>43 ans</p>
                </div>
              </div>
              <p className="disc-rating">
                Je dois avouer que j'étais un peu sceptique au début. Mais en
                commençant à remplir le cahier j'ai trés vite réalisé le
                potentiel de ce formidable outil. Je suis quelqu'un qui a
                tendance à s'éparpiller, à vite se laisser déborder. Le cahier
                me fournit un cadre et m'aide à me focaliser sur les tâches
                essentielles. Sans lui je pense que j'aurais abandonné depuis
                longtemps. La formation quand à elle m'aide à rester motivée et
                le groupe privé TELEGRAM à me sentir moins seule dans mon
                aventure. Les trois forment un tiercé gagnant.
              </p>
            </div>
          </div>
          <div className=" col-lg-4 col-md-6 rating-col">
            <div className="contain-rating">
              <div className="total-info">
                <img src={rating} alt="person image" />
                <div className="info-rating">
                  <h4>Sandy </h4>
                  <p className="first"> l'Ile de la Réunion</p>
                  <p>26 ans</p>
                </div>
              </div>
              <p className="disc-rating">
                J'emmène mon cahier partout avec moi. Il me suit dans mon sac à
                dos dans tous mes déplacements. L'avoir sans cesse sous la main
                me rappelle ce que je veux faire de ma vie, pourquoi je me suis
                lancée en MLM. J'en suis à mon 7ème mois et je dois dire que je
                vois réellement mon activité progresser d'un mois sur l'autre.
                C'est très motivant
              </p>
            </div>
          </div>
          <div className=" col-lg-4 col-md-6 rating-col">
            <div className="contain-rating">
              <div className="total-info">
                <img src={rating} alt="person image" />
                <div className="info-rating">
                  <h4>Emmanuelle </h4>
                  <p>Strasbourg</p>
                  <p>37 ans</p>
                </div>
              </div>

              <p className="disc-rating">
                J'ai pas mal galéré pendant mes premiers mois en marketing
                relationnel. J'étais motivée mais je manquais de confiance en
                moi, je ne savais pas toujours comment m'y prendre et j'avais
                souvent l'impression de m'éparpiller. La découverte du Cahier
                MLM m'a probablement évité d'abandonner. au moment où j'étais en
                plein doute.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guarantee;
