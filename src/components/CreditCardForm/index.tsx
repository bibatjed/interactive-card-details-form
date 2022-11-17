import { useContext, useState } from "react";
import { creditContext } from "../../context/credit.context";
import "./index.scss";
import { useForm } from "react-hook-form";
import SuccessState from "../SuccessState";
export default function CreditCardForm() {
  const { onChangeHandler, cardCVC, cardMM, cardYY } =
    useContext(creditContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  console.log(errors);
  const [showSucces, setShowSuccess] = useState(false);

  const onSubmit = (data: any) => {
    setShowSuccess((prevState) => !prevState);
  };
  function clearNumber(value = "") {
    return value.replace(/\D+/g, "");
  }
  function formatCreditCardNumber(value: string) {
    if (!value) {
      return value;
    }

    const clearValue = clearNumber(value);

    return `${clearValue.slice(0, 4)} ${clearValue.slice(
      4,
      8
    )} ${clearValue.slice(8, 12)} ${clearValue.slice(12, 16)}`.trim();
  }
  return (
    <div className="creditcard">
      <div className="creditcard__wrapper">
        <form onSubmit={handleSubmit(onSubmit)}>
          {showSucces ? (
            <SuccessState />
          ) : (
            <>
              <label className="creditcard__wrapper__name">
                Cardholder name
              </label>
              <input
                className={`creditcard__wrapper__name--input ${
                  errors.cardHolderName && "error"
                }`}
                {...register("cardHolderName", {
                  required: true,
                  onChange: (e) => {
                    onChangeHandler?.(e);
                  },
                })}
                placeholder="e.g Jane Appleseed"
              />
              {errors.cardHolderName && <span>This field is required</span>}
              <label className="creditcard__wrapper__name">Card number</label>
              <input
                type="tel"
                className={`creditcard__wrapper__number--input ${
                  errors.cardNumber && "error"
                }`}
                placeholder="e.g. 1234 5678 9123 0000"
                {...register("cardNumber", {
                  required: true,
                  onChange: (e) => {
                    e.target.value = formatCreditCardNumber(e.target.value);
                    onChangeHandler?.(e);
                  },
                })}
              />
              {errors.cardNumber && <span>This field is required</span>}
              <div className="creditcard__wrapper__date-cvc">
                <div className="creditcard__wrapper__date-cvc__label">
                  <label>EXP. Date (MM/YY)</label>
                  <label>CVC</label>
                </div>
                <div className="creditcard__wrapper__date-cvc__input">
                  <input
                    className={`creditcard__wrapper__date-cvc__input__MM ${
                      errors.cardMM && "error"
                    }`}
                    {...register("cardMM", {
                      required: true,
                      onChange: (e) => {
                        if (e.target.value.length <= 2) onChangeHandler?.(e);
                      },
                    })}
                    value={cardMM}
                    placeholder="MM"
                  />
                  <input
                    className={`creditcard__wrapper__date-cvc__input__YY ${
                      errors.cardYY && "error"
                    }`}
                    {...register("cardYY", {
                      required: true,
                      onChange: (e) => {
                        if (e.target.value.length <= 2) onChangeHandler?.(e);
                      },
                    })}
                    value={cardYY}
                    placeholder="YY"
                  />
                  <input
                    className={`creditcard__wrapper__date-cvc__input__CVC ${
                      errors.cardCVC && "error"
                    }`}
                    {...register("cardCVC", {
                      required: true,
                      onChange: (e) => {
                        if (e.target.value.length <= 3) onChangeHandler?.(e);
                      },
                    })}
                    value={cardCVC}
                    placeholder="e.g 123"
                  />
                </div>
                <div className="creditcard__wrapper__date-cvc__error">
                  {errors.cardMM && <span>This field is required</span>}
                  {errors.cardYY && <span>This field is required</span>}
                  {errors.cardCVC && <span>This field is required</span>}
                </div>
              </div>
            </>
          )}

          <button type="submit" className="creditcard__wrapper__submit">
            {" "}
            Confirm
          </button>
        </form>
      </div>
    </div>
  );
}
