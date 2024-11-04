"use client";

import React from "react";
import { Box, Container, Typography } from "@mui/material";

const clients = [
  {
    name: "Sistema Info",
    logo: "sistema-info.png",
  },
  {
    name: "Betha",
    logo: "betha.png",
  },
  {
    name: "NTT DATA",
    logo: "ntt.png",
  },
  {
    name: "Itaú",
    logo: "itau.png",
  },
  {
    name: "Orbe",
    logo: "orbe.png",
  },
  {
    name: "Celk",
    logo: "celk.png",
  }
];

export default function Clientes() {
  return (
    <Box sx={{ backgroundColor: "#f9f5f2", py: 8 }}>
      <Container>
        <Typography
          variant="h4"
          fontWeight="bold"
          gutterBottom
          sx={{ mb: 4, textAlign: "center", color: "black" }}
        >
          Clientes que já acreditaram no nosso trabalho
        </Typography>
        {clients.map((client, index) => (
          <Box key={index} sx={{ textAlign: "center", px: 2 }}>
            <Box
              component="img"
              src={client.logo}
              alt={client.name}
              sx={{
                maxWidth: "150px",
                height: "auto",
                mx: "auto",
                paddingTop: "50px",
                filter: "grayscale(100%)",
              }}
            />
          </Box>
        ))}
      </Container>
    </Box>
  );
}
