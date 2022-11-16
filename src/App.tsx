import "./App.scss";
import CardBack from "./components/CardBack";
import CardFront from "./components/CardFront";
import CreditCardForm from "./components/CreditCardForm";
import { CreditContext } from "./context/credit.context";

function App() {
  return (
    <div className="main">
      <CreditContext>
        <CardBack />
        <CardFront />
        <CreditCardForm />
      </CreditContext>
    </div>
  );
}

export default App;
