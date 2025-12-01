import React from 'react';
import { Box, Skeleton as MuiSkeleton } from '@mui/material';

/**
 * CardSkeleton - Loading skeleton for card components
 */
export const CardSkeleton = ({ count = 1 }) => (
  <>
    {Array.from({ length: count }).map((_, index) => (
      <Box
        key={index}
        sx={{
          borderRadius: 3,
          p: 3,
          background: 'rgba(26, 26, 26, 0.5)',
          border: '1px solid rgba(34, 211, 238, 0.1)',
        }}
      >
        <MuiSkeleton
          variant="rectangular"
          height={60}
          sx={{
            bgcolor: 'rgba(34, 211, 238, 0.1)',
            borderRadius: 2,
            mb: 2,
          }}
        />
        <MuiSkeleton
          variant="text"
          sx={{
            bgcolor: 'rgba(34, 211, 238, 0.08)',
            fontSize: '1rem',
            mb: 1,
          }}
        />
        <MuiSkeleton
          variant="text"
          width="80%"
          sx={{
            bgcolor: 'rgba(34, 211, 238, 0.08)',
            fontSize: '1rem',
          }}
        />
      </Box>
    ))}
  </>
);

/**
 * ImageSkeleton - Loading skeleton for images
 */
export const ImageSkeleton = ({ width = '100%', height = 200, circular = false }) => (
  <MuiSkeleton
    variant={circular ? 'circular' : 'rectangular'}
    width={width}
    height={height}
    sx={{
      bgcolor: 'rgba(34, 211, 238, 0.1)',
      borderRadius: circular ? '50%' : 2,
    }}
  />
);

/**
 * TextSkeleton - Loading skeleton for text content
 */
export const TextSkeleton = ({ lines = 3, width = '100%' }) => (
  <Box>
    {Array.from({ length: lines }).map((_, index) => (
      <MuiSkeleton
        key={index}
        variant="text"
        width={index === lines - 1 ? '70%' : width}
        sx={{
          bgcolor: 'rgba(34, 211, 238, 0.08)',
          fontSize: '1rem',
          mb: 0.5,
        }}
      />
    ))}
  </Box>
);

/**
 * TimelineSkeleton - Loading skeleton for timeline items
 */
export const TimelineSkeleton = ({ count = 3 }) => (
  <>
    {Array.from({ length: count }).map((_, index) => (
      <Box
        key={index}
        sx={{
          display: 'flex',
          gap: 2,
          mb: 4,
          alignItems: 'flex-start',
        }}
      >
        <MuiSkeleton
          variant="circular"
          width={40}
          height={40}
          sx={{
            bgcolor: 'rgba(34, 211, 238, 0.1)',
            flexShrink: 0,
          }}
        />
        <Box sx={{ flex: 1 }}>
          <MuiSkeleton
            variant="text"
            width="30%"
            sx={{
              bgcolor: 'rgba(34, 211, 238, 0.1)',
              fontSize: '1.2rem',
              mb: 1,
            }}
          />
          <MuiSkeleton
            variant="rectangular"
            height={80}
            sx={{
              bgcolor: 'rgba(34, 211, 238, 0.08)',
              borderRadius: 2,
            }}
          />
        </Box>
      </Box>
    ))}
  </>
);

/**
 * ProjectCardSkeleton - Skeleton specifically for project cards
 */
export const ProjectCardSkeleton = ({ count = 6 }) => (
  <>
    {Array.from({ length: count }).map((_, index) => (
      <Box
        key={index}
        sx={{
          borderRadius: 3,
          p: 3,
          background: 'rgba(26, 26, 26, 0.5)',
          border: '1px solid rgba(34, 211, 238, 0.1)',
        }}
      >
        <MuiSkeleton
          variant="rectangular"
          height={180}
          sx={{
            bgcolor: 'rgba(34, 211, 238, 0.1)',
            borderRadius: 2,
            mb: 2,
          }}
        />
        <MuiSkeleton
          variant="text"
          sx={{
            bgcolor: 'rgba(34, 211, 238, 0.1)',
            fontSize: '1.5rem',
            mb: 1,
          }}
        />
        <MuiSkeleton
          variant="text"
          sx={{
            bgcolor: 'rgba(34, 211, 238, 0.08)',
            fontSize: '1rem',
            mb: 1,
          }}
        />
        <MuiSkeleton
          variant="text"
          width="60%"
          sx={{
            bgcolor: 'rgba(34, 211, 238, 0.08)',
            fontSize: '1rem',
          }}
        />
      </Box>
    ))}
  </>
);

export default {
  CardSkeleton,
  ImageSkeleton,
  TextSkeleton,
  TimelineSkeleton,
  ProjectCardSkeleton,
};
