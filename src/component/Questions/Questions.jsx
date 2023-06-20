import React from "react";
import "./Questions.css";
import Book_cover from "../../assets/Book.svg";
import { BsFillCheckCircleFill } from "react-icons/bs";

const Questions = () => {
  return (
    <div className="qst">
      <div className="container">
        <h5 className="global-head">POURQUOI N'ATTEIGNEZ-VOUS PAS LES RESULTATS QUE VOUS ATTENDEZ ?</h5>
        <div className="row">
          <div className="col-md-6 list-goals">
            <ul>
              <li>
                <BsFillCheckCircleFill className="icon-done" />
                Vous manquez de temps à consacrer à votre activité MLM ?
              </li>
              <li>
                <BsFillCheckCircleFill className="icon-done" />
                Vous ne trouvez pas de moment pour vous former en MLM ?
              </li>
              <li>
                <BsFillCheckCircleFill className="icon-done" />
                Vous êtes fatigué de courir après les gens sans résultat ?
              </li>
              <li>
                <BsFillCheckCircleFill className="icon-done" />
                Vous ne voyez pas la direction concrète où il faut aller pour
                avancer ?
              </li>
              <li>
                <BsFillCheckCircleFill className="icon-done" />
                Vous sentez un manque de confiance en vous-même et en vos
                capacités (communicatives, entrepreneuriales, commerciales…) ?
              </li>
              <li>
                <BsFillCheckCircleFill className="icon-done" />
                Vous commencez à vous sentir frustré(e) et de plus en plus
                démotivé(e) pour continuer en MLM ?
              </li>
            </ul>
          </div>
          <div className="col-md-6 img-cover ">
            <img src={Book_cover} alt="Book Cover" />
          </div>
          <div className="btn-qst">
            <h5 className="global-head">
              Dites STOP à tout cela, vous êtes au bon endroit ! Lisez
              attentivement ce qui va suivre...
            </h5>
            <button className="btn-reserve">Réservez dès maintenant</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questions;
