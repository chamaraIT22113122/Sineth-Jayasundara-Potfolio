import React from "react";
import {
  Box,
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Stack,
  Divider,
  Chip,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from "@mui/lab";
import {
  School as SchoolIcon,
  EmojiEvents as TrophyIcon,
  VolunteerActivism as VolunteerIcon,
  Public as GlobalIcon,
  SportsBasketball as SportsIcon,
} from "@mui/icons-material";
import { FaSwimmer, FaFutbol, FaGamepad } from "react-icons/fa";
import { IoGameController } from "react-icons/io5";
import { LazyImage } from "../Components/LoadingSpinner";
import { FadeIn, SlideInLeft, SlideInRight, StaggerChildren } from "../Components/ScrollAnimations";
import ImageGallery from "../Components/ImageGallery";

// Graduation Images
import grad1 from "../Images/About me - Time line/Graduation/WhatsApp Image 2025-11-28 at 12.57.48 (1).jpeg";
import grad2 from "../Images/About me - Time line/Graduation/WhatsApp Image 2025-11-28 at 12.57.48 (2).jpeg";
import grad3 from "../Images/About me - Time line/Graduation/WhatsApp Image 2025-11-28 at 12.57.48.jpeg";

const graduationImages = [grad1, grad2, grad3];

/* ---------- Personal Info ---------- */
const personalInfo = {
  name: "Sineth Jayasundera",
  title: "Electrical Engineering Student",
  location: "Niskayuna, NY 12309",
  email: "Sineth.Jayasundera@gmail.com",
  phone: "518-243-9892",
  bio: "I am an Electrical Engineering student at Pennsylvania State University with a passion for IoT development, embedded systems, and innovative solutions. With a strong background in leadership through Model United Nations and community service, I strive to make a positive impact through technology and education.",
};

/* ---------- Timeline Data ---------- */
const timelineData = [
  {
    year: "2025 - 2029",
    title: "Pennsylvania State University",
    subtitle: "Bachelor of Science in Electrical Engineering",
    location: "University Park, PA",
    details: "GPA: 4.0 | Major: Electrical Engineering",
    icon: <SchoolIcon />,
    color: "#22d3ee",
  },
  {
    year: "2013 - 2025",
    title: "Gateway College Colombo",
    subtitle: "High School Education (Grades 4-12)",
    location: "Sri Jayewardenepura Kotte, Sri Lanka",
    details: "Unweighted GPA: 4.0 | Academic Scholar (2024-2025)",
    icon: <SchoolIcon />,
    color: "#22d3ee",
  },
  {
    year: "2024",
    title: "SAT Achievement",
    subtitle: "Standardized Test Scores",
    details: "Composite: 1530 | Math: 780 | Reading & Writing: 730",
    icon: <TrophyIcon />,
    color: "#22d3ee",
  },
];

/* ---------- Travel Data ---------- */
const travelData = [
  {
    country: "Australia",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600'%3E%3Crect fill='%23667eea' width='800' height='600'/%3E%3Ctext x='50%25' y='50%25' font-size='48' fill='white' text-anchor='middle' dominant-baseline='middle'%3E🇦🇺 Australia%3C/text%3E%3C/svg%3E",
    description: "Explored the beautiful landscapes and vibrant cities of Australia.",
    flag: "🇦🇺",
  },
  {
    country: "Brunei",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600'%3E%3Crect fill='%23764ba2' width='800' height='600'/%3E%3Ctext x='50%25' y='50%25' font-size='48' fill='white' text-anchor='middle' dominant-baseline='middle'%3E🇧🇳 Brunei%3C/text%3E%3C/svg%3E",
    description: "Experienced the rich culture and stunning architecture of Brunei.",
    flag: "🇧🇳",
  },
  {
    country: "India",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600'%3E%3Crect fill='%23f093fb' width='800' height='600'/%3E%3Ctext x='50%25' y='50%25' font-size='48' fill='white' text-anchor='middle' dominant-baseline='middle'%3E🇮🇳 India%3C/text%3E%3C/svg%3E",
    description: "Discovered the diverse heritage and traditions of India.",
    flag: "🇮🇳",
  },
  {
    country: "Italy",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600'%3E%3Crect fill='%234facfe' width='800' height='600'/%3E%3Ctext x='50%25' y='50%25' font-size='48' fill='white' text-anchor='middle' dominant-baseline='middle'%3E🇮🇹 Italy%3C/text%3E%3C/svg%3E",
    description: "Enjoyed the art, history, and cuisine of Italy.",
    flag: "🇮🇹",
  },
  {
    country: "United Arab Emirates",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600'%3E%3Crect fill='%2343e97b' width='800' height='600'/%3E%3Ctext x='50%25' y='50%25' font-size='48' fill='white' text-anchor='middle' dominant-baseline='middle'%3E🇦🇪 UAE%3C/text%3E%3C/svg%3E",
    description: "Marveled at the modern architecture and desert landscapes of the UAE.",
    flag: "🇦🇪",
  },
];

/* ---------- Extracurricular Activities ---------- */
const extracurricularData = [
  {
    title: "Asian Pacific ICT Alliance Representative",
    organization: "Represented Sri Lanka",
    year: "2025",
    icon: "🌏",
    color: "#22d3ee",
  },
  {
    title: "Secretary General",
    organization: "Gateway College Colombo Model UN",
    year: "2024-2025",
    icon: "🏛️",
    color: "#22d3ee",
  },
  {
    title: "Deputy Head Prefect",
    organization: "Gateway College Colombo",
    year: "2024-2025",
    icon: "👔",
    color: "#22d3ee",
  },
  {
    title: "Vice President",
    organization: "Gateway College Colombo ICT Society",
    year: "2024-2025",
    icon: "💻",
    color: "#22d3ee",
  },
  {
    title: "House Captain",
    organization: "Gateway College Colombo",
    year: "2023-2024",
    icon: "🏅",
    color: "#22d3ee",
  },
  {
    title: "Swim Team Captain",
    organization: "Gateway College Colombo",
    year: "2022-2024",
    icon: "🏊",
    color: "#22d3ee",
  },
];

/* ---------- Hobbies Data ---------- */
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
    icon: <SportsIcon />,
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

/* ---------- Community Service ---------- */
const communityServiceData = {
  title: "Founder & Fundraiser",
  organization: "Gateway College Colombo ICT Society",
  location: "Rajagiriya, Colombo, Sri Lanka",
  duration: "Summer 2023 - May 2025",
  description: "Founded an annual project for the ICT society to raise money for impoverished schools in the local area by donating computers and ICT equipment.",
  achievements: [
    "Raised over 130,000 rupees within first year of operation",
    "Organized donation of computers and ICT equipment",
    "Established sustainable community outreach program",
    "Successfully completed two years of continuous service",
  ],
};

/* ---------- Section Header ---------- */
function SectionHeader({ title, subtitle, icon }) {
  return (
    <Stack alignItems="center" spacing={1} sx={{ textAlign: "center", mb: 5 }}>
      {icon && (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 56,
            height: 56,
            borderRadius: "14px",
            background: "linear-gradient(135deg, #22d3ee, #22d3ee)",
            color: "#fff",
            fontSize: 28,
            mb: 1,
          }}
        >
          {icon}
        </Box>
      )}
      <Typography
        variant="h4"
        sx={{
          fontWeight: 900,
          letterSpacing: 0.5,
          background: "linear-gradient(135deg, #fff 0%, #22d3ee 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          fontSize: { xs: "1.75rem", md: "2.2rem" },
        }}
      >
        {title}
      </Typography>
      {subtitle && (
        <Typography sx={{ color: "rgba(255,255,255,0.7)", maxWidth: 600, fontSize: { xs: "0.9rem", md: "1rem" } }}>
          {subtitle}
        </Typography>
      )}
      <Divider sx={{ width: 70, height: 3, bgcolor: "#22d3ee", borderRadius: 2, mt: 1 }} />
    </Stack>
  );
}

