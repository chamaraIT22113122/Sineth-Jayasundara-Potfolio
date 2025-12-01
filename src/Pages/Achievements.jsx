import React from "react";
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
  useTheme,
  useMediaQuery,
} from "@mui/material";
import {
  EmojiEvents as TrophyIcon,
  School as SchoolIcon,
  Language as LanguageIcon,
  Sports as SportsIcon,
  Public as GlobalIcon,
  Star as StarIcon,
  WorkspacePremium as AwardIcon,
  EmojiEvents,
} from "@mui/icons-material";

/* ---------- Achievement Data ---------- */
const achievementsData = {
  academic: [
    {
      title: "Gateway College Colombo Academic Scholar",
      description: "Recognized for outstanding academic achievement",
      year: "2024-2025",
      icon: <SchoolIcon />,
      color: "#22d3ee",
    },
    {
      title: "Edexcel Academic Excellence Award",
      description: "Outstanding performance in Edexcel examinations",
      year: "2024",
      icon: <StarIcon />,
      color: "#22d3ee",
    },
    {
      title: "Edexcel Advanced Level",
      description: "Mathematics (A*), Physics (A), Chemistry (A)",
      year: "2025",
      icon: <SchoolIcon />,
      color: "#22d3ee",
    },
  ],
  technology: [
    {
      title: "Asian Pacific ICT Alliance Merit Award",
      description: "Recognition for excellence in ICT and technology leadership",
      year: "2025",
      icon: <AwardIcon />,
      color: "#22d3ee",
    },
    {
      title: "Young Computer Scientist Competition Sri Lanka",
      description: "1st Place - National Level Competition",
      year: "2025",
      icon: <TrophyIcon />,
      color: "#22d3ee",
    },
  ],
  modelUN: [
    {
      title: "Colombo Model United Nations Best Chair Award",
      description: "Recognized as Best Chair for exceptional committee leadership",
      year: "2025",
      icon: <TrophyIcon />,
      color: "#22d3ee",
    },
    {
      title: "Sri Lanka Model United Nations Higher Commendation Award",
      description: "Outstanding performance in committee deliberations",
      year: "2025",
      icon: <AwardIcon />,
      color: "#22d3ee",
    },
    {
      title: "Sri Lanka Model United Nations Best Delegate Award",
      description: "Top delegate recognition for diplomacy and negotiation",
      year: "2024",
      icon: <TrophyIcon />,
      color: "#22d3ee",
    },
    {
      title: "Sri Lanka Model United Nations Best Working Paper Award",
      description: "Excellence in policy writing and research",
      year: "2024",
      icon: <AwardIcon />,
      color: "#22d3ee",
    },
    {
      title: "Colombo Model United Nations Higher Commendation Award",
      description: "Strong performance in committee debates",
      year: "2024",
      icon: <StarIcon />,
      color: "#22d3ee",
    },
    {
      title: "Colombo Model United Nations Best Crisis Delegation Award",
      description: "Outstanding crisis committee performance",
      year: "2024",
      icon: <TrophyIcon />,
      color: "#22d3ee",
    },
  ],
  sports: [
    {
      title: "Age Group Relay Championships - 4x50m Medley Relay",
      description: "Third Place - Boys Under-17",
      year: "2022",
      icon: <SportsIcon />,
      color: "#22d3ee",
    },
    {
      title: "Age Group Relay Championships - 4x50m Freestyle Relay",
      description: "Third Place - Boys Under-17",
      year: "2022",
      icon: <SportsIcon />,
      color: "#22d3ee",
    },
    {
      title: "Sri Lankan Schools' Aquatic Sports Championships",
      description: "Second Place - 200 LC Meter Freestyle",
      year: "2019",
      icon: <TrophyIcon />,
      color: "#22d3ee",
    },
    {
      title: "Sri Lankan Schools' Aquatic Sports Championships",
      description: "Fourth Place - 400 LC Meter Freestyle",
      year: "2019",
      icon: <StarIcon />,
      color: "#22d3ee",
    },
  ],
  leadership: [
    {
      title: "Gateway College Colombo Model UN Secretary General",
      description: "Led the organization of Gateway MUN conference",
      year: "2024-2025",
      icon: <LanguageIcon />,
      color: "#22d3ee",
    },
    {
      title: "Gateway College Colombo Deputy Head Prefect",
      description: "Student leadership and school governance",
      year: "2024-2025",
      icon: <StarIcon />,
      color: "#22d3ee",
    },
    {
      title: "Gateway College Colombo ICT Society Vice President",
      description: "Led technology initiatives and ICT education programs",
      year: "2024-2025",
      icon: <AwardIcon />,
      color: "#22d3ee",
    },
    {
      title: "Gateway College Colombo House Captain",
      description: "House leadership and inter-house competition coordination",
      year: "2023-2024",
      icon: <StarIcon />,
      color: "#22d3ee",
    },
    {
      title: "Gateway College Colombo Swim Team Captain",
      description: "Led competitive swim team to multiple victories",
      year: "2022-2024",
      icon: <SportsIcon />,
      color: "#22d3ee",
    },
  ],
  international: [
    {
      title: "Asian Pacific ICT Alliance",
      description: "Represented Sri Lanka at regional ICT conference",
      year: "2025",
      icon: <GlobalIcon />,
      color: "#22d3ee",
    },
  ],
};

/* ---------- Section Header ---------- */
function SectionHeader({ title, subtitle, icon }) {
  return (
    <Stack alignItems="center" spacing={1} sx={{ textAlign: "center", mb: 4 }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: 64,
          height: 64,
          borderRadius: "16px",
          background: "linear-gradient(135deg, #22d3ee, #22d3ee)",
          color: "#fff",
          fontSize: 32,
          boxShadow: "0 8px 24px rgba(34,211,238,0.4)",
        }}
      >
        {icon}
      </Box>
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
        <Typography sx={{ color: "rgba(255,255,255,0.7)", maxWidth: 600 }}>
          {subtitle}
        </Typography>
      )}
      <Divider sx={{ width: 80, height: 3, bgcolor: "#22d3ee", borderRadius: 2, mt: 1 }} />
    </Stack>
  );
}

