import "../assets/Cards.css";
import imgRetro from "../assets/images/image-retro-pcs.jpg";
import imgLaptop from "../assets/images/image-top-laptops.jpg";
import imgGaming from "../assets/images/image-gaming-growth.jpg";

const Cards = () => {
  const Card = (img, title, text, number) => {
    return (
      <div className="card-article ">
        <img className="img-card" src={img} alt={img} />
        <div className="d-flex flex-column align-items-start justify-content-center gap-3 ">
          <span className="number-card">{number}</span>
          <h2 className="card-title">{title}</h2>
          <p>{text}</p>
        </div>
      </div>
    );
  };
  return (
    <div className="d-flex align-items-start  flex-column flex-lg-row pt-5 pb-5">
      {Card(imgRetro, "Reviving Retro PCs", "What happens when old PCs are given modern upgrades?", "01")}
      {Card(imgLaptop, "Top 10 Laptops of 2022", "Our best picks for various needs and budgets.", "02")}
      {Card(imgGaming, "The Growth of Gaming", "How the pandemic has sparked fresh opportunities.", "03")}
    </div>
  );
};

export default Cards;
