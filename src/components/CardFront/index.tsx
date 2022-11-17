import { useContext, useMemo } from "react";
import { creditContext } from "../../context/credit.context";
import CardFrontImg from "../../images/bg-card-front.png";
import CardLogo from "../../images/card-logo.svg";
import "./index.scss";
export default function CardFront() {
  const { cardHolderName, cardMM, cardYY, cardNumber } =
    useContext(creditContext);
  const memoizedCardNumber = useMemo(() => {
    return cardNumber.split(" ");
  }, [cardNumber]);
  return (
    <div className="cardfront">
      <img src={CardFrontImg} alt="card-front" />
      <div className="cardfront__logo">
        <img src={CardLogo} alt="card-icons" />
      </div>
      <span className="cardfront__number">
        {" "}
        {`${memoizedCardNumber[0] || "0000"} ${
          memoizedCardNumber[1] || "0000"
        } ${memoizedCardNumber[2] || "0000"} ${
          memoizedCardNumber[3] || "0000"
        }`}
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
