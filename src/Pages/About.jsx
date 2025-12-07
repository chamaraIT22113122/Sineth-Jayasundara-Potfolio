import React, { useMemo, useEffect } from "react";
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
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import { FaCode, FaMobileAlt, FaPencilRuler, FaObjectGroup, FaBrain, FaGlobeAmericas, FaCarBattery   } from "react-icons/fa";
import { IoGameController, IoTerminal  } from "react-icons/io5";
import { BiSolidCctv } from "react-icons/bi";
import { MdElectricalServices } from "react-icons/md";
import SchoolIcon from "@mui/icons-material/School";
import PublicIcon from "@mui/icons-material/Public";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import ImageGallery from "../Components/ImageGallery";
import VideoPlayer from "../Components/VideoPlayer";
import { FadeIn, StaggerChildren } from "../Components/ScrollAnimations";

// Hiking Images - Ampara
import ampara1 from "../Images/Hicking - Ampara/WhatsApp Image 2025-11-28 at 13.20.16 (1).jpeg";
import ampara2 from "../Images/Hicking - Ampara/WhatsApp Image 2025-11-28 at 13.20.16 (2).jpeg";
import ampara3 from "../Images/Hicking - Ampara/WhatsApp Image 2025-11-28 at 13.20.17 (1).jpeg";
import ampara4 from "../Images/Hicking - Ampara/WhatsApp Image 2025-11-28 at 13.20.17.jpeg";
import ampara5 from "../Images/Hicking - Ampara/WhatsApp Image 2025-11-28 at 13.20.18.jpeg";

// Hiking Images - Peco Trail
import peco1 from "../Images/Hicking - Peco trail/WhatsApp Image 2025-11-28 at 13.47.18.jpeg";
import peco2 from "../Images/Hicking - Peco trail/WhatsApp Image 2025-11-28 at 13.47.21 (1).jpeg";
import peco3 from "../Images/Hicking - Peco trail/WhatsApp Image 2025-11-28 at 13.47.21.jpeg";
import peco4 from "../Images/Hicking - Peco trail/WhatsApp Image 2025-11-28 at 13.47.22 (1).jpeg";
import peco5 from "../Images/Hicking - Peco trail/WhatsApp Image 2025-11-28 at 13.47.22.jpeg";
import peco6 from "../Images/Hicking - Peco trail/WhatsApp Image 2025-11-28 at 13.47.23 (1).jpeg";

// Hiking Images - Pidurangala
import pidu1 from "../Images/Hicking - Pidurangala/WhatsApp Image 2025-11-28 at 13.03.42 (1).jpeg";
import pidu2 from "../Images/Hicking - Pidurangala/WhatsApp Image 2025-11-28 at 13.03.42.jpeg";
import pidu3 from "../Images/Hicking - Pidurangala/WhatsApp Image 2025-11-28 at 13.03.43 (1).jpeg";
import pidu4 from "../Images/Hicking - Pidurangala/WhatsApp Image 2025-11-28 at 13.03.43 (2).jpeg";
import pidu5 from "../Images/Hicking - Pidurangala/WhatsApp Image 2025-11-28 at 13.03.43.jpeg";
import pidu6 from "../Images/Hicking - Pidurangala/WhatsApp Image 2025-11-28 at 13.03.44.jpeg";

// Community Service Video
import communityVideo from "../Images/Community service/WhatsApp Video 2025-11-28 at 13.09.49.mp4";

// Graduation Images
import grad1 from "../Images/About me - Time line/Graduation/WhatsApp Image 2025-11-28 at 12.57.48.jpeg";
import grad2 from "../Images/About me - Time line/Graduation/WhatsApp Image 2025-11-28 at 12.57.48 (1).jpeg";
import grad3 from "../Images/About me - Time line/Graduation/WhatsApp Image 2025-11-28 at 12.57.48 (2).jpeg";

// Family Images
import family1 from "../Images/About me - Time line/Family pics/CHE_6840 (2).jpg";
import family2 from "../Images/About me - Time line/Family pics/CHE_6846 (2).jpg";
import family3 from "../Images/About me - Time line/Family pics/CHE_6849 (2).jpg";
import family4 from "../Images/About me - Time line/Family pics/CHE_6860 (2).jpg";

// Travel Images
import singaporeImg from "../Images/travel/Singapore.png";
import maldivesImg from "../Images/travel/Maldives.jpg";
import indiaImg from "../Images/travel/India.jpg";
import dubaiImg from "../Images/travel/Dubai.png";
import malaysiaImg from "../Images/travel/Malaysia.png";
import family5 from "../Images/About me - Time line/Family pics/CHE_6871 (2).jpg";
import family6 from "../Images/About me - Time line/Family pics/CHE_6874 (2).jpg";
import family7 from "../Images/About me - Time line/Family pics/CHE_6878 (2).jpg";
import family8 from "../Images/About me - Time line/Family pics/CHE_6882 (2).jpg";

