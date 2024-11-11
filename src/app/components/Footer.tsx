import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#000",
        color: "#fff", 
        padding: "16px",
        bottom: 0,
        width: "100%",
        textAlign: "center",
        boxShadow: "0 -2px 4px rgba(0, 0, 0, 0.1)",
        zIndex: 1300, 
      }}
    >
      <Typography variant="body2">
        © {new Date().getFullYear()} B2S. Todos os direitos reservados.
      </Typography>
    </Box>
  );
}
