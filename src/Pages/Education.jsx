import React, { useMemo } from "react";
import {
  Box,
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Chip,
  Stack,
  Divider,
  useTheme,
  useMediaQuery,
} from "@mui/material";

/* ---------- data ---------- */
const educationData = [
  {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Penn_State_Nittany_Lion.svg/1200px-Penn_State_Nittany_Lion.svg.png",
    title: "Bachelor of Science in Electrical Engineering",
    institution: "Pennsylvania State University",
    location: "University Park, PA",
    duration: "Expected Graduation 2029",
    gpa: "4.0",
  },
  {
    image: "https://gateway.lk/wp-content/uploads/2019/08/gateway-logo.png",
    title: "High School Education (Grades 4-12)",
    institution: "Gateway College Colombo",
    location: "Sri Jayewardenepura Kotte, Sri Lanka",
    duration: "Completed 2025",
    gpa: "4.0 (Unweighted)",
  },
  {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/SAT_Logo.svg/1200px-SAT_Logo.svg.png",
    title: "SAT 2024",
    institution: "Standardized Test Scores",
    results: "Composite: 1530 • Math: 780 • Reading and Writing: 730",
  },
  {
    image: "https://gateway.lk/wp-content/uploads/2019/08/gateway-logo.png",
    title: "Edexcel Advanced Level",
    institution: "Gateway College Colombo",
    location: "Sri Jayewardenepura Kotte, Sri Lanka",
    results: "Mathematics (A*), Physics (A), Chemistry (A)",
    duration: "2025",
  },
  {
    image: "https://gateway.lk/wp-content/uploads/2019/08/gateway-logo.png",
    title: "Edexcel International GCSE",
    institution: "Gateway College Colombo",
    location: "Sri Jayewardenepura Kotte, Sri Lanka",
    results: "Mathematics (A*), Physics (A*), Chemistry (A*), Biology (A*), English Language (A), English Literature (A), Sinhala (A), Combined Science (A*A*)",
    duration: "2023",
  },
];

/* ---------- helpers (badge based on title) ---------- */
function typeFromTitle(t) {
  const s = t.toLowerCase();
  if (s.includes("bsc") || s.includes("degree")) return "Degree";
  if (s.includes("diploma")) return "Diploma";
  if (s.includes("certificate")) return "Certificate";
  if (s.includes("gce")) return "School";
  return "Education";
}

/* ---------- shared components ---------- */
function SectionHeader({ title }) {
  return (
    <Stack alignItems="center" sx={{ textAlign: "center" }}>
      <Typography
        variant="h3"
        sx={{
          fontWeight: 900,
          letterSpacing: 0.5,
          color: "#22d3ee",
          fontSize: { xs: "1.9rem", md: "2.4rem" },
        }}
      >
        {title}
      </Typography>
      <Divider sx={{ width: 70, height: 3, bgcolor: "#22d3ee", borderRadius: 2, mt: 1, mb: 3 }} />
    </Stack>
  );
}

