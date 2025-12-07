import React, { useState } from "react";
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
  Button,
  Tabs,
  Tab,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  useTheme,
  useMediaQuery,
  CircularProgress,
} from "@mui/material";
import {
  WorkOutline,
  CheckCircle,
  Code,
  Description,
  ExpandMore,
  Download,
  Apps,
  Work,
  Web,
  EmojiEvents,
} from "@mui/icons-material";
import { FadeIn, SlideInLeft, SlideInRight, StaggerChildren } from "../Components/ScrollAnimations";
import { useNavigate } from "react-router-dom";
import cv from "../Files/Sineth Jayasundera.pdf";

/* ---------- Work Experience Data ---------- */
const workExperience = [
  {
    emoji: "🏛️",
    title: "President, Interpol General Assembly",
    company: "Colombo Model United Nations",
    location: "Sri Jayewardenepura Kotte, Colombo, Sri Lanka",
    duration: "Summer 2025",
    type: "Leadership",
    description: "Acted as Committee Chair for the Interpol General Assembly at Colombo Model United Nations 2025, leading more than 100 participants from across Sri Lanka in discussions on transnational crime, cyber-security, and global law enforcement cooperation.",
    responsibilities: [
      "Moderated debates with over 100 delegates from across Sri Lanka",
      "Led discussions on transnational crime and cyber-security",
      "Facilitated global law enforcement cooperation dialogue",
      "Trained delegates in diplomacy skills and negotiation techniques",
      "Conducted policy-writing workshops under real-world UN procedures",
      "Supported research-based argumentation and critical thinking",
    ],
    skills: ["Leadership", "Public Speaking", "Diplomacy", "Negotiation", "Policy Writing", "Research"],
  },
  {
    emoji: "💻",
    title: "Assistant Developer",
    company: "Flix 11",
    location: "Rajagiriya, Colombo, Sri Lanka",
    duration: "Summer 2023 - Summer 2024",
    type: "Engineering",
    description: "Collaborated with the engineering team on the development of several IoT-based smart home products, supporting tasks such as embedded programming, sensor integration, and system testing. Contributed significantly to the Smart Energy Reader project, including the design of its data-collection architecture, energy-monitoring algorithms enabling real-time tracking of household power consumption through a cloud-based dashboard.",
    responsibilities: [
      "Developed IoT-based smart home products with engineering team",
      "Performed embedded programming for microcontroller systems",
      "Integrated various sensors for smart home automation",
      "Conducted comprehensive system testing and debugging",
      "Designed data-collection architecture for Smart Energy Reader",
      "Implemented energy-monitoring algorithms for real-time tracking",
      "Created cloud-based dashboard for household power consumption",
    ],
    skills: ["IoT Development", "Embedded Systems", "C/C++", "Sensor Integration", "Cloud Computing", "Data Analytics"],
  },
];

/* ---------- Skills Data ---------- */
const skillCategories = {
  "Programming Languages": ["Python", "C++"],
  "Computer Skills": ["Google Drive", "Microsoft Office Suite", "Social Media Platforms"],
  "Language Skills": ["English (Native Speaker)", "Sinhala (Read, Speak)"],
  "Soft Skills": [
    "Communication",
    "Project Management",
    "Problem Solving",
    "Teamwork",
    "Time Management",
    "Leadership",
    "Critical Thinking",
    "Adaptability",
    "Creativity",
    "Decision Making",
  ],
};

