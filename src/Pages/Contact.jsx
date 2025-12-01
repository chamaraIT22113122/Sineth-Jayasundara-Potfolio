import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  Divider,
  IconButton,
  Tooltip,
  Stack,
} from "@mui/material";
import { LinkedIn, Email, WhatsApp } from "@mui/icons-material";
import { FadeIn, StaggerChildren } from "../Components/ScrollAnimations";
import Navbar from "../Components/Navbar";



const Contact = () => {
  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #121212 0%, #1a1a1a 50%, #121212 100%)",
        color: "white",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
      role="main"
      aria-label="Contact page"
    >
      <Navbar />

      <Container
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          py: { xs: 4, md: 6 },
          px: { xs: 2, sm: 3 },
        }}
      >
        <FadeIn>
          <Card
            elevation={8}
            tabIndex={0}
            sx={{
              background: "linear-gradient(135deg, rgba(26,26,26,0.95) 0%, rgba(32,32,32,0.95) 100%)",
              border: "1px solid rgba(34,211,238,0.2)",
              p: { xs: 3, md: 5 },
              borderRadius: 4,
              maxWidth: 600,
              width: "100%",
              boxShadow: "0 8px 32px 0 rgba(0,0,0,0.37)",
              backdropFilter: "blur(10px)",
              "&:focus-visible": {
                outline: "3px solid #22d3ee",
                outlineOffset: "2px",
              },
            }}
          >
          <CardContent>
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", mb: 3 }}>
              <Typography
                variant="h3"
                component="h1"
                sx={{
                  color: "#fff",
                  fontWeight: 900,
                  textAlign: "center",
                  mb: 2,
                  fontSize: { xs: "2.25rem", sm: "2.75rem", md: "3rem" },
                  lineHeight: 1.2,
                  background: "linear-gradient(135deg, #fff 0%, #22d3ee 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Get In Touch
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "rgba(255,255,255,0.87)",
                  textAlign: "center",
                  fontSize: { xs: "1rem", md: "1.1rem" },
                  maxWidth: 500,
                  lineHeight: 1.6,
                }}
              >
                Feel free to reach out for collaborations, opportunities, or just a friendly chat!
              </Typography>
            </Box>

            <Divider sx={{ mb: 4, background: "rgba(34,211,238,0.3)", height: 2 }} />

            {/* Contact Information */}
            <Stack spacing={3} sx={{ mb: 4 }}>
              <Box>
                <Typography variant="subtitle2" sx={{ color: "#22d3ee", fontWeight: 700, mb: 1, fontSize: "0.875rem" }}>
                  EMAIL
                </Typography>
                <Typography
                  component="a"
                  href="mailto:Sineth.Jayasundera@gmail.com"
                  sx={{
                    color: "#fff",
                    fontSize: "1.1rem",
                    textDecoration: "none",
                    "&:hover": { color: "#22d3ee" },
                    "&:focus": {
                      outline: "2px solid #22d3ee",
                      outlineOffset: "2px",
                      borderRadius: 1,
                    },
                  }}
                  aria-label="Email Sineth at Sineth.Jayasundera@gmail.com"
                >
                  Sineth.Jayasundera@gmail.com
                </Typography>
              </Box>
              <Box>
                <Typography variant="subtitle2" sx={{ color: "#22d3ee", fontWeight: 700, mb: 1, fontSize: "0.875rem" }}>
                  PHONE
                </Typography>
                <Typography
                  component="a"
                  href="tel:+15182439892"
                  sx={{
                    color: "#fff",
                    fontSize: "1.1rem",
                    textDecoration: "none",
                    "&:hover": { color: "#22d3ee" },
                    "&:focus": {
                      outline: "2px solid #22d3ee",
                      outlineOffset: "2px",
                      borderRadius: 1,
                    },
                  }}
                  aria-label="Call Sineth at 518-243-9892"
                >
                  +1 (518) 243-9892
                </Typography>
              </Box>
              <Box>
                <Typography variant="subtitle2" sx={{ color: "#22d3ee", fontWeight: 700, mb: 1, fontSize: "0.875rem" }}>
                  LOCATION
                </Typography>
                <Typography sx={{ color: "#fff", fontSize: "1.1rem" }}>
                  Niskayuna, NY 12309
                </Typography>
              </Box>
            </Stack>

            <Divider sx={{ mb: 4, background: "rgba(34,211,238,0.3)", height: 2 }} />

            {/* Social Media Links */}
            <Box>
              <Typography
                variant="h6"
                sx={{
                  color: "#fff",
                  fontWeight: 700,
                  textAlign: "center",
                  mb: 3,
                  fontSize: "1.1rem",
                }}
              >
                Connect With Me
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  gap: { xs: 3, md: 4 },
                  justifyContent: "center",
                  alignItems: "center",
                  flexWrap: "wrap",
                }}
                role="list"
                aria-label="Social media links"
              >
                <Tooltip title="Connect on LinkedIn" arrow>
                  <IconButton
                    component="a"
                    href="https://www.linkedin.com/in/sineth-jayasundera/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit Sineth's LinkedIn profile"
                    sx={{
                      color: "#0077b5",
                      background: "rgba(0,119,181,0.1)",
                      width: { xs: 56, md: 64 },
                      height: { xs: 56, md: 64 },
                      border: "2px solid rgba(0,119,181,0.3)",
                      transition: "all 0.3s ease",
                      touchAction: "manipulation",
                      "&:hover": {
                        background: "#0077b5",
                        color: "#fff",
                        transform: "translateY(-4px)",
                        boxShadow: "0 8px 16px rgba(0,119,181,0.4)",
                      },
                      "&:focus": {
                        outline: "2px solid #0077b5",
                        outlineOffset: "2px",
                      },
                      "&:active": {
                        transform: "translateY(-2px)",
                      },
                    }}
                  >
                    <LinkedIn fontSize="large" />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Send an Email" arrow>
                  <IconButton
                    component="a"
                    href="mailto:Sineth.Jayasundera@gmail.com"
                    aria-label="Send email to Sineth"
                    sx={{
                      color: "#ea4335",
                      background: "rgba(234,67,53,0.1)",
                      width: { xs: 56, md: 64 },
                      height: { xs: 56, md: 64 },
                      border: "2px solid rgba(234,67,53,0.3)",
                      transition: "all 0.3s ease",
                      touchAction: "manipulation",
                      "&:hover": {
                        background: "#ea4335",
                        color: "#fff",
                        transform: "translateY(-4px)",
                        boxShadow: "0 8px 16px rgba(234,67,53,0.4)",
                      },
                      "&:focus": {
                        outline: "2px solid #ea4335",
                        outlineOffset: "2px",
                      },
                      "&:active": {
                        transform: "translateY(-2px)",
                      },
                    }}
                  >
                    <Email fontSize="large" />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Message on WhatsApp" arrow>
                  <IconButton
                    component="a"
                    href="https://wa.me/15182439892"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Message Sineth on WhatsApp"
                    sx={{
                      color: "#25D366",
                      background: "rgba(37,211,102,0.1)",
                      width: { xs: 56, md: 64 },
                      height: { xs: 56, md: 64 },
                      border: "2px solid rgba(37,211,102,0.3)",
                      transition: "all 0.3s ease",
                      touchAction: "manipulation",
                      "&:hover": {
                        background: "#25D366",
                        color: "#fff",
                        transform: "translateY(-4px)",
                        boxShadow: "0 8px 16px rgba(37,211,102,0.4)",
                      },
                      "&:focus": {
                        outline: "2px solid #25D366",
                        outlineOffset: "2px",
                      },
                      "&:active": {
                        transform: "translateY(-2px)",
                      },
                    }}
                  >
                    <WhatsApp fontSize="large" />
                  </IconButton>
                </Tooltip>
              </Box>
            </Box>
          </CardContent>
        </Card>
        </FadeIn>
      </Container>
    </Box>
  );
};

export default Contact;



