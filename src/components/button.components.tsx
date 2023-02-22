import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import { Dispatch, SetStateAction } from "react";

export default function IconLabelButtons({
  checked,
  handleClick,
}: {
  checked: string[];
  handleClick: () => void;
}) {
  return (
    <Stack direction="row" spacing={2}>
      {checked.length == 5 ? (
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