/* ---------- Travel Card ---------- */
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
      <Box sx={{ position: "relative", height: 180 }}>
        <LazyImage
          src={item.image}
          alt={`${item.country} landscape`}
          sx={{ height: "100%", filter: "brightness(0.85) contrast(1.1)" }}
        />
        <Box sx={{ position: "absolute", top: 12, left: 12, fontSize: 36 }} role="img" aria-label={`${item.country} flag`}>
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

/* ---------- Hobby Card ---------- */
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

/* ---------- Main Component ---------- */
export default function AboutMe() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #121212 0%, #1a1a1a 50%, #121212 100%)",
        minHeight: "100vh",
        py: 8,
        color: "#fff",
      }}
    >
      <Container maxWidth="lg">
        {/* Page Header */}
        <Stack alignItems="center" spacing={2} sx={{ mb: 8, textAlign: "center" }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 900,
              background: "linear-gradient(135deg, #fff 0%, #22d3ee 50%, #22d3ee 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontSize: { xs: "2.5rem", md: "3.5rem" },
            }}
          >
            About Me
          </Typography>
          <Typography variant="h6" sx={{ color: "rgba(255,255,255,0.7)", maxWidth: 700 }}>
            Get to know me better - my journey, travels, activities, and passions
          </Typography>
          <Divider sx={{ width: 100, height: 4, bgcolor: "#22d3ee", borderRadius: 2, mt: 2 }} />
        </Stack>

        {/* Personal Bio */}
        <FadeIn>
          <Card
            sx={{
              mb: 8,
              background: "linear-gradient(135deg, rgba(35,37,38,0.95) 0%, rgba(58,61,64,0.95) 100%)",
              border: "1px solid rgba(34,211,238,0.2)",
              borderRadius: 3,
              boxShadow: "0 8px 24px rgba(0,0,0,0.3)",
            }}
          >
            <CardContent sx={{ p: 4 }}>
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

        {/* Education Timeline */}
        <Box sx={{ mb: 8 }}>
          <SectionHeader title="Education Timeline" subtitle="My academic journey and achievements" icon={<SchoolIcon />} />
          <Timeline position={isMobile ? "right" : "alternate"}>
            {timelineData.map((item, index) => {
              const isLeft = index % 2 === 0;
              return (
                <FadeIn key={index} delay={index * 0.2}>
                  <TimelineItem>
                    {!isMobile && (
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
                    )}
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
                        {isMobile && (
                          <Typography 
                            variant="subtitle2" 
                            sx={{ 
                              color: item.color, 
                              fontWeight: 800, 
                              mb: 1.5,
                              fontSize: "1rem",
                            }}
                          >
                            {item.year}
                          </Typography>
                        )}
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
        <Box sx={{ mb: 8 }}>
          <SectionHeader title="Graduation 2025" subtitle="Gateway College Colombo Graduation Ceremony" icon={<SchoolIcon />} />
          <FadeIn>
            <ImageGallery images={graduationImages} title="High School Graduation" />
          </FadeIn>
        </Box>

        {/* International Travel */}
        <Box sx={{ mb: 8 }}>
          <SectionHeader title="International Travel" subtitle="Exploring diverse cultures around the world" icon={<GlobalIcon />} />
          <StaggerChildren>
            <Grid container spacing={3}>
              {travelData.map((travel, i) => (
                <Grid item xs={12} sm={6} md={4} key={i}>
                  <TravelCard item={travel} />
                </Grid>
              ))}
            </Grid>
          </StaggerChildren>
        </Box>

        {/* Extracurricular Activities */}
        <Box sx={{ mb: 8 }}>
          <SectionHeader title="Extracurricular Activities" subtitle="Leadership roles and organizational involvement" icon={<TrophyIcon />} />
          <StaggerChildren>
            <Grid container spacing={3}>
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
          </StaggerChildren>
        </Box>

        {/* Community Service */}
        <Box sx={{ mb: 8 }}>
          <SectionHeader title="Community Service" subtitle="Giving back to the community through technology" icon={<VolunteerIcon />} />
          <FadeIn>
            <Card
              sx={{
                background: "linear-gradient(135deg, rgba(35,37,38,0.95) 0%, rgba(58,61,64,0.95) 100%)",
                border: "1px solid rgba(34,211,238,0.2)",
                borderRadius: 3,
                boxShadow: "0 8px 24px rgba(0,0,0,0.3)",
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: "0 12px 32px rgba(34,211,238,0.4)",
                }
              }}
            >
              <CardContent sx={{ p: 4 }}>
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
        <Box sx={{ mb: 4 }}>
          <SectionHeader title="Hobbies & Interests" subtitle="Pursuing passions in sports, gaming, and technology" icon={<SportsIcon />} />
          <StaggerChildren>
            <Grid container spacing={3}>
              {hobbiesData.map((hobby, i) => (
                <Grid item xs={12} md={6} lg={3} key={i}>
                  <HobbyCard item={hobby} />
                </Grid>
              ))}
            </Grid>
          </StaggerChildren>
        </Box>
      </Container>
    </Box>
  );
}
