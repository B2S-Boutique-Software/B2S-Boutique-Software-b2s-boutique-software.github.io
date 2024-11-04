"use client";

import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import { blue, green, red, orange } from "@mui/material/colors";
import { SiPython, SiGo, SiJavascript } from "react-icons/si";
import CloudIcon from "@mui/icons-material/Cloud";
import { Container, Grid2 } from "@mui/material";

const tecnologias = [
  {
    nome: "Python",
    descricao: "Linguagem versátil para automação e criação de robôs",
    icon: <SiPython size={40} color="#306998" />,
    color: blue[50],
  },
  {
    nome: "GO",
    descricao: "Solução robusta para construção de serviços",
    icon: <SiGo size={40} color="#306998" />,
    color: green[50],
  },
  {
    nome: "JavaScript",
    descricao: "Essencial para desenvolvimento web e aplicações interativas",
    icon: <SiJavascript size={40} color="#306998" />,
    color: orange[50],
  },
  {
    nome: "Cloud Computing",
    descricao: "Infraestrutura em nuvem para escalar o seu negócio",
    icon: <CloudIcon sx={{ fontSize: 40, color: red[500] }} />,
    color: red[50],
  },
];

export default function Tech() {
  const theme = useTheme();

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      gap={3}
      sx={{ padding: theme.spacing(2), backgroundColor: "white" }}
    >
      <Box sx={{ py: 8 }}>
        <Container>
          <Grid2 container spacing={4} sx={{ color: "black" }}>
            <Typography variant="h4" fontWeight="bold" gutterBottom>
              Tecnologias
            </Typography>
          </Grid2>
        </Container>
      </Box>
      {tecnologias.map((tech, index) => (
        <Card
          key={index}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            padding: 3,
            backgroundColor: tech.color,
            borderRadius: 2,
            width: 400,
            height: 250,
          }}
        >
          {tech.icon}
          <CardContent>
            <Typography variant="h6" sx={{ fontWeight: "bold", marginTop: 2 }}>
              {tech.nome}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {tech.descricao}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}
