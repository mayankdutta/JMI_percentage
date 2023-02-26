import { Stack } from "@mui/system";
import { useState } from "react";
import "./App.css";
import IconLabelButtons from "./components/button.components";
import CheckboxListSecondary from "./components/list.components";
import Calculation from "./components/calculation.components";
import { Typography } from "@mui/material";
import Jamia from "./assets/jamia.png";

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
    " Record it.",
  ];

  function handleClick() {
    setFlag(true);
  }

  console.log(input);

  return (
    <center style={{ minHeight: "100vh" }}>
      <img src={Jamia} height="100px" />
      <Typography variant="h2"> Jamia Calculator</Typography>
      <code>
        formula used: (20x<sup>3</sup> - 380x<sup>2</sup> + 2725x - 1690) / 84
      </code>

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
        <IconLabelButtons
          checked={checked}
          handleClick={handleClick}
          listArray={listArray}
        />
      </Stack>

      <Calculation input={input} setInput={setInput} />
    </center>
  );
}

export default App;
