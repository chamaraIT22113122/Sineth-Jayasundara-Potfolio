import React, { createContext, useContext, useState, useEffect, useMemo } from "react";
import { ThemeProvider as MuiThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const ThemeContext = createContext();

export const useThemeMode = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useThemeMode must be used within ThemeProvider");
  }
  return context;
};

export default function ThemeProvider({ children }) {
  const [mode, setMode] = useState(() => {
    const savedMode = localStorage.getItem("theme-mode");
    return savedMode || "dark";
  });

  useEffect(() => {
    localStorage.setItem("theme-mode", mode);
  }, [mode]);

  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === "light"
            ? {
                // Light Mode Colors
                primary: {
                  main: "#22d3ee",
                  light: "#06b6d4",
                  dark: "#0891b2",
                  contrastText: "#1a1a1a",
                },
                secondary: {
                  main: "#06b6d4",
                  light: "#67e8f9",
                  dark: "#22d3ee",
                },
                background: {
                  default: "#f5f5f7",
                  paper: "#ffffff",
                },
                text: {
                  primary: "#1a1a1a",
                  secondary: "#4a5568",
                },
              }
            : {
                // Dark Mode Colors (Current)
                primary: {
                  main: "#22d3ee",
                  light: "#06b6d4",
                  dark: "#0891b2",
                  contrastText: "#ffffff",
                },
                secondary: {
                  main: "#06b6d4",
                  light: "#67e8f9",
                  dark: "#22d3ee",
                },
                background: {
                  default: "#121212",
                  paper: "#1a1a1a",
                },
                text: {
                  primary: "#ffffff",
                  secondary: "rgba(255,255,255,0.7)",
                },
              }),
        },
        typography: {
          fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
          h1: {
            fontWeight: 900,
          },
          h2: {
            fontWeight: 800,
          },
          h3: {
            fontWeight: 700,
          },
        },
        components: {
          MuiButton: {
            styleOverrides: {
              root: {
                textTransform: "none",
                borderRadius: 8,
                fontWeight: 600,
              },
            },
          },
          MuiCard: {
            styleOverrides: {
              root: {
                borderRadius: 12,
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              },
            },
          },
        },
      }),
    [mode]
  );

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
}
