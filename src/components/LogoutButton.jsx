import React from 'react';
import { useNavigate } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';
import { IconButton } from '@mui/material';

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Add any logout logic here (like clearing user tokens, etc.)
    navigate('/'); // Adjust this path to your landing page
  };

  // Inline styles for the logout button
  const buttonStyle = {
    position: 'fixed',
    top: '20px',
    right: '20px',
    zIndex: 1000,
    backgroundColor: '#f44336',
    color: 'white',
  };

  return (
    <IconButton 
      style={buttonStyle} 
      onClick={handleLogout}
      aria-label="logout" // Accessibility improvement
    >
      <LogoutIcon />
    </IconButton>
  );
};

export default LogoutButton;