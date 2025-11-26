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
  { name: "About", path: "/about" },
  { name: "Experience", path: "/experience" },
  { name: "Research", path: "/research" },
  { name: "Personal", path: "/personal" },
  { name: "Achievements", path: "/achievements" },
  // { name: "Projects", path: "/projects" },
  { name: "Resume", path: "/resume" },
];

/** helper: underline for active link */
const activeStyles = {
  fontWeight: 700,
  "&::after": {
    content: '""',
    position: "absolute",
    left: 0,
    bottom: -6,
    width: "100%",
    height: 2,
    bgcolor: "primary.contrastText",
    opacity: 0.9,
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
        sx={{
          backdropFilter: "saturate(180%) blur(20px)",
          backgroundColor: "rgba(12,10,31,0.7)",
          borderBottom: "1px solid rgba(99,102,241,0.2)",
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
              sx={{
                fontWeight: 800,
                letterSpacing: 0.4,
                color: "primary.contrastText",
                fontSize: { xs: "1.25rem", sm: "1.5rem", md: "1.75rem" },
                "& a": { color: "inherit", textDecoration: "none" },
                "&:hover": { opacity: 0.9 },
              }}
            >
              <a href="https://sinethjayasundera.com" rel="noopener noreferrer">
                sinethjayasundera.com
              </a>
            </Typography>
          </Box>

          {/* Desktop nav */}
          <Box
            component="nav"
            aria-label="primary"
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
                  borderRadius: 1.5,
                  fontWeight: isActive ? 700 : 500,
                  textTransform: "none",
                  "&:hover": { bgcolor: "rgba(255,255,255,0.08)" },
                  ...(isActive ? activeStyles : {}),
                })}
                aria-current={({ isActive }) => (isActive ? "page" : undefined)}
              >
                {item.name}
              </Button>
            ))}

            {/* CTA (optional, tweak as you like) */}
            <Button
              component={RouterLink}
              to="/contact"
              sx={{
                ml: { md: 0.5, lg: 1 },
                textTransform: "none",
                borderRadius: 2,
                px: 2,
                py: 1,
                fontWeight: 700,
                background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                color: '#fff',
                boxShadow: "0 4px 16px rgba(99,102,241,0.3)",
                transition: "all 0.3s ease",
                "&:hover": { 
                  opacity: 0.9, 
                  boxShadow: "0 6px 24px rgba(99,102,241,0.5)",
                  transform: "translateY(-1px)",
                },
              }}
            >
              Hire Me
            </Button>
          </Box>

          {/* Mobile menu button */}
          <IconButton
            edge="end"
            color="inherit"
            aria-label="Open navigation menu"
            onClick={handleDrawerToggle}
            sx={{
              display: { xs: "inline-flex", md: "none" },
              ml: 0.5,
              "&:focus-visible": { outline: "2px solid rgba(255,255,255,.7)" },
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
        ModalProps={{ keepMounted: true }}
        sx={{
          "& .MuiDrawer-paper": {
            width: { xs: "78%", sm: 320 },
            background: "linear-gradient(135deg, rgba(12,10,31,0.98) 0%, rgba(26,15,46,0.98) 100%)",
            backdropFilter: "blur(20px)",
            borderLeft: "1px solid rgba(99,102,241,0.2)",
            color: "#fff",
            pt: 1,
          },
        }}
      >
        <Box
          role="presentation"
          sx={{ display: "flex", flexDirection: "column", height: "100%" }}
        >
          <Box sx={{ px: 2, py: 1.5 }}>
            <Typography sx={{ fontWeight: 800, letterSpacing: 0.4 }}>
              Menu
            </Typography>
          </Box>
          <Divider sx={{ borderColor: "rgba(255,255,255,0.08)" }} />

          <List sx={{ px: 1 }}>
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
                  px: 1.25,
                  py: 1.25,
                  ...(isActive
                    ? { bgcolor: "rgba(255,255,255,0.10)" }
                    : { "&:hover": { bgcolor: "rgba(255,255,255,0.08)" } }),
                })}
                aria-current={({ isActive }) => (isActive ? "page" : undefined)}
              >
                <ListItemText
                  primary={item.name}
                  primaryTypographyProps={{
                    sx: {
                      fontWeight: 600,
                      fontSize: { xs: "1rem", sm: "1.05rem" },
                      color: "inherit",
                    },
                  }}
                />
              </ListItemButton>
            ))}
          </List>

          <Box sx={{ mt: "auto", p: 2 }}>
            <Button
              fullWidth
              component={RouterLink}
              to="/contact"
              onClick={closeDrawerAndNavigate}
              sx={{
                textTransform: "none",
                borderRadius: 2,
                py: 1.25,
                fontWeight: 700,
                background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                color: '#fff',
                boxShadow: "0 4px 16px rgba(99,102,241,0.3)",
                "&:hover": { opacity: 0.95, boxShadow: "0 6px 24px rgba(99,102,241,0.5)" },
              }}
            >
              Hire Me
            </Button>
          </Box>
        </Box>
      </Drawer>
    </>
  );
}



