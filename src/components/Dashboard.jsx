import React from 'react';
import { Box, Typography, Button, Grid, Container } from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // Import Link for navigation
// import backgroundImage from '../assets/pngtree-couple-buying-cinema-tickets-flat-color-vector-faceless-characters-png-image_5065306.png';
import backgroundImage from '../assets/HEALTHCARE_ENVIRONMENT-RENDER_01-crop.jpeg';

// Sample feature data with links
const features = [
  {
    title: 'Check Wallet Balance',
    description: 'View your current wallet balance at a glance. All in one click.',
    link: '/wallet-balance', // Link to the wallet balance module
  },
  {
    title: 'Top-up Wallet',
    description: 'Easily add funds to your wallet for seamless transactions.',
    link: '/top-up-wallet', // Link to the top-up wallet module
  },
  {
    title: 'Transaction History',
    description: 'Keep track of your transactions with detailed records.',
    link: '/transaction-history', // Link to the transaction history module
  },
  {
    title: 'View Outstanding Bills',
    description: 'Stay updated with your outstanding bills and payments.',
    link: '/outstanding-bills', // Link to the outstanding bills module
  },
  {
    title: 'Wallet-to-Wallet Transfers',
    description: 'Transfer funds securely between wallets with ease.',
    link: '/wallet-transfer', // Link to the wallet-to-wallet transfers module
  },
  {
    title: 'Bill History',
    description: 'Keep track of your billings with detailed records seamlessly.',
    link: '/bill-history', // Link to the bill history module
  },
];

const Dashboard = () => {
  return (
      // <Box
      //   sx={{
      //     backgroundImage: `url(${backgroundImage})`,
      //     backgroundSize: 'cover',
      //     backgroundPosition: 'center',
      //     backgroundRepeat: 'no-repeat',
      //     height: '100vh',
      //     color: '#fff',
      //     display: 'flex',
      //     flexDirection: 'column',
      //     justifyContent: 'center',
      //     position: 'relative',
      //     '&::before': {
      //       content: '""',
      //       position: 'absolute',
      //       top: 0,
      //       left: 0,
      //       right: 0,
      //       bottom: 0,
      //       backgroundColor: 'rgba(0, 0, 0, 0.5)',
      //     },
      //   }}
      // >
      <Box
        sx={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover', // Ensures the image covers the entire container
          backgroundPosition: 'top', // Aligns the image to the top
          backgroundRepeat: 'no-repeat', // Prevents the image from repeating
          height: '100%',
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
        </motion.div>
      </Container>

      {/* Features Section */}
      <Container maxWidth="lg" sx={{ mb: 10, position: 'relative', zIndex: 1, bgcolor: '#f0f0f0', padding: '20px', borderRadius: '8px' }}>
        <Typography variant="h4" component="h2" sx={{ textAlign: 'center', mb: 4, color: '#333', textShadow: '1px 1px 3px rgba(0, 0, 0, 0.5)' }}>
          Our Services
        </Typography>
        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Box
                sx={{
                  border: 'none',
                  borderRadius: '8px',
                  padding: 3,
                  textAlign: 'center',
                  backgroundColor: 'rgba(255, 255, 255, 0.9)',
                  color: '#333',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  '&:hover': {
                    transform: 'scale(1.05)',
                    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.3)',
                  },
                  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
                }}
              >
                <Typography variant="h6" component="h3" sx={{ mb: 1, fontWeight: 'bold' }}>
                  {feature.title}
                </Typography>
                <Typography variant="body2" sx={{ mb: 2 }}>
                  {feature.description}
                </Typography>
                <Link to={feature.link} style={{ textDecoration: 'none' }}>
                  <Button variant="outlined" color="primary" size="small">
                    Explore Service
                  </Button>
                </Link>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Dashboard;