import React, { useState, useCallback } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Box,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink, Link as RouterLink } from "react-router-dom";

/** central nav config (edit here) */
const navItems = [
  { name: "Home", path: "/home" },
  { name: "About Me", path: "/about" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Research", path: "/research" },
  { name: "Contact", path: "/contact" },
];

/** helper: underline for active link */
const activeStyles = {
  fontWeight: 700,
  "&::after": {
    content: '""',
    position: "absolute",
    left: "50%",
    bottom: -6,
    transform: "translateX(-50%)",
    width: "60%",
    height: 3,
    bgcolor: "#22d3ee",
    borderRadius: 2,
    opacity: 1,
    boxShadow: "0 0 8px rgba(34,211,238,0.6)",
  },
};

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = useCallback(() => {
    setMobileOpen((v) => !v);
  }, []);

  const closeDrawerAndNavigate = useCallback(() => {
    setMobileOpen(false);
  }, []);

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        component="nav"
        role="navigation"
        aria-label="Main navigation"
        sx={{
          backdropFilter: "saturate(180%) blur(20px)",
          backgroundColor: "rgba(18,18,18,0.85)",
          borderBottom: "1px solid rgba(34,211,238,0.2)",
          boxShadow: "0 4px 24px rgba(0,0,0,0.2)",
        }}
      >
        <Toolbar
          sx={{
            minHeight: { xs: 56, sm: 64, md: 72 },
            px: { xs: 1.5, sm: 3, md: 4 },
            display: "flex",
            gap: 2,
          }}
        >
          {/* Brand */}
          <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
            <Typography
              variant="h6"
              component="div"
              sx={{
                fontWeight: 800,
                letterSpacing: 0.4,
                color: "primary.contrastText",
                fontSize: { xs: "1.1rem", sm: "1.3rem", md: "1.5rem" },
                "& a": { color: "inherit", textDecoration: "none" },
                "&:hover": { opacity: 0.9 },
                "&:focus-within": {
                  outline: "2px solid #22d3ee",
                  outlineOffset: "2px",
                  borderRadius: 1,
                },
              }}
            >
              <a
                href="https://sinethjayasundera.com"
                rel="noopener noreferrer"
                aria-label="Sineth Jayasundera home page"
              >
                sinethjayasundera.com
              </a>
            </Typography>
          </Box>

          {/* Desktop nav */}
          <Box
            component="nav"
            aria-label="Primary navigation"
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              gap: { md: 1, lg: 1.5 },
            }}
          >
            {navItems.map((item) => (
              <Button
                key={item.name}
                component={NavLink}
                to={item.path}
                end
                sx={({ isActive }) => ({
                  position: "relative",
                  color: "primary.contrastText",
                  px: 1.5,
                  py: 1,
                  minHeight: 44,
                  borderRadius: 1.5,
                  fontWeight: isActive ? 700 : 500,
                  textTransform: "none",
                  fontSize: { md: "0.95rem", lg: "1rem" },
                  transition: "all 0.3s ease",
                  "&:hover": { 
                    bgcolor: "rgba(34,211,238,0.1)",
                    color: "#22d3ee",
                  },
                  "&:focus-visible": {
                    outline: "2px solid #22d3ee",
                    outlineOffset: "2px",
                  },
                  ...(isActive ? {
                    ...activeStyles,
                    color: "#22d3ee",
                    bgcolor: "rgba(34,211,238,0.08)",
                  } : {}),
                })}
                aria-current={({ isActive }) => (isActive ? "page" : undefined)}
              >
                {item.name}
              </Button>
            ))}
          </Box>

          {/* Mobile menu button */}
          <IconButton
            edge="end"
            color="inherit"
            aria-label="Open navigation menu"
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation-drawer"
            onClick={handleDrawerToggle}
            sx={{
              display: { xs: "inline-flex", md: "none" },
              ml: 0.5,
              minWidth: 44,
              minHeight: 44,
              touchAction: "manipulation",
              "&:focus-visible": {
                outline: "2px solid #22d3ee",
                outlineOffset: "2px",
              },
            }}
          >
            <MenuIcon sx={{ fontSize: { xs: "1.5rem", sm: "1.75rem" } }} />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Spacer so content isn't hidden under fixed AppBar */}
      <Toolbar sx={{ minHeight: { xs: 56, sm: 64, md: 72 } }} />

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        keepMounted
        id="mobile-navigation-drawer"
        aria-label="Mobile navigation menu"
        ModalProps={{ keepMounted: true }}
        sx={{
          "& .MuiDrawer-paper": {
            width: { xs: "80%", sm: 320 },
            maxWidth: 400,
            background: "linear-gradient(135deg, rgba(18,18,18,0.98) 0%, rgba(26,15,46,0.98) 100%)",
            backdropFilter: "blur(20px)",
            borderLeft: "1px solid rgba(34,211,238,0.2)",
            color: "#fff",
            pt: 1,
          },
        }}
      >
        <Box
          role="navigation"
          aria-label="Mobile navigation"
          sx={{ display: "flex", flexDirection: "column", height: "100%" }}
        >
          <Box sx={{ px: 2, py: 1.5 }}>
            <Typography variant="h6" sx={{ fontWeight: 800, letterSpacing: 0.4, fontSize: "1.1rem" }}>
              Navigation
            </Typography>
          </Box>
          <Divider sx={{ borderColor: "rgba(255,255,255,0.08)" }} />

          <List sx={{ px: 1, py: 1 }}>
            {navItems.map((item) => (
              <ListItemButton
                key={item.name}
                component={NavLink}
                to={item.path}
                end
                onClick={closeDrawerAndNavigate}
                sx={({ isActive }) => ({
                  borderRadius: 1.5,
                  mb: 0.5,
                  px: 1.5,
                  py: 1.5,
                  minHeight: 48,
                  touchAction: "manipulation",
                  ...(isActive
                    ? { bgcolor: "rgba(6,182,212,0.15)", borderLeft: "3px solid #22d3ee" }
                    : { "&:hover": { bgcolor: "rgba(255,255,255,0.08)" } }),
                  "&:focus-visible": {
                    outline: "2px solid #22d3ee",
                    outlineOffset: "-2px",
                  },
                })}
                aria-current={({ isActive }) => (isActive ? "page" : undefined)}
              >
                <ListItemText
                  primary={item.name}
                  primaryTypographyProps={{
                    sx: {
                      fontWeight: 600,
                      fontSize: { xs: "1.05rem", sm: "1.1rem" },
                      color: "inherit",
                    },
                  }}
                />
              </ListItemButton>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}



