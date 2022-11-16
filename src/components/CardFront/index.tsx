import CardFrontImg from "../../images/bg-card-front.png";
import CardLogo from "../../images/card-logo.svg";
import "./index.scss";
export default function CardFront() {
  return (
    <div className="cardfront">
      <img src={CardFrontImg} alt="card-front" />
      <div className="cardfront__logo">
        <img src={CardLogo} alt="card-icons" />
      </div>
      <span className="cardfront__number">0000 0000 0000 0000</span>
      <span className="cardfront__name">Jane Appleseed</span>
      <span className="cardfront__expiry-date">00/00</span>
    </div>
  );
}
