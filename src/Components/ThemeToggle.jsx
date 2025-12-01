import React from "react";
import { IconButton, Tooltip } from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import { useThemeMode } from "./ThemeProvider";

export default function ThemeToggle() {
  const { mode, toggleTheme } = useThemeMode();

  return (
    <Tooltip title={`Switch to ${mode === "light" ? "dark" : "light"} mode`} arrow>
      <IconButton
        onClick={toggleTheme}
        aria-label={`Switch to ${mode === "light" ? "dark" : "light"} mode`}
        sx={{
          color: mode === "light" ? "#1a1a1a" : "#fff",
          background: mode === "light" ? "rgba(0,0,0,0.05)" : "rgba(255,255,255,0.05)",
          width: { xs: 40, md: 44 },
          height: { xs: 40, md: 44 },
          transition: "all 0.3s ease",
          "&:hover": {
            background: mode === "light" ? "rgba(0,0,0,0.1)" : "rgba(255,255,255,0.1)",
            transform: "rotate(180deg)",
          },
          "&:focus-visible": {
            outline: "2px solid #22d3ee",
            outlineOffset: "2px",
          },
        }}
      >
        {mode === "light" ? <Brightness4 /> : <Brightness7 />}
      </IconButton>
    </Tooltip>
  );
}
