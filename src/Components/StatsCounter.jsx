import React, { useState, useEffect, useRef } from "react";
import { Box, Container, Grid, Typography, Stack } from "@mui/material";
import { EmojiEvents, Code, School, Language } from "@mui/icons-material";

const statsData = [
  {
    icon: <EmojiEvents sx={{ fontSize: 40, color: "#fbbf24" }} />,
    value: 15,
    suffix: "+",
    label: "Awards & Achievements",
    color: "#fbbf24",
  },
  {
    icon: <Code sx={{ fontSize: 40, color: "#22d3ee" }} />,
    value: 10,
    suffix: "+",
    label: "Technical Skills",
    color: "#22d3ee",
  },
  {
    icon: <School sx={{ fontSize: 40, color: "#22d3ee" }} />,
    value: 4,
    suffix: "+",
    label: "Years of Experience",
    color: "#22d3ee",
  },
  {
    icon: <Language sx={{ fontSize: 40, color: "#22d3ee" }} />,
    value: 3,
    suffix: "",
    label: "Languages Spoken",
    color: "#22d3ee",
  },
];

function CountUp({ end, duration = 2000, suffix = "" }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let startTime = null;
          const animate = (currentTime) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);
            
            // Easing function for smooth animation
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            setCount(Math.floor(easeOutQuart * end));

            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [end, duration, hasAnimated]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function StatsCounter() {
  return (
    <Box
      sx={{
        py: { xs: 6, md: 8 },
        background: "linear-gradient(135deg, rgba(35,37,38,0.5) 0%, rgba(58,61,64,0.5) 100%)",
        backdropFilter: "blur(10px)",
        borderTop: "1px solid rgba(34,211,238,0.2)",
        borderBottom: "1px solid rgba(34,211,238,0.2)",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {statsData.map((stat, index) => (
            <Grid item xs={6} sm={6} md={3} key={index}>
              <Stack
                alignItems="center"
                spacing={2}
                sx={{
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-8px)",
                  },
                }}
              >
                <Box
                  sx={{
                    p: 2,
                    borderRadius: "50%",
                    background: `linear-gradient(135deg, ${stat.color}20 0%, ${stat.color}10 100%)`,
                    border: `2px solid ${stat.color}40`,
                    transition: "all 0.3s ease",
                    "&:hover": {
                      boxShadow: `0 0 30px ${stat.color}50`,
                      transform: "scale(1.1)",
                    },
                  }}
                >
                  {stat.icon}
                </Box>
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: 900,
                    color: stat.color,
                    fontSize: { xs: "2rem", md: "2.5rem" },
                  }}
                >
                  <CountUp end={stat.value} suffix={stat.suffix} />
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: "rgba(255,255,255,0.85)",
                    textAlign: "center",
                    fontWeight: 600,
                    fontSize: { xs: "0.85rem", md: "1rem" },
                  }}
                >
                  {stat.label}
                </Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
