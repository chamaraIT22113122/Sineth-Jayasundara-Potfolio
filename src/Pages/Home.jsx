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
    FaTwitter,
    FaLinkedin,
    FaInstagram,
    FaGithub,
    FaYoutube,
    FaTiktok,
    FaWhatsapp,
} from "react-icons/fa";

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
    { icon: <FaGithub />, href: "https://github.com/sinethjayasundera", label: "GitHub" },
    { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/sineth-jayasundera/", label: "LinkedIn" },
    { icon: <FaFacebook />, href: "https://www.facebook.com/sineth.jayasundera", label: "Facebook" },
    { icon: <FaTwitter />, href: "https://twitter.com/sinethjayasundera", label: "Twitter" },
    { icon: <FaInstagram />, href: "https://www.instagram.com/sineth.jayasundera/", label: "Instagram" },
    { icon: <FaWhatsapp />, href: "https://wa.me/15182439892", label: "WhatsApp" },
];

/* ---------------- Social icons component ---------------- */
function Socials({ direction = "row" }) {
    const iconSx = {
        color: "#fff",
        fontSize: "1.25rem",
        transition: "transform .2s, opacity .2s",
        "&:hover": { transform: "translateY(-2px)", opacity: 0.9 },
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
                        "radial-gradient(1200px 700px at 75% 15%, rgba(99,102,241,0.15), rgba(139,92,246,0.08) 50%, transparent 70%), linear-gradient(135deg, #0c0a1f 0%, #1a0f2e 50%, #0c0a1f 100%)",
                    color: "#fff",
                    overflow: "hidden",
                    position: "relative",
                    "&::before": {
                        content: '""',
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: "radial-gradient(circle at 20% 80%, rgba(139,92,246,0.06), transparent 40%)",
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
                    background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #a78bfa 100%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 120,
                    fontWeight: 900,
                    color: "#fff",
                    boxShadow: "0 25px 70px rgba(99,102,241,0.6), 0 0 120px rgba(139,92,246,0.4), inset 0 -20px 40px rgba(0,0,0,0.2)",
                    border: "4px solid rgba(167,139,250,0.3)",
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
                        Hi <Box component="span" sx={{ color: "#8b5cf6" }}>I'm</Box>
                    </Typography>
                    <Typography
                        variant="h1"
                        sx={{
                            fontWeight: 900,
                            letterSpacing: 0.4,
                            lineHeight: 1.05,
                            fontSize: { md: "4.6rem" },
                            background: "linear-gradient(135deg, #fff 0%, #8b5cf6 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                        }}
                    >
                        Sineth Jayasundera
                    </Typography>

                    <Typography sx={{ fontSize: "1.25rem", color: "rgba(255,255,255,0.85)" }}>
                        I'm a{" "}
                        <Box
                            component="span"
                            sx={{
                                background: "linear-gradient(90deg, #6366f1, #8b5cf6, #a78bfa)",
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
                            sx={{
                                textTransform: "none",
                                borderRadius: 2,
                                px: 3,
                                py: 1.25,
                                fontWeight: 700,
                                background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                                color: "#fff",
                                boxShadow: "0 6px 24px rgba(99,102,241,0.5), 0 0 40px rgba(139,92,246,0.2)",
                                transition: "all 0.3s ease",
                                "&:hover": { 
                                    background: "linear-gradient(135deg, #5b21b6, #6366f1)", 
                                    boxShadow: "0 8px 32px rgba(99,102,241,0.7), 0 0 60px rgba(139,92,246,0.4)",
                                    transform: "translateY(-2px)",
                                },
                            }}
                        >
                            📄 Download Resume
                        </Button>
                        <Button
                            href="/contact"
                            sx={{
                                textTransform: "none",
                                borderRadius: 2,
                                px: 3,
                                py: 1.25,
                                fontWeight: 700,
                                bgcolor: "rgba(139,92,246,0.15)",
                                color: "#a78bfa",
                                border: "2px solid rgba(139,92,246,0.5)",
                                backdropFilter: "blur(10px)",
                                transition: "all 0.3s ease",
                                "&:hover": { 
                                    bgcolor: "rgba(139,92,246,0.25)", 
                                    borderColor: "#8b5cf6",
                                    transform: "translateY(-2px)",
                                },
                            }}
                        >
                            💬 Get in Touch
                        </Button>
                    </Stack>
                </Stack>
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
        pl: 0,            // keep clear of portrait
        color: "#fff",
        fontSize: "1.5rem",
        transition: "transform .2s, color .2s",
        "&:hover": { transform: "translateY(-2px)", color: "#a78bfa" },
    };
    return (
        <Box
            sx={{
                position: "relative",
                width: "100%",
                minHeight: "calc(100vh - 56px)",
                background:
                    "radial-gradient(800px 500px at 60% 10%, rgba(99,102,241,0.15), rgba(139,92,246,0.08) 50%, transparent 70%), linear-gradient(135deg, #0c0a1f 0%, #1a0f2e 50%, #0c0a1f 100%)",
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
                    bottom: 40,
                    right: 20,
                    width: 200,
                    height: 200,
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #a78bfa 100%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 80,
                    fontWeight: 900,
                    color: "#fff",
                    boxShadow: "0 20px 60px rgba(99,102,241,0.6), 0 0 100px rgba(139,92,246,0.4)",
                    border: "3px solid rgba(167,139,250,0.3)",
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
                    pr: "3vw",             // keep clear of portrait
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
                        Hi <Box component="span" sx={{ color: "#8b5cf6" }}>I'm</Box>
                    </Typography>
                    <Typography
                        variant="h3"
                        sx={{ 
                            fontWeight: 1000, 
                            fontSize: "2.2rem", 
                            lineHeight: 1.15, 
                            textAlign: "left",
                            background: "linear-gradient(135deg, #fff 0%, #8b5cf6 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                        }}
                    >
                        Sineth Jayasundera
                    </Typography>

                    <Typography sx={{ fontSize: "1.05rem", color: "rgba(255,255,255,0.86)", textAlign: "left" }}>
                        I'm a{" "}
                        <Box component="span" sx={{ 
                            background: "linear-gradient(90deg, #6366f1, #8b5cf6, #a78bfa)",
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
                                background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                                color: "#fff",
                                boxShadow: "0 6px 20px rgba(99,102,241,0.4)",
                                "&:hover": { opacity: 0.95, boxShadow: "0 8px 28px rgba(99,102,241,0.6)" },
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
                                "&:hover": { bgcolor: "rgba(255,255,255,0.14)" },
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
            "Game Designer.",
            "Problem Solver.",
        ],
        []
    );
    const typed = useTypeCycle(texts, { typeMs: 45, holdMs: 1000, eraseMs: 22 });

    return isMobile ? <MobileHome typed={typed} /> : <DesktopHome typed={typed} />;
}



