// import React from 'react';
// import { Box, Typography, Button, Grid, Container } from '@mui/material';
// import { motion } from 'framer-motion';
// import { Link } from 'react-router-dom';
// import backgroundImage from '../assets/HEALTHCARE_ENVIRONMENT-RENDER_01-crop.jpeg';

// // Sample feature data categorized into payments and services
// const paymentFeatures = [
//   {
//     title: 'Check Wallet Balance',
//     description: 'View your current wallet balance at a glance. All in one click.',
//     link: '/wallet-balance',
//   },
//   {
//     title: 'Top-up Wallet',
//     description: 'Easily add funds to your wallet for seamless transactions.',
//     link: '/top-up-wallet',
//   },
//   {
//     title: 'Transaction History',
//     description: 'Keep track of your transactions with detailed records.',
//     link: '/transaction-history',
//   },
//   {
//     title: 'View Outstanding Bills',
//     description: 'Stay updated with your outstanding bills and payments.',
//     link: '/outstanding-bills',
//   },
//   {
//     title: 'Wallet-to-Wallet Transfers',
//     description: 'Transfer funds securely between wallets with ease.',
//     link: '/wallet-transfer',
//   },
//   {
//     title: 'Bill History',
//     description: 'Keep track of your billings with detailed records seamlessly.',
//     link: '/bill-history',
//   },
// ];

// const serviceFeatures = [
//   {
//     title: 'Book Appointment',
//     description: 'Schedule an appointment with a professional easily.',
//     link: '/book-appointment',
//   },
//   {
//     title: 'Check Health Record',
//     description: 'Access and review your health records quickly and securely.',
//     link: '/check-health-record',
//   },
// ];

// const Dashboard = () => {
//   return (
//     <Box
//       sx={{
//         backgroundImage: `url(${backgroundImage})`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'top',
//         backgroundRepeat: 'no-repeat',
//         height: '100%',
//         color: '#fff',
//         display: 'flex',
//         flexDirection: 'column',
//         justifyContent: 'center',
//         position: 'relative',
//         '&::before': {
//           content: '""',
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           right: 0,
//           bottom: 0,
//           backgroundColor: 'rgba(0, 0, 0, 0.5)',
//         },
//       }}
//     >
//       {/* Hero Section */}
//       <Container maxWidth="lg" sx={{ textAlign: 'center', pt: 10, pb: 5, position: 'relative', zIndex: 1 }}>
//         <motion.div
//           initial={{ opacity: 0, y: -50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//           <Typography variant="h2" component="h1" sx={{ mb: 2, fontWeight: 'bold', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)' }}>
//             Welcome To Our Self-Service Kiosk
//           </Typography>
//           <Typography variant="h5" sx={{ mb: 4, textShadow: '1px 1px 3px rgba(0, 0, 0, 0.5)' }}>
//             Manage your wallet and payments effortlessly with our intuitive system.
//           </Typography>
//         </motion.div>
//       </Container>

//       {/* Payment Features Section */}
//       <Container maxWidth="lg" sx={{ mb: 10, position: 'relative', zIndex: 1, bgcolor: '#f0f0f0', padding: '20px', borderRadius: '8px' }}>
//         <Typography variant="h4" component="h2" sx={{ textAlign: 'center', mb: 4, color: '#333', textShadow: '1px 1px 3px rgba(0, 0, 0, 0.5)' }}>
//           Payment Services
//         </Typography>
//         <Grid container spacing={4}>
//           {paymentFeatures.map((feature, index) => (
//             <Grid item xs={12} sm={6} md={4} key={index}>
//               <Box
//                 sx={{
//                   border: 'none',
//                   borderRadius: '8px',
//                   padding: 3,
//                   textAlign: 'center',
//                   backgroundColor: 'rgba(255, 255, 255, 0.9)',
//                   color: '#333',
//                   transition: 'transform 0.3s, box-shadow 0.3s',
//                   '&:hover': {
//                     transform: 'scale(1.05)',
//                     boxShadow: '0 4px 30px rgba(0, 0, 0, 0.3)',
//                   },
//                   boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
//                 }}
//               >
//                 <Typography variant="h6" component="h3" sx={{ mb: 1, fontWeight: 'bold' }}>
//                   {feature.title}
//                 </Typography>
//                 <Typography variant="body2" sx={{ mb: 2 }}>
//                   {feature.description}
//                 </Typography>
//                 <Link to={feature.link} style={{ textDecoration: 'none' }}>
//                   <Button variant="outlined" color="primary" size="small">
//                     Explore Service
//                   </Button>
//                 </Link>
//               </Box>
//             </Grid>
//           ))}
//         </Grid>
//       </Container>

