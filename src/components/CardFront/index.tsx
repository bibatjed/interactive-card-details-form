import { useContext } from "react";
import { creditContext } from "../../context/credit.context";
import CardFrontImg from "../../images/bg-card-front.png";
import CardLogo from "../../images/card-logo.svg";
import "./index.scss";
export default function CardFront() {
  const { cardHolderName, cardMM, cardYY, cardNumber } =
    useContext(creditContext);
  return (
    <div className="cardfront">
      <img src={CardFrontImg} alt="card-front" />
      <div className="cardfront__logo">
        <img src={CardLogo} alt="card-icons" />
      </div>
      <span className="cardfront__number">
        {" "}
        {cardNumber || "0000 0000 0000 0000"}
      </span>
      <span className="cardfront__name">
        {cardHolderName || "Jane Appleseed"}
      </span>
      <span className="cardfront__expiry-date">{`${cardMM || "00"}/${
        cardYY || "00"
      }`}</span>
    </div>
  );
}
