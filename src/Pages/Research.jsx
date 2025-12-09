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

// Research Images
import smartEnergyImg from "../Images/Reserch/Smart Energy Reader.png";
import iotSmartHomeImg from "../Images/Reserch/IoT-Based Smart Home Products.png";

/* ---------- data ---------- */
const ResearchData = [
  {
    image: smartEnergyImg,
    title: "Smart Energy Reader",
    organization: "Flix 11",
    duration: "Summer 2023 - Summer 2024",
    description: "Contributed significantly to the Smart Energy Reader project, including the design of its data-collection architecture and energy-monitoring algorithms enabling real-time tracking of household power consumption through a cloud-based dashboard.",
    technologies: ["IoT", "Embedded Systems", "Cloud Computing", "Data Analytics"],
    icon: <MdElectricalServices />,
  },
  {
    image: iotSmartHomeImg,
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
        background: "linear-gradient(145deg, rgba(18,18,18,0.95) 0%, rgba(32,32,32,0.95) 100%)",
        border: "1px solid rgba(34,211,238,0.25)",
        color: "#fff",
        borderRadius: 4,
        boxShadow: "0 12px 32px rgba(0,0,0,0.3), 0 0 0 1px rgba(34,211,238,0.1)",
        overflow: "hidden",
        position: "relative",
        transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "4px",
          background: "linear-gradient(90deg, #22d3ee 0%, #06b6d4 50%, #22d3ee 100%)",
          opacity: 0,
          transition: "opacity 0.3s ease",
        },
        "&:hover": { 
          transform: "translateY(-8px) scale(1.02)", 
          boxShadow: "0 20px 48px rgba(34,211,238,0.25), 0 0 0 2px rgba(34,211,238,0.3)",
          borderColor: "rgba(34,211,238,0.5)",
          "&::before": {
            opacity: 1,
          },
        },
        "&:focus-visible": {
          outline: "3px solid #22d3ee",
          outlineOffset: "3px",
        },
      }}
      component="article"
      role="article"
      aria-label={`Research project: ${item.title}`}
    >
      <CardContent sx={{ p: 3.5 }}>
        <Stack direction="row" alignItems="center" spacing={1.5} sx={{ mb: 2 }}>
          <Box
            sx={{
              display: "grid",
              placeItems: "center",
              width: 56,
              height: 56,
              borderRadius: "16px",
              background: "linear-gradient(135deg, rgba(34,211,238,0.15) 0%, rgba(34,211,238,0.05) 100%)",
              border: "2px solid rgba(34,211,238,0.3)",
              color: "#22d3ee",
              fontSize: 28,
              flexShrink: 0,
            }}
            aria-hidden="true"
          >
            {item.icon}
          </Box>
          <Box sx={{ flex: 1 }}>
            <Typography 
              variant="h5" 
              component="h3" 
              sx={{ 
                fontWeight: 900, 
                color: "#fff", 
                lineHeight: 1.2, 
                mb: 0.5,
                fontSize: { xs: "1.25rem", md: "1.5rem" },
                letterSpacing: 0.5,
              }}
            >
              {item.title}
            </Typography>
            <Typography 
              variant="body2" 
              sx={{ 
                color: "#22d3ee", 
                fontWeight: 600,
                fontSize: "0.95rem"
              }}
            >
              {item.organization}
            </Typography>
          </Box>
        </Stack>

        <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 2.5 }}>
          <Box 
            sx={{ 
              fontSize: "1.1rem",
              display: "flex",
              alignItems: "center" 
            }}
          >
            📅
          </Box>
          <Typography 
            variant="body2" 
            sx={{ 
              color: "rgba(255,255,255,0.7)", 
              fontWeight: 500,
              fontSize: "0.9rem"
            }}
          >
            {item.duration}
          </Typography>
        </Stack>

        <Typography 
          variant="body1" 
          sx={{ 
            color: "rgba(255,255,255,0.85)", 
            mb: 3, 
            lineHeight: 1.7,
            fontSize: "0.95rem",
            textAlign: "justify"
          }}
        >
          {item.description}
        </Typography>

        <Divider 
          sx={{ 
            my: 2.5, 
            bgcolor: "rgba(34,211,238,0.2)",
            height: "2px",
            borderRadius: "2px"
          }} 
        />

        <Typography 
          variant="caption" 
          sx={{ 
            color: "rgba(255,255,255,0.6)", 
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: 1.2,
            mb: 1.5,
            display: "block"
          }}
        >
          Technologies
        </Typography>
        <Stack direction="row" flexWrap="wrap" spacing={1} useFlexGap>
          {item.technologies.map((tech, i) => (
            <Chip
              key={i}
              label={tech}
              size="small"
              sx={{
                bgcolor: "rgba(34,211,238,0.1)",
                color: "#22d3ee",
                border: "1.5px solid rgba(34,211,238,0.3)",
                fontWeight: 700,
                fontSize: "0.8rem",
                px: 1,
                py: 0.5,
                transition: "all 0.2s ease",
                "&:hover": {
                  bgcolor: "rgba(34,211,238,0.2)",
                  borderColor: "rgba(34,211,238,0.5)",
                  transform: "translateY(-2px)",
                }
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
        background: "linear-gradient(135deg, #0f1419 0%, #1a1f2e 50%, #1e2433 100%)",
        minHeight: "100vh",
        py: 10,
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
        background: "linear-gradient(135deg, #0f1419 0%, #1a1f2e 50%, #1e2433 100%)",
        minHeight: "100vh",
        py: 8,
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



