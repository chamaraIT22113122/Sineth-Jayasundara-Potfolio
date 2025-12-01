import React from 'react';
import { Button as MuiButton } from '@mui/material';

/**
 * StandardButton - Reusable button component with consistent styling
 * @param {string} variant - 'primary' | 'secondary' | 'outline'
 * @param {string} size - 'small' | 'medium' | 'large'
 * @param {function} onClick - Click handler
 * @param {boolean} fullWidth - Full width button
 * @param {ReactNode} children - Button content
 * @param {string} ariaLabel - Accessibility label
 */
const StandardButton = ({
  variant = 'primary',
  size = 'medium',
  onClick,
  fullWidth = false,
  children,
  ariaLabel,
  href,
  disabled = false,
  ...props
}) => {
  const getSizeStyles = () => {
    switch (size) {
      case 'small':
        return { px: 2, py: 1, fontSize: '0.875rem' };
      case 'large':
        return { px: 4, py: 1.75, fontSize: '1.1rem' };
      default:
        return { px: 3, py: 1.5, fontSize: '1rem' };
    }
  };

  const getVariantStyles = () => {
    const baseStyles = {
      borderRadius: 2,
      textTransform: 'none',
      fontWeight: 600,
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      position: 'relative',
      overflow: 'hidden',
      '&:focus-visible': {
        outline: '3px solid #22d3ee',
        outlineOffset: '2px',
      },
    };

    switch (variant) {
      case 'primary':
        return {
          ...baseStyles,
          background: 'linear-gradient(135deg, #22d3ee 0%, #06b6d4 100%)',
          color: '#121212',
          boxShadow: '0 4px 15px rgba(34, 211, 238, 0.3)',
          '&:hover': {
            background: 'linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)',
            boxShadow: '0 6px 25px rgba(34, 211, 238, 0.4)',
            transform: 'translateY(-2px)',
          },
          '&:active': {
            transform: 'translateY(0)',
          },
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: '-100%',
            width: '100%',
            height: '100%',
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
            transition: 'left 0.5s',
          },
          '&:hover::before': {
            left: '100%',
          },
        };

      case 'secondary':
        return {
          ...baseStyles,
          background: 'rgba(34, 211, 238, 0.1)',
          color: '#22d3ee',
          border: '1px solid rgba(34, 211, 238, 0.3)',
          backdropFilter: 'blur(10px)',
          '&:hover': {
            background: 'rgba(34, 211, 238, 0.2)',
            border: '1px solid rgba(34, 211, 238, 0.5)',
            transform: 'translateY(-2px)',
            boxShadow: '0 4px 15px rgba(34, 211, 238, 0.2)',
          },
          '&:active': {
            transform: 'translateY(0)',
          },
        };

      case 'outline':
        return {
          ...baseStyles,
          background: 'transparent',
          color: '#22d3ee',
          border: '2px solid #22d3ee',
          '&:hover': {
            background: 'rgba(34, 211, 238, 0.1)',
            borderColor: '#06b6d4',
            transform: 'translateY(-2px)',
          },
          '&:active': {
            transform: 'translateY(0)',
          },
        };

      default:
        return baseStyles;
    }
  };

  return (
    <MuiButton
      onClick={onClick}
      href={href}
      disabled={disabled}
      fullWidth={fullWidth}
      aria-label={ariaLabel || (typeof children === 'string' ? children : undefined)}
      sx={{
        ...getSizeStyles(),
        ...getVariantStyles(),
        '&.Mui-disabled': {
          opacity: 0.5,
          cursor: 'not-allowed',
        },
      }}
      {...props}
    >
      {children}
    </MuiButton>
  );
};

export default StandardButton;
