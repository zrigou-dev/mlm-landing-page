import React from "react";
import "./Sommaire.css";
import sommaire from "../../assets/Sommaire.svg";
import Accordion from "react-bootstrap/Accordion";
import arrow from "../../assets/Arrow.svg";

const Sommaire = () => {
  return (
    <div className="container sommaire">
      <div className="img-sommaire">
        <img src={sommaire} alt="sommaire image" />
      </div>
      <div className="btn-menu">
        <Accordion defaultActiveKey="1">
          <Accordion.Item eventKey="8">
            <Accordion.Header>
              <h4>CONTENU DU cahier</h4>
              <img src={arrow} alt="arrow icon" />
            </Accordion.Header>
            <Accordion.Body>
              <div className="section-sommaire">
                <h3>Chapitre 1 : Je démarre du bon pied</h3>
                <p>
                  Dans ce premier chapitre nous vous indiquerons les quelques
                  lectures indispensables pour bien démarrer votre activité MLM.
                  Vous pourrez évaluer vos qualités et compétences pour réussir
                  en MLM. A l'issue de ce chapitre vous aurez clairement défini
                  les raisons profondes qui vous poussent à percer en MLM.
                </p>
              </div>
              <div className="section-sommaire">
                <h3>Chapitre 2 : J'élabore ma stratégie</h3>
                <p>
                  Grâce à ce chapitre vous serez en mesure de vous projeter avec
                  précision dans l'avenir, une fois que vous aurez réussi en
                  MLM. Vous aurez défini le montant que vous souhaitez gagner
                  chaque mois, le nombre d'heures que vous souhaitez consacrer à
                  votre activité chaque jour, chaque semaine, et vous vous serez
                  défini un objectif de temps pour atteindre vos objectifs. Vous
                  aurez mis en place une plannification stratégique et aurez
                  appris à vous fixer de bons objectifs.
                </p>
              </div>
              <div className="section-sommaire">
                <h3>Chapitre 3 : Je m'organise pour réussir</h3>
                <p>
                  Vous apprendrez un "mantra magique" qui sera le fil rouge de
                  votre activité MLM. Vous apprendrez comment optimiser votre
                  consommation de produits au bénéfice de votre propre
                  entreprise MLM. A l'issue de ce chapitre vous aurez clairement
                  défini votre temps disponible pour le MLM et aurez mis en
                  place un emploi du temps qui sera affiché sur votre
                  réfrigérateur pour que tous vos proches le voient. Vous aurez
                  aussi listé une centaine de personnes à qui vous pourrez
                  parler de vos produits et/ou de votre opportunité d'affaires.
                  Vous aurez mis en place un protocole d'appel ainsi qu'un
                  calendrier d'appel. Enfin, vous apprendrez comment faire pour
                  ne pas saouler vos prospects avec vos produits.
                </p>
              </div>
              <div className="section-sommaire">
                <h3>Chapitre 4 : Mon 1er mois</h3>
                <p>
                  A ce stade le cahier MLM vous accompagnera déjà dans le feu de
                  l'action. Vous mettrez en place vos bonnes habitudes
                  hebdomadaires pour réussir. Le cahier vous permettra d'évaluer
                  votre auto-satisfaction sur chaque semaine écoulée. Enfin,
                  vous aurez identifié vos blocages et noté les solutions pour
                  les lever.
                </p>
              </div>
              <div className="section-sommaire">
                <h3>Chapitre 5 : Mon 2ème mois</h3>
                <p>
                  Grâce à ce chapitre vous continuerez à installer vos bonnes
                  habitudes. Vous serez en mesure de comprendre pourquoi 80 %
                  des gens échouent en MLM, et comment vous pouvez faire partie
                  des 20 autres % !
                </p>
              </div>
              <div className="section-sommaire">
                <h3>Chapitre 6 : Mon 3ème mois</h3>
                <p>
                  Dans ce chapitre vous apprendrez comment élargir votre cercle
                  relationnel. Vous apprendrez à vous faire recommander de
                  manière pertinente et efficace.
                </p>
              </div>
              <div className="section-sommaire">
                <h3>Chapitre 7 : Mon 4ème mois</h3>
                <p>
                  Vous apprendrez dés ce stade de votre aventure à célébrer vos
                  succès. Oui, vous verrez que cela est très important ! Nous
                  allons vous indiquer pourquoi et comment.
                </p>
              </div>
              <div className="section-sommaire">
                <h3>Chapitre 8 : Mon 5ème mois</h3>
                <p>
                  Vous continuerez à ancrer vos bonnes habitudes et apprendrez à
                  fidéliser vos clients. En effet, il est plus facile de
                  fidéliser un client que d'en acquérir un nouveau. Vous
                  découvrirez également une astuce incroyable pour leur faire
                  des cadeaux, tout en permettant que ces cadeaux vous
                  rapportent des points de volume. Enfin, vous verrez comment
                  transformer certains de vos clients en filleuls.
                </p>
              </div>
              <div className="section-sommaire">
                <h3>Chapitre 9 : Mon 6ème mois</h3>
                <p>
                  Dans ce chapitre vous comprendrez l'importance d'investir en
                  permanence en vous-même. Nous vous donnerons des solutions
                  faciles à mettre en oeuvre pour vous perfectionner de jour en
                  jour. Nous vous conseillerons également 9 lectures
                  supplémentaires pour accroître vos connaissances et
                  compétences.
                </p>
              </div>
              <div className="section-sommaire">
                <h3>Chapitre 10 : Mon 7ème mois</h3>
                <p>
                  Ce chapitre sera un véritable point d'étape ! Il vous aidera à
                  prendre du recul à ce stade de votre accompagnement. Et vous
                  verrez comme cela est important de savoir parfois lever la
                  tête du guidon.
                </p>
              </div>
              <div className="section-sommaire">
                <h3>Chapitre 11 : Mon 8ème mois</h3>
                <p>
                  Dans ce chapitre, en plus des tableaux habituels, nous vous
                  donnerons des exemples de raccourcis hasardeux qui vous
                  permettront de bien comprendre qu'en MLM il n'y a pas de
                  raccourcis et qu'il vous faut rester concentrés sur les tâches
                  essentielles, c'est à dire celles présentées dans le cahier.
                </p>
              </div>
              <div className="section-sommaire">
                <h3>Chapitre 12 : Mon 9ème mois</h3>
                <p>
                  Dans ce chapitre nous allons parler de votre liberté
                  financière. Vous comprendrez l'importance de parrainer et nous
                  vous donnerons une solution toute simple pour y parvenir même
                  si vous n'avez aucune expérience dans ce domaine !
                </p>
              </div>
              <div className="section-sommaire">
                <h3>Chapitre 13 : Mon 10ème mois</h3>
                <p>
                  Après 10 mois d'utilisation du cahier nous vous permettrons de
                  faire un point sur votre légitimé et de lister vos nombreuses
                  compétences acquises au cours des mois écoulés. Oui, le cahier
                  vous accompagne dans votre progression.
                </p>
              </div>
              <div className="section-sommaire">
                <h3>Chapitre 14 : Mon 11ème mois</h3>
                <p>
                  Grâce au cahier MLM vous aurez persévéré dans votre aventure.
                  Dans ce chapitre vous découvrirez comment s'est construit le
                  modèle d'entreprises à succès qu'a permis de créer le MLM.
                </p>
              </div>
              <div className="section-sommaire">
                <h3>Chapitre 15 : Mon 12ème mois</h3>
                <p>
                  Vous voilà arrivés au bout de votre première année MLM. Grâce
                  au cahier MLM vous aurez implémenté dans votre vie quotidienne
                  des habitudes pour réussir en MLM. Ce seront des habitudes
                  acquises. Il vous sera ainsi facile de les maintenir. Nous
                  décortiquerons dans ce chapitre le modèle économique du MLM.
                  En maîtriser les rouages vous aidera à parrainer.
                </p>
              </div>
              <div className="section-sommaire">
                <h3>Chapitre 16 : Félicitations !!!</h3>
                <p>
                  Dans cet ultime chapitre vous aurez l'opportunité de faire un
                  point précis sur cette année écoulée. Vous aurez identifié ce
                  que vous avez aimé et moins aimé, vos compétences acquises.
                  Vous pourrez vous projeter sur votre 2ème année, et prendre 10
                  engagements précis avec vous-même !
                </p>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
};

export default Sommaire;
