import React from "react";
import { Box, CircularProgress, Typography } from "@mui/material";

/* ---------- Loading Spinner Component ---------- */
export default function LoadingSpinner({ message = "Loading...", size = 40, fullScreen = false }) {
  if (fullScreen) {
    return (
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #121212 0%, #1a1a1a 50%, #121212 100%)",
          zIndex: 9999,
          color: "#fff",
        }}
        role="status"
        aria-live="polite"
        aria-label={message}
      >
        <CircularProgress
          size={size}
          thickness={4}
          sx={{
            color: "#22d3ee",
            mb: 2,
          }}
        />
        <Typography variant="body1" sx={{ color: "rgba(255,255,255,0.7)", mt: 2 }}>
          {message}
        </Typography>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        py: 4,
      }}
      role="status"
      aria-live="polite"
      aria-label={message}
    >
      <CircularProgress
        size={size}
        thickness={4}
        sx={{
          color: "#22d3ee",
        }}
      />
      {message && (
        <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.7)", mt: 2 }}>
          {message}
        </Typography>
      )}
    </Box>
  );
}

/* ---------- Skeleton Loading Component ---------- */
export function SkeletonCard() {
  return (
    <Box
      sx={{
        background: "linear-gradient(90deg, rgba(35,37,38,0.95) 25%, rgba(58,61,64,0.95) 50%, rgba(35,37,38,0.95) 75%)",
        backgroundSize: "200% 100%",
        animation: "shimmer 1.5s infinite",
        borderRadius: 3,
        height: 300,
        "@keyframes shimmer": {
          "0%": { backgroundPosition: "200% 0" },
          "100%": { backgroundPosition: "-200% 0" },
        },
      }}
      role="status"
      aria-label="Loading content"
    />
  );
}

/* ---------- Image with Loading State ---------- */
export function LazyImage({ src, alt, sx, ...props }) {
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  return (
    <Box sx={{ position: "relative", ...sx }}>
      {loading && (
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
            borderRadius: "inherit",
          }}
        >
          <CircularProgress size={30} sx={{ color: "#22d3ee" }} />
        </Box>
      )}
      {error ? (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "rgba(35,37,38,0.95)",
            color: "rgba(255,255,255,0.5)",
            fontSize: "0.875rem",
            height: "100%",
            borderRadius: "inherit",
          }}
        >
          Image not available
        </Box>
      ) : (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onLoad={() => setLoading(false)}
          onError={() => {
            setLoading(false);
            setError(true);
          }}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: loading ? "none" : "block",
            borderRadius: "inherit",
          }}
          {...props}
        />
      )}
    </Box>
  );
}
