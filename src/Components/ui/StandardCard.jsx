import React from 'react';
import { Box } from '@mui/material';

/**
 * StandardCard - Reusable card component with consistent styling
 * @param {ReactNode} children - Card content
 * @param {boolean} hover - Enable hover effect
 * @param {boolean} glassmorphism - Enable glassmorphism effect
 * @param {string} variant - 'default' | 'elevated' | 'outlined'
 */
const StandardCard = ({
  children,
  hover = true,
  glassmorphism = true,
  variant = 'default',
  onClick,
  ...props
}) => {
  const getVariantStyles = () => {
    const baseStyles = {
      borderRadius: 3,
      p: 3,
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      position: 'relative',
      overflow: 'hidden',
      '&:focus-within': {
        outline: '2px solid #22d3ee',
        outlineOffset: '2px',
      },
    };

    const hoverStyles = hover
      ? {
          '&:hover': {
            transform: 'translateY(-8px)',
            '&::before': {
              opacity: 1,
            },
          },
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(circle at center, rgba(34, 211, 238, 0.15), transparent 70%)',
            opacity: 0,
            transition: 'opacity 0.3s ease',
            pointerEvents: 'none',
            zIndex: 0,
          },
          '& > *': {
            position: 'relative',
            zIndex: 1,
          },
        }
      : {};

    switch (variant) {
      case 'elevated':
        return {
          ...baseStyles,
          ...hoverStyles,
          background: glassmorphism
            ? 'rgba(26, 26, 26, 0.6)'
            : 'rgba(26, 26, 26, 0.9)',
          backdropFilter: glassmorphism ? 'blur(10px)' : 'none',
          border: '1px solid rgba(34, 211, 238, 0.1)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
          ...(hover && {
            '&:hover': {
              ...hoverStyles['&:hover'],
              boxShadow: '0 12px 40px rgba(34, 211, 238, 0.2)',
              border: '1px solid rgba(34, 211, 238, 0.3)',
            },
          }),
        };

      case 'outlined':
        return {
          ...baseStyles,
          ...hoverStyles,
          background: 'transparent',
          border: '2px solid rgba(34, 211, 238, 0.3)',
          ...(hover && {
            '&:hover': {
              ...hoverStyles['&:hover'],
              border: '2px solid rgba(34, 211, 238, 0.6)',
              background: 'rgba(34, 211, 238, 0.05)',
            },
          }),
        };

      default: // 'default'
        return {
          ...baseStyles,
          ...hoverStyles,
          background: glassmorphism
            ? 'rgba(26, 26, 26, 0.5)'
            : 'rgba(26, 26, 26, 0.8)',
          backdropFilter: glassmorphism ? 'blur(10px)' : 'none',
          border: '1px solid rgba(34, 211, 238, 0.2)',
          ...(hover && {
            '&:hover': {
              ...hoverStyles['&:hover'],
              boxShadow: '0 8px 30px rgba(34, 211, 238, 0.15)',
              border: '1px solid rgba(34, 211, 238, 0.4)',
            },
          }),
        };
    }
  };

  return (
    <Box
      onClick={onClick}
      sx={{
        ...getVariantStyles(),
        cursor: onClick ? 'pointer' : 'default',
      }}
      {...props}
    >
      {children}
    </Box>
  );
};

export default StandardCard;
