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
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import {
  WorkOutline,
  VolunteerActivism,
  EmojiEvents,
  LocationOn,
  ArrowForward,
  CheckCircle,
} from "@mui/icons-material";

/* ---------- data ---------- */
const workExperience = [
  {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Interpol_Logo.svg/1200px-Interpol_Logo.svg.png",
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
    image: "https://media.licdn.com/dms/image/v2/C560BAQEfE1CYxiE8Og/company-logo_200_200/company-logo_200_200/0/1631358638466?e=2147483647&v=beta&t=7rOqYqHqGqUPqZpQYQQYQQQYQQQYQQQYQQQYQQQYQQQ",
    title: "Assistant Developer",
    company: "Flix 11",
    location: "Rajagiriya, Colombo, Sri Lanka",
    duration: "Summer 2023 - Summer 2024",
    type: "Engineering",
    description: "Collaborated with the engineering team on the development of several IoT-based smart home products, supporting tasks such as embedded programming, sensor integration, and system testing.",
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

const communityService = [
  {
    image: "https://gateway.lk/wp-content/uploads/2019/08/gateway-logo.png",
    title: "Founder & Fundraiser",
    company: "Gateway College Colombo ICT Society",
    location: "Rajagiriya, Colombo, Sri Lanka",
    duration: "Summer 2023 - May 2025",
    type: "Community Service",
    description: "Founded an annual project for the ICT society to raise money for impoverished schools in the local area by donating computers and ICT equipment.",
    responsibilities: [
      "Founded annual fundraising initiative for underprivileged schools",
      "Raised over 130,000 rupees within first year of operation",
      "Organized donation of computers and ICT equipment",
      "Established sustainable community outreach program",
      "Coordinated with local schools to assess technology needs",
      "Managed team of volunteers and fundraising campaigns",
      "Successfully completed two years of continuous service",
    ],
    impact: "Project ongoing since 2023, completed 2 years of service in May 2025",
    skills: ["Fundraising", "Project Management", "Community Outreach", "Leadership", "Social Impact"],
  },
];

const extracurricular = [
  {
    title: "Asian Pacific ICT Alliance Representative",
    organization: "Represented Sri Lanka",
    duration: "2025",
    type: "International",
    description: "Represented Sri Lanka at the Asian Pacific ICT Alliance, engaging with technology leaders and students across the Asia-Pacific region to discuss innovation, digital transformation, and ICT education initiatives.",
    icon: "🌏",
  },
  {
    title: "Secretary General",
    organization: "Gateway College Colombo Model UN",
    duration: "2024-2025",
    type: "Leadership",
    description: "Led the organization and execution of Gateway College's annual Model United Nations conference. Oversaw committee operations, delegate preparation, and ensured adherence to UN parliamentary procedures.",
    icon: "🏛️",
  },
  {
    title: "Deputy Head Prefect",
    organization: "Gateway College Colombo",
    duration: "2024-2025",
    type: "Leadership",
    description: "Served as Deputy Head Prefect, assisting in student leadership, maintaining discipline, organizing school events, and acting as a liaison between students and administration.",
    icon: "👔",
  },
  {
    title: "Vice President",
    organization: "Gateway College Colombo ICT Society",
    duration: "2024-2025",
    type: "Leadership",
    description: "Managed ICT society operations, organized coding workshops, hackathons, and technology seminars. Promoted digital literacy and innovation among students.",
    icon: "💻",
  },
];


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

/* ---------- Detailed Experience Card ---------- */
function DetailedExperienceCard({ item }) {
  return (
    <Card
      tabIndex={0}
      sx={{
        background: "linear-gradient(135deg, rgba(26,26,26,0.95) 0%, rgba(32,32,32,0.95) 100%)",
        backdropFilter: "blur(10px)",
        border: "1px solid rgba(34,211,238,0.2)",
        borderRadius: 3,
        boxShadow: "0 10px 32px rgba(0,0,0,0.3)",
        color: "#fff",
        overflow: "hidden",
        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        mb: 4,
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: "0 16px 48px rgba(34,211,238,0.3)",
          borderColor: "rgba(34,211,238,0.4)",
        },
        "&:focus-visible": {
          outline: "3px solid #22d3ee",
          outlineOffset: "2px",
        },
      }}
    >
      <Grid container>
        {/* Left: Image/Logo */}
        <Grid item xs={12} md={3}>
          <Box
            sx={{
              height: { xs: 200, md: "100%" },
              bgcolor: "rgba(255,255,255,0.03)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              p: 3,
            }}
          >
            {item.image ? (
              <CardMedia
                component="img"
                image={item.image}
                alt={item.title}
                sx={{ 
                  maxWidth: "100%", 
                  maxHeight: { xs: 150, md: 200 }, 
                  objectFit: "contain",
                  filter: "brightness(0.95)",
                }}
              />
            ) : (
              <Typography sx={{ fontSize: 48, fontWeight: 900 }}>
                {item.icon || "💼"}
              </Typography>
            )}
          </Box>
        </Grid>

        {/* Right: Content */}
        <Grid item xs={12} md={9}>
          <CardContent sx={{ p: { xs: 3, md: 4 } }}>
            <Stack spacing={2.5}>
              {/* Header */}
              <Box>
                <Stack direction="row" spacing={1} sx={{ mb: 1.5, flexWrap: "wrap" }}>
                  <Chip
                    label={item.type}
                    size="small"
                    sx={{
                      bgcolor: "#22d3ee40",
                      color: "#22d3ee",
                      fontWeight: 700,
                      border: "1px solid #22d3ee60",
                    }}
                  />
                  <Chip
                    label={item.duration}
                    size="small"
                    icon={<ArrowForward sx={{ fontSize: 16 }} />}
                    sx={{
                      bgcolor: "rgba(255,255,255,0.05)",
                      color: "rgba(255,255,255,0.8)",
                      fontWeight: 600,
                    }}
                  />
                </Stack>

                <Typography variant="h5" sx={{ fontWeight: 900, color: "#fff", mb: 0.5, lineHeight: 1.3 }}>
                  {item.title}
                </Typography>

                <Typography variant="h6" sx={{ color: "#22d3ee", fontWeight: 600, mb: 1 }}>
                  {item.company || item.organization}
                </Typography>

                {item.location && (
                  <Stack direction="row" spacing={0.5} alignItems="center">
                    <LocationOn sx={{ fontSize: 18, color: "rgba(255,255,255,0.6)" }} />
                    <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.7)" }}>
                      {item.location}
                    </Typography>
                  </Stack>
                )}
              </Box>

              {/* Description */}
              <Typography sx={{ color: "rgba(255,255,255,0.85)", lineHeight: 1.7, fontSize: "1rem" }}>
                {item.description}
              </Typography>

              {/* Responsibilities/Details */}
              {item.responsibilities && (
                <Box>
                  <Typography sx={{ fontWeight: 700, color: "#fff", mb: 1.5, fontSize: "1.05rem" }}>
                    Key Responsibilities:
                  </Typography>
                  <List dense sx={{ pl: 0 }}>
                    {item.responsibilities.map((resp, idx) => (
                      <ListItem key={idx} sx={{ py: 0.5, pl: 0 }}>
                        <ListItemIcon sx={{ minWidth: 32 }}>
                          <CheckCircle sx={{ fontSize: 18, color: "#22d3ee" }} />
                        </ListItemIcon>
                        <ListItemText
                          primary={resp}
                          primaryTypographyProps={{
                            sx: { color: "rgba(255,255,255,0.8)", fontSize: "0.95rem" },
                          }}
                        />
                      </ListItem>
                    ))}
                  </List>
                </Box>
              )}

              {/* Impact */}
              {item.impact && (
                <Box
                  sx={{
                    p: 2,
                    borderRadius: 2,
                    bgcolor: "rgba(34,211,238,0.1)",
                    border: "1px solid rgba(34,211,238,0.3)",
                  }}
                >
                  <Typography sx={{ fontWeight: 700, color: "#22d3ee", mb: 0.5 }}>
                    Impact:
                  </Typography>
                  <Typography sx={{ color: "rgba(255,255,255,0.85)", fontSize: "0.95rem" }}>
                    {item.impact}
                  </Typography>
                </Box>
              )}

              {/* Skills */}
              {item.skills && (
                <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                  {item.skills.map((skill, idx) => (
                    <Chip
                      key={idx}
                      label={skill}
                      size="small"
                      sx={{
                        bgcolor: "rgba(255,255,255,0.08)",
                        color: "rgba(255,255,255,0.9)",
                        fontWeight: 600,
                        border: "1px solid rgba(255,255,255,0.12)",
                        "&:hover": { bgcolor: "rgba(255,255,255,0.12)" },
                      }}
                    />
                  ))}
                </Stack>
              )}
            </Stack>
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  );
}

