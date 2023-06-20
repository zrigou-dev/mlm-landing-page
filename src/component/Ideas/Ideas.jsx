import React from "react";
import "./Ideas.css";
import men1 from "../../assets/men1.png";
import men2 from "../../assets/men2.png";
import { Link } from "react-scroll";

const Ideas = () => {
  return (
    <div className="ideas">
      <div className="container">
        <h5 className="global-head">
          Au bout d'un an et demi d'essais et d'erreurs douloureuses et
          angoissantes, j'ai enfin compris 3 idées clés :
        </h5>
        <div className="row ideas-cols">
          <div className="col-md-4 idea-col">
            <h2 className="nember-head">1</h2>
            <p>
              CE N’EST PAS LE NOMBRE DE CONTACTS / PROSPECTS / CLIENTS QUI
              COMPTE pour réussir mais plutôt une approche structurée et
              méthodique du MLM.
            </p>
          </div>
          <div className="col-md-4 idea-col">
            <h2 className="nember-head">2</h2>
            <p>
              IL N’EXISTE PAS DE RACCOURCIS vers la réussite en MLM. Il y a des
              méthodes vérifiées par les plus grands experts en MLM qui marchent
              depuis des années. Avec des solutions « ultra-efficaces » et «
              ultra-rapides » mais en vérité extrêmement énergivores, on ne fait
              que perdre notre confiance en soi, notre temps et notre argent.
            </p>
          </div>
          <div className="col-md-4 idea-col">
            <h2 className="nember-head">3</h2>
            <p>
              LA CONNAISSANCE QU'ON TROUVE DANS LES LIVRES DES GOUROUS DU
              MARKETING DE RESEAU sont indispensables mais ne sont pas
              suffisantes.
            </p>
          </div>
        </div>
        <div className="btn-idea">
          <Link to="reserve" smooth={true} duration={500}><button className="btn-reserve">Réservez dès maintenant</button></Link>
        </div>
        <div className="personal">
          <div className="row">
            <div className="col-md-6 first-personal">
              <div>
                <img src={men1} alt="MONTROZIER" />
                <h4>W. MONTROZIER</h4>
                <p>
                  J'ai créé cette solution en coopération avec Williams, auteur,
                  coach et formateur spécialisé dans le domaine de la liberté
                  financière. Il a atteint la liberté financière à l'âge de 32
                  ans et il accompagne, également depuis 2016, les lecteurs de
                  ses livres et de son blog à atteindre leur propre liberté
                  financière.
                </p>
              </div>
            </div>
            <div className="col-md-6 first-personal">
              <div>
                <img src={men2} alt="MONTROZIER" />
                <h4>N. CONRADI</h4>
                <p>
                  Je m'appelle Nicolas. J'ai démissioné de mon poste de
                  professeur des écoles, de la sécurité de l'emploi et tous les
                  avantages du fonctionnariat pour me lancer corps et âme dans
                  le MLM en 2016. Je développe actuellement mon réseau MLM de
                  manière passionnée en différents endroits du globe.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ideas;
