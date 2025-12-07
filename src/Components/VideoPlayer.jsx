import React from "react";
import { Box, Typography } from "@mui/material";

export default function VideoPlayer({ src, title }) {
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
          }}
        >
          {title}
        </Typography>
      )}
      <Box
        sx={{
          position: "relative",
          paddingTop: "56.25%",
          borderRadius: 3,
          overflow: "hidden",
          border: "2px solid rgba(34,211,238,0.3)",
          boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
          bgcolor: "#000",
        }}
      >
        <Box
          component="video"
          controls
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "contain",
          }}
        >
          <source src={src} type="video/mp4" />
          Your browser does not support the video tag.
        </Box>
      </Box>
    </Box>
  );
}
