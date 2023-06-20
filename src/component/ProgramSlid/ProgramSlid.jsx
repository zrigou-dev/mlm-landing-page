import React from "react";
import { Pagination, Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "./ProgramSlid.css"
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ProgramSlid = () => {
  return (
    <div className="program-slid">
      <div className="container">
        <h5 className="global-head">Programme de la formation</h5>
        <Swiper
          slidesPerView="auto"
          navigation={{
            clickable: true
          }}
          pagination={{
            clickable: true,
          }}
          spaceBetween={10}
          autoplay={{
            delay: 9000,
            disableOnInteraction: false,
          }}
          modules={[ Pagination , Navigation]}
          className="mySwiper"
        >
          <SwiperSlide style={{ width: "19rem" }} className="slid">
            <h2>01</h2>
            <h3>BIENVENUE</h3>
            <p className="first-par-slid">
            Bienvenue dans votre programme d’accompagnement !!!
              <br />
              Qui sont vos formateurs ?
              <br />
              La question qui tue : comment réussir en MLM ?
              <br />
              Comment 20% d’efforts peuvent vous rapporter 80 % de résultats ?
            </p>
          </SwiperSlide>
          <SwiperSlide style={{ width: "19rem" }} className="slid">
            <h2>02</h2>
            <h3>JE DEMARRE DU BON PIED</h3>
            <p>
              Vos 3 livres qui vont faire décoller votre activité !
              <br />
              La force de votre Pourquoi dépasse tout ce que vous pouvez
              imaginer
              <br />
              Quel est votre métier idéal?
            </p>
          </SwiperSlide>
          <SwiperSlide style={{ width: "19rem" }} className="slid">
            <h2>03</h2>
            <h3>J’ELABORE MA STRATEGIE</h3>
            <p>
              Un exercice très puissant avant de faire votre tableau de
              visualisation
              <br />
              Hackez votre cerveau
              <br />
              Comment réussir à tous les coups votre tableau de visualisation ?
              <br />
              Fixez-vous des objectifs pertinents au début de chaque mois
            </p>
          </SwiperSlide>
          <SwiperSlide style={{ width: "19rem" }} className="slid">
            <h2>04</h2>
            <h3>JE M’ORGANISE POUR REUSSIR</h3>
            <p>
              Votre mantra magique
              <br />
              La régularité est le maître mot Planifiez vos priorités
              <br />
              Un bon emploi du temps sera le garant de votre réussite
              <br />
              Un réseau de dingue : recontactez vos anciennes connaissances
              <br />
              Votre protocole d’appel, arme fatale
            </p>
          </SwiperSlide>
          <SwiperSlide style={{ width: "19rem" }} className="slid">
            <h2>05</h2>
            <h3>MON 1ER MOIS</h3>
            <p>
            Cette astuce simple et efficace vous permettra de développer le MLM en toute sérénité
              <br />
              Devenez un pro de l’écoute active en comprenant ses 3 volets
              <br />
              Préparez-vous à avoir des moments difficiles
              <br />
              2 techniques pour éviter de vous laisser manipuler par vos proches
            </p>
          </SwiperSlide>
          <SwiperSlide style={{ width: "19rem" }} className="slid">
            <h2>06</h2>
            <h3>MON 2EME MOIS</h3>
            <p>
            Comment gagner en confiance en soi ?
              <br />
              Oubliez tout ce que vous savez de l’apprentissage
              <br />
              4 conseils pour ne pas vous décourager trop vite
              <br />
              Vos reformulations : Comment vous créer vos propres affirmations efficaces
            </p>
          </SwiperSlide>
          <SwiperSlide style={{ width: "19rem" }} className="slid">
            <h2>07</h2>
            <h3>MON 3EME MOIS</h3>
            <p>
            Sécurité VS Réussite : une équation clé !
              <br />
              Comment avoir de nouveaux contacts ???
              <br />
              Comment canaliser votre énergie au service du MLM ?
              <br />
              5 vertus de l’entrepreneuriat MLM
            </p>
          </SwiperSlide>
          <SwiperSlide style={{ width: "19rem" }} className="slid">
            <h2>08</h2>
            <h3>MON 4EME MOIS</h3>
            <p>
            Mind-set : Adoptez un état d’esprit gagnant
              <br />
              Pour perdurer, concentrez-vous sur la phase de contact
              <br />
              6 astuces pour arrêter de tout remettre au lendemain
            </p>
          </SwiperSlide>
          <SwiperSlide style={{ width: "19rem" }} className="slid">
            <h2>09</h2>
            <h3>MON 5EME MOIS</h3>
            <p>
            Quels sont ces 2 gros freins qui vous empêchent de réussir ?
              <br />
              Pourquoi et Comment parrainer ?
              <br />
              Cette méthode va vous aider à élargir votre réseau
            </p>
          </SwiperSlide>
          <SwiperSlide style={{ width: "19rem" }} className="slid">
            <h2>10</h2>
            <h3>MON 6EME MOIS</h3>
            <p>
            Revenir en arrière n’est pas une option !!!
              <br />
              La persévérance est la clé de votre réussite
              <br />
              Faites-vous recommander en ciblant les bonnes personnes
            </p>
          </SwiperSlide>
          <SwiperSlide style={{ width: "19rem" }} className="slid">
            <h2>11</h2>
            <h3>MON 7EME MOIS</h3>
            <p>
            Quel bilan dressez-vous de vos 6 premiers mois ?
              <br />
              Le silence est d’or !
            </p>
          </SwiperSlide>
          <SwiperSlide style={{ width: "19rem" }} className="slid">
            <h2>12</h2>
            <h3>MON 8EME MOIS</h3>
            <p>
            Cette approche imparable pour expliquer simplement votre opportunité d’affaires
            </p>
          </SwiperSlide>
          <SwiperSlide style={{ width: "19rem" }} className="slid">
            <h2>13</h2>
            <h3>MON 9EME MOIS</h3>
            <p>
            Vos émotions sont-elles un frein au développement de votre activité ?
            </p>
          </SwiperSlide>
          <SwiperSlide style={{ width: "19rem" }} className="slid">
            <h2>14</h2>
            <h3>MON 10EME MOIS</h3>
            <p>
            Vous êtes légitime à parrainer, faites-le !
            </p>
          </SwiperSlide>
          <SwiperSlide style={{ width: "19rem" }} className="slid">
            <h2>15</h2>
            <h3>MON 11EME MOIS</h3>
            <p>
            Je maintien mes bonnes habitudes
            </p>
          </SwiperSlide>
          <SwiperSlide style={{ width: "19rem" }} className="slid">
            <h2>16</h2>
            <h3>MON 12EME MOIS / <br/> <span>FELICITATIONS !</span> </h3>
            <p>
              Votre mantra magique
              <br />
              La régularité est le maître mot Planifiez vos priorités
              <br />
              Un bon emploi du temps sera le garant de votre réussite
              <br />
              Un réseau de dingue : recontactez vos anciennes connaissances
              <br />
              Votre protocole d’appel, arme fatale
            </p>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default ProgramSlid;
