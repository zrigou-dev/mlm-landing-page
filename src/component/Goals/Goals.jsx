import React from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";
import prize from "../../assets/prize.svg";
import "./Goals.css";

const Goals = () => {
  return (
    <div className="goals">
      <div className="container">
        <div className="row">
          <div className="col-md-6 img-goals">
            <img src={prize} alt="prize image" />
          </div>
          <div className="col-md-6 list-goals">
            <h5 className="global-head">
              Seulement, tout se joue lors de votre première année !
            </h5>
            <ul>
              <li>
                <BsFillCheckCircleFill className="icon-done" />
                Vous vous lancez dans le MLM et avez envie de démarrer votre
                activité du bon pied.
              </li>
              <li>
                <BsFillCheckCircleFill className="icon-done" />
                Vous pratiquez le MLM depuis plusieurs mois mais vous voyez que
                vous n’arrivez pas à avancer, même avec l’aide de votre parrain.
              </li>
              <li>
                <BsFillCheckCircleFill className="icon-done" />
                Vous n’avez toujours pas beaucoup de filleuls et de ventes et
                aimeriez bien doubler / tripler / quadrupler vos contacts /
                filleuls / revenus.
              </li>
              <li>
                <BsFillCheckCircleFill className="icon-done" />
                Vous avez besoin d’être accompagné(e), guidé(e), cadré(e),
                formé(e) dans tous les compétences essentielles en MLM.
              </li>
              <li>
                <BsFillCheckCircleFill className="icon-done" />
                Vous ne pouvez/voulez pas dépenser beaucoup d’argent pour vous
                former en MLM.
              </li>
              <li>
                <BsFillCheckCircleFill className="icon-done" />
                Votre activité MLM marche bien et vous aimeriez vous alléger
                d’un peu de votre temps nécessaire à former les personnes de
                votre équipe.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Goals;
