import { useContext } from "react";
import { creditContext } from "../../context/credit.context";
import { useForm } from "react-hook-form";
export default function CreditCardForm() {
  const { onChangeHandler } = useContext(creditContext);
  return (
    <div className="creditcard">
      <div className="creditcard__wrapper">
        <form>
          <label className="creditcard__wrapper__name">Cardholder name</label>
          <input
            className="creditcard__wrapper__name--input"
            name="cardHolderName"
            onChange={onChangeHandler}
            placeholder="e.g Jane Appleseed"
          />
          <label className="creditcard__wrapper__name">Card number</label>
          <input
            className="creditcard__wrapper__number--input"
            placeholder="e.g. 1234 5678 9123 0000"
            name="cardNumber"
            onChange={onChangeHandler}
          />
          <label className="creditcard__wrapper__name">EXP. Date(MM/YY)</label>
          <label className="creditcard__wrapper__name">CVC</label>
          <input
            className="creditcard__wrapper__MM--input"
            onChange={onChangeHandler}
            name="cardMM"
            placeholder="MM"
          />
          <input
            className="creditcard__wrapper__YY--input"
            onChange={onChangeHandler}
            name="cardYY"
            placeholder="YY"
          />
          <input
            className="creditcard__wrapper__CVC--input"
            name="CVC"
            onChange={onChangeHandler}
            placeholder="e.g 123"
          />
          <button className="creditcard__wrapper__submit"> Confirm</button>
        </form>
      </div>
    </div>
  );
}
