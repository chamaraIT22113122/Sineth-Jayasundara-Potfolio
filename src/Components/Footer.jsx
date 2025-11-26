import React from "react";
import {
  Box,
  Container,
  Grid,
  Stack,
  Typography,
  Link as MLink,
  IconButton,
  Button,
  Divider,
  Chip,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import NorthIcon from "@mui/icons-material/North";

const year = new Date().getFullYear();

const social = [
  { icon: <LinkedInIcon />, href: "https://www.linkedin.com/in/sineth-jayasundera/", label: "LinkedIn" },
  { icon: <EmailIcon />, href: "mailto:Sineth.Jayasundera@gmail.com", label: "Email" },
];

const quickLinks = [
  { label: "Home", href: "/home" },
  { label: "About", href: "/about" },
  { label: "Experience", href: "/experience" },
  { label: "Research", href: "/research" },
  { label: "Personal", href: "/personal" },
  { label: "Achievements", href: "/achievements" },
  { label: "Resume", href: "/resume" },
  { label: "Contact", href: "https://wa.me/15182439892" },
];

function SocialRow({ size = "medium" }) {
  return (
    <Stack direction="row" spacing={1.5}>
      {social.map((s, i) => (
        <IconButton
          key={i}
          aria-label={s.label}
          href={s.href}
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            color: "#fff",
            transition: "transform .2s, color .2s",
            "&:hover": { transform: "translateY(-3px)", color: "primary.light" },
          }}
          size={size}
        >
          {s.icon}
        </IconButton>
      ))}
    </Stack>
  );
}

/* ---------------- Desktop render ---------------- */
function DesktopFooter() {
  return (
    <Box
      component="footer"
      sx={{
        mt: "auto",
        pt: 6,
        pb: 2,
        background:
          "linear-gradient(180deg, rgba(12,10,31,0.95) 0%, rgba(26,15,46,0.98) 50%, rgba(12,10,31,1) 100%)",
        borderTop: "1px solid rgba(99,102,241,0.2)",
        boxShadow: "0 -4px 24px rgba(0,0,0,0.2)",
        color: "#fff",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Brand + tagline */}
          <Grid item md={4}>
            <Stack spacing={2}>
              <Typography
                variant="h5"
                sx={{ 
                  fontWeight: 800, 
                  letterSpacing: 0.3,
                  background: "linear-gradient(135deg, #fff 0%, #8b5cf6 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Sineth.Jayasundera
              </Typography>
              <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.75)" }}>
                Electrical Engineering student at Penn State, passionate about IoT development,
                embedded systems, and innovative solutions in electrical engineering.
              </Typography>
              <Stack direction="row" spacing={1}>
                <Chip label="Penn State" size="small" sx={{ bgcolor: "rgba(255,255,255,0.08)", color: "#fff" }} />
                <Chip label="Class of 2029" size="small" sx={{ bgcolor: "rgba(255,255,255,0.08)", color: "#fff" }} />
              </Stack>
              <SocialRow />
            </Stack>
          </Grid>

          {/* Quick links */}
          <Grid item md={4}>
            <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 1 }}>
              Quick Links
            </Typography>
            <Grid container spacing={1} columns={12}>
              {quickLinks.map((q) => (
                <Grid item xs={6} key={q.label}>
                  <MLink
                    href={q.href}
                    underline="hover"
                    color="inherit"
                    sx={{
                      display: "inline-block",
                      py: 0.5,
                      color: "rgba(255,255,255,0.8)",
                      "&:hover": { color: "#fff" },
                    }}
                  >
                    {q.label}
                  </MLink>
                </Grid>
              ))}
            </Grid>
          </Grid>

          {/* Contact */}
          <Grid item md={4}>
            <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 1 }}>
              Contact
            </Typography>
            <Stack spacing={1}>
              <MLink href="mailto:Sineth.Jayasundera@gmail.com" color="inherit" underline="hover">
                Sineth.Jayasundera@gmail.com
              </MLink>
              <MLink href="https://wa.me/15182439892" target="_blank" rel="noopener" color="inherit" underline="hover">
                WhatsApp: +1 518-243-9892
              </MLink>
              <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.75)" }}>
                Available for collaborations and opportunities
              </Typography>
              <Button
                href="https://wa.me/15182439892"
                sx={{
                  mt: 1,
                  textTransform: "none",
                  borderRadius: 2,
                  px: 2.5,
                  py: 1,
                  fontWeight: 700,
                  background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                  color: "#fff",
                  alignSelf: "start",
                  boxShadow: "0 4px 16px rgba(99,102,241,0.3)",
                  transition: "all 0.3s ease",
                  "&:hover": { 
                    opacity: 0.95,
                    boxShadow: "0 6px 24px rgba(99,102,241,0.5)",
                    transform: "translateY(-2px)",
                  },
                }}
              >
                Get in Touch
              </Button>
            </Stack>
          </Grid>
        </Grid>

        <Divider sx={{ my: 3, borderColor: "rgba(255,255,255,0.08)" }} />

        {/* Bottom strip */}
        <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ pb: 1 }}>
          <Typography variant="caption" sx={{ color: "rgba(255,255,255,0.5)", fontStyle: "italic" }}>
            © Website designed and developed by EFLASH24
          </Typography>

          <IconButton
            aria-label="Back to top"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            sx={{
              color: "#fff",
              border: "1px solid rgba(255,255,255,0.18)",
              borderRadius: 2,
              p: 1,
              "&:hover": { bgcolor: "rgba(255,255,255,0.08)" },
            }}
          >
            <NorthIcon fontSize="small" />
          </IconButton>
        </Stack>
      </Container>
    </Box>
  );
}

