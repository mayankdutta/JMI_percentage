import { TextField } from "@mui/material";
import { Dispatch, SetStateAction, useState } from "react";
import Typography from "@mui/material/Typography";

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

  console.log("input: ", input);
  return (
    <>
      <TextField
        // fullwidth
        type="number"
        label="Enter Your SPI "
        id="standard-basic"
        variant="standard"
        value={input || 0}
        onChange={(e) => {
          setInput(parseFloat(e.target.value));
          handleCalculate(parseFloat(e.target.value));
        }}
      />

      <p>formula used: (20 * x * x * x - 380 * x * x + 2725 * x - 1690) / 84</p>

      <Typography variant="h4">{result || 0}</Typography>
    </>
  );
}
