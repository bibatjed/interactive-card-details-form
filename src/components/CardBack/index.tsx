import CardBackImg from "../../images/bg-card-back.png";
import { useContext } from "react";
import { creditContext } from "../../context/credit.context";
import "./index.scss";

export default function CardBack() {
  const { CVC } = useContext(creditContext);
  return (
    <>
      <div className="cardback">
        <img src={CardBackImg} alt="card-back" />
        <span className="cardback__span">{CVC || "000"}</span>
      </div>
    </>
  );
}