const amparaImages = [ampara1, ampara2, ampara3, ampara4, ampara5];
const pecoImages = [peco1, peco2, peco3, peco4, peco5, peco6];
const piduImages = [pidu1, pidu2, pidu3, pidu4, pidu5, pidu6];
const graduationImages = [grad1, grad2, grad3];
const familyImages = [family1, family2, family3, family4, family5, family6, family7, family8];

// Preload critical family images for faster rendering
if (typeof window !== 'undefined') {
  const preloadLink = document.createElement('link');
  preloadLink.rel = 'preload';
  preloadLink.as = 'image';
  preloadLink.href = family1;
  preloadLink.fetchpriority = 'high';
  document.head.appendChild(preloadLink);
}

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

/* ------- Personal Info Data ------- */
const personalInfo = {
  name: "Sineth Jayasundara",
  title: "Computer Science & Electronics Student",
  bio: "Passionate about combining electrical engineering, IoT, and software development to create innovative solutions. I have a proven track record in leadership, international competitions, and community service. My diverse background spans from Model UN diplomacy to IoT development, game design, and competitive programming.",
  location: "Colombo, Sri Lanka",
  email: "sinethjayasundara2005@gmail.com",
  phone: "+94 76 111 7707",
};

/* ------- Timeline Data ------- */
const timelineData = [
  {
    year: "2014 - 2019",
    title: "Primary Education",
    subtitle: "Gateway College Colombo",
    location: "Colombo, Sri Lanka",
    details: "Developed a strong foundation in academics, participated in various extracurricular activities, and began showing interest in science and technology.",
    icon: <SchoolIcon />,
    color: "#22d3ee",
  },
  {
    year: "2019 - 2025",
    title: "Secondary Education - IGCSE & A-Levels",
    subtitle: "Gateway College Colombo",
    location: "Colombo, Sri Lanka",
    details: "Pursued IGCSE and A-Level qualifications with a focus on Physics, Chemistry, and Mathematics. Developed leadership skills through various student organizations and achieved recognition in national and international competitions.",
    icon: <SchoolIcon />,
    color: "#06b6d4",
  },
  {
    year: "2025 - Present",
    title: "Higher Education",
    subtitle: "University of Moratuwa - Computer Science & Engineering",
    location: "Moratuwa, Sri Lanka",
    details: "Currently pursuing undergraduate studies in Computer Science and Engineering, focusing on cutting-edge technologies, IoT, AI, and software development.",
    icon: <SchoolIcon />,
    color: "#67e8f9",
  },
];

/* ------- Travel Data ------- */
const travelData = [
  {
    country: "Singapore",
    flag: "🇸🇬",
    description: "Explored the cutting-edge Smart Nation, experiencing advanced urban technology and innovation hubs.",
    image: singaporeImg,
  },
  {
    country: "Maldives",
    flag: "🇲🇻",
    description: "Enjoyed pristine beaches and crystal-clear waters in this tropical paradise.",
    image: maldivesImg,
  },
  {
    country: "India",
    flag: "🇮🇳",
    description: "Discovered rich cultural heritage and diverse technological landscapes.",
    image: indiaImg,
  },
  {
    country: "Dubai, UAE",
    flag: "🇦🇪",
    description: "Witnessed futuristic architecture and world-class innovation in this global hub.",
    image: dubaiImg,
  },
  {
    country: "Malaysia",
    flag: "🇲🇾",
    description: "Experienced the perfect blend of traditional culture and modern development.",
    image: malaysiaImg,
  },
];

/* ------- Extracurricular Data ------- */
const extracurricularData = [
  {
    title: "MUN Secretary General",
    organization: "Gateway College Colombo",
    year: "2024",
    icon: "🎤",
    color: "#22d3ee",
  },
  {
    title: "ICT Society President",
    organization: "Gateway College Colombo",
    year: "2024",
    icon: "💻",
    color: "#06b6d4",
  },
  {
    title: "Interact Club President",
    organization: "Gateway College Colombo",
    year: "2023",
    icon: "🤝",
    color: "#67e8f9",
  },
  {
    title: "Green Society President",
    organization: "Gateway College Colombo",
    year: "2023",
    icon: "🌱",
    color: "#22d3ee",
  },
  {
    title: "Young Entrepreneur President",
    organization: "Gateway College Colombo",
    year: "2023",
    icon: "💡",
    color: "#06b6d4",
  },
  {
    title: "Swimming Team Captain",
    organization: "Gateway College Colombo",
    year: "2022",
    icon: "🏊",
    color: "#67e8f9",
  },
];

