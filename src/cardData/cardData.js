import grahaIMG from "../assets/img/grahaIMG.jpg";
import thancredIMG from "../assets/img/thancredIMG.png";
import yshtolaIMG from "../assets/img/yshtolaIMG.jpg";
import uriangerIMG from "../assets/img/uriangerIMG.jpg";
import wolIMG from "../assets/img/wolIMG.jpeg";
import asahiIMG from "../assets/img/asahiIMG.jpeg";
import zenosIMG from "../assets/img/zenosIMG.png";
import hadesIMG from "../assets/img/hadesIMG.jpeg";
import venatIMG from "../assets/img/venatIMG.jpg";
import hythlodaeusIMG from "../assets/img/hythlodaeusIMG.png";
import meteionIMG from "../assets/img/meteionIMG.png";
import estinienIMG from "../assets/img/estinienIMG.jpg";
import alphinaudIMG from "../assets/img/alphinaudIMG.jpg";
import alisaieIMG from "../assets/img/alisaieIMG.jpg";
import fourchenaultIMG from "../assets/img/fourchenaultIMG.png";

const cardModule = () => {
  const cardData = [
    {
      src: grahaIMG,
      title: "G'raha Tia",
    },
    {
      src: thancredIMG,
      title: "Thancred Waters",
    },
    {
      src: yshtolaIMG,
      title: "Y'shtola Rhul",
    },
    {
      src: uriangerIMG,
      title: "Urianger Augurfelt",
    },
    {
      src: wolIMG,
      title: "Warrior of Light",
    },
    {
      src: asahiIMG,
      title: "Asahi sas Brutus / Fandaniel",
    },
    {
      src: zenosIMG,
      title: "Zenos yae Galvus",
    },
    {
      src: hadesIMG,
      title: "Emet-Selch / Hades",
    },
    {
      src: venatIMG,
      title: "Venat",
    },
    {
      src: hythlodaeusIMG,
      title: "Hythlodaeus",
    },
    {
      src: meteionIMG,
      title: "Meteion",
    },
    {
      src: estinienIMG,
      title: "Estinien Wyrmblood",
    },
    {
      src: alphinaudIMG,
      title: "Alphinaud Leveilleur",
    },
    {
      src: alisaieIMG,
      title: "Alisaie Leveilleur",
    },
    {
      src: fourchenaultIMG,
      title: "Fourchenault Leveilleur",
    },
  ];

  function shuffle(cardObject) {
    // Known as Schwartzian transform
    return cardObject
      .map((card) => ({ card, sort: Math.random() })) // Every element is paired with a number generated from Math.random()
      .sort((a, b) => a.sort - b.sort) // We then sort each element with their number
      .map(({ card }) => card); // Unmap to get original object
  }

  return shuffle(cardData);
};

export default cardModule;
