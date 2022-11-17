import CardBackImg from "../../images/bg-card-back.png";
import { useContext } from "react";
import { creditContext } from "../../context/credit.context";
import "./index.scss";

export default function CardBack() {
  const { cardCVC } = useContext(creditContext);
  return (
    <>
      <div className="cardback">
        <img src={CardBackImg} alt="card-back" />
        <span className="cardback__span">{cardCVC || "000"}</span>
      </div>
    </>
  );
}
