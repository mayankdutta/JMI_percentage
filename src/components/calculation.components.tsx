import { Stack, TextField } from "@mui/material";
import { Dispatch, SetStateAction, useState } from "react";
import Typography from "@mui/material/Typography";
import Zero from "../assets/0.jpeg";
import One from "../assets/1.jpg";
import Two from "../assets/2.jpeg";
import Three from "../assets/3.jpeg";
import Four from "../assets/4.jpeg";
import Five from "../assets/5.jpeg";
import Six from "../assets/6.jpeg";

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
        Your Result: {(result || 0).toFixed(3)}
      </Typography>

      {9.5 < input && input <= 10.0 && <img src={Zero} height="200px" />}
      {9.0 < input && input <= 9.5 && <img src={One} height="200px" />}
      {8.5 < input && input <= 9.0 && <img src={Two} height="200px" />}
      {8.0 < input && input <= 8.5 && <img src={Three} height="200px" />}
      {7.5 < input && input <= 8.0 && <img src={Four} height="200px" />}
      {7.0 < input && input <= 7.5 && <img src={Five} height="200px" />}
      {1.0 < input && input <= 7.0 && <img src={Six} height="200px" />}
    </div>
  );
}
