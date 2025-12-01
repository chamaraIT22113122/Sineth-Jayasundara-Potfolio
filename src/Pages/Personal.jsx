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
import { FaGlobeAmericas, FaGamepad, FaFutbol, FaSwimmer } from "react-icons/fa";
import { IoGameController } from "react-icons/io5";
import { SiGodotengine, SiUnity } from "react-icons/si";

/* ---------- data ---------- */
const travelData = [
  {
    country: "Australia",
    image: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=800",
    description: "Explored the beautiful landscapes and vibrant cities of Australia.",
    flag: "🇦🇺",
  },
  {
    country: "Brunei",
    image: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=800",
    description: "Experienced the rich culture and stunning architecture of Brunei.",
    flag: "🇧🇳",
  },
  {
    country: "India",
    image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800",
    description: "Discovered the diverse heritage and traditions of India.",
    flag: "🇮🇳",
  },
  {
    country: "Italy",
    image: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=800",
    description: "Enjoyed the art, history, and cuisine of Italy.",
    flag: "🇮🇹",
  },
  {
    country: "United Arab Emirates",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800",
    description: "Marveled at the modern architecture and desert landscapes of the UAE.",
    flag: "🇦🇪",
  },
];

const hobbiesData = [
  {
    title: "Game Design",
    icon: <IoGameController />,
    description: "Creating engaging games using Godot and Unity engines, focusing on gameplay mechanics and level design.",
    tools: ["Godot", "Unity"],
    color: "#22d3ee",
  },
  {
    title: "Basketball",
    icon: <FaFutbol />,
    description: "Playing basketball recreationally and competitively.",
    color: "#ff8c00",
  },
  {
    title: "Soccer",
    icon: <FaFutbol />,
    description: "Playing and enjoying the beautiful game, both recreationally and competitively.",
    color: "#00a8cc",
  },
  {
    title: "Swimming",
    icon: <FaSwimmer />,
    description: "Former swim team captain with years of competitive swimming experience.",
    achievements: ["Gateway College Swim Team Captain (2022-2024)", "Multiple age group championships"],
    color: "#0088ff",
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

function TravelCard({ item }) {
  return (
    <Card
      sx={{
        height: "100%",
        background: "linear-gradient(135deg, #121212 0%, #202020 100%)",
        border: "1px solid rgba(255,255,255,0.12)",
        color: "#fff",
        borderRadius: 3,
        boxShadow: "0 10px 28px rgba(0,0,0,0.25)",
        overflow: "hidden",
        transition: "transform .25s ease, box-shadow .25s ease",
        "&:hover": { transform: "translateY(-6px)", boxShadow: "0 18px 40px rgba(199,0,57,0.25)" },
      }}
    >
      <Box sx={{ position: "relative", height: 180 }}>
        <CardMedia
          component="img"
          image={item.image}
          alt={item.country}
          loading="lazy"
          sx={{ height: "100%", objectFit: "cover", filter: "brightness(0.85) contrast(1.1)" }}
        />
        <Box
          sx={{
            position: "absolute",
            top: 12,
            left: 12,
            fontSize: 36,
          }}
        >
          {item.flag}
        </Box>
      </Box>

      <CardContent sx={{ p: 2 }}>
        <Typography variant="h6" sx={{ fontWeight: 800, color: "#fff", mb: 1 }}>
          {item.country}
        </Typography>
        <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.8)", lineHeight: 1.6 }}>
          {item.description}
        </Typography>
      </CardContent>
    </Card>
  );
}

function HobbyCard({ item }) {
  return (
    <Card
      sx={{
        height: "100%",
        background: "linear-gradient(135deg, #121212 0%, #202020 100%)",
        border: "1px solid rgba(255,255,255,0.12)",
        color: "#fff",
        borderRadius: 3,
        boxShadow: "0 10px 28px rgba(0,0,0,0.25)",
        overflow: "hidden",
        transition: "transform .25s ease, box-shadow .25s ease",
        "&:hover": { transform: "translateY(-6px)", boxShadow: "0 18px 40px rgba(199,0,57,0.25)" },
      }}
    >
      <CardContent sx={{ p: 2.5 }}>
        <Stack direction="row" alignItems="center" spacing={1.5} sx={{ mb: 2 }}>
          <Box
            sx={{
              display: "grid",
              placeItems: "center",
              width: 48,
              height: 48,
              borderRadius: "12px",
              background: `${item.color}20`,
              color: item.color,
              fontSize: 24,
            }}
          >
            {item.icon}
          </Box>
          <Typography variant="h6" sx={{ fontWeight: 800, color: "#fff" }}>
            {item.title}
          </Typography>
        </Stack>

        <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.8)", mb: 2, lineHeight: 1.6 }}>
          {item.description}
        </Typography>

        {item.tools && (
          <Stack direction="row" spacing={0.75}>
            {item.tools.map((tool, i) => (
              <Chip
                key={i}
                label={tool}
                size="small"
                sx={{
                  bgcolor: "#2b2e31",
                  color: item.color,
                  border: `1px solid ${item.color}40`,
                  fontWeight: 600,
                }}
              />
            ))}
          </Stack>
        )}

        {item.achievements && (
          <Box sx={{ mt: 2 }}>
            <Typography variant="caption" sx={{ color: "rgba(255,255,255,0.65)", fontWeight: 700, mb: 0.5, display: "block" }}>
              Achievements:
            </Typography>
            {item.achievements.map((achievement, i) => (
              <Typography key={i} variant="body2" sx={{ color: "rgba(255,255,255,0.75)", fontSize: "0.85rem", mb: 0.25 }}>
                • {achievement}
              </Typography>
            ))}
          </Box>
        )}
      </CardContent>
    </Card>
  );
}

/* ---------- Desktop render ---------- */
function DesktopPersonal() {
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
        {/* Travels Section */}
        <SectionHeader 
          title="International Travel" 
          subtitle="Exploring the world and experiencing diverse cultures across continents."
        />
        <Grid container spacing={3} sx={{ mb: 8 }}>
          {travelData.map((travel, i) => (
            <Grid item xs={12} sm={6} md={4} key={i}>
              <TravelCard item={travel} />
            </Grid>
          ))}
        </Grid>

        {/* Hobbies Section */}
        <SectionHeader 
          title="Hobbies & Interests" 
          subtitle="Pursuing passions in game design, sports, and competitive activities."
        />
        <Grid container spacing={3}>
          {hobbiesData.map((hobby, i) => (
            <Grid item xs={12} md={4} key={i}>
              <HobbyCard item={hobby} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

/* ---------- Mobile render ---------- */
function MobilePersonal() {
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
        {/* Travels Section */}
        <SectionHeader 
          title="International Travel" 
          subtitle="Exploring diverse cultures around the world."
        />
        <Grid container spacing={2.5} sx={{ mb: 6 }}>
          {travelData.map((travel, i) => (
            <Grid item xs={12} sm={6} key={i}>
              <TravelCard item={travel} />
            </Grid>
          ))}
        </Grid>

        {/* Hobbies Section */}
        <SectionHeader 
          title="Hobbies & Interests" 
          subtitle="Game design, sports, and competitive activities."
        />
        <Grid container spacing={2.5}>
          {hobbiesData.map((hobby, i) => (
            <Grid item xs={12} key={i}>
              <HobbyCard item={hobby} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

/* ---------- main export: split renders ---------- */
export default function Personal() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return isMobile ? <MobilePersonal /> : <DesktopPersonal />;
}



