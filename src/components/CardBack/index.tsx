import CardBackImg from "../../images/bg-card-back.png";
import "./index.scss";

export default function CardBack() {
  return (
    <>
      <div className="cardback">
        <img src={CardBackImg} alt="card-back" />
        <span className="cardback__span">000</span>
      </div>
    </>
  );
}
