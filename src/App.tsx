import "./App.scss";
import CardBack from "./components/CardBack";
import CardFront from "./components/CardFront";
import CreditCardForm from "./components/CreditCardForm";
import { CreditContext } from "./context/credit.context";

function App() {
  return (
    <CreditContext>
      <div className="wrapper">
        <div className="main">
          <CardBack />
          <CardFront />
        </div>
        <CreditCardForm />
      </div>
    </CreditContext>
  );
}

export default App;
