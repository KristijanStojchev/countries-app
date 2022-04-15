import Modal from "react-modal";
import "./App.css";
import CountriesList from "./Pages/CountriesList";

Modal.setAppElement("#root");

function App() {
  return (
    <div className="App">
      <CountriesList />
    </div>
  );
}

export default App;
