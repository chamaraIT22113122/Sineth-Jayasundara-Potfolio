import React, { useEffect, useMemo, useState } from "react";
import {
    Box,
    Container,
    Stack,
    Typography,
    Button,
    IconButton,
    useMediaQuery,
    useTheme,
} from "@mui/material";
import {
    FaFacebook,
    FaLinkedin,
    FaInstagram,
    FaYoutube,
    FaTiktok,
    FaWhatsapp,
} from "react-icons/fa";
import { FadeIn, SlideInLeft, SlideInRight } from "../Components/ScrollAnimations";
import StatsCounter from "../Components/StatsCounter";

import cv from "../Files/Sineth Jayasundera.pdf";
import vinuja from "../Images/man.png";

/* ---------------- Typing hook ---------------- */
function useTypeCycle(list, { typeMs = 45, holdMs = 1000, eraseMs = 22 } = {}) {
    const [idx, setIdx] = useState(0);
    const [txt, setTxt] = useState("");
    const [phase, setPhase] = useState("type");
    const items = useMemo(() => list, [list]);

    useEffect(() => {
        let t;
        const word = items[idx];
        if (phase === "type") {
            if (txt.length < word.length) t = setTimeout(() => setTxt(word.slice(0, txt.length + 1)), typeMs);
            else t = setTimeout(() => setPhase("hold"), holdMs);
        } else if (phase === "hold") {
            t = setTimeout(() => setPhase("erase"), holdMs / 4);
        } else if (phase === "erase") {
            if (txt.length > 0) t = setTimeout(() => setTxt(word.slice(0, txt.length - 1)), eraseMs);
            else {
                setPhase("type");
                setIdx((i) => (i + 1) % items.length);
            }
        }
        return () => clearTimeout(t);
    }, [txt, phase, items, idx, typeMs, holdMs, eraseMs]);

    return txt;
}