//       {/* Service Features Section */}
//       <Container maxWidth="lg" sx={{ mb: 10, position: 'relative', zIndex: 1, bgcolor: '#f0f0f0', padding: '20px', borderRadius: '8px' }}>
//         <Typography variant="h4" component="h2" sx={{ textAlign: 'center', mb: 4, color: '#333', textShadow: '1px 1px 3px rgba(0, 0, 0, 0.5)' }}>
//           Other Services
//         </Typography>
//         <Grid container spacing={4}>
//           {serviceFeatures.map((feature, index) => (
//             <Grid item xs={12} sm={6} md={4} key={index}>
//               <Box
//                 sx={{
//                   border: 'none',
//                   borderRadius: '8px',
//                   padding: 3,
//                   textAlign: 'center',
//                   backgroundColor: 'rgba(255, 255, 255, 0.9)',
//                   color: '#333',
//                   transition: 'transform 0.3s, box-shadow 0.3s',
//                   '&:hover': {
//                     transform: 'scale(1.05)',
//                     boxShadow: '0 4px 30px rgba(0, 0, 0, 0.3)',
//                   },
//                   boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
//                 }}
//               >
//                 <Typography variant="h6" component="h3" sx={{ mb: 1, fontWeight: 'bold' }}>
//                   {feature.title}
//                 </Typography>
//                 <Typography variant="body2" sx={{ mb: 2 }}>
//                   {feature.description}
//                 </Typography>
//                 <Link to={feature.link} style={{ textDecoration: 'none' }}>
//                   <Button variant="outlined" color="primary" size="small">
//                     Explore Service
//                   </Button>
//                 </Link>
//               </Box>
//             </Grid>
//           ))}
//         </Grid>
//       </Container>
//     </Box>
//   );
// };

// export default Dashboard;
import React from 'react';
import { Box, Typography, Button, Grid, Container } from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import backgroundImage from '../assets/HEALTHCARE_ENVIRONMENT-RENDER_01-crop.jpeg';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import HistoryIcon from '@mui/icons-material/History';
import ReceiptIcon from '@mui/icons-material/Receipt';
import TransferWithinAStationIcon from '@mui/icons-material/TransferWithinAStation';
import EventNoteIcon from '@mui/icons-material/EventNote';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import PersonAddIcon from '@mui/icons-material/PersonAdd'; 

const features = [
  {
    title: 'Register',
    link: '/register', // Link to the registration page
    icon: <PersonAddIcon sx={{ fontSize: '60px', color: '#4CAF50' }} /> // Green color for the register icon
  },  
  {
    title: 'Check Wallet Balance',
    link: '/wallet-balance',
    icon: <AccountBalanceWalletIcon sx={{ fontSize: '60px', color: '#4CAF50' }} /> // Green
  },
  {
    title: 'Top-up Wallet',
    link: '/top-up-wallet',
    icon: <CheckCircleIcon sx={{ fontSize: '60px', color: '#2196F3' }} /> // Blue
  },
  {
    title: 'Transaction History',
    link: '/transaction-history',
    icon: <HistoryIcon sx={{ fontSize: '60px', color: '#FF9800' }} /> // Orange
  },
  {
    title: 'View Outstanding Bills',
    link: '/outstanding-bills',
    icon: <ReceiptIcon sx={{ fontSize: '60px', color: '#F44336' }} /> // Red
  },
  {
    title: 'Wallet-to-Wallet Transfers',
    link: '/wallet-transfer',
    icon: <TransferWithinAStationIcon sx={{ fontSize: '60px', color: '#9C27B0' }} /> // Purple
  },
  {
    title: 'Bill History',
    link: '/bill-history',
    icon: <HistoryIcon sx={{ fontSize: '60px', color: '#3F51B5' }} /> // Indigo
  },
  {
    title: 'Book/Check cnsultation',
    link: '/book-appointment',
    icon: <EventNoteIcon sx={{ fontSize: '60px', color: '#FF5722' }} /> // Deep Orange
  },
  {
    title: 'Book/Check DiagnoLab Status',
    link: '/check-health-record',
    icon: <HealthAndSafetyIcon sx={{ fontSize: '60px', color: '#009688' }} /> // Teal
  },
];

const Dashboard = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'top',
        backgroundRepeat: 'no-repeat',
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
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        },
      }}
    >
      <Container maxWidth="lg" sx={{ textAlign: 'center', pt: 4, pb: 5, position: 'relative', zIndex: 1 }}>
        {/* <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography variant="h2" component="h1" sx={{ mb: 2, fontWeight: 'bold', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)' }}>
            Welcome To Our Self-Service Kiosk
          </Typography>
          <Typography variant="h5" sx={{ mb: 4, textShadow: '1px 1px 3px rgba(0, 0, 0, 0.5)' }}>
            Manage your wallet and payments effortlessly with our intuitive system.
          </Typography>
        </motion.div> */}
      </Container>

      <Container maxWidth="lg" sx={{ mb: 10, position: 'relative', zIndex: 1, bgcolor: '#f0f0f0', padding: '20px', borderRadius: '8px' }}>
        <Typography variant="h4" component="h2" sx={{ textAlign: 'center', mb: 4, color: '#333', textShadow: '1px 1px 3px rgba(0, 0, 0, 0.3)' }}>
          Explore Our Services
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
                <Box sx={{ mb: 2 }}>
                  {feature.icon} {/* Render the icon here */}
                </Box>
                <Typography variant="h6" component="h3" sx={{ mb: 1, fontWeight: 'bold' }}>
                  {feature.title}
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