/* ---------------- Mobile render ---------------- */
function MobileFooter() {
  return (
    <Box
      component="footer"
      sx={{
        mt: "auto",
        pt: 4,
        pb: 2,
        px: 2,
        background:
          "linear-gradient(180deg, rgba(12,10,31,0.95) 0%, rgba(26,15,46,0.98) 50%, rgba(12,10,31,1) 100%)",
        borderTop: "1px solid rgba(99,102,241,0.2)",
        color: "#fff",
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={2}>
          {/* Brand */}
          <Stack spacing={0.5} alignItems="flex-start">
            <Typography variant="h6" sx={{ 
              fontWeight: 800,
              background: "linear-gradient(135deg, #fff 0%, #8b5cf6 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>
              Sineth.Jayasundera
            </Typography>
            <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.75)" }}>
              Electrical Engineering Student.
            </Typography>
            <Stack direction="row" spacing={1}>
              <Chip label="Penn State" size="small" sx={{ bgcolor: "rgba(255,255,255,0.08)", color: "#fff" }} />
              <Chip label="Class of 2029" size="small" sx={{ bgcolor: "rgba(255,255,255,0.08)", color: "#fff" }} />
            </Stack>
          </Stack>

          {/* Links */}
          <Grid container spacing={1}>
            {quickLinks.map((q) => (
              <Grid item xs={6} key={q.label}>
                <MLink
                  href={q.href}
                  underline="hover"
                  color="inherit"
                  sx={{
                    display: "inline-block",
                    py: 0.5,
                    color: "rgba(255,255,255,0.85)",
                    "&:hover": { color: "#fff" },
                  }}
                >
                  {q.label}
                </MLink>
              </Grid>
            ))}
          </Grid>

          {/* Contact + Social */}
          <Stack spacing={1}>
            <MLink href="mailto:Sineth.Jayasundera@gmail.com" color="inherit" underline="hover">
              Sineth.Jayasundera@gmail.com
            </MLink>
            <MLink href="https://wa.me/15182439892" target="_blank" rel="noopener" color="inherit" underline="hover">
              WhatsApp: +1 518-243-9892
            </MLink>
            <Typography variant="caption" sx={{ color: "rgba(255,255,255,0.7)" }}>
              Available for collaborations
            </Typography>
            <SocialRow size="small" />
          </Stack>

          <Divider sx={{ my: 1.5, borderColor: "rgba(255,255,255,0.08)" }} />

          {/* Bottom strip */}
          <Stack direction="row" alignItems="center" justifyContent="space-between">
            <Typography variant="caption" sx={{ color: "rgba(255,255,255,0.5)", fontStyle: "italic", fontSize: "0.7rem" }}>
              © Designed by EFLASH24
            </Typography>
            <IconButton
              aria-label="Back to top"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              sx={{
                color: "#fff",
                border: "1px solid rgba(255,255,255,0.18)",
                borderRadius: 2,
                p: 0.5,
                "&:hover": { bgcolor: "rgba(255,255,255,0.08)" },
              }}
              size="small"
            >
              <NorthIcon fontSize="inherit" />
            </IconButton>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}

/* ---------------- Main export: two renders ---------------- */
export default function Footer() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // split at <600px
  return isMobile ? <MobileFooter /> : <DesktopFooter />;
}



