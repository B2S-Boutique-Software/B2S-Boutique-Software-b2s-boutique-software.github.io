"use client";

import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  IconButton,
  Grid2,
  Container,
  Avatar,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import MobileFriendlyRoundedIcon from "@mui/icons-material/MobileFriendlyRounded";
import AirplayRoundedIcon from "@mui/icons-material/AirplayRounded";
import CheckBoxRoundedIcon from "@mui/icons-material/CheckBoxRounded";
import SmartToyRoundedIcon from "@mui/icons-material/SmartToyRounded";

const services = [
  {
    title: "Sistemas",
    description:
      "Usamos tecnologia de ponta usada pelas maiores empresas do mundo para resolver o problema do seu negócio",
    icon: <AirplayRoundedIcon />,
    color: "#FF5733",
  },
  {
    title: "Aplicativos",
    description:
      "Você precisa de uma experiência para celulares? Podemos ajudar!",
    icon: <MobileFriendlyRoundedIcon />,
    color: "#3498DB",
  },
  {
    title: "Testes",
    description:
      "Está precisando melhorar a qualidade do seu produto? Conte conosco e explore nossas possibilidades",
    icon: <CheckBoxRoundedIcon />,
    color: "#2ECC71",
  },
  {
    title: "Automações",
    description:
      "Precisa automatizar uma tarefa repetitiva e morosa? Conte com nossos robôs de automação, e deixe sua equipe focar no que realmente importa",
    icon: <SmartToyRoundedIcon />,
    color: "#F39C12",
  },
];

export default function InfoSection() {
  const theme = useTheme();

  return (
    <Box
      id="servicos"
      display="flex"
      flexDirection="column"
      alignItems="center"
      gap={3}
      sx={{ padding: theme.spacing(2) }}
    >
      <Box sx={{ py: 8 }}>
        <Container>
          <Typography
            variant="h4"
            fontWeight="bold"
            gutterBottom
            sx={{ mb: 4, textAlign: "center", color: "white" }}
          >
            Serviços
          </Typography>
        </Container>
      </Box>
      {services.map((service, index) => (
        <Card
          key={index}
          variant="outlined"
          sx={{ width: "100%", maxWidth: 400, borderRadius: 2, boxShadow: 3 }}
        >
          <CardContent>
            <Box display="flex" alignItems="center" mb={1}>
              <IconButton
                sx={{
                  backgroundColor: service.color,
                  color: "white",
                  borderRadius: 1,
                  marginRight: theme.spacing(1),
                }}
              >
                {service.icon}
              </IconButton>
              <Typography variant="h5" component="div" fontWeight="bold">
                {service.title}
              </Typography>
            </Box>
            <Typography variant="body2" color="text.secondary" mb={2}>
              {service.description}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}
