import React from "react";
import Accordion from "react-bootstrap/Accordion";
import "./Faq.css";
import arrow from "../../assets/Arrow.svg";

const Faq = () => {
  return (
    <div className="faq">
      <div className="container">
        <h5 className="global-head">Foire aux questions</h5>
        <Accordion defaultActiveKey="0">
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <h4>
                    Cette solution s'adresse-t-elle à moi si j'ai déjà une année
                    de MLM derrière moi ?
                  </h4>
                  <img src={arrow} alt="arrow icon" />
                </Accordion.Header>
                <Accordion.Body>
                  Le cahier MLM s’adresse principalement aux personnes qui
                  débutent en MLM, celles qui débutent tout juste mais aussi
                  celles qui ont déjà plusieurs mois derrière elles. Il va
                  également intéresser les personnes qui ont de nombreux mois
                  d’activité et qui n’arrivent pas à faire décoller leur
                  activité. Il va intéresser enfin les personnes qui ont déjà du
                  succès en MLM et qui cherchent des solutions pour accompagner
                  leurs filleuls
                </Accordion.Body>
              </Accordion.Item>
            </div>
            <div className="col-sm-12 col-md-6">
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  <h4>
                    Dans combien de temps vais-je recevoir mon cahier MLM ?
                  </h4>
                  <img src={arrow} alt="arrow icon" />
                </Accordion.Header>
                <Accordion.Body>
                  Le délais postaux pour la livraison de votre cahier pratique
                  peuvent varier selon la zone géographique où vous résidez (les
                  délais ci-dessous sont donnés à titre indicatif selon les
                  délais habituellement constatés) : de 9 à 11 jours ouvrés pour
                  la France métropolitaine de 11 à 13 jours ouvrés pour Canada
                  de 13 à 15 jours ouvrés pour la Belgique et la Suisse de 17 à
                  19 jours pour la Guadeloupe de 21 à 23 jours pour la
                  Martinique, la Nouvelle Caledonie, le Maroc et l’Algérie de 21
                  à 23 jours ouvrés pour la Réunion Vous aurez accès
                  immédiatement au groupe privé TELEGRAM dont le lien vous sera
                  envoyé dans votre email de confirmation d’achat. Vous recevrez
                  sous 72h par email vos identifiants à la formation. Concernant
                  la formule PRO DU MLM il conviendra de vous rapprocher de
                  Nicolas pour fixer vos dates de RDV de coaching.
                </Accordion.Body>
              </Accordion.Item>
            </div>
          </div>
          {/* **************************************************************************************** */}
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  <h4>Pouvez-vous m'aider à choisir un accompagnement ?</h4>
                  <img src={arrow} alt="arrow icon" />
                </Accordion.Header>
                <Accordion.Body>
                  Nous avons voulu notre méthode accessible à tous, tant en
                  terme de budget que de besoin d’accompagnement. Bien entendu,
                  le prix augmente avec le niveau d’accompagnement. C’est donc à
                  vous de définir quelles exigences vous avez, quelle est votre
                  capacité à être autonome et quels résultats vous souhaitez
                  atteindre.
                </Accordion.Body>
              </Accordion.Item>
            </div>
            <div className="col-sm-12 col-md-6">
              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  <h4>Combien de temps faut-il y consacrer ?</h4>
                  <img src={arrow} alt="arrow icon" />
                </Accordion.Header>
                <Accordion.Body>
                  Pour remplir les 3 premiers chapitres qui concerne les bases,
                  comptez environ 2h. Une fois en phase de roulement le
                  remplissage de votre cahier MLM ne vous prendra que quelques
                  minutes par jour. Idem pour la formation, il y a plus de
                  vidéos à regarder pour les premiers modules que sur les
                  suivants.
                </Accordion.Body>
              </Accordion.Item>
            </div>
          </div>
          {/* **************************************************************************************** */}
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <Accordion.Item eventKey="4">
                <Accordion.Header>
                  <h4>
                    Cette méthode demande-t-elle de dépenser de l'argent ?
                  </h4>
                  <img src={arrow} alt="arrow icon" />
                </Accordion.Header>
                <Accordion.Body>
                  Très peu. Nous vous demanderons l’achat de 3 livres
                  incontournables (mais vous les avez peut-être déjà achetés),
                  de stylos de couleur (mais vous devez en avoir déjà chez
                  vous), et nous vous recommanderons quelques lectures
                  optionnelles pour aller plus loin.
                </Accordion.Body>
              </Accordion.Item>
            </div>
            <div className="col-sm-12 col-md-6">
              <Accordion.Item eventKey="5">
                <Accordion.Header>
                  <h4>Que contient la formation ?</h4>
                  <img src={arrow} alt="arrow icon" />
                </Accordion.Header>
                <Accordion.Body>
                  La formation se compose de différents modules qui sont calqués
                  sur les chapitres du cahier MLM. Les premiers modules seront
                  débloqués immédiatement. Vous recevrez les indications par
                  email. Les modules suivants seront débloqués ensuite chaque
                  mois. Vous recevrez un email pour vous informer qu’ils sont
                  débloqués. La formation est volontairement étalée dans le
                  temps pour suivre la progression du cahier mais aussi votre
                  propre progression dans le cadre de votre activité MLM. Chaque
                  module comporte différentes “capsules” vidéo sur un thème
                  précis. Chaque capsule dure entre 4 et 8 minutes environ. Nous
                  avons opté pour un format court pour que la formation ne vous
                  prenne pas trop de temps.
                </Accordion.Body>
              </Accordion.Item>
            </div>
          </div>
          {/* **************************************************************************************** */}
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <Accordion.Item eventKey="6">
                <Accordion.Header>
                  <h4>Les paiements sont-ils sécurisés ?</h4>
                  <img src={arrow} alt="arrow icon" />
                </Accordion.Header>
                <Accordion.Body>
                  Oui, il vous suffit de cliquer sur l’offre choisie et vous
                  serez redirigé(e) vers une page de paiement sécurisé où vous
                  pourrez payer par CB et Paypal. J’ai acheté une formule et je
                  souhaiterais passer à une formule supérieure ? Pas de
                  problème, contactez nous et nous vous ferons accéder à l’offre
                  supérieure de votre choix moyennant le paiement de la
                  différence de prix.
                </Accordion.Body>
              </Accordion.Item>
            </div>
            <div className="col-sm-12 col-md-6">
              <Accordion.Item eventKey="7">
                <Accordion.Header>
                  <h4>Comment nous contacter ?</h4>
                  <img src={arrow} alt="arrow icon" />
                </Accordion.Header>
                <Accordion.Body>
                  Si vous avez des questions qui ne sont pas listées dans cette
                  FAQ, n’hésitez pas à nous contacter !<br/> Si vous rencontrez un
                  problème avec votre commande ou un problème technique,
                  n’hésitez à nous contacter ! <br/> Si vous avez des suggestions, des
                  retours d’expérience, des témoignages à partager, n’hésitez
                  pas à nous contacter ! <br/> Vous pouvez nous contacter à l’adresse
                  suivante :<br/> moncahiermlm@gmail.com ou à l’adresse figurant en
                  dernière page du cahier MLM.
                </Accordion.Body>
              </Accordion.Item>
            </div>
          </div>
          {/* **************************************************************************************** */}
        </Accordion>
      </div>
    </div>
  );
};

export default Faq;
