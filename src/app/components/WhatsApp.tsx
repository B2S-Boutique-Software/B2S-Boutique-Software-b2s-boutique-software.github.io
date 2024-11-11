import Fab from "@mui/material/Fab";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export default function WhatsApp() {
  return (
    <Fab
      color="primary"
      href="https://wa.me/5548996897458"
      target="_blank"
      sx={{
        position: "fixed",
        bottom: 16,
        right: 16,
        backgroundColor: "#25D366",
        "&:hover": {
          backgroundColor: "#1DA851",
        },
      }}
    >
      <WhatsAppIcon />
    </Fab>
  );
}
