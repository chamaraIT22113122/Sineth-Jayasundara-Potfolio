import React, { useMemo } from "react";
import {
  Box,
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Stack,
  Divider,
  Chip,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { FaCode, FaMobileAlt, FaPencilRuler, FaObjectGroup, FaBrain, FaGlobeAmericas, FaCarBattery   } from "react-icons/fa";
import { IoGameController, IoTerminal  } from "react-icons/io5";
import { BiSolidCctv } from "react-icons/bi";
import { MdElectricalServices } from "react-icons/md";

/* ------- data ------- */
const useInterests = () =>
  useMemo(
    () => [
      {
        icon: <MdElectricalServices />,
        color: "#22d3ee",
        title: "Electrical Engineering",
        skills: [
          "Circuit Design",
          "Power Systems",
          "Embedded Systems",
          "Signal Processing"
        ],
      },
      {
        icon: <IoTerminal />,
        color: "#22d3ee",
        title: "IoT Development",
        skills: ["Smart Home Systems", "Sensor Integration", "Cloud Connectivity", "Energy Monitoring"],
      },
      {
        icon: <FaBrain />,
        color: "#22d3ee",
        title: "Leadership & MUN",
        skills: ["Model United Nations", "Public Speaking", "Diplomacy", "Team Management"],
      },
      {
        icon: <IoGameController />,
        color: "#22d3ee",
        title: "Game Design",
        skills: [
          "Game Design",
          "Godot Engine",
          "Unity Engine",
          "Level Design",
          "Game Mechanics",
        ],
      },
    ],
    []
  );

/* ------- shared section header ------- */
function SectionHeader({ label, sub, center = false }) {
  return (
    <Stack alignItems={center ? "center" : "flex-start"} sx={{ textAlign: center ? "center" : "left" }}>
      <Typography
        variant="h3"
        sx={{
          fontWeight: 800,
          letterSpacing: 1,
          color: "#22d3ee",
          mb: 0.75,
          fontSize: { xs: "1.8rem", sm: "2rem", md: "2.2rem" },
        }}
      >
        {label}
      </Typography>
      <Divider sx={{ width: 64, height: 3, bgcolor: "#22d3ee", borderRadius: 2, mb: 1.5 }} />
      {sub ? (
        <Typography sx={{ color: "rgba(255,255,255,0.75)", maxWidth: 720, fontSize: { xs: "0.98rem", md: "1.05rem" } }}>
          {sub}
        </Typography>
      ) : null}
    </Stack>
  );
}

/* ------- interest card ------- */
function InterestCard({ item }) {
  return (
    <Card
      tabIndex={0}
      sx={{
        height: "100%",
        background: "linear-gradient(135deg, #121212 0%, #202020 100%)",
        border: "1px solid rgba(34,211,238,0.2)",
        borderRadius: 3,
        boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        "&:hover": { 
          transform: "translateY(-6px)", 
          boxShadow: "0 18px 40px rgba(34,211,238,0.25)",
          borderColor: "rgba(34,211,238,0.4)"
        },
        "&:focus-visible": {
          outline: "3px solid #22d3ee",
          outlineOffset: "2px",
        },
        mx: "auto", // center horizontally in the grid cell
        display: "flex",
        flexDirection: "column",
        justifyContent: "center", // center vertically within the card
      }}
    >
      <CardContent sx={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100%" }}>
        <Stack alignItems="center" spacing={1}>
          <Box
            aria-hidden
            sx={{
              display: "grid",
              placeItems: "center",
              width: 56,
              height: 56,
              borderRadius: "14px",
              background: "rgba(255,255,255,0.06)",
              color: item.color,
              fontSize: 28,
            }}
          >
            {item.icon}
          </Box>

          <Typography variant="h6" sx={{ color: "#fff", fontWeight: 700, mt: 1, textAlign: "center" }}>
            {item.title}
          </Typography>
          <Divider sx={{ width: 32, my: 1, bgcolor: "#22d3ee", borderRadius: 2 }} />

          <Stack direction="row" flexWrap="wrap" justifyContent="center" spacing={0.75} useFlexGap sx={{ mt: 0.5 }}>
            {item.skills.map((s, i) => (
              <Chip
                key={i}
                label={s}
                size="small"
                sx={{
                  bgcolor: "#2b2e31",
                  color: "#fff",
                  border: "1px solid rgba(255,255,255,0.15)",
                  fontWeight: 600,
                }}
              />
            ))}
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
}

/* =================== DESKTOP =================== */
function DesktopAbout() {
  const interests = useInterests();

  return (
    <Box sx={{ background: "linear-gradient(120deg,#121212 0%,#1a1a1a 60%,#202020 100%)", minHeight: "100vh", color: "#fff" }}>
      <Container maxWidth="lg" sx={{ py: 8 }}>
        {/* About Me */}
        <SectionHeader
          label="About Me"
          sub={
            <>
              I was born in <strong>Maryland</strong> in 2006 and lived there for 9 years before moving to <strong>Sri Lanka</strong> in 2015. 
              I attended <strong>Gateway College Colombo</strong> until graduation, where I spent a lot of my time in <strong>MUN</strong>, 
              <strong> ICT</strong>, and <strong>swimming</strong>. I am now enrolled at <strong>Pennsylvania State University</strong>, 
              studying <strong>Electrical Engineering</strong>.
            </>
          }
        />

        
        {/* <Stack spacing={1.5} sx={{ mt: 3, color: "#ccc", maxWidth: 900 }}>
          <Divider sx={{ bgcolor: "#22d3ee", borderRadius: 2, opacity: 0.7 }} />
          <Chip label="Achievements" sx={{ bgcolor: "#22d3ee", color: "#fff", fontWeight: 700, width: "fit-content" }} />
          <Typography sx={{ fontSize: "1.05rem" }}>
            ✅ Built smart systems for homes, vehicles, and computers — integrating technology into everyday life.
          </Typography>
        </Stack> */}

        {/* Interests & Skills */}
        <Box sx={{ mt: 6 }}>
          <SectionHeader label="Interests & Skills" center />
          <Grid container spacing={3} sx={{ mt: 1 }}>
            {interests.map((it, idx) => (
              <Grid key={idx} item xs={12} sm={6} md={3}>
                <InterestCard item={it} />
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Personal Interests */}
        <Stack spacing={1.5} sx={{ mt: 6, color: "#ccc", maxWidth: 900 }}>
          <Divider sx={{ bgcolor: "#22d3ee", borderRadius: 2, opacity: 0.7 }} />
          <Chip label="Personal Interests" sx={{ bgcolor: "#22d3ee", color: "#fff", fontWeight: 700, width: "fit-content" }} />
          <Typography sx={{ fontSize: "1.05rem" }}>
            Outside academics I enjoy <strong>game design</strong> using <strong>Godot</strong> and <strong>Unity</strong>, 
            playing <strong>soccer</strong> and <strong>swimming</strong>. I also love <strong>traveling</strong> and 
            have visited countries including Australia, Brunei, India, Italy, and the United Arab Emirates.
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}

/* =================== MOBILE =================== */
function MobileAbout() {
  const interests = useInterests();

  return (
    <Box sx={{ background: "linear-gradient(180deg,#121212 0%,#191919 100%)", minHeight: "100vh", color: "#fff" }}>
      <Container maxWidth="md" sx={{ py: 6 }}>
        {/* About Me */}
        <SectionHeader
          label="About Me"
          sub={
            <>
              I was born in <strong>Maryland</strong> in 2006 and lived there for 9 years before moving to <strong>Sri Lanka</strong> in 2015. 
              I attended <strong>Gateway College Colombo</strong> until graduation, where I spent a lot of my time in <strong>MUN</strong>, 
              <strong> ICT</strong>, and <strong>swimming</strong>. I am now enrolled at <strong>Pennsylvania State University</strong>, 
              studying <strong>Electrical Engineering</strong>.
            </>
          }
        />

        {/* <Stack spacing={1.5} sx={{ mt: 3, color: "#ccc", maxWidth: 900 }}>
          <Divider sx={{ bgcolor: "#22d3ee", borderRadius: 2, opacity: 0.7 }} />
          <Chip label="Achievements" sx={{ bgcolor: "#22d3ee", color: "#fff", fontWeight: 700, width: "fit-content" }} />
          <Typography sx={{ fontSize: "1.05rem" }}>
            ✅ Built smart systems for homes, vehicles, and computers — integrating technology into everyday life.
          </Typography>
        </Stack> */}

        {/* Interests grid (2 per row on phones) */}
        <Box sx={{ mt: 5 }}>
          <SectionHeader label="Interests & Skills" center />
          <Grid container spacing={2.5} sx={{ mt: 0.5 }}>
            {interests.map((it, idx) => (
              <Grid key={idx} item xs={6}>
                <InterestCard item={it} />
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Personal Interests */}
        <Stack spacing={1.25} sx={{ mt: 5, color: "#ccc" }}>
          <Divider sx={{ bgcolor: "#22d3ee", borderRadius: 2, opacity: 0.7 }} />
          <Chip label="Personal Interests" sx={{ bgcolor: "#22d3ee", color: "#fff", fontWeight: 700, alignSelf: "flex-start" }} />
          <Typography sx={{ fontSize: "1.02rem" }}>
            Outside academics I enjoy <strong>game design</strong> using <strong>Godot</strong> and <strong>Unity</strong>, 
            playing <strong>soccer</strong> and <strong>swimming</strong>. I also love <strong>traveling</strong>.
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}

/* ------- main export: split renders ------- */
export default function About() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return isMobile ? <MobileAbout /> : <DesktopAbout />;
}



