"use client";

import React from "react";
import { v4 as uuidv4 } from 'uuid';
import { Box, Typography, Tooltip } from "@mui/material";

const clients = [
  {
    id: 1,
    name: "Catarina Transportes",
    logo: "catarina.png",
  },
  {
    id: 2,
    name: "Transportes Nova Vida",
    logo: "novavida.png",
  },
  {
    id: 3,
    name: "Espaço Terapêutico Ressignificar",
    logo: "ressignificar.png",
  },
  {
    id: 4,
    name: "Orbe Sistemas",
    logo: "orbe.png",
  },
  {
    id: 6,
    name: "Celk Sistemas",
    logo: "celk.png",
  },
];

export default function Clientes() {
  return (
    <Box id="clientes" sx={{ backgroundColor: "#f9f5f2", py: 8 }}>
      <Typography
        variant="h4"
        fontWeight="bold"
        gutterBottom
        sx={{ mb: 4, textAlign: "center", color: "black" }}
      >
        Clientes que já acreditaram no nosso trabalho
      </Typography>
      {clients.map((client, index) => (
        <Tooltip key={uuidv4()} title={client.name}>
          <Box sx={{ textAlign: "center", px: 2 }}>
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
        </Tooltip>
      ))}
    </Box>
  );
}