/* ---------- Achievement Card ---------- */
function AchievementCard({ achievement }) {
  return (
    <Card
      sx={{
        height: "100%",
        background: "linear-gradient(135deg, rgba(35,37,38,0.95) 0%, rgba(58,61,64,0.95) 100%)",
        backdropFilter: "blur(10px)",
        border: "1px solid rgba(34,211,238,0.2)",
        borderRadius: 3,
        boxShadow: "0 8px 24px rgba(0,0,0,0.3)",
        transition: "all 0.3s ease",
        "&:hover": {
          transform: "translateY(-8px)",
          boxShadow: `0 16px 40px ${achievement.color}40`,
          borderColor: achievement.color,
        },
      }}
    >
      <CardContent sx={{ p: 3 }}>
        <Stack spacing={2}>
          {/* Icon and Year */}
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 48,
                height: 48,
                borderRadius: "12px",
                background: `linear-gradient(135deg, ${achievement.color}20, ${achievement.color}10)`,
                color: achievement.color,
                fontSize: 24,
              }}
            >
              {achievement.icon}
            </Box>
            <Chip
              label={achievement.year}
              size="small"
              sx={{
                bgcolor: `${achievement.color}30`,
                color: achievement.color,
                fontWeight: 700,
                border: `1px solid ${achievement.color}50`,
              }}
            />
          </Stack>

          {/* Title */}
          <Typography
            variant="h6"
            sx={{
              color: "#fff",
              fontWeight: 800,
              lineHeight: 1.3,
              minHeight: 56,
            }}
          >
            {achievement.title}
          </Typography>

          {/* Description */}
          <Typography
            variant="body2"
            sx={{
              color: "rgba(255,255,255,0.75)",
              lineHeight: 1.6,
              minHeight: 48,
            }}
          >
            {achievement.description}
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
}

/* ---------- Category Section ---------- */
function CategorySection({ title, subtitle, icon, achievements }) {
  return (
    <Box sx={{ mb: 8 }}>
      <SectionHeader title={title} subtitle={subtitle} icon={icon} />
      <Grid container spacing={3}>
        {achievements.map((achievement, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <AchievementCard achievement={achievement} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

/* ---------- Desktop View ---------- */
function DesktopAchievements() {
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
            Achievements & Honors
          </Typography>
          <Typography
            variant="h6"
            sx={{ color: "rgba(255,255,255,0.7)", maxWidth: 700 }}
          >
            A collection of accomplishments spanning academics, leadership, athletics, and international experiences
          </Typography>
          <Divider sx={{ width: 100, height: 4, bgcolor: "#22d3ee", borderRadius: 2, mt: 2 }} />
        </Stack>

        {/* Achievement Categories */}
        <CategorySection
          title="Academic Excellence"
          subtitle="Outstanding performance in academics and recognition for scholarly achievements"
          icon={<SchoolIcon />}
          achievements={achievementsData.academic}
        />

        <CategorySection
          title="Technology & ICT"
          subtitle="Recognition for excellence in technology and computer science"
          icon={<StarIcon />}
          achievements={achievementsData.technology}
        />

        <CategorySection
          title="Model United Nations"
          subtitle="Awards and recognitions from MUN conferences across Sri Lanka"
          icon={<GlobalIcon />}
          achievements={achievementsData.modelUN}
        />

        <CategorySection
          title="Sports & Athletics"
          subtitle="Achievements in competitive swimming and team leadership"
          icon={<SportsIcon />}
          achievements={achievementsData.sports}
        />

        <CategorySection
          title="Leadership & Service"
          subtitle="Roles in student organizations and community initiatives"
          icon={<StarIcon />}
          achievements={achievementsData.leadership}
        />

        <CategorySection
          title="International Experience"
          subtitle="Representing Sri Lanka on international platforms"
          icon={<LanguageIcon />}
          achievements={achievementsData.international}
        />
      </Container>
    </Box>
  );
}

/* ---------- Mobile View ---------- */
function MobileAchievements() {
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
              fontSize: { xs: "2.25rem", sm: "2.75rem", md: "3rem" },
              lineHeight: 1.2,
            }}
          >
            Achievements
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "rgba(255,255,255,0.7)", fontSize: "0.95rem" }}
          >
            Accomplishments across academics, leadership, and athletics
          </Typography>
          <Divider sx={{ width: 80, height: 3, bgcolor: "#22d3ee", borderRadius: 2, mt: 1 }} />
        </Stack>

        {/* Achievement Categories */}
        <CategorySection
          title="Academic"
          icon={<SchoolIcon />}
          achievements={achievementsData.academic}
        />

        <CategorySection
          title="Technology"
          icon={<StarIcon />}
          achievements={achievementsData.technology}
        />

        <CategorySection
          title="Model UN"
          icon={<GlobalIcon />}
          achievements={achievementsData.modelUN}
        />

        <CategorySection
          title="Sports"
          icon={<SportsIcon />}
          achievements={achievementsData.sports}
        />

        <CategorySection
          title="Leadership"
          icon={<StarIcon />}
          achievements={achievementsData.leadership}
        />

        <CategorySection
          title="International"
          icon={<LanguageIcon />}
          achievements={achievementsData.international}
        />
      </Container>
    </Box>
  );
}

/* ---------- Main Export ---------- */
export default function Achievements() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return isMobile ? <MobileAchievements /> : <DesktopAchievements />;
}
