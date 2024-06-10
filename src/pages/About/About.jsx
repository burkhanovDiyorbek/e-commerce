import { Link } from "react-router-dom";
import { AboutCard } from "../../components/AboutCard/AboutCard";
import "./about.css";

const cardData = [
  {
    id: 0,
    title: "10.5k",
    img: ".././images/icons/about-card/shop.svg",
    desc: "Sallers active our site",
  },
  {
    id: 1,
    title: "33k",
    img: ".././images/icons/about-card/sale.svg",
    desc: "Mopnthly Produduct Sale",
  },
  {
    id: 2,
    title: "45.5k",
    img: ".././images/icons/about-card/bag.svg",
    desc: "Customer active in our site",
  },
  {
    id: 3,
    title: "25k",
    img: ".././images/icons/about-card/moneybag.svg",
    desc: "Anual gross sale in our site",
  },
];

export const About = () => {
  return (
    <section className="about-container">
      <div className="outlet container">
        <p className="pathname">
          <Link to={"/"}>Home</Link>
          <b> / About</b>
        </p>
        <header className="header">
          <div className="header-content">
            <h2>Our Story</h2>
            <p>
              Launced in 2015, Exclusive is South Asia’s premier online shopping
              makterplace with an active presense in Bangladesh. Supported by
              wide range of tailored marketing, data and service solutions,
              Exclusive has 10,500 sallers and 300 brands and serves 3 millioons
              customers across the region.{" "}
            </p>
            <p>
              Exclusive has more than 1 Million products to offer, growing at a
              very fast. Exclusive offers a diverse assotment in categories
              ranging from consumer.
            </p>
          </div>
          <img src=".././images/about.png" alt="about" />
        </header>
        <div className="cards">
          {cardData.map((item) => {
            const { id, img, title, desc } = item;
            return <AboutCard key={id} img={img} title={title} desc={desc} />;
          })}
        </div>
      </div>
    </section>
  );
};
