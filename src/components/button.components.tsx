import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import { Dispatch, SetStateAction } from "react";

export default function IconLabelButtons({
  checked,
  handleClick,
  listArray,
}: {
  checked: string[];
  handleClick: () => void;
  listArray: Array<string>;
}) {
  return (
    <Stack direction="row" spacing={2}>
      {checked.length == listArray.length ? (
        <Button
          onClick={handleClick}
          variant="outlined"
          startIcon={<ThumbUpAltIcon />}
        >
          Confirm
        </Button>
      ) : (
        <Button
          onClick={handleClick}
          variant="outlined"
          disabled
          startIcon={<ThumbUpAltIcon />}
        >
          Confirm
        </Button>
      )}
    </Stack>
  );
}
