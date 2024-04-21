import React, { useContext, useState } from "react";
import { Box, IconButton, useTheme } from "@mui/material";
import { ColorModeContext, tokens } from "../../theme";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";
import SettingsPage from "./SettingsPage";
import NotificationPage from "./NotificationPage";
import LoginPage from "./LoginPage";

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [notificationOpen, setNotificationOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);

  const handleSettingsClick = () => {
    setSettingsOpen(!settingsOpen);
  };

  const handleNotificationsClick = () => {
    setNotificationOpen(!notificationOpen);
  };

  const handleUserClick = () => {
    setLoginOpen(!loginOpen);
  };

  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      {/* SEARCH BAR */}
      <Box
        display="flex"
        backgroundColor={colors.primary[400]}
        borderRadius="24px"
        width="400px"
      >
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
        <IconButton type="button" sx={{ p: 1 }}>
          <SearchIcon />
        </IconButton>
      </Box>

      {/* ICONS */}
      <Box display="flex">
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>
        <IconButton onClick={handleNotificationsClick}>
          <NotificationsOutlinedIcon />
        </IconButton>
        <IconButton onClick={handleSettingsClick}>
          <SettingsOutlinedIcon />
        </IconButton>
        <IconButton onClick={handleUserClick}>
          <PersonOutlinedIcon />
        </IconButton>
      </Box>

      {/* SETTINGS PAGE */}
      {settingsOpen && <SettingsPage />}

      {/* NOTIFICATION PAGE */}
      {notificationOpen && <NotificationPage />}

      {/* LOGIN PAGE */}
      {loginOpen && <LoginPage />}
    </Box>
  );
};

export default Topbar;