/* ---------- Extracurricular Card ---------- */
function ExtracurricularCard({ item }) {
  return (
    <Card
      tabIndex={0}
      sx={{
        height: "100%",
        background: "linear-gradient(135deg, rgba(26,26,26,0.95) 0%, rgba(32,32,32,0.95) 100%)",
        backdropFilter: "blur(10px)",
        border: "1px solid rgba(34,211,238,0.15)",
        borderRadius: 3,
        boxShadow: "0 8px 24px rgba(0,0,0,0.25)",
        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        "&:hover": {
          transform: "translateY(-6px)",
          boxShadow: "0 12px 36px rgba(34,211,238,0.25)",
          borderColor: "rgba(34,211,238,0.4)",
        },
        "&:focus-visible": {
          outline: "3px solid #22d3ee",
          outlineOffset: "2px",
        },
      }}
    >
      <CardContent sx={{ p: 3 }}>
        <Stack spacing={2}>
          {/* Icon and Type */}
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Typography sx={{ fontSize: 40 }}>
              {item.icon}
            </Typography>
            <Chip
              label={item.type}
              size="small"
              sx={{
                bgcolor: "#22d3ee30",
                color: "#22d3ee",
                fontWeight: 700,
                border: "1px solid #22d3ee50",
              }}
            />
          </Stack>

          <Box>
            <Typography variant="h6" sx={{ fontWeight: 800, color: "#fff", mb: 0.5, lineHeight: 1.3 }}>
              {item.title}
            </Typography>
            <Typography variant="body2" sx={{ color: "#22d3ee", fontWeight: 600, mb: 0.5 }}>
              {item.organization}
            </Typography>
            <Typography variant="caption" sx={{ color: "rgba(255,255,255,0.6)" }}>
              {item.duration}
            </Typography>
          </Box>

          <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.8)", lineHeight: 1.6 }}>
            {item.description}
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
}