const categoryIcons = {
  "Programming Languages": <Code sx={{ color: "#22d3ee" }} />,
  "Computer Skills": <Apps sx={{ color: "#22d3ee" }} />,
  "Language Skills": <Web sx={{ color: "#22d3ee" }} />,
  "Soft Skills": <Work sx={{ color: "#22d3ee" }} />,
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

/* ---------- Experience Card ---------- */
function ExperienceCard({ item }) {
  return (
    <Card
      sx={{
        background: "linear-gradient(135deg, rgba(35,37,38,0.95) 0%, rgba(58,61,64,0.95) 100%)",
        border: "1px solid rgba(34,211,238,0.2)",
        borderRadius: 3,
        boxShadow: "0 8px 24px rgba(0,0,0,0.3)",
        mb: 3,
        transition: "transform .25s ease",
        "&:hover": { transform: "translateY(-4px)" },
      }}
    >
      <CardContent sx={{ p: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={2} sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Box
              sx={{
                width: 80,
                height: 80,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 48,
                borderRadius: 2,
                bgcolor: "rgba(34,211,238,0.1)",
                border: "1px solid rgba(34,211,238,0.3)",
              }}
            >
              {item.emoji}
            </Box>
          </Grid>
          <Grid item xs={12} md={10}>
            <Stack spacing={2}>
              <Box>
                <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 1 }}>
                  <Typography variant="h5" sx={{ fontWeight: 800, color: "#fff" }}>
                    {item.title}
                  </Typography>
                  <Chip label={item.type} size="small" sx={{ bgcolor: "#22d3ee", color: "#fff" }} />
                </Stack>
                <Typography variant="h6" sx={{ color: "#22d3ee", mb: 0.5 }}>
                  {item.company}
                </Typography>
                <Stack direction={{ xs: "column", sm: "row" }} spacing={1}>
                  <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.7)" }}>
                    📍 {item.location}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.7)" }}>
                    📅 {item.duration}
                  </Typography>
                </Stack>
              </Box>

              <Typography variant="body1" sx={{ color: "rgba(255,255,255,0.85)", lineHeight: 1.7 }}>
                {item.description}
              </Typography>

              <Box>
                <Typography variant="subtitle2" sx={{ color: "#22d3ee", fontWeight: 700, mb: 1 }}>
                  Key Responsibilities:
                </Typography>
                <List dense>
                  {item.responsibilities.map((resp, i) => (
                    <ListItem key={i} disablePadding sx={{ mb: 0.5 }}>
                      <ListItemIcon sx={{ minWidth: 30 }}>
                        <CheckCircle sx={{ fontSize: 18, color: "#22d3ee" }} />
                      </ListItemIcon>
                      <ListItemText primary={resp} primaryTypographyProps={{ sx: { color: "rgba(255,255,255,0.8)" } }} />
                    </ListItem>
                  ))}
                </List>
              </Box>

              <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                {item.skills.map((skill, i) => (
                  <Chip
                    key={i}
                    label={skill}
                    size="small"
                    sx={{
                      bgcolor: "rgba(34,211,238,0.2)",
                      color: "#22d3ee",
                      border: "1px solid rgba(34,211,238,0.3)",
                    }}
                  />
                ))}
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

/* ---------- Main Portfolio Component ---------- */
export default function Portfolio() {
  const [tabValue, setTabValue] = useState(0);
  const [pdfLoading, setPdfLoading] = useState(true);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const navigate = useNavigate();

  const handleTabChange = (event, newValue) => {
    if (newValue === 3) {
      // Navigate to achievements page
      navigate("/achievements");
    } else {
      setTabValue(newValue);
    }
  };

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
            Portfolio
          </Typography>
          <Typography variant="h6" sx={{ color: "rgba(255,255,255,0.7)", maxWidth: 700 }}>
            My professional experience, technical skills, and resume
          </Typography>
          <Divider sx={{ width: 100, height: 4, bgcolor: "#22d3ee", borderRadius: 2, mt: 2 }} />
        </Stack>

        {/* Tab Navigation */}
        <Box sx={{ mb: 4 }}>
          <Tabs
            value={tabValue}
            onChange={handleTabChange}
            centered
            variant={isMobile ? "scrollable" : "standard"}
            scrollButtons={isMobile ? "auto" : false}
            allowScrollButtonsMobile
            aria-label="Portfolio navigation tabs"
            sx={{
              "& .MuiTabs-indicator": { bgcolor: "#22d3ee", height: 3 },
              "& .MuiTab-root": {
                color: "rgba(255,255,255,0.6)",
                fontWeight: 600,
                fontSize: { xs: "0.9rem", md: "1rem" },
                minHeight: { xs: 48, md: 64 },
                "&.Mui-selected": { color: "#22d3ee" },
                "&:focus": {
                  outline: "2px solid #22d3ee",
                  outlineOffset: "2px",
                },
              },
            }}
          >
            <Tab label="Experience" icon={<WorkOutline />} iconPosition="start" aria-label="Work experience section" />
            <Tab label="Skills" icon={<Code />} iconPosition="start" aria-label="Technical skills section" />
            <Tab label="Resume" icon={<Description />} iconPosition="start" aria-label="Resume and CV section" />
            <Tab label="Achievements" icon={<EmojiEvents />} iconPosition="start" aria-label="Achievements section" />
          </Tabs>
        </Box>

        {/* Tab Content */}
        {tabValue === 0 && (
          <Box>
            <SectionHeader title="Work Experience" subtitle="Professional roles and responsibilities" icon={<WorkOutline />} />
            <StaggerChildren>
              {workExperience.map((exp, i) => (
                <ExperienceCard key={i} item={exp} />
              ))}
            </StaggerChildren>
          </Box>
        )}

        {tabValue === 1 && (
          <Box>
            <SectionHeader title="Technical Skills" subtitle="Programming languages, tools, and competencies" icon={<Code />} />
            <Grid container spacing={3}>
              {Object.entries(skillCategories).map(([category, skills], i) => (
                <Grid item xs={12} md={6} key={i}>
                  <Accordion
                    defaultExpanded
                    sx={{
                      background: "linear-gradient(135deg, rgba(35,37,38,0.95) 0%, rgba(58,61,64,0.95) 100%)",
                      border: "1px solid rgba(34,211,238,0.2)",
                      borderRadius: 2,
                      "&:before": { display: "none" },
                    }}
                  >
                    <AccordionSummary expandIcon={<ExpandMore sx={{ color: "#22d3ee" }} />}>
                      <Stack direction="row" alignItems="center" spacing={1.5}>
                        {categoryIcons[category]}
                        <Typography variant="h6" sx={{ fontWeight: 700, color: "#fff" }}>
                          {category}
                        </Typography>
                      </Stack>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                        {skills.map((skill, j) => (
                          <Chip
                            key={j}
                            label={skill}
                            sx={{
                              bgcolor: "rgba(34,211,238,0.2)",
                              color: "#22d3ee",
                              border: "1px solid rgba(34,211,238,0.3)",
                              fontWeight: 600,
                            }}
                          />
                        ))}
                      </Stack>
                    </AccordionDetails>
                  </Accordion>
                </Grid>
              ))}
            </Grid>
          </Box>
        )}

        {tabValue === 2 && (
          <Box>
            <SectionHeader title="Resume / CV" subtitle="Download or view my complete resume" icon={<Description />} />
            <Card
              sx={{
                background: "linear-gradient(135deg, rgba(35,37,38,0.95) 0%, rgba(58,61,64,0.95) 100%)",
                border: "1px solid rgba(34,211,238,0.2)",
                borderRadius: 3,
                boxShadow: "0 8px 24px rgba(0,0,0,0.3)",
                p: 3,
              }}
            >
              <Stack spacing={3} alignItems="center">
                <Typography variant="h5" sx={{ fontWeight: 700, color: "#fff", textAlign: "center" }}>
                  Sineth Jayasundera - Resume
                </Typography>
                <Typography variant="body1" sx={{ color: "rgba(255,255,255,0.7)", textAlign: "center", maxWidth: 600 }}>
                  View my complete resume with detailed information about my education, work experience, skills, and achievements.
                </Typography>
                <Button
                  href={cv}
                  download="Sineth_Jayasundera_Resume.pdf"
                  variant="contained"
                  startIcon={<Download />}
                  aria-label="Download Sineth Jayasundera resume as PDF"
                  sx={{
                    background: "linear-gradient(135deg, #22d3ee, #22d3ee)",
                    color: "#fff",
                    fontWeight: 700,
                    px: 4,
                    py: 1.5,
                    borderRadius: 2,
                    boxShadow: "0 4px 16px rgba(34,211,238,0.4)",
                    minHeight: 48,
                    touchAction: "manipulation",
                    "&:hover": {
                      background: "linear-gradient(135deg, #5558e3, #7c4de8)",
                      boxShadow: "0 6px 24px rgba(34,211,238,0.6)",
                    },
                    "&:focus": {
                      outline: "2px solid #22d3ee",
                      outlineOffset: "2px",
                    },
                  }}
                >
                  Download Resume
                </Button>
                <Box
                  sx={{
                    width: "100%",
                    height: isMobile ? 500 : 700,
                    borderRadius: 2,
                    overflow: "hidden",
                    border: "2px solid rgba(34,211,238,0.3)",
                    position: "relative",
                  }}
                >
                  {pdfLoading && (
                    <Box
                      sx={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: "rgba(35,37,38,0.95)",
                        zIndex: 1,
                      }}
                      role="status"
                      aria-live="polite"
                    >
                      <Stack alignItems="center" spacing={2}>
                        <CircularProgress size={50} sx={{ color: "#22d3ee" }} />
                        <Typography sx={{ color: "rgba(255,255,255,0.7)" }}>Loading Resume...</Typography>
                      </Stack>
                    </Box>
                  )}
                  <iframe
                    src={cv}
                    title="Sineth Jayasundera Resume PDF"
                    onLoad={() => setPdfLoading(false)}
                    aria-label="Resume PDF viewer"
                    style={{
                      width: "100%",
                      height: "100%",
                      border: "none",
                    }}
                  />
                </Box>
              </Stack>
            </Card>
          </Box>
        )}
      </Container>
    </Box>
  );
}
