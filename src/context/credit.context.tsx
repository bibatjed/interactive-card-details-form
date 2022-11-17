import { ChangeEvent, createContext, ReactNode, useState } from "react";

const initialState = {
  cardHolderName: "",
  cardNumber: "",
  cardMM: "",
  cardYY: "",
  cardCVC: "",
};

interface CreditCardMethod extends CreditCardInformation {
  onChangeHandler?(e: ChangeEvent<HTMLInputElement>): void;
}

export const creditContext = createContext<CreditCardMethod>(initialState);

type CreditCardInformation = {
  cardHolderName: string;
  cardNumber: string;
  cardMM: string;
  cardYY: string;
  cardCVC: string;
};
export function CreditContext({ children }: { children: ReactNode }) {
  const [value, setValue] = useState<CreditCardInformation>(initialState);
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setValue((prevValue) => ({
      ...prevValue,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <creditContext.Provider value={{ ...value, onChangeHandler }}>
      {children}
    </creditContext.Provider>
  );
}