/* ------- Hobbies Data ------- */
const hobbiesData = [
  {
    title: "Competitive Swimming",
    icon: "🏊",
    color: "#22d3ee",
    description: "Passionate about competitive swimming with extensive training and participation in various tournaments.",
    achievements: [
      "School Swimming Team Captain (2022)",
      "Multiple inter-school competition medals",
      "Regular training and endurance development",
    ],
  },
  {
    title: "Marathon Running",
    icon: "🏃",
    color: "#06b6d4",
    description: "Dedicated long-distance runner with experience in marathons and road races.",
    achievements: [
      "Completed multiple half-marathons",
      "Regular participant in Colombo road races",
      "Focused on endurance and mental resilience",
    ],
  },
  {
    title: "PC Gaming & Tech",
    icon: "🎮",
    color: "#67e8f9",
    description: "Avid PC gamer and technology enthusiast, exploring the latest in gaming hardware and software.",
    tools: ["RTX Gaming", "VR", "Game Modding"],
  },
  {
    title: "Game Development",
    icon: "🕹️",
    color: "#22d3ee",
    description: "Creating interactive experiences using modern game engines and programming.",
    tools: ["Unity", "Godot", "C#", "GDScript"],
  },
];

/* ------- Community Service Data ------- */
const communityServiceData = {
  title: "ICT Equipment Donation Project",
  organization: "ICT Society - Gateway College Colombo",
  location: "Local Area Schools",
  duration: "Summer 2023 - May 2025",
  description: "Founded an annual project for the ICT society to raise money for impoverished schools in the local area by donating computers and ICT equipment.",
  achievements: [
    "Raised over 130,000 rupees within first year of operation",
    "Organized donation of computers and ICT equipment",
    "Established sustainable community outreach program",
    "Successfully completed two years of continuous service",
  ],
};

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
        <Typography sx={{ color: "rgba(255,255,255,0.75)", fontSize: { xs: "0.98rem", md: "1.05rem" } }}>
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

/* ------- Travel Card ------- */
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
        "&:hover": { transform: "translateY(-6px)", boxShadow: "0 18px 40px rgba(34,211,238,0.25)" },
        "&:focus-within": {
          outline: "2px solid #22d3ee",
          outlineOffset: "2px",
        },
      }}
      role="article"
      aria-label={`Travel to ${item.country}`}
    >
      <Box 
        sx={{ 
          position: "relative", 
          height: 200,
          background: "linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)",
          overflow: "hidden",
        }}
      >
        {item.image && (
          <Box
            component="img"
            src={item.image}
            alt={item.country}
            loading="lazy"
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
        )}
        <Box 
          sx={{ 
            position: "absolute",
            top: 12,
            right: 12,
            fontSize: 40,
            textShadow: "0 2px 8px rgba(0,0,0,0.8)",
            backgroundColor: "rgba(0,0,0,0.4)",
            borderRadius: 2,
            padding: "4px 8px",
            backdropFilter: "blur(4px)",
            zIndex: 2,
          }} 
          role="img" 
          aria-label={`${item.country} flag`}
        >
          {item.flag}
        </Box>
      </Box>
      <CardContent sx={{ p: 2 }}>
        <Typography variant="h6" component="h3" sx={{ fontWeight: 800, color: "#fff", mb: 1 }}>
          {item.country}
        </Typography>
        <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.8)", lineHeight: 1.6 }}>
          {item.description}
        </Typography>
      </CardContent>
    </Card>
  );
}

/* ------- Hobby Card ------- */
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
        transition: "transform .25s ease, box-shadow .25s ease",
        "&:hover": { transform: "translateY(-6px)", boxShadow: "0 18px 40px rgba(34,211,238,0.25)" },
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