/* ---------------- Shared social links ---------------- */
const socialLinks = [
    { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/sineth-jayasundera/", label: "LinkedIn" },
    { icon: <FaFacebook />, href: "https://www.facebook.com/sineth.jayasundera", label: "Facebook" },
    { icon: <FaInstagram />, href: "https://www.instagram.com/sineth.jayasundera/", label: "Instagram" },
    { icon: <FaWhatsapp />, href: "https://wa.me/15182439892", label: "WhatsApp" },
];

/* ---------------- Social icons component ---------------- */
function Socials({ direction = "row" }) {
    const iconSx = {
        color: "#fff",
        fontSize: "1.25rem",
        transition: "all 0.3s ease",
        "&:hover": { transform: "translateY(-4px)", opacity: 0.9 },
        "&:focus-visible": {
            outline: "2px solid rgba(34,211,238,0.8)",
            outlineOffset: "4px",
            borderRadius: "4px",
        },
    };

    return (
        <Stack
            direction={direction}
            spacing={direction === "row" ? 2 : 1.25}
            justifyContent="center"
            alignItems="center"
        >
            {socialLinks.map((s, i) => (
                <IconButton
                    key={i}
                    aria-label={s.label}
                    component="a"
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={iconSx}
                >
                    {s.icon}
                </IconButton>
            ))}
        </Stack>
    );
}

/* ---------------- Desktop view ---------------- */
function DesktopHome({ typed }) {
    return (
            <Box
                sx={{
                    position: "relative",
                    width: "100%",
                    minHeight: "calc(100vh - 72px)",
                    display: "grid",
                    alignItems: "center",
                    background:
                        "radial-gradient(1200px 700px at 75% 15%, rgba(34,211,238,0.15), rgba(34,211,238,0.08) 50%, transparent 70%), linear-gradient(135deg, #121212 0%, #1a1a1a 50%, #121212 100%)",
                    color: "#fff",
                    overflow: "hidden",
                    "&::before": {
                        content: '""',
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: "radial-gradient(circle at 20% 80%, rgba(34,211,238,0.06), transparent 40%)",
                        pointerEvents: "none",
                    },
                }}
            >
            {/* Left social rail */}
            <Box
                sx={{
                    position: "fixed",
                    left: 20,
                    top: "55%",
                    transform: "translateY(-50%)",
                    display: "flex",
                    flexDirection: "column",
                    gap: 1.2,
                }}
            >
                <Socials direction="column" />
            </Box>

            {/* Background avatar */}
            <Box
                sx={{
                    position: "Absolute",
                    top: 40,
                    right: 60,
                    width: 280,
                    height: 280,
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #22d3ee 0%, #22d3ee 50%, #22d3ee 100%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 120,
                    fontWeight: 900,
                    color: "#fff",
                    boxShadow: "0 25px 70px rgba(34,211,238,0.6), 0 0 120px rgba(34,211,238,0.4), inset 0 -20px 40px rgba(0,0,0,0.2)",
                    border: "4px solid rgba(103,232,249,0.3)",
                    opacity: 0.95,
                    animation: "float 6s ease-in-out infinite",
                    "@keyframes float": {
                        "0%, 100%": { transform: "translateY(0px)" },
                        "50%": { transform: "translateY(-20px)" },
                    },
                }}
            >
                SJ
            </Box>

            <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
                <SlideInLeft>
                  <Stack spacing={3} sx={{ pl: 9, pr: "26vw" }}>
                    <Typography
                        variant="h1"
                        sx={{
                            fontWeight: 200,
                            letterSpacing: 0.4,
                            lineHeight: 0.5,
                            fontSize: { md: "2rem" },
                        }}
                    >
                        Hi <Box component="span" sx={{ color: "#22d3ee" }}>I'm</Box>
                    </Typography>
                    <Typography
                        variant="h1"
                        sx={{
                            fontWeight: 900,
                            letterSpacing: 0.4,
                            lineHeight: 1.05,
                            fontSize: { md: "4.6rem" },
                            background: "linear-gradient(135deg, #fff 0%, #22d3ee 50%, #fff 100%)",
                            backgroundSize: "200% auto",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                            animation: "shimmer 3s linear infinite",
                            "@keyframes shimmer": {
                                "0%": { backgroundPosition: "0% center" },
                                "100%": { backgroundPosition: "200% center" },
                            },
                        }}
                    >
                        Sineth Jayasundera
                    </Typography>

                    <Typography sx={{ fontSize: "1.25rem", color: "rgba(255,255,255,0.85)" }}>
                        I'm a{" "}
                        <Box
                            component="span"
                            sx={{
                                background: "linear-gradient(90deg, #22d3ee, #22d3ee, #22d3ee)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                fontWeight: 700,
                                display: "inline-flex",
                                whiteSpace: "nowrap",
                            }}
                        >
                            {typed}
                            <Box
                                component="span"
                                aria-hidden
                                sx={{
                                    ml: 0.25,
                                    width: "1ch",
                                    animation: "blink 1s step-start infinite",
                                    "@keyframes blink": { "50%": { opacity: 0 } },
                                }}
                            >
                                |
                            </Box>
                        </Box>
                    </Typography>

                    <Stack direction="row" spacing={2}>
                        <Button
                            component="a"
                            href={cv}
                            download
                            aria-label="Download my resume PDF"
                            sx={{
                                textTransform: "none",
                                borderRadius: 2,
                                px: 3,
                                py: 1.25,
                                fontWeight: 700,
                                fontSize: "1rem",
                                background: "linear-gradient(135deg, #22d3ee, #06b6d4)",
                                color: "#000",
                                boxShadow: "0 6px 24px rgba(34,211,238,0.4), 0 0 40px rgba(34,211,238,0.15)",
                                position: "relative",
                                overflow: "hidden",
                                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                                "&::before": {
                                    content: '""',
                                    position: "absolute",
                                    top: 0,
                                    left: "-100%",
                                    width: "100%",
                                    height: "100%",
                                    background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
                                    transition: "left 0.5s ease",
                                },
                                "&:hover": { 
                                    background: "linear-gradient(135deg, #06b6d4, #22d3ee)", 
                                    boxShadow: "0 8px 32px rgba(34,211,238,0.6), 0 0 60px rgba(34,211,238,0.3)",
                                    transform: "translateY(-3px) scale(1.02)",
                                    "&::before": {
                                        left: "100%",
                                    },
                                },
                                "&:active": {
                                    transform: "translateY(-1px) scale(0.98)",
                                },
                                "&:focus-visible": {
                                    outline: "3px solid #fff",
                                    outlineOffset: "3px",
                                },
                            }}
                        >
                            📄 Download Resume
                        </Button>
                        <Button
                            href="/contact"
                            aria-label="Navigate to contact page"
                            sx={{
                                textTransform: "none",
                                borderRadius: 2,
                                px: 3,
                                py: 1.25,
                                fontWeight: 700,
                                fontSize: "1rem",
                                bgcolor: "rgba(34,211,238,0.08)",
                                color: "#22d3ee",
                                border: "2px solid rgba(34,211,238,0.4)",
                                backdropFilter: "blur(10px)",
                                position: "relative",
                                overflow: "hidden",
                                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                                "&::before": {
                                    content: '""',
                                    position: "absolute",
                                    top: "50%",
                                    left: "50%",
                                    width: 0,
                                    height: 0,
                                    borderRadius: "50%",
                                    background: "rgba(34,211,238,0.2)",
                                    transform: "translate(-50%, -50%)",
                                    transition: "width 0.6s ease, height 0.6s ease",
                                },
                                "&:hover": { 
                                    bgcolor: "rgba(34,211,238,0.15)", 
                                    borderColor: "#22d3ee",
                                    transform: "translateY(-3px) scale(1.02)",
                                    boxShadow: "0 8px 24px rgba(34,211,238,0.3)",
                                    "&::before": {
                                        width: "300px",
                                        height: "300px",
                                    },
                                },
                                "&:active": {
                                    transform: "translateY(-1px) scale(0.98)",
                                },
                                "&:focus-visible": {
                                    outline: "3px solid #22d3ee",
                                    outlineOffset: "3px",
                                },
                            }}
                        >
                            💬 Get in Touch
                        </Button>
                    </Stack>
                </Stack>
                </SlideInLeft>
            </Container>
        </Box>
    );
}

/* ---------------- Mobile view ---------------- */
function MobileHome({ typed, direction = "coloumn", }) {
    const RAIL_W = 56; // px
    const iconSx = {
        position: "relative",
        pr: "50vw",
        pl: 0,
        color: "#fff",
        fontSize: "1.5rem",
        transition: "all 0.3s ease",
        "&:hover": { transform: "translateY(-4px)", color: "#22d3ee" },
        "&:focus-visible": {
            outline: "2px solid rgba(34,211,238,0.8)",
            outlineOffset: "4px",
            borderRadius: "4px",
        },
    };
    return (
        <Box
            sx={{
                position: "relative",
                width: "100%",
                minHeight: "calc(100vh - 56px)",
                background:
                    "radial-gradient(800px 500px at 60% 10%, rgba(34,211,238,0.15), rgba(34,211,238,0.08) 50%, transparent 70%), linear-gradient(135deg, #121212 0%, #1a1a1a 50%, #121212 100%)",
                color: "#fff",
                overflow: "hidden",
            }}
        >
            {/* left vertical rail visible on mobile */}
            {/* <SocialRail showOn="mobile" /> */}


            {/* avatar pinned bottom-right */}
            <Box
                sx={{
                    position: "absolute",
                    bottom: { xs: 20, sm: 40 },
                    right: { xs: 10, sm: 20 },
                    width: { xs: 140, sm: 180, md: 200 },
                    height: { xs: 140, sm: 180, md: 200 },
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #22d3ee 0%, #22d3ee 50%, #22d3ee 100%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: { xs: 56, sm: 70, md: 80 },
                    fontWeight: 900,
                    color: "#fff",
                    boxShadow: "0 20px 60px rgba(34,211,238,0.6), 0 0 100px rgba(34,211,238,0.4)",
                    border: "3px solid rgba(103,232,249,0.3)",
                    opacity: 0.95,
                    animation: "float 6s ease-in-out infinite",
                    "@keyframes float": {
                        "0%, 100%": { transform: "translateY(0px)" },
                        "50%": { transform: "translateY(-15px)" },
                    },
                }}
            >
                SJ
            </Box>

            {/* content block aligned left with rail padding */}
            <Container
                maxWidth="lg"
                sx={{
                    position: "relative",
                    zIndex: 1,
                    pr: { xs: "35vw", sm: "25vw", md: "3vw" },
                    pb: { xs: 20, sm: 24, md: 4 },
                    pt: 4,
                }}
            >
                <Stack spacing={2}>
                    <Typography
                        variant="h6"
                        sx={{
                            fontWeight: 200,
                            letterSpacing: 0.4,
                            lineHeight: 0.5,
                            fontSize: { md: "2rem" },
                        }}
                    >
                        Hi <Box component="span" sx={{ color: "#22d3ee" }}>I'm</Box>
                    </Typography>
                    <Typography
                        variant="h3"
                        sx={{ 
                            fontWeight: 1000, 
                            fontSize: "2.2rem", 
                            lineHeight: 1.15, 
                            textAlign: "left",
                            background: "linear-gradient(135deg, #fff 0%, #22d3ee 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                        }}
                    >
                        Sineth Jayasundera
                    </Typography>

                    <Typography sx={{ fontSize: "1.05rem", color: "rgba(255,255,255,0.92)", textAlign: "left" }}>
                        I'm a{" "}
                        <Box component="span" sx={{ 
                            background: "linear-gradient(90deg, #22d3ee, #22d3ee, #22d3ee)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            fontWeight: 700 
                        }}>
                            {typed}
                        </Box>
                        <Box
                            component="span"
                            aria-hidden
                            sx={{ ml: 0.25, width: "1ch", animation: "blink 1s step-start infinite", "@keyframes blink": { "50%": { opacity: 0 } } }}
                        >
                            |
                        </Box>
                    </Typography>

                    {/* stacked CTAs */}
                    <Stack spacing={1.25} sx={{ maxWidth: 280 }}>
                        <Button
                            component="a"
                            href={cv}
                            download
                            sx={{
                                textTransform: "none",
                                borderRadius: 1.5,
                                px: 2.5,
                                py: 1.1,
                                fontWeight: 800,
                                background: "linear-gradient(135deg, #22d3ee, #22d3ee)",
                                color: "#fff",
                                boxShadow: "0 6px 20px rgba(34,211,238,0.4)",
                                transition: "all 0.3s ease",
                                "&:hover": { 
                                    transform: "translateY(-4px)",
                                    boxShadow: "0 8px 28px rgba(34,211,238,0.6)" 
                                },
                                "&:focus-visible": {
                                    outline: "3px solid rgba(34,211,238,0.8)",
                                    outlineOffset: "3px",
                                },
                            }}
                        >
                            Download Resume
                        </Button>
                        <Button
                            href="/projects"
                            sx={{
                                textTransform: "none",
                                borderRadius: 1.5,
                                px: 2.5,
                                py: 1.1,
                                fontWeight: 1000,
                                bgcolor: "rgba(255,255,255,0.08)",
                                color: "#fff",
                                border: "1px solid rgba(255,255,255,0.12)",
                                transition: "all 0.3s ease",
                                "&:hover": { 
                                    bgcolor: "rgba(255,255,255,0.14)",
                                    transform: "translateY(-4px)",
                                },
                                "&:focus-visible": {
                                    outline: "3px solid rgba(34,211,238,0.8)",
                                    outlineOffset: "3px",
                                },
                            }}
                        >
                            View Projects
                        </Button>
                        <br></br>
                        <br></br>
                        {socialLinks.map((s, i) => (
                            <IconButton
                                key={i}
                                aria-label={s.label}
                                component="a"
                                href={s.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                sx={iconSx}
                            >
                                {s.icon}
                            </IconButton>
                        ))}
                    </Stack>
                </Stack>

            </Container>
        </Box>
    );
}


/* ---------------- Main Export ---------------- */
export default function Home() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    const texts = useMemo(
        () => [
            "Electrical Engineering Student.",
            "IoT Developer.",
            "MUN Leader.",
            "Gamer.",
            "Problem Solver.",
        ],
        []
    );
    const typed = useTypeCycle(texts, { typeMs: 45, holdMs: 1000, eraseMs: 22 });

    return isMobile ? <MobileHome typed={typed} /> : <DesktopHome typed={typed} />;
}