/* ---------- Desktop render ---------- */
function DesktopExperience() {
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
            Professional Experience
          </Typography>
          <Typography variant="h6" sx={{ color: "rgba(255,255,255,0.7)", maxWidth: 700 }}>
            Work experience, community service, and leadership roles
          </Typography>
          <Divider sx={{ width: 100, height: 4, bgcolor: "#22d3ee", borderRadius: 2, mt: 2 }} />
        </Stack>

        {/* Work Experience Section */}
        <Box sx={{ mb: 8 }}>
          <SectionHeader 
            title="Work Experience" 
            subtitle="Professional roles and responsibilities in leadership and technology"
            icon={<WorkOutline />}
          />
          {workExperience.map((exp, idx) => (
            <DetailedExperienceCard key={idx} item={exp} />
          ))}
        </Box>

        {/* Community Service Section */}
        <Box sx={{ mb: 8 }}>
          <SectionHeader 
            title="Community Service" 
            subtitle="Giving back to the community through technology and education"
            icon={<VolunteerActivism />}
          />
          {communityService.map((service, idx) => (
            <DetailedExperienceCard key={idx} item={service} />
          ))}
        </Box>

        {/* Extracurricular Activities Section */}
        <Box>
          <SectionHeader 
            title="Extracurricular Activities" 
            subtitle="Leadership roles and international representation"
            icon={<EmojiEvents />}
          />
          <Grid container spacing={3}>
            {extracurricular.map((activity, idx) => (
              <Grid item xs={12} md={6} key={idx}>
                <ExtracurricularCard item={activity} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}

/* ---------- Mobile render ---------- */
function MobileExperience() {
  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #121212 0%, #1a1a1a 50%, #121212 100%)",
        minHeight: "100vh",
        py: 6,
        color: "#fff",
      }}
    >
      <Container maxWidth="md">
        {/* Page Header */}
        <Stack alignItems="center" spacing={1.5} sx={{ mb: 6, textAlign: "center", px: 2 }}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 900,
              background: "linear-gradient(135deg, #fff 0%, #22d3ee 50%, #22d3ee 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontSize: { xs: "2rem", sm: "2.5rem" },
            }}
          >
            Experience
          </Typography>
          <Typography variant="body1" sx={{ color: "rgba(255,255,255,0.7)", fontSize: "0.95rem" }}>
            Professional work, service, and leadership
          </Typography>
          <Divider sx={{ width: 80, height: 3, bgcolor: "#22d3ee", borderRadius: 2, mt: 1 }} />
        </Stack>

        {/* Work Experience */}
        <Box sx={{ mb: 6 }}>
          <SectionHeader title="Work Experience" icon={<WorkOutline />} />
          {workExperience.map((exp, idx) => (
            <DetailedExperienceCard key={idx} item={exp} />
          ))}
        </Box>

        {/* Community Service */}
        <Box sx={{ mb: 6 }}>
          <SectionHeader title="Community Service" icon={<VolunteerActivism />} />
          {communityService.map((service, idx) => (
            <DetailedExperienceCard key={idx} item={service} />
          ))}
        </Box>

        {/* Extracurricular */}
        <Box>
          <SectionHeader title="Extracurricular" icon={<EmojiEvents />} />
          <Grid container spacing={2.5}>
            {extracurricular.map((activity, idx) => (
              <Grid item xs={12} key={idx}>
                <ExtracurricularCard item={activity} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}

/* ---------- main export: split renders ---------- */
export default function Experience() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return isMobile ? <MobileExperience /> : <DesktopExperience />;
}