/* =================== DESKTOP =================== */
function DesktopAbout() {
  const interests = useInterests();

  return (
    <Box sx={{ background: "linear-gradient(135deg, #0f1419 0%, #1a1f2e 50%, #1e2433 100%)", minHeight: "100vh", color: "#fff" }}>
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

        {/* Personal Bio */}
        <Box sx={{ mt: 6 }}>
          <FadeIn>
            <Card
              sx={{
                mb: 6,
                background: "linear-gradient(135deg, rgba(26,32,44,0.98) 0%, rgba(45,55,72,0.98) 100%)",
                border: "1px solid rgba(34,211,238,0.15)",
                borderRadius: 4,
                boxShadow: "0 20px 60px rgba(0,0,0,0.4), 0 0 0 1px rgba(34,211,238,0.05)",
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: "0 24px 80px rgba(34,211,238,0.15)",
                  border: "1px solid rgba(34,211,238,0.3)",
                },
              }}
            >
              <CardContent sx={{ p: 5 }}>
                <Typography variant="h5" sx={{ fontWeight: 800, color: "#22d3ee", mb: 2 }}>
                  {personalInfo.name}
                </Typography>
                <Typography variant="h6" sx={{ color: "rgba(255,255,255,0.85)", mb: 3 }}>
                  {personalInfo.title}
                </Typography>
                <Typography variant="body1" sx={{ color: "rgba(255,255,255,0.8)", lineHeight: 1.8, mb: 3 }}>
                  {personalInfo.bio}
                </Typography>
                <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                  <Chip label={`📍 ${personalInfo.location}`} sx={{ bgcolor: "rgba(34,211,238,0.2)", color: "#fff" }} />
                  <Chip label={`📧 ${personalInfo.email}`} sx={{ bgcolor: "rgba(34,211,238,0.2)", color: "#fff" }} />
                  <Chip label={`📱 ${personalInfo.phone}`} sx={{ bgcolor: "rgba(34,211,238,0.2)", color: "#fff" }} />
                </Stack>
              </CardContent>
            </Card>
          </FadeIn>
        </Box>

        {/* Personal Interests */}
        <Stack spacing={2} sx={{ mt: 6, mb: 2, color: "rgba(203, 213, 225, 0.95)" }}>
          <Divider sx={{ bgcolor: "rgba(34,211,238,0.3)", borderRadius: 2, height: 2 }} />
          <Chip 
            label="Personal Interests" 
            sx={{ 
              bgcolor: "rgba(34,211,238,0.15)", 
              color: "#22d3ee", 
              fontWeight: 700, 
              width: "fit-content",
              border: "1px solid rgba(34,211,238,0.3)",
              fontSize: "0.95rem",
              py: 2.5,
            }} 
          />
          <Typography sx={{ fontSize: "1.05rem", lineHeight: 1.8, color: "rgba(203, 213, 225, 0.9)" }}>
            Outside academics I enjoy <strong>game design</strong> using <strong>Godot</strong> and <strong>Unity</strong>, 
            playing <strong>soccer</strong> and <strong>swimming</strong>. I also love <strong>traveling</strong> and 
            have visited countries including Australia, Brunei, India, Italy, and the United Arab Emirates.
          </Typography>
        </Stack>

        {/* Education Timeline */}
        <Box sx={{ mt: 8 }}>
          <SectionHeader label="Education Timeline" center />
          <Timeline position="alternate">{timelineData.map((item, index) => {
              const isLeft = index % 2 === 0;
              return (
                <FadeIn key={index} delay={index * 0.2}>
                  <TimelineItem>
                    <TimelineOppositeContent sx={{ color: "rgba(255,255,255,0.9)", flex: 0.3, pt: 3 }}>
                      <Typography 
                        variant="h5" 
                        sx={{ 
                          fontWeight: 800,
                          color: "#22d3ee",
                          textShadow: "0 0 20px rgba(34,211,238,0.4)",
                        }}
                      >
                        {item.year}
                      </Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                      <TimelineDot 
                        sx={{ 
                          bgcolor: item.color, 
                          p: 2,
                          boxShadow: `0 0 10px ${item.color}80`,
                          border: "4px solid rgba(18,18,18,1)",
                          transition: "all 0.4s ease",
                          "&:hover": {
                            transform: "scale(1.3)",
                            boxShadow: `0 0 15px ${item.color}`,
                          }
                        }}
                      >
                        {item.icon}
                      </TimelineDot>
                      {index < timelineData.length - 1 && (
                        <TimelineConnector 
                          sx={{ 
                            bgcolor: "rgba(34,211,238,0.4)",
                            width: 3,
                            background: "linear-gradient(180deg, #22d3ee 0%, rgba(34,211,238,0.3) 100%)",
                          }} 
                        />
                      )}
                    </TimelineSeparator>
                    <TimelineContent sx={{ flex: 1, pt: 2 }}>
                      <Card
                        sx={{
                          background: "linear-gradient(145deg, rgba(18,18,18,0.95) 0%, rgba(26,26,26,0.98) 100%)",
                          backdropFilter: "blur(20px)",
                          border: "1px solid rgba(34,211,238,0.3)",
                          borderRadius: 3,
                          p: 3,
                          boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
                          transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                          position: "relative",
                          overflow: "hidden",
                          "&::before": {
                            content: '""',
                            position: "absolute",
                            top: 0,
                            left: 0,
                            right: 0,
                            height: "3px",
                            background: `linear-gradient(90deg, ${item.color}, transparent)`,
                          },
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
                            boxShadow: `0 16px 48px rgba(34,211,238,0.3)`,
                            border: `1px solid ${item.color}`,
                            "&::after": { opacity: 1 },
                          }
                        }}
                      >
                        <Typography 
                          variant="h6" 
                          sx={{ 
                            fontWeight: 800, 
                            color: "#fff",
                            mb: 0.5,
                            fontSize: "1.2rem",
                          }}
                        >
                          {item.title}
                        </Typography>
                        <Typography 
                          variant="body1" 
                          sx={{ 
                            color: "rgba(255,255,255,0.85)", 
                            mb: 1.5,
                            fontWeight: 500,
                          }}
                        >
                          {item.subtitle}
                        </Typography>
                        {item.location && (
                          <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
                            <Typography variant="body2" sx={{ color: "#22d3ee" }}>
                              📍 {item.location}
                            </Typography>
                          </Box>
                        )}
                        <Box 
                          sx={{ 
                            mt: 2,
                            pt: 2,
                            borderTop: "1px solid rgba(34,211,238,0.2)",
                          }}
                        >
                          <Typography 
                            variant="body2" 
                            sx={{ 
                              color: "rgba(255,255,255,0.75)",
                              lineHeight: 1.6,
                            }}
                          >
                            {item.details}
                          </Typography>
                        </Box>
                      </Card>
                    </TimelineContent>
                  </TimelineItem>
                </FadeIn>
              );
            })}
          </Timeline>
        </Box>

        {/* Graduation Memories */}
        <Box sx={{ mt: 10 }}>
          <SectionHeader label="Graduation 2025" center />
          <FadeIn>
            <ImageGallery images={graduationImages} title="High School Graduation" />
          </FadeIn>
        </Box>

        {/* Interests & Skills */}
        <Box sx={{ mt: 10, mb: 6 }}>
          <SectionHeader label="Interests & Skills" center />
          <Grid container spacing={4} sx={{ mt: 2 }} justifyContent="center">
            {interests.map((it, idx) => (
              <Grid key={idx} item xs={12} sm={6} md={3}>
                <InterestCard item={it} />
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Extracurricular Activities */}
        <Box sx={{ mt: 10 }}>
          <SectionHeader label="Extracurricular Activities" center />
          <Grid container spacing={4} sx={{ mt: 2 }} justifyContent="center">
            {extracurricularData.map((activity, i) => (
              <Grid item xs={12} sm={6} md={4} key={i}>
                  <Card
                    sx={{
                      background: "linear-gradient(135deg, rgba(35,37,38,0.95) 0%, rgba(58,61,64,0.95) 100%)",
                      border: `1px solid ${activity.color}40`,
                      borderRadius: 3,
                      p: 3,
                      height: "100%",
                      transition: "transform .25s ease",
                      "&:hover": { transform: "translateY(-6px)" },
                    }}
                  >
                    <Box sx={{ fontSize: 40, mb: 2 }}>{activity.icon}</Box>
                    <Typography variant="h6" sx={{ fontWeight: 800, color: "#fff", mb: 1 }}>
                      {activity.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.85)", mb: 1 }}>
                      {activity.organization}
                    </Typography>
                    <Chip label={activity.year} size="small" sx={{ bgcolor: `${activity.color}20`, color: activity.color }} />
                  </Card>
                </Grid>
              ))}
            </Grid>
        </Box>

        {/* Detailed Community Service */}
        <Box sx={{ mt: 10 }}>
          <SectionHeader label="ICT Equipment Donation Project" center />
          <FadeIn>
            <Card
              sx={{
                background: "linear-gradient(135deg, rgba(26,32,44,0.98) 0%, rgba(45,55,72,0.98) 100%)",
                border: "1px solid rgba(34,211,238,0.15)",
                borderRadius: 4,
                boxShadow: "0 20px 60px rgba(0,0,0,0.4)",
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: "0 24px 80px rgba(34,211,238,0.2)",
                  border: "1px solid rgba(34,211,238,0.3)",
                }
              }}
            >
              <CardContent sx={{ p: 5 }}>
                <Typography variant="h5" sx={{ fontWeight: 800, color: "#22d3ee", mb: 2 }}>
                  {communityServiceData.title}
                </Typography>
                <Typography variant="h6" sx={{ color: "rgba(255,255,255,0.85)", mb: 1 }}>
                  {communityServiceData.organization}
                </Typography>
                <Stack direction="row" spacing={2} sx={{ mb: 3 }}>
                  <Chip label={communityServiceData.location} sx={{ bgcolor: "rgba(34,211,238,0.2)", color: "#fff" }} />
                  <Chip label={communityServiceData.duration} sx={{ bgcolor: "rgba(34,211,238,0.2)", color: "#fff" }} />
                </Stack>
                <Typography variant="body1" sx={{ color: "rgba(255,255,255,0.8)", mb: 3, lineHeight: 1.8 }}>
                  {communityServiceData.description}
                </Typography>
                <Typography variant="subtitle2" sx={{ color: "#22d3ee", fontWeight: 700, mb: 1 }}>
                  Key Achievements:
                </Typography>
                {communityServiceData.achievements.map((achievement, i) => (
                  <Typography key={i} variant="body2" sx={{ color: "rgba(255,255,255,0.8)", mb: 1, pl: 2 }}>
                    ✓ {achievement}
                  </Typography>
                ))}
              </CardContent>
            </Card>
          </FadeIn>
        </Box>

        {/* Hobbies & Interests */}
        <Box sx={{ mt: 10 }}>
          <SectionHeader label="Hobbies & Interests" center />
          <Grid container spacing={4} sx={{ mt: 2 }} justifyContent="center">
            {hobbiesData.map((hobby, i) => (
              <Grid item xs={12} md={6} lg={3} key={i}>
                <FadeIn delay={i * 100}>
                  <HobbyCard item={hobby} />
                </FadeIn>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Family Memories */}
        <Box sx={{ mt: 10 }}>
          <SectionHeader label="Family Moments" center />
          <FadeIn>
            <ImageGallery images={familyImages} title="Cherished Family Memories" />
          </FadeIn>
        </Box>

        {/* Hiking Adventures */}
        <Box sx={{ mt: 10 }}>
          <SectionHeader label="Adventures & Outdoor Activities" center />
          
          <Box sx={{ mt: 4 }}>
            <ImageGallery images={piduImages} title="Pidurangala Rock Hiking" />
          </Box>

          <Box sx={{ mt: 4 }}>
            <ImageGallery images={pecoImages} title="Peco Wilderness Trail" />
          </Box>

          <Box sx={{ mt: 4 }}>
            <ImageGallery images={amparaImages} title="Ampara Expedition" />
          </Box>
        </Box>

        {/* International Travel */}
        <Box sx={{ mt: 10 }}>
          <SectionHeader label="International Travel" center />
          <Grid container spacing={4} sx={{ mt: 2 }} justifyContent="center">
            {travelData.map((travel, i) => (
              <Grid item xs={12} sm={6} md={4} key={i}>
                <FadeIn delay={i * 100}>
                  <TravelCard item={travel} />
                </FadeIn>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Community Service */}
        <Box sx={{ mt: 10, mb: 8 }}>
          <SectionHeader label="Community Service" center />
          <Box sx={{ mt: 4 }}>
            <VideoPlayer src={communityVideo} title="Community Outreach Programs" />
          </Box>
        </Box>
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

        {/* Personal Bio */}
        <Box sx={{ mt: 6 }}>
          <FadeIn>
            <Card
              sx={{
                mb: 6,
                background: "linear-gradient(135deg, rgba(35,37,38,0.95) 0%, rgba(58,61,64,0.95) 100%)",
                border: "1px solid rgba(34,211,238,0.2)",
                borderRadius: 3,
                boxShadow: "0 8px 24px rgba(0,0,0,0.3)",
              }}
            >
              <CardContent sx={{ p: 3 }}>
                <Typography variant="h5" sx={{ fontWeight: 800, color: "#22d3ee", mb: 2 }}>
                  {personalInfo.name}
                </Typography>
                <Typography variant="h6" sx={{ color: "rgba(255,255,255,0.85)", mb: 2, fontSize: "1rem" }}>
                  {personalInfo.title}
                </Typography>
                <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.8)", lineHeight: 1.7, mb: 2 }}>
                  {personalInfo.bio}
                </Typography>
                <Stack spacing={1.5}>
                  <Chip label={`📍 ${personalInfo.location}`} sx={{ bgcolor: "rgba(34,211,238,0.2)", color: "#fff" }} />
                  <Chip label={`📧 ${personalInfo.email}`} sx={{ bgcolor: "rgba(34,211,238,0.2)", color: "#fff" }} />
                  <Chip label={`📱 ${personalInfo.phone}`} sx={{ bgcolor: "rgba(34,211,238,0.2)", color: "#fff" }} />
                </Stack>
              </CardContent>
            </Card>
          </FadeIn>
        </Box>

        {/* Personal Interests */}
        <Stack spacing={1.25} sx={{ mt: 6, color: "#ccc" }}>
          <Divider sx={{ bgcolor: "#22d3ee", borderRadius: 2, opacity: 0.7 }} />
          <Chip label="Personal Interests" sx={{ bgcolor: "#22d3ee", color: "#fff", fontWeight: 700, width: "fit-content" }} />
          <Typography sx={{ fontSize: "0.98rem" }}>
            Outside academics I enjoy <strong>game design</strong> using <strong>Godot</strong> and <strong>Unity</strong>, 
            playing <strong>soccer</strong> and <strong>swimming</strong>. I also love <strong>traveling</strong> and 
            have visited countries including Australia, Brunei, India, Italy, and the United Arab Emirates.
          </Typography>
        </Stack>

        {/* Education Timeline */}
        <Box sx={{ mt: 6 }}>
          <SectionHeader label="Education Timeline" center />
          <Timeline position="right">{timelineData.map((item, index) => (
              <FadeIn key={index} delay={index * 0.2}>
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot 
                      sx={{ 
                        bgcolor: item.color, 
                        p: 1.5,
                        boxShadow: `0 0 10px ${item.color}80`,
                        border: "3px solid rgba(18,18,18,1)",
                      }}
                    >
                      {item.icon}
                    </TimelineDot>
                    {index < timelineData.length - 1 && (
                      <TimelineConnector 
                        sx={{ 
                          bgcolor: "rgba(34,211,238,0.4)",
                          width: 2,
                        }} 
                      />
                    )}
                  </TimelineSeparator>
                  <TimelineContent sx={{ pt: 2, pb: 4 }}>
                    <Card
                      sx={{
                        background: "linear-gradient(145deg, rgba(18,18,18,0.95) 0%, rgba(26,26,26,0.98) 100%)",
                        border: "1px solid rgba(34,211,238,0.3)",
                        borderRadius: 2,
                        p: 2,
                        boxShadow: "0 6px 20px rgba(0,0,0,0.4)",
                      }}
                    >
                      <Typography 
                        variant="subtitle2" 
                        sx={{ 
                          color: item.color, 
                          fontWeight: 800, 
                          mb: 1,
                        }}
                      >
                        {item.year}
                      </Typography>
                      <Typography 
                        variant="h6" 
                        sx={{ 
                          fontWeight: 700, 
                          color: "#fff",
                          mb: 0.5,
                          fontSize: "1.1rem",
                        }}
                      >
                        {item.title}
                      </Typography>
                      <Typography 
                        variant="body2" 
                        sx={{ 
                          color: "rgba(255,255,255,0.85)", 
                          mb: 1,
                        }}
                      >
                        {item.subtitle}
                      </Typography>
                      {item.location && (
                        <Typography variant="caption" sx={{ color: "#22d3ee", display: "block", mb: 1 }}>
                          📍 {item.location}
                        </Typography>
                      )}
                      <Typography 
                        variant="body2" 
                        sx={{ 
                          color: "rgba(255,255,255,0.7)",
                          lineHeight: 1.5,
                          fontSize: "0.85rem",
                        }}
                      >
                        {item.details}
                      </Typography>
                    </Card>
                  </TimelineContent>
                </TimelineItem>
              </FadeIn>
            ))}
          </Timeline>
        </Box>

        {/* Graduation Memories */}
        <Box sx={{ mt: 6 }}>
          <SectionHeader label="Graduation 2025" center />
          <FadeIn>
            <ImageGallery images={graduationImages} title="Graduation" />
          </FadeIn>
        </Box>

        {/* Interests & Skills */}
        <Box sx={{ mt: 6, mb: 3 }}>
          <SectionHeader label="Interests & Skills" center />
          <Grid container spacing={2} sx={{ mt: 1 }}>
            {interests.map((it, idx) => (
              <Grid key={idx} item xs={12} sm={6}>
                <InterestCard item={it} />
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Extracurricular Activities */}
        <Box sx={{ mt: 6 }}>
          <SectionHeader label="Extracurricular" center />
          <Grid container spacing={2} sx={{ mt: 1 }}>
            {extracurricularData.map((activity, i) => (
              <Grid item xs={12} sm={6} key={i}>
                  <Card
                    sx={{
                      background: "linear-gradient(135deg, rgba(35,37,38,0.95) 0%, rgba(58,61,64,0.95) 100%)",
                      border: `1px solid ${activity.color}40`,
                      borderRadius: 2,
                      p: 2.5,
                      height: "100%",
                    }}
                  >
                    <Box sx={{ fontSize: 32, mb: 1.5 }}>{activity.icon}</Box>
                    <Typography variant="h6" sx={{ fontWeight: 700, color: "#fff", mb: 0.5, fontSize: "1rem" }}>
                      {activity.title}
                    </Typography>
                    <Typography variant="caption" sx={{ color: "rgba(255,255,255,0.75)", display: "block", mb: 1 }}>
                      {activity.organization}
                    </Typography>
                    <Chip label={activity.year} size="small" sx={{ bgcolor: `${activity.color}20`, color: activity.color }} />
                  </Card>
                </Grid>
              ))}
            </Grid>
        </Box>

        {/* Detailed Community Service */}
        <Box sx={{ mt: 6 }}>
          <SectionHeader label="ICT Donation Project" center />
          <FadeIn>
            <Card
              sx={{
                background: "linear-gradient(135deg, rgba(35,37,38,0.95) 0%, rgba(58,61,64,0.95) 100%)",
                border: "1px solid rgba(34,211,238,0.2)",
                borderRadius: 3,
                boxShadow: "0 8px 24px rgba(0,0,0,0.3)",
              }}
            >
              <CardContent sx={{ p: 3 }}>
                <Typography variant="h6" sx={{ fontWeight: 800, color: "#22d3ee", mb: 1.5 }}>
                  {communityServiceData.title}
                </Typography>
                <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.85)", mb: 1 }}>
                  {communityServiceData.organization}
                </Typography>
                <Stack spacing={1} sx={{ mb: 2 }}>
                  <Chip label={communityServiceData.location} sx={{ bgcolor: "rgba(34,211,238,0.2)", color: "#fff" }} />
                  <Chip label={communityServiceData.duration} sx={{ bgcolor: "rgba(34,211,238,0.2)", color: "#fff" }} />
                </Stack>
                <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.8)", mb: 2, lineHeight: 1.6 }}>
                  {communityServiceData.description}
                </Typography>
                <Typography variant="caption" sx={{ color: "#22d3ee", fontWeight: 700, mb: 1, display: "block" }}>
                  Key Achievements:
                </Typography>
                {communityServiceData.achievements.map((achievement, i) => (
                  <Typography key={i} variant="body2" sx={{ color: "rgba(255,255,255,0.75)", mb: 0.75, pl: 1.5, fontSize: "0.85rem" }}>
                    ✓ {achievement}
                  </Typography>
                ))}
              </CardContent>
            </Card>
          </FadeIn>
        </Box>

        {/* Hobbies & Interests */}
        <Box sx={{ mt: 6 }}>
          <SectionHeader label="Hobbies & Interests" center />
          <Grid container spacing={2} sx={{ mt: 1 }}>
            {hobbiesData.map((hobby, i) => (
              <Grid item xs={12} sm={6} key={i}>
                <FadeIn delay={i * 100}>
                  <HobbyCard item={hobby} />
                </FadeIn>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Family Memories */}
        <Box sx={{ mt: 6 }}>
          <SectionHeader label="Family Moments" center />
          <FadeIn>
            <ImageGallery images={familyImages} title="Family Memories" />
          </FadeIn>
        </Box>

        {/* Hiking Adventures */}
        <Box sx={{ mt: 6 }}>
          <SectionHeader label="Adventures" center />
          
          <Box sx={{ mt: 3 }}>
            <ImageGallery images={piduImages} title="Pidurangala" />
          </Box>

          <Box sx={{ mt: 3 }}>
            <ImageGallery images={pecoImages} title="Peco Trail" />
          </Box>

          <Box sx={{ mt: 3 }}>
            <ImageGallery images={amparaImages} title="Ampara" />
          </Box>
        </Box>

        {/* International Travel */}
        <Box sx={{ mt: 6 }}>
          <SectionHeader label="International Travel" center />
          <Grid container spacing={2} sx={{ mt: 1 }} justifyContent="center">
            {travelData.map((travel, i) => (
              <Grid item xs={12} sm={6} key={i}>
                <FadeIn delay={i * 100}>
                  <TravelCard item={travel} />
                </FadeIn>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Community Service */}
        <Box sx={{ mt: 6, mb: 3 }}>
          <SectionHeader label="Community Service" center />
          <Box sx={{ mt: 3 }}>
            <VideoPlayer src={communityVideo} title="Outreach Programs" />
          </Box>
        </Box>
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



