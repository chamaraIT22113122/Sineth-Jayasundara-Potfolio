import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  Divider,
  IconButton,
  Tooltip,
} from "@mui/material";
import { LinkedIn, Email, WhatsApp } from "@mui/icons-material";
import Navbar from "../Components/Navbar";



const Contact = () => {
  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #1e1e1e 0%, #232526 100%)",
        color: "white",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Navbar />

      <Container
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          py: { xs: 2, md: 6 },
        }}
      >
        <Card
          elevation={8}
          sx={{
            background: "rgba(30,30,30,0.95)",
            p: { xs: 2, md: 4 },
            borderRadius: 4,
            maxWidth: 500,
            width: "100%",
            boxShadow: "0 8px 32px 0 rgba(0,0,0,0.37)",
            backdropFilter: "blur(6px)",
          }}
        >
          <CardContent>
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", mb: 2 }}>
              
              <Typography variant="h4" sx={{ color: "#8b5cf6", fontWeight: 700, textAlign: "center" }}>
                Contact Me
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "rgb(220,220,220)",
                  textAlign: "center",
                  mt: 1,
                  mb: 2,
                  fontSize: "1.1rem",
                }}
              >
                Feel free to reach out for collaborations or just a friendly chat!
              </Typography>
            </Box>

            <Divider sx={{ mb: 3, background: "#8b5cf6" }} />

            {/* Contact Form */}
                  <Box
                  sx={{
                  mt: 4,
                  display: "flex",
                  gap: 4,
                  justifyContent: "center",
                  alignItems: "center",
                  }}
                >
                  <Tooltip title="LinkedIn" arrow>
                  <IconButton
                    component="a"
                    href="https://www.linkedin.com/in/sineth-jayasundera/"
                    target="_blank"
                    sx={{
                    color: "#0077b5",
                    background: "#232323",
                    "&:hover": { background: "#0077b5", color: "#fff" },
                    boxShadow: "0 2px 8px 0 #0077b5",
                    }}
                    size="large"
                  >
                    <LinkedIn fontSize="inherit" />
                  </IconButton>
                  </Tooltip>
                  <Tooltip title="Email" arrow>
                  <IconButton
                    component="a"
                    href="mailto:Sineth.Jayasundera@gmail.com"
                    sx={{
                    color: "#ea4335",
                    background: "#232323",
                    "&:hover": { background: "#ea4335", color: "#fff" },
                    boxShadow: "0 2px 8px 0 #ea4335",
                    }}
                    size="large"
                  >
                    <Email fontSize="inherit" />
                  </IconButton>
                  </Tooltip>
                  <Tooltip title="WhatsApp" arrow>
                  <IconButton
                    component="a"
                    href="https://wa.me/15182439892"
                    target="_blank"
                    sx={{
                    color: "#25D366",
                    background: "#232323",
                    "&:hover": { background: "#25D366", color: "#fff" },
                    boxShadow: "0 2px 8px 0 #25D366",
                    }}
                    size="large"
                  >
                    <WhatsApp fontSize="inherit" />
                  </IconButton>
                  </Tooltip>
                </Box>
                  </CardContent>
                </Card>

                {/* Social Media Links */}
        
      </Container>
    </Box>
  );
};

export default Contact;



