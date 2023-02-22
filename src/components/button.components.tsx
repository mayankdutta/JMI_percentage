import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";

export default function IconLabelButtons() {
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="outlined" startIcon={<ThumbUpAltIcon />}>
        Confirm
      </Button>
    </Stack>
  );
}
