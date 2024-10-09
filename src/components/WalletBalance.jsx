import React, { useState } from 'react';
import { Box, Grid, Typography, Card, CardContent, Button, IconButton, Avatar, List, ListItem, ListItemIcon, Divider } from '@mui/material';
import { Visibility, VisibilityOff, AccountBalanceWallet, Add, History, Settings } from '@mui/icons-material';
import { useMediaQuery, useTheme } from '@mui/material';
import { useNavigate } from 'react-router-dom'; // React Router for navigation

const WalletBalance = () => {
  const [showBalance, setShowBalance] = useState(false);
  const [activeMenu, setActiveMenu] = useState('wallet'); // State for active menu item
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate(); // For navigating to different pages

  const toggleBalanceVisibility = () => {
    setShowBalance(!showBalance);
  };

  // Function to handle menu click and navigation
  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
    if (menu === 'wallet') {
      navigate('/wallet'); // Example: navigate to the wallet balance page
    } else if (menu === 'history') {
      navigate('/transaction-history'); // Example: navigate to transaction history page
    } else if (menu === 'settings') {
      navigate('/settings'); // Example: navigate to account settings page
    }
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        minHeight: '100vh',
        display: 'flex',
        flexDirection: isSmallScreen ? 'column' : 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        p: 3,
        overflow: 'hidden',
      }}
    >
      {/* Sidebar */}
      <Box
        sx={{
          width: isSmallScreen ? '100%' : '25%',
          height: isSmallScreen ? 'auto' : { md: '75vh', lg: '95vh' },
          backgroundColor: 'rgba(255, 255, 255, 0.85)',
          borderRadius: '20px',
          boxShadow: '0px 8px 30px rgba(0, 0, 0, 0.1)',
          p: 3,
          mb: isSmallScreen ? 3 : 0,
          display: 'flex',
          flexDirection: isSmallScreen ? 'row' : 'column',
          justifyContent: isSmallScreen ? 'space-between' : 'flex-start',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ bgcolor: 'rgb(60,118,210)', width: 60, height: 60 }}>A</Avatar>
        {isSmallScreen ? (
          <Box sx={{ ml: 2 }}>
            <Typography variant="body1">Welcome back</Typography>
            <Typography variant="h6">John Doe</Typography>
          </Box>
        ) : (
          <>
            <Typography variant="body1" align="center" fontWeight="bold">
              Welcome back
            </Typography>
            <Typography variant="h6" align="center" gutterBottom>
              John Doe
            </Typography>
            <Divider sx={{ mb: 3 }} />
          </>
        )}

        {/* Menu items */}
        {!isSmallScreen && (
          <List sx={{ mt: 3 }}>
            <ListItem 
              button sx={{ backgroundColor: 'rgba(60,118,210, 0.2)', borderRadius: '10px' }}
              onClick={() => handleMenuClick('wallet')} 
              selected={activeMenu === 'wallet'} // Active state for Wallet Balance
            >
              <ListItemIcon>
                <AccountBalanceWallet color={activeMenu === 'wallet' ? 'primary' : 'inherit'} />
              </ListItemIcon>
              <Typography>Wallet Balance</Typography>
            </ListItem>
            <ListItem 
              button 
              onClick={() => handleMenuClick('history')} 
              selected={activeMenu === 'history'} // Active state for Transaction History
            >
              <ListItemIcon>
                <History color={activeMenu === 'history' ? 'primary' : 'inherit'} />
              </ListItemIcon>
              <Typography>Transaction History</Typography>
            </ListItem>
            <ListItem 
              button 
              onClick={() => handleMenuClick('settings')} 
              selected={activeMenu === 'settings'} // Active state for Account Settings
            >
              <ListItemIcon>
                <Settings color={activeMenu === 'settings' ? 'primary' : 'inherit'} />
              </ListItemIcon>
              <Typography>Account Settings</Typography>
            </ListItem>
          </List>
        )}
      </Box>

      {/* Main Content */}
      <Grid container spacing={4} sx={{ flexGrow: 1 }}>
        {/* Wallet Balance Card */}
        <Grid item xs={12}>
          <Card
            sx={{
              borderRadius: '20px',
              boxShadow: '0px 8px 30px rgba(0, 0, 0, 0.1)',
              background: 'rgba(255, 255, 255, 0.85)',
              p: 3,
              textAlign: 'center',
              transition: 'transform 0.3s',
              '&:hover': {
                transform: 'translateY(-5px)',
              },
            }}
          >
            <CardContent>
              <Typography variant="h6" sx={{ color: '#3e4e5c', mb: 2 }}>
                Your Current Balance
              </Typography>
              <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Typography 
                  variant="h3" 
                  color="primary" 
                  sx={{ 
                    fontWeight: 700,
                    fontSize: {
                      xs: '1.6rem', 
                      sm: '2.5rem', 
                      md: '3rem', 
                      lg: '3.5rem', 
                      xl: '4rem',
                    },
                  }}
                >
                  {showBalance ? '#1,234,567,890' : '*****'}
                </Typography>
                <IconButton onClick={toggleBalanceVisibility} sx={{ ml: 2 }}>
                  {showBalance ? <VisibilityOff color="primary" /> : <Visibility color="primary" />}
                </IconButton>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Add Funds Button */}
        <Grid item xs={12}>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: 'rgb(60,118,210)',
                color: 'white',
                px: 4,
                py: 1.5,
                borderRadius: '30px',
                boxShadow: '0px 3px 15px rgba(0, 0, 0, 0.2)',
                width: '80%',
                '&:hover': {
                  backgroundColor: 'rgb(50,108,200)',
                },
              }}
              startIcon={<Add />}
            >
              Add Funds
            </Button>
          </Box>
        </Grid>

        {/* Recent Transactions */}
        <Grid item xs={12}>
          <Box
            sx={{
              backgroundColor: 'rgba(255, 255, 255, 0.85)',
              borderRadius: '20px',
              boxShadow: '0px 8px 30px rgba(0, 0, 0, 0.1)',
              p: 3,
              mt: 4,
            }}
          >
            <Typography variant="h6" align="center" fontWeight="bold" gutterBottom>
              Recent Transactions
            </Typography>
            <Divider sx={{ mb: 2 }} />
            <List>
              <ListItem>
                <Typography>Payment to Amazon: #115293120.00</Typography>
              </ListItem>
              <ListItem>
                <Typography>Transfer from Bank: #500.00</Typography>
              </ListItem>
              <ListItem>
                <Typography>Subscription Renewal: #12.99</Typography>
              </ListItem>
              <ListItem>
                <Typography>Payment to Netflix: #15.99</Typography>
              </ListItem>
            </List>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default WalletBalance;