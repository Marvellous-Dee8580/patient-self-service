import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // Import Link for navigation
import backgroundImage from '../assets/HEALTHCARE_ENVIRONMENT-RENDER_01-crop.jpeg';

const Landing = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover', // Ensures the image covers the entire container
        backgroundPosition: 'top', // Aligns the image to the top
        backgroundRepeat: 'no-repeat', // Prevents the image from repeating
        height: '100vh', // Full viewport height
        color: '#fff',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dark overlay for better text visibility
        },
      }}
    >
      {/* Header Section with Login and Signup Buttons */}
      <Box sx={{ position: 'absolute', top: 20, right: 20, zIndex: 1 }}>
        <Link to="/login" style={{ textDecoration: 'none', marginRight: '16px' }}>
          <Button variant="outlined" sx={{ color: '#FFFFFF', borderColor: '#1976d2', '&:hover': { borderColor: '#115293', backgroundColor: '#1976d2' } }}>
            Login
          </Button>
        </Link>
        <Link to="/signup" style={{ textDecoration: 'none' }}>
          <Button variant="contained" sx={{ backgroundColor: '#1976d2', color: '#FFFFFF', '&:hover': { backgroundColor: '#115293' } }}>
            Signup
          </Button>
        </Link>
      </Box>

      {/* Hero Section */}
      <Container maxWidth="lg" sx={{ textAlign: 'center', pt: 10, pb: 5, position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography variant="h2" component="h1" sx={{ mb: 2, fontWeight: 'bold', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)' }}>
            Welcome to Our Self-Service Kiosk
          </Typography>
          <Typography variant="h5" sx={{ mb: 4, textShadow: '1px 1px 3px rgba(0, 0, 0, 0.5)' }}>
            Manage your wallet and payments effortlessly with our intuitive system.
          </Typography>
          <Link to="/login" style={{ textDecoration: 'none' }}>
            <Button variant="contained" color="primary" size="large">
              Get Started
            </Button>
          </Link>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Landing;