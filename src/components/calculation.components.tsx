import { Stack, TextField } from "@mui/material";
import { Dispatch, SetStateAction, useState } from "react";
import Typography from "@mui/material/Typography";

import Zero from "../assets/new/0.png";
import One from "../assets/new/1.png";
import Two from "../assets/new/2.jpeg";
import Three from "../assets/new/3.jpg";
import Four from "../assets/new/4.png";
import Five from "../assets/new/5.png";
import Six from "../assets/new/6.png";
import Seven from "../assets/new/7.png";
import Eight from "../assets/new/8.png";
import Nine from "../assets/new/9.png";
import Ten from "../assets/new/10.png";
import Negative from "../assets/new/negative.png";
import Extreme from "../assets/new/extreme.png";

export default function Calculation({
  input,
  setInput,
}: {
  input: number;
  setInput: Dispatch<SetStateAction<number>>;
}) {
  const [result, setResult] = useState<number>(0);

  function handleCalculate(x: number) {
    setResult((20 * x * x * x - 380 * x * x + 2725 * x - 1690) / 84);
  }

  console.log("zero: ", Zero);
  return (
    <div>
      <TextField
        // fullwidth
        type="number"
        label="Enter Your SPI "
        id="standard-basic"
        variant="standard"
        value={input || ""}
        onChange={(e) => {
          setInput(parseFloat(e.target.value));
          handleCalculate(parseFloat(e.target.value));
        }}
      />

      <Typography variant="h4">
        Your Result: {(result || 0).toFixed(3)}%
      </Typography>

      {10.0 < input && <img src={Extreme} height="200px" />}
      {9.5 < input && input <= 10.0 && <img src={Zero} height="200px" />}
      {9.0 < input && input <= 9.5 && <img src={One} height="200px" />}
      {8.5 < input && input <= 9.0 && <img src={Two} height="200px" />}
      {8.0 < input && input <= 8.5 && <img src={Three} height="200px" />}
      {7.5 < input && input <= 8.0 && <img src={Four} height="200px" />}
      {7.0 < input && input <= 7.5 && <img src={Five} height="200px" />}
      {6.5 < input && input <= 7.0 && <img src={Six} height="200px" />}
      {6.0 < input && input <= 6.5 && <img src={Seven} height="200px" />}
      {5.5 < input && input <= 6.0 && <img src={Eight} height="200px" />}
      {5.0 < input && input <= 5.5 && <img src={Nine} height="200px" />}
      {4.5 < input && input <= 5.0 && <img src={Ten} height="200px" />}
      {1.0 < input && input <= 4.5 && <img src={Negative} height="200px" />}
    </div>
  );
}
