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
          color: "#6366f1",
          fontSize: { xs: "1.9rem", md: "2.4rem" },
        }}
      >
        {title}
      </Typography>
      <Divider sx={{ width: 70, height: 3, bgcolor: "#6366f1", borderRadius: 2, mt: 1, mb: 3 }} />
    </Stack>
  );
}

function EducationCard({ item }) {
  const badge = typeFromTitle(item.title);
  return (
    <Card
      sx={{
        height: "100%",
        background: "linear-gradient(135deg, #232526 0%, #3a3d40 100%)",
        border: "1px solid rgba(255,255,255,0.12)",
        color: "#fff",
        borderRadius: 3,
        boxShadow: "0 10px 28px rgba(0,0,0,0.25)",
        overflow: "hidden",
        transition: "transform .25s ease, box-shadow .25s ease",
        "&:hover": { transform: "translateY(-6px)", boxShadow: "0 18px 40px rgba(199,0,57,0.25)" },
      }}
    >
      <Box sx={{ position: "relative" }}>
        <CardMedia
          component="img"
          image={item.image}
          alt={item.institution}
          loading="lazy"
          height="160"
          sx={{ objectFit: "cover", filter: "saturate(0.9) contrast(1.05)" }}
        />
        <Chip
          label={badge}
          size="small"
          sx={{
            position: "absolute",
            top: 12,
            left: 12,
            bgcolor: "rgba(0,0,0,0.6)",
            color: "#fff",
            border: "1px solid rgba(255,255,255,0.2)",
            backdropFilter: "blur(4px)",
          }}
        />
      </Box>

      <CardContent sx={{ p: 2.25 }}>
        <Typography variant="subtitle1" sx={{ fontWeight: 800, color: "#fff", lineHeight: 1.25 }}>
          {item.title}
        </Typography>
        <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.85)", mt: 0.5 }}>
          {item.institution}
        </Typography>
        {item.location && (
          <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.75)", mt: 0.5 }}>
            📍 {item.location}
          </Typography>
        )}
        {item.gpa && (
          <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.85)", mt: 0.75, fontWeight: 600 }}>
            🎓 GPA: {item.gpa}
          </Typography>
        )}
        {item.duration && (
          <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.75)", mt: 0.75 }}>
            📅 {item.duration}
          </Typography>
        )}
        {item.results && (
          <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.75)", mt: 0.75 }}>
            🏆 {item.results}
          </Typography>
        )}
      </CardContent>
    </Card>
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

        <Grid container spacing={3}>
          {educationData.map((edu, i) => (
            <Grid item xs={12} sm={6} md={4} key={i}>
              <EducationCard item={edu} />
            </Grid>
          ))}
        </Grid>
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

        {/* 2-wide grid on phones for compact scan; falls to 1 at very small widths via xs=12 */}
        <Grid container spacing={2.5}>
          {educationData.map((edu, i) => (
            <Grid item xs={12} sm={6} key={i}>
              <EducationCard item={edu} />
            </Grid>
          ))}
        </Grid>
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



