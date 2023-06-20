import React from "react";
import "./Activities.css";
import { BsFillCheckCircleFill, BsXCircleFill } from "react-icons/bs";
import response_img from "../../assets/response.svg";
import goal from "../../assets/goal.svg"

const Activities = () => {
  return (
    <div className="activities">
      <div className="container">
        <h5 className="global-head">
          Qu'est-ce qui compte vraiment pour exercer son activité en MLM en
          toute sérénité et avec plaisir ?
        </h5>
        <div className="row act-list">
          <div className="col-md-6 img-response">
            <img src={response_img} alt="response image" />
          </div>
          <div className="col-md-6 list-goals">
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
        <div className="row quasiment ">
        <h5 className="global-head">J'ai quasiment tout essayé en MLm...</h5>
          <div className="col-md-6 list-goals">
            <ul>
              <li>
                <BsXCircleFill className="icon-bad" />
                Pour commencer, j’ai fait une liste de mes amis, qui à mon avis
                pourraient être très intéressés par les perspectives qu'offre le
                MLM et qui ont des capacités et de la disponibilité pour le
                faire. Vous n'imaginez pas à quel point j'ai été déçu quand j’ai
                découvert leur indifférence absolue envers le marketing de
                réseau ! Je comprends maintenant que j’ai parlé trop, essayé
                trop de les convaincre, de les « contaminer » avec mon
                enthousiasme.
              </li>
              <li>
                <BsXCircleFill className="icon-bad" />
                J’ai également récupéré pas loin de 600 CV auprès de diverses
                entreprises et les ai appelés tous.
              </li>
              <li>
                <BsXCircleFill className="icon-bad" />
                Mais voici l’idée la plus dingue que j’ai eue : un jour j’ai
                fait une journée de « porte à porte » dans une grande résidence
                où j’ai frappé à au moins 60 portes !
              </li>
              <li>
                <BsXCircleFill className="icon-bad" />
                Plus tard avec un membre de
                mon équipe nous avons organisé des cours de sport gratuits pour
                pouvoir vendre à côté nos produits pour les sportifs.
              </li>
            </ul>
          </div>
          <div className="col-md-6 img-goal">
            <img src={goal} alt="goal image" />
          </div>
        </div>
        <h5 className="global-head footer-activ">Toutes ces tentatives de prendre des raccourcis et mes efforts gigantesques m’ont apporté... je vous laisse deviner... ZERO RESULTATS ! Oui, tout cela a été une perte de temps. Je n'en ai retiré aucun bénéfice.</h5>
      </div>
    </div>
  );
};

export default Activities;
