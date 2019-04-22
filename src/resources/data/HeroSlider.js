import img1 from "./../images/HeroSlider/1.jpg";
import img2 from "./../images/HeroSlider/2.jpg";
import img3 from "./../images/HeroSlider/3.jpg";

export default [
  {
    img: img1,
    title: "Sweetest Australian <br />in Bangalore",
    content:
      `Australian Kensington pride, the super sweet pulpy mangoes<br /> now in BANGALORE grown in Karnataka.`,
    action: {
      text: "Why GoodRoots",
      scrollTo: "whyMango"
    }
  },
  {
    img: img2,
    title: "Fresh Produce<br /> Right to Your Door step",
    content:
      ` The best of Alphonso and Kensington Pride mangoes from <br /> our farms to your home`,
    action: {
      text: "Who we are",
      scrollTo: "whoweare"
    }
  },
  {
    img: img3,
    title: "Gift Happiness <br /> & Sweetness",
    content:
      `Gift your loved ones this season.<div> <strong>Prebook</strong> now to not miss out on pre season offers<div>`,
    action: {
      isClickable: true,
      text: "Prebook now",
      scrollTo: "ourProducts"
    }
  }
];
