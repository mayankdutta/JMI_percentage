import "./App.css";
import IconLabelButtons from "./components/button.components";
import CheckboxListSecondary from "./components/list.components";

function App() {
  let listArray: Array<string> = [
    " Check your latest Marksheet. ",
    " Look for the QR Code. ",
    " It must be on the front page, where your SPI is mentioned.",
    " Scan the QR Code, It will give the overall SPI till now. ",
    " to confirm that you have read above steps. ",
  ];

  return (
    <div className="App">
      <h1> Jamia % Calculator</h1>
      <CheckboxListSecondary listArray={listArray} />
      <IconLabelButtons />

      <label>Enter Your SPI </label>
      <input />
    </div>
  );
}

export default App;
