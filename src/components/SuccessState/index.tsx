import SuccessIcon from "../../images/icon-complete.svg";
import "./index.scss";
export default function SuccessState() {
  return (
    <div className="success">
      <img src={SuccessIcon} alt="success" />
      <h1>Thank You!</h1>
      <p>We've added your card details</p>
    </div>
  );
}
