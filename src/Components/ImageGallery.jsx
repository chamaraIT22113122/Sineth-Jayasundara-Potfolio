import React, { useState } from "react";
import { Box, Grid, Modal, IconButton, Typography } from "@mui/material";
import { Close as CloseIcon, ChevronLeft, ChevronRight } from "@mui/icons-material";

export default function ImageGallery({ images, title }) {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleOpen = (index) => {
    setCurrentIndex(index);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  const handlePrev = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowLeft") handlePrev(e);
    if (e.key === "ArrowRight") handleNext(e);
    if (e.key === "Escape") handleClose();
  };

  return (
    <Box sx={{ my: 4 }}>
      {title && (
        <Typography
          variant="h5"
          sx={{
            color: "#22d3ee",
            fontWeight: 700,
            mb: 3,
            fontSize: { xs: "1.25rem", md: "1.5rem" },
            textAlign: "center",
          }}
        >
          {title}
        </Typography>
      )}
      
      <Grid container spacing={2} justifyContent="center">
        {images.map((img, idx) => (
          <Grid item xs={6} sm={4} md={3} key={idx}>
            <Box
              onClick={() => handleOpen(idx)}
              sx={{
                position: "relative",
                paddingTop: "100%",
                borderRadius: 2,
                overflow: "hidden",
                cursor: "pointer",
                border: "2px solid rgba(34,211,238,0.2)",
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "scale(1.05)",
                  borderColor: "rgba(34,211,238,0.6)",
                  boxShadow: "0 8px 24px rgba(34,211,238,0.3)",
                },
              }}
            >
              <Box
                component="img"
                src={img}
                alt={`Gallery image ${idx + 1}`}
                loading={idx < 4 ? "eager" : "lazy"}
                decoding="async"
                fetchpriority={idx === 0 ? "high" : "low"}
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "opacity 0.3s ease",
                }}
              />
            </Box>
          </Grid>
        ))}
      </Grid>

      <Modal
        open={open}
        onClose={handleClose}
        onKeyDown={handleKeyDown}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "rgba(0,0,0,0.95)",
        }}
      >
        <Box
          sx={{
            position: "relative",
            maxWidth: "90vw",
            maxHeight: "90vh",
            outline: "none",
          }}
          onClick={handleClose}
        >
          <IconButton
            onClick={handleClose}
            sx={{
              position: "absolute",
              top: { xs: 10, md: -50 },
              right: { xs: 10, md: 0 },
              color: "#fff",
              bgcolor: "rgba(0,0,0,0.7)",
              zIndex: 10,
              "&:hover": { bgcolor: "rgba(34,211,238,0.8)" },
            }}
          >
            <CloseIcon />
          </IconButton>

          <Box
            component="img"
            src={images[currentIndex]}
            alt="Full size"
            decoding="async"
            onClick={(e) => e.stopPropagation()}
            sx={{
              maxWidth: "90vw",
              maxHeight: "90vh",
              objectFit: "contain",
              borderRadius: 2,
            }}
          />

          {images.length > 1 && (
            <>
              <IconButton
                onClick={handlePrev}
                sx={{
                  position: "absolute",
                  left: { xs: 10, md: -60 },
                  top: "50%",
                  transform: "translateY(-50%)",
                  color: "#fff",
                  bgcolor: "rgba(0,0,0,0.7)",
                  "&:hover": { bgcolor: "rgba(34,211,238,0.8)" },
                }}
              >
                <ChevronLeft />
              </IconButton>

              <IconButton
                onClick={handleNext}
                sx={{
                  position: "absolute",
                  right: { xs: 10, md: -60 },
                  top: "50%",
                  transform: "translateY(-50%)",
                  color: "#fff",
                  bgcolor: "rgba(0,0,0,0.7)",
                  "&:hover": { bgcolor: "rgba(34,211,238,0.8)" },
                }}
              >
                <ChevronRight />
              </IconButton>

              <Typography
                sx={{
                  position: "absolute",
                  bottom: { xs: 10, md: -40 },
                  left: "50%",
                  transform: "translateX(-50%)",
                  color: "#fff",
                  bgcolor: "rgba(0,0,0,0.7)",
                  px: 2,
                  py: 0.5,
                  borderRadius: 1,
                  fontSize: "0.9rem",
                }}
              >
                {currentIndex + 1} / {images.length}
              </Typography>
            </>
          )}
        </Box>
      </Modal>
    </Box>
  );
}
