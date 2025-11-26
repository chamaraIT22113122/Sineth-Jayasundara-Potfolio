import React from "react";
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
import { MdElectricalServices } from "react-icons/md";
import { IoTerminal } from "react-icons/io5";

/* ---------- data ---------- */
const ResearchData = [
  {
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800",
    title: "Smart Energy Reader",
    organization: "Flix 11",
    duration: "Summer 2023 - Summer 2024",
    description: "Contributed significantly to the Smart Energy Reader project, including the design of its data-collection architecture and energy-monitoring algorithms enabling real-time tracking of household power consumption through a cloud-based dashboard.",
    technologies: ["IoT", "Embedded Systems", "Cloud Computing", "Data Analytics"],
    icon: <MdElectricalServices />,
  },
  {
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800",
    title: "IoT-Based Smart Home Products",
    organization: "Flix 11",
    duration: "Summer 2023 - Summer 2024",
    description: "Collaborated with the engineering team on the development of several IoT-based smart home products, supporting tasks such as embedded programming, sensor integration, and system testing.",
    technologies: ["IoT", "Sensor Integration", "Embedded C", "System Testing"],
    icon: <IoTerminal />,
  },
];

/* ---------- helpers ---------- */
function SectionHeader({ title, subtitle }) {
  return (
    <Stack alignItems="center" sx={{ textAlign: "center", mb: 4 }}>
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
      <Divider sx={{ width: 70, height: 3, bgcolor: "#6366f1", borderRadius: 2, mt: 1, mb: 2 }} />
      {subtitle && (
        <Typography sx={{ color: "rgba(255,255,255,0.75)", maxWidth: 720, fontSize: { xs: "0.98rem", md: "1.05rem" } }}>
          {subtitle}
        </Typography>
      )}
    </Stack>
  );
}

function ResearchCard({ item }) {
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
      <Box sx={{ position: "relative", height: 200, bgcolor: "rgba(255,255,255,0.03)" }}>
        <CardMedia
          component="img"
          image={item.image}
          alt={item.title}
          loading="lazy"
          sx={{ height: "100%", objectFit: "cover", filter: "saturate(0.95) contrast(1.05)" }}
        />
        <Box
          sx={{
            position: "absolute",
            top: 12,
            left: 12,
            display: "grid",
            placeItems: "center",
            width: 48,
            height: 48,
            borderRadius: "12px",
            background: "rgba(0,0,0,0.6)",
            backdropFilter: "blur(4px)",
            color: "#6366f1",
            fontSize: 24,
          }}
        >
          {item.icon}
        </Box>
      </Box>

      <CardContent sx={{ p: 2.5 }}>
        <Typography variant="h6" sx={{ fontWeight: 800, color: "#fff", lineHeight: 1.25, mb: 0.5 }}>
          {item.title}
        </Typography>
        <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.85)", mb: 0.5 }}>
          {item.organization}
        </Typography>
        <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.65)", mb: 1.5 }}>
          📅 {item.duration}
        </Typography>

        <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.8)", mb: 2, lineHeight: 1.6 }}>
          {item.description}
        </Typography>

        <Divider sx={{ my: 1.5, bgcolor: "rgba(255,255,255,0.1)" }} />

        <Stack direction="row" flexWrap="wrap" spacing={0.75} useFlexGap>
          {item.technologies.map((tech, i) => (
            <Chip
              key={i}
              label={tech}
              size="small"
              sx={{
                bgcolor: "#2b2e31",
                color: "#6366f1",
                border: "1px solid rgba(199,0,57,0.3)",
                fontWeight: 600,
              }}
            />
          ))}
        </Stack>
      </CardContent>
    </Card>
  );
}

/* ---------- Desktop render ---------- */
function DesktopResearch() {
  return (
    <Box
      sx={{
        background: "linear-gradient(120deg,#121212 0%,#1a1a1a 60%,#202020 100%)",
        minHeight: "100vh",
        py: 8,
        color: "#fff",
      }}
    >
      <Container maxWidth="lg">
        <SectionHeader 
          title="Research & Development" 
          subtitle="Exploring innovative solutions in IoT and electrical engineering through hands-on development and research projects."
        />
        <Grid container spacing={3}>
          {ResearchData.map((research, i) => (
            <Grid item xs={12} md={6} key={i}>
              <ResearchCard item={research} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

/* ---------- Mobile render ---------- */
function MobileResearch() {
  return (
    <Box
      sx={{
        background: "linear-gradient(180deg,#121212 0%,#191919 100%)",
        minHeight: "100vh",
        py: 6,
        color: "#fff",
      }}
    >
      <Container maxWidth="md">
        <SectionHeader 
          title="Research & Development" 
          subtitle="Exploring innovative solutions in IoT and electrical engineering."
        />
        <Grid container spacing={2.5}>
          {ResearchData.map((research, i) => (
            <Grid item xs={12} key={i}>
              <ResearchCard item={research} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

/* ---------- main export: split renders ---------- */
export default function Research() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return isMobile ? <MobileResearch /> : <DesktopResearch />;
}



