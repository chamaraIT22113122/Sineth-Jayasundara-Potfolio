import React from "react";
import {
  Box,
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Chip,
  Stack,
  Divider,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { MdElectricalServices } from "react-icons/md";
import { IoTerminal } from "react-icons/io5";
import { LazyImage } from "../Components/LoadingSpinner";
import { FadeIn, StaggerChildren } from "../Components/ScrollAnimations";

/* ---------- data ---------- */
const ResearchData = [
  {
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600'%3E%3Crect fill='%236366f1' width='800' height='600'/%3E%3Ctext x='50%25' y='50%25' font-size='64' fill='white' text-anchor='middle' dominant-baseline='middle'%3E⚡%3C/text%3E%3C/svg%3E",
    title: "Smart Energy Reader",
    organization: "Flix 11",
    duration: "Summer 2023 - Summer 2024",
    description: "Contributed significantly to the Smart Energy Reader project, including the design of its data-collection architecture and energy-monitoring algorithms enabling real-time tracking of household power consumption through a cloud-based dashboard.",
    technologies: ["IoT", "Embedded Systems", "Cloud Computing", "Data Analytics"],
    icon: <MdElectricalServices />,
  },
  {
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600'%3E%3Crect fill='%238b5cf6' width='800' height='600'/%3E%3Ctext x='50%25' y='50%25' font-size='64' fill='white' text-anchor='middle' dominant-baseline='middle'%3E🏠%3C/text%3E%3C/svg%3E",
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
          color: "#22d3ee",
          fontSize: { xs: "1.9rem", md: "2.4rem" },
        }}
      >
        {title}
      </Typography>
      <Divider sx={{ width: 70, height: 3, bgcolor: "#22d3ee", borderRadius: 2, mt: 1, mb: 2 }} />
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
      tabIndex={0}
      sx={{
        height: "100%",
        background: "linear-gradient(135deg, #121212 0%, #202020 100%)",
        border: "1px solid rgba(34,211,238,0.2)",
        color: "#fff",
        borderRadius: 3,
        boxShadow: "0 10px 28px rgba(0,0,0,0.25)",
        overflow: "hidden",
        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        "&:hover": { 
          transform: "translateY(-6px)", 
          boxShadow: "0 18px 40px rgba(34,211,238,0.3)",
          borderColor: "rgba(34,211,238,0.4)"
        },
        "&:focus-visible": {
          outline: "3px solid #22d3ee",
          outlineOffset: "2px",
        },
      }}
      component="article"
      role="article"
      aria-label={`Research project: ${item.title}`}
    >
      <Box sx={{ position: "relative", height: 200, bgcolor: "rgba(255,255,255,0.03)" }}>
        <LazyImage
          src={item.image}
          alt={`${item.title} project image`}
          sx={{ height: "100%", filter: "saturate(0.95) contrast(1.05)" }}
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
            color: "#22d3ee",
            fontSize: 24,
          }}
          aria-hidden="true"
        >
          {item.icon}
        </Box>
      </Box>

      <CardContent sx={{ p: 2.5 }}>
        <Typography variant="h6" component="h3" sx={{ fontWeight: 800, color: "#fff", lineHeight: 1.25, mb: 0.5 }}>
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
                color: "#22d3ee",
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
        <StaggerChildren>
          <Grid container spacing={3}>
            {ResearchData.map((research, i) => (
              <Grid item xs={12} md={6} key={i}>
                <ResearchCard item={research} />
              </Grid>
            ))}
          </Grid>
        </StaggerChildren>
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
        <StaggerChildren>
          <Grid container spacing={2.5}>
            {ResearchData.map((research, i) => (
              <Grid item xs={12} key={i}>
                <ResearchCard item={research} />
              </Grid>
            ))}
          </Grid>
        </StaggerChildren>
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



