"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Typography } from "@mui/material";

const menuItems = [
  { name: "Serviços", target: "servicos" },
  { name: "Tecnologias", target: "tecnologias" },
  { name: "Clientes", target: "clientes" },
  { name: "Contato", target: "contato" },
];

export default function Header() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setIsDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };

  const handleScroll = (targetId: string) => {
    if (targetId == "servicos") {
      handleDrawerClose();
      return;
    }
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
      handleDrawerClose();
    }
  };

  const drawerContent = (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "black",
        color: "white",
        display: "flex",
        flexDirection: "column",
      }}
      role="presentation"
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          p: 2,
        }}
      >
        <IconButton
          onClick={handleDrawerClose}
          color="inherit"
          aria-label="fechar menu"
        >
          <CloseIcon />
        </IconButton>
      </Box>
      <List
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {menuItems.map((item) => (
          <ListItem key={item.name} sx={{ my: 2 }}>
            <ListItemText
              primary={item.name}
              onClick={() => handleScroll(item.target)}
              primaryTypographyProps={{
                variant: "h5",
                align: "center",
                textTransform: "none",
              }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "black" }}>
        <Toolbar>
          <Avatar
            alt="Logo"
            src="/favicon.ico"
            sx={{
              height: 40,
              width: 40,
              mr: 2,
            }}
          />
          <Typography
            variant="h4"
            component="h1"
            sx={{
              fontWeight: "bold",
              mb: 2,
              color: "#000",
            }}
          >
            B2S
          </Typography>
          {isMobile ? (
            <>
              <Box sx={{ flexGrow: 1 }} />
              <IconButton
                size="large"
                edge="end"
                color="inherit"
                aria-label="Abrir menu"
                onClick={handleDrawerOpen}
              >
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor="right"
                open={isDrawerOpen}
                onClose={handleDrawerClose}
                ModalProps={{
                  keepMounted: true,
                }}
              >
                {drawerContent}
              </Drawer>
            </>
          ) : (
            <>
              <Box
                sx={{ display: "flex", flexGrow: 1, justifyContent: "center" }}
              >
                {menuItems.map((item) => (
                  <Button
                    onClick={() => handleScroll(item.target)}
                    key={item.name}
                    color="inherit"
                    sx={{ mx: 1, fontSize: "1.1rem", textTransform: "none" }}
                  >
                    {item.name}
                  </Button>
                ))}
              </Box>
              <Box sx={{ flexGrow: 0 }} />
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
