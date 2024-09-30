import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';
import { 
  IconButton, 
  Dialog, 
  DialogTitle, 
  DialogContent, 
  DialogContentText, 
  DialogActions, 
  Button, 
  Typography 
} from '@mui/material';

const LogoutButton = () => {
  const navigate = useNavigate();
  const [openDialog, setOpenDialog] = useState(false); // State to manage dialog visibility

  const handleLogoutClick = () => {
    setOpenDialog(true); // Open confirmation dialog
  };

  const handleLogoutConfirm = () => {
    // Add any logout logic here (like clearing user tokens, etc.)
    setOpenDialog(false); // Close dialog
    navigate('/'); // Adjust this path to your landing page
  };

  const handleLogoutCancel = () => {
    setOpenDialog(false); // Close dialog on cancel
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

  // Styles for the dialog
  const dialogStyle = {
    backgroundColor: '#f9f9f9',
    padding: '20px',
    borderRadius: '8px',
  };

  // Styles for the dialog title
  const titleStyle = {
    textAlign: 'center',
    fontWeight: 'bold',
  };

  // Styles for the buttons
  const buttonConfirmStyle = {
    backgroundColor: '#4caf50',
    color: 'white',
    '&:hover': {
      backgroundColor: '#45a049',
    },
    marginRight: '10px',
  };

  const buttonCancelStyle = {
    backgroundColor: '#f44336',
    color: 'white',
    '&:hover': {
      backgroundColor: '#e53935',
    },
  };

  return (
    <>
      <IconButton 
        style={buttonStyle} 
        onClick={handleLogoutClick} // Open dialog instead of logging out directly
        aria-label="logout" // Accessibility improvement
      >
        <LogoutIcon />
      </IconButton>

      {/* Confirmation Dialog */}
      <Dialog open={openDialog} onClose={handleLogoutCancel} PaperProps={{ style: dialogStyle }}>
        <DialogTitle style={titleStyle}>Confirm Logout</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to log out?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleLogoutCancel} style={buttonCancelStyle}>Cancel</Button>
          <Button onClick={handleLogoutConfirm} style={buttonConfirmStyle}>Confirm</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default LogoutButton;