import { Stack } from "@mui/system";
import { useState } from "react";
import "./App.css";
import IconLabelButtons from "./components/button.components";
import CheckboxListSecondary from "./components/list.components";
import Calculation from "./components/calculation.components";

function App() {
  const [checked, setChecked] = useState<string[]>([]);
  const [flag, setFlag] = useState<boolean>(false);
  const [input, setInput] = useState<number>(0);

  const listArray: Array<string> = [
    " Check your latest Marksheet.",
    " Look for the QR Code.",
    " It must be on the front page, where your SPI is mentioned.",
    " Scan the QR Code(use google lens)",
    " It will give the overall SPI till now.",
  ];

  function handleClick() {
    setFlag(true);
  }

  console.log(input);

  return (
    <center>
      <h1> Jamia Calculator</h1>
      <CheckboxListSecondary
        listArray={listArray}
        checked={checked}
        setChecked={setChecked}
      />
      <Stack
        className="stack"
        direction="row"
        spacing={2}
        justifyContent="center"
      >
        <p>Have you read all the points? </p>
        <IconLabelButtons checked={checked} handleClick={handleClick} />
      </Stack>

      {flag && <Calculation input={input} setInput={setInput} />}
    </center>
  );
}

export default App;
