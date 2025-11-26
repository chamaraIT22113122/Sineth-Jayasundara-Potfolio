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
      title: "Edexcel Advanced Level",
      description: "Mathematics (A*), Physics (A), Chemistry (A)",
      year: "2025",
      icon: <SchoolIcon />,
      color: "#6366f1",
    },
    {
      title: "Edexcel International GCSE",
      description: "Mathematics (A*), Physics (A*), Chemistry (A*), Biology (A*), English Language (A), English Literature (A), Sinhala (A), Combined Science (A*A*)",
      year: "2023",
      icon: <SchoolIcon />,
      color: "#8b5cf6",
    },
    {
      title: "Dean's List",
      description: "Pennsylvania State University - Exceptional Academic Performance",
      year: "2025",
      icon: <StarIcon />,
      color: "#a78bfa",
    },
  ],
  modelUN: [
    {
      title: "Best Delegate - Security Council",
      description: "Musaeus MUN 2023",
      year: "2023",
      icon: <TrophyIcon />,
      color: "#6366f1",
    },
    {
      title: "Best Delegate - Security Council",
      description: "Lyceum MUN 2024",
      year: "2024",
      icon: <TrophyIcon />,
      color: "#8b5cf6",
    },
    {
      title: "Best Delegate - Security Council",
      description: "Colombo International School MUN 2024",
      year: "2024",
      icon: <TrophyIcon />,
      color: "#a78bfa",
    },
    {
      title: "Best Delegate - ECOSOC",
      description: "Gateway MUN 2024",
      year: "2024",
      icon: <TrophyIcon />,
      color: "#6366f1",
    },
    {
      title: "Outstanding Delegate - UNEP",
      description: "BMICH MUN 2024",
      year: "2024",
      icon: <AwardIcon />,
      color: "#8b5cf6",
    },
    {
      title: "Honorable Mention - Security Council",
      description: "Carey MUN 2023",
      year: "2023",
      icon: <AwardIcon />,
      color: "#a78bfa",
    },
    {
      title: "Verbal Commendation - General Assembly 3rd",
      description: "Lyceum MUN 2023",
      year: "2023",
      icon: <StarIcon />,
      color: "#6366f1",
    },
  ],
  sports: [
    {
      title: "Swimming Captain",
      description: "Led Gateway College Swimming Team - Multiple victories in inter-school competitions",
      year: "2023-2025",
      icon: <SportsIcon />,
      color: "#6366f1",
    },
    {
      title: "National Swimming Championship",
      description: "Qualified and competed in national level competitions",
      year: "2022-2024",
      icon: <EmojiEvents />,
      color: "#8b5cf6",
    },
    {
      title: "Inter-School Swimming Champion",
      description: "First place in multiple events including freestyle and butterfly",
      year: "2023",
      icon: <TrophyIcon />,
      color: "#a78bfa",
    },
  ],
  leadership: [
    {
      title: "President - Interpol General Assembly",
      description: "Colombo Model United Nations 2025 - Leading international committee",
      year: "2025",
      icon: <GlobalIcon />,
      color: "#6366f1",
    },
    {
      title: "Founder - Gateway ICT Society",
      description: "Established and led technology club promoting coding and innovation",
      year: "2023-2025",
      icon: <StarIcon />,
      color: "#8b5cf6",
    },
    {
      title: "Student Council Member",
      description: "Gateway College Colombo - Represented student body",
      year: "2022-2025",
      icon: <SchoolIcon />,
      color: "#a78bfa",
    },
  ],
  international: [
    {
      title: "International Travel Experience",
      description: "Australia - Cultural exchange and educational visit",
      year: "2019",
      icon: <GlobalIcon />,
      color: "#6366f1",
    },
    {
      title: "International Travel Experience",
      description: "Brunei - ASEAN cultural immersion program",
      year: "2022",
      icon: <GlobalIcon />,
      color: "#8b5cf6",
    },
    {
      title: "International Travel Experience",
      description: "India - Heritage and technology tour",
      year: "2023",
      icon: <GlobalIcon />,
      color: "#a78bfa",
    },
    {
      title: "International Travel Experience",
      description: "Italy - European cultural and historical exploration",
      year: "2024",
      icon: <GlobalIcon />,
      color: "#6366f1",
    },
    {
      title: "International Travel Experience",
      description: "United Arab Emirates - Technology and innovation expo",
      year: "2024",
      icon: <GlobalIcon />,
      color: "#8b5cf6",
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
          background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
          color: "#fff",
          fontSize: 32,
          boxShadow: "0 8px 24px rgba(99,102,241,0.4)",
        }}
      >
        {icon}
      </Box>
      <Typography
        variant="h4"
        sx={{
          fontWeight: 900,
          letterSpacing: 0.5,
          background: "linear-gradient(135deg, #fff 0%, #8b5cf6 100%)",
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
      <Divider sx={{ width: 80, height: 3, bgcolor: "#8b5cf6", borderRadius: 2, mt: 1 }} />
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
        border: "1px solid rgba(99,102,241,0.2)",
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
        background: "linear-gradient(135deg, #0c0a1f 0%, #1a0f2e 50%, #0c0a1f 100%)",
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
              background: "linear-gradient(135deg, #fff 0%, #8b5cf6 50%, #6366f1 100%)",
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
          <Divider sx={{ width: 100, height: 4, bgcolor: "#8b5cf6", borderRadius: 2, mt: 2 }} />
        </Stack>

        {/* Achievement Categories */}
        <CategorySection
          title="Academic Excellence"
          subtitle="Outstanding performance in academics and recognition for scholarly achievements"
          icon={<SchoolIcon />}
          achievements={achievementsData.academic}
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
          subtitle="Cultural immersion and global exposure through international travel"
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
        background: "linear-gradient(135deg, #0c0a1f 0%, #1a0f2e 50%, #0c0a1f 100%)",
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
              background: "linear-gradient(135deg, #fff 0%, #8b5cf6 50%, #6366f1 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontSize: { xs: "2rem", sm: "2.5rem" },
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
          <Divider sx={{ width: 80, height: 3, bgcolor: "#8b5cf6", borderRadius: 2, mt: 1 }} />
        </Stack>

        {/* Achievement Categories */}
        <CategorySection
          title="Academic"
          icon={<SchoolIcon />}
          achievements={achievementsData.academic}
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
