import React from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/Login Logo.jpg'; // Update the path to your logo

const Login = () => {
  const navigate = useNavigate(); // Hook to navigate programmatically

  const handleLogin = () => {
    // Perform login logic here (e.g., validate user, authenticate, etc.)
    
    // Navigate to dashboard on successful login
    navigate('/dashboard');
  };

  return (
    <Box 
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        flexDirection: 'column',
        px: 2,
        backgroundColor: '#f7f9fc',
      }}
    >
      <Box 
        sx={{
          padding: '2rem',
          backgroundColor: '#fff', // White background for the form
          borderRadius: '8px',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
          border: '2px solid #1976d2', // Blue border around the form
          maxWidth: '400px', // Max width for better responsiveness
          width: '100%', // Full width on small screens
        }}
      >
        <motion.div 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }}
          style={{ textAlign: 'center' }} // Center text and logo
        >
          <img src={logo} alt="Logo" style={{ width: '100px', margin: '0 auto 20px' }} /> {/* Center the logo */}
          
          <Typography variant="h4" sx={{ mb: 3, color: '#1976d2', fontWeight: '600' }}>
            Login
          </Typography>

          <TextField 
            label="PID" 
            variant="outlined" 
            fullWidth 
            sx={{ mb: 2 }} 
            InputProps={{
              style: { borderColor: '#1976d2' }, // Add border color
            }} 
          />

          <TextField 
            label="Patient fullname"
            variant="outlined" 
            fullWidth 
            sx={{ mb: 2 }} 
            InputProps={{
              readOnly: true, // Make the input read-only
              style: { borderColor: '#1976d2' }, // Add border color
            }} 
          />
          
          <TextField 
            label="Password" 
            variant="outlined" 
            fullWidth 
            sx={{ mb: 2 }} 
            type="password" 
            InputProps={{
              style: { borderColor: '#1976d2' }, // Add border color
            }} 
          />
          
          <Button 
            variant="contained" 
            sx={{ 
              backgroundColor: '#1976d2', 
              '&:hover': { backgroundColor: '#1a7a7a' }, 
              mb: 2,
              borderRadius: '8px', // Rounded corners
              padding: '12px', // Increase padding
              fontWeight: 'bold', // Bold text
            }} 
            fullWidth
            onClick={handleLogin} // Call handleLogin on button click
          >
            Login
          </Button>
          
          <Typography sx={{ mb: 2, textAlign: 'center', fontSize: '14px' }}>
            Don't have an account?{' '}
            <Link to="/signup" style={{ color: '#1976d2', textDecoration: 'none', fontWeight: 'bold' }}>
              Sign Up
            </Link>
          </Typography>
          
          <Typography sx={{ textAlign: 'center', fontSize: '14px' }}>
            <Link to="/forgot-password" style={{ color: '#1976d2', textDecoration: 'none', fontWeight: 'bold' }}>
              Forgot Password?
            </Link>
          </Typography>
        </motion.div>
      </Box>
    </Box>
  );
};

export default Login;