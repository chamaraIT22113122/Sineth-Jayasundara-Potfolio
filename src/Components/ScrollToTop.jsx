import React, { useState, useEffect } from "react";
import { Fab, Zoom } from "@mui/material";
import { KeyboardArrowUp } from "@mui/icons-material";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Zoom in={isVisible}>
      <Fab
        onClick={scrollToTop}
        size="medium"
        aria-label="Scroll back to top"
        sx={{
          position: "fixed",
          bottom: { xs: 16, md: 32 },
          right: { xs: 16, md: 32 },
          background: "linear-gradient(135deg, #22d3ee, #22d3ee)",
          color: "#fff",
          zIndex: 1000,
          boxShadow: "0 8px 24px rgba(34,211,238,0.4)",
          "&:hover": {
            background: "linear-gradient(135deg, #22d3ee, #22d3ee)",
            boxShadow: "0 12px 32px rgba(34,211,238,0.6)",
            transform: "translateY(-4px)",
          },
          "&:focus": {
            outline: "2px solid #22d3ee",
            outlineOffset: "2px",
          },
          transition: "all 0.3s ease",
        }}
      >
        <KeyboardArrowUp />
      </Fab>
    </Zoom>
  );
}