function EducationCard({ item, index }) {
  const badge = typeFromTitle(item.title);
  const isLeft = index % 2 === 0;
  
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: isLeft ? "row" : "row-reverse",
        gap: 3,
        mb: 4,
        animation: `fadeInSlide 0.8s ease-out ${index * 0.15}s both`,
        "@keyframes fadeInSlide": {
          "0%": { 
            opacity: 0, 
            transform: isLeft ? "translateX(-50px)" : "translateX(50px)"
          },
          "100%": { 
            opacity: 1, 
            transform: "translateX(0)"
          },
        },
      }}
    >
      {/* Timeline connector */}
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
        }}
      >
        <Box
          sx={{
            width: 16,
            height: 16,
            borderRadius: "50%",
            bgcolor: "#22d3ee",
            border: "4px solid rgba(18,18,18,1)",
            boxShadow: "0 0 20px rgba(34,211,238,0.6)",
            zIndex: 2,
            mt: 2,
          }}
        />
        {index < educationData.length - 1 && (
          <Box
            sx={{
              width: 2,
              flex: 1,
              background: "linear-gradient(180deg, #22d3ee 0%, rgba(34,211,238,0.3) 100%)",
              mt: 1,
            }}
          />
        )}
      </Box>

      {/* Card content */}
      <Card
        sx={{
          flex: 1,
          background: "linear-gradient(145deg, rgba(18,18,18,0.95) 0%, rgba(26,26,26,0.98) 100%)",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(34,211,238,0.2)",
          color: "#fff",
          borderRadius: 4,
          boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
          overflow: "hidden",
          position: "relative",
          transition: "all .4s cubic-bezier(0.4, 0, 0.2, 1)",
          "&::after": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: isLeft 
              ? "radial-gradient(circle at top left, rgba(34,211,238,0.08) 0%, transparent 70%)"
              : "radial-gradient(circle at top right, rgba(34,211,238,0.08) 0%, transparent 70%)",
            pointerEvents: "none",
            opacity: 0,
            transition: "opacity 0.4s ease",
          },
          "&:hover": { 
            transform: "translateY(-8px)", 
            boxShadow: "0 24px 48px rgba(34,211,238,0.25), 0 0 80px rgba(34,211,238,0.15)",
            border: "1px solid rgba(34,211,238,0.5)",
            "&::after": { opacity: 1 },
          },
        }}
      >
        <Grid container>
          <Grid item xs={12} md={5}>
            <Box sx={{ position: "relative", overflow: "hidden", height: { xs: 180, md: "100%" }, minHeight: { md: 250 } }}>
              <CardMedia
                component="img"
                image={item.image}
                alt={item.institution}
                loading="lazy"
                sx={{ 
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  padding: 2,
                  filter: "brightness(0.9) saturate(1.2)",
                  transition: "all 0.5s ease",
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: "linear-gradient(180deg, transparent 0%, rgba(18,18,18,0.7) 100%)",
                  pointerEvents: "none",
                }}
              />
              <Chip
                label={badge}
                size="small"
                sx={{
                  position: "absolute",
                  top: 16,
                  right: 16,
                  bgcolor: "#22d3ee",
                  color: "#000",
                  fontWeight: 800,
                  fontSize: "0.7rem",
                  letterSpacing: 0.5,
                  textTransform: "uppercase",
                  border: "none",
                  px: 1.5,
                  boxShadow: "0 4px 16px rgba(34,211,238,0.5)",
                }}
              />
            </Box>
          </Grid>

          <Grid item xs={12} md={7}>
            <CardContent sx={{ p: 3, height: "100%" }}>
              <Typography 
                variant="h6" 
                sx={{ 
                  fontWeight: 700, 
                  color: "#fff", 
                  lineHeight: 1.4,
                  mb: 1,
                  fontSize: "1.1rem",
                }}
              >
                {item.title}
              </Typography>
              <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.7)", mb: 2, fontWeight: 500 }}>
                {item.institution}
              </Typography>
              
              <Stack spacing={1.5}>
                {item.location && (
                  <Box sx={{ display: "flex", alignItems: "start", gap: 1 }}>
                    <Typography sx={{ fontSize: "1rem", minWidth: "20px" }}>📍</Typography>
                    <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.85)", lineHeight: 1.6 }}>
                      {item.location}
                    </Typography>
                  </Box>
                )}
                
                {item.gpa && (
                  <Box 
                    sx={{ 
                      p: 1.5, 
                      bgcolor: "rgba(34,211,238,0.08)", 
                      borderRadius: 2, 
                      border: "1px solid rgba(34,211,238,0.3)",
                      borderLeft: "4px solid #22d3ee",
                    }}
                  >
                    <Typography variant="body2" sx={{ color: "#22d3ee", fontWeight: 700, fontSize: "0.95rem" }}>
                      🎓 GPA: {item.gpa}
                    </Typography>
                  </Box>
                )}
                
                {item.duration && (
                  <Box sx={{ display: "flex", alignItems: "start", gap: 1 }}>
                    <Typography sx={{ fontSize: "1rem", minWidth: "20px" }}>📅</Typography>
                    <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.85)", lineHeight: 1.6 }}>
                      {item.duration}
                    </Typography>
                  </Box>
                )}
                
                {item.results && (
                  <Box sx={{ display: "flex", alignItems: "start", gap: 1 }}>
                    <Typography sx={{ fontSize: "1rem", minWidth: "20px" }}>🏆</Typography>
                    <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.85)", lineHeight: 1.6 }}>
                      {item.results}
                    </Typography>
                  </Box>
                )}
              </Stack>
            </CardContent>
          </Grid>
        </Grid>
      </Card>
    </Box>
  );
}

/* ---------- Desktop render ---------- */
function DesktopEducation() {
  return (
    <Box
      sx={{
        background: "linear-gradient(120deg,#121212 0%,#1a1a1a 60%,#202020 100%)",
        minHeight: "100vh",
        py: 8,
      }}
    >
      <Container maxWidth="lg">
        <SectionHeader title="Education" />

        <Box sx={{ mt: 6 }}>
          {educationData.map((edu, i) => (
            <EducationCard key={i} item={edu} index={i} />
          ))}
        </Box>
      </Container>
    </Box>
  );
}

/* ---------- Mobile render ---------- */
function MobileEducation() {
  return (
    <Box
      sx={{
        background: "linear-gradient(180deg,#121212 0%,#191919 100%)",
        minHeight: "100vh",
        py: 6,
      }}
    >
      <Container maxWidth="md">
        <SectionHeader title="Education" />

        <Box sx={{ mt: 4 }}>
          {educationData.map((edu, i) => (
            <EducationCard key={i} item={edu} index={i} />
          ))}
        </Box>
      </Container>
    </Box>
  );
}

/* ---------- main export: split renders ---------- */
export default function Education() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return isMobile ? <MobileEducation /> : <DesktopEducation />;
}



