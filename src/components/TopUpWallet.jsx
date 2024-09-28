import React from 'react';
import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  TextField,
  Button,
  MenuItem,
  InputLabel,
  FormControl,
  Select,
  IconButton,
  Tooltip,
} from '@mui/material';
import { AccountBalance, CreditCard, MobileFriendly, Help as HelpIcon } from '@mui/icons-material';

const TopUpWallet = () => {
  const [amount, setAmount] = React.useState('');
  const [paymentMethod, setPaymentMethod] = React.useState('');

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const handleSubmit = () => {
    // Handle top-up logic here
    console.log('Top-up Amount:', amount);
    console.log('Payment Method:', paymentMethod);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        p: 3,
        bgcolor: '#e3f2fd',
        borderRadius: '8px',
        minHeight: '100vh', // Set to full viewport height
        display: 'flex',
        alignItems: 'center', // Center vertically
      }}
    >
      <Grid container spacing={2} justifyContent="center">
        {/* Header */}
        <Grid item xs={12}>
          <Typography variant="h4" gutterBottom align="center" sx={{ color: '#1976d2', fontWeight: 'bold' }}>
            Top-up Your Wallet
          </Typography>
        </Grid>

        {/* Top-up Form */}
        <Grid item xs={12} sm={8} md={6}>
          <Card sx={{ borderRadius: '12px', boxShadow: 4 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom align="center">
                Enter the amount and choose a payment method.
              </Typography>

              {/* Top-up Amount */}
              <TextField
                label="Amount (₦)"
                value={amount}
                onChange={handleAmountChange}
                fullWidth
                margin="normal"
                variant="outlined"
                type="number"
                inputProps={{ min: 0 }}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: '#1976d2',
                    },
                    '&:hover fieldset': {
                      borderColor: '#1565c0',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#0d47a1',
                    },
                  },
                }}
              />

              {/* Payment Method */}
              <FormControl fullWidth margin="normal" variant="outlined">
                <InputLabel>Payment Method</InputLabel>
                <Select
                  value={paymentMethod}
                  onChange={handlePaymentMethodChange}
                  label="Payment Method"
                  sx={{ '& .MuiOutlinedInput-notchedOutline': { borderColor: '#1976d2' } }}
                >
                  <MenuItem value="credit-card">
                    <CreditCard sx={{ mr: 1 }} /> Credit Card
                  </MenuItem>
                  <MenuItem value="debit-card">
                    <CreditCard sx={{ mr: 1 }} /> Debit Card
                  </MenuItem>
                  <MenuItem value="bank-transfer">
                    <AccountBalance sx={{ mr: 1 }} /> Bank Transfer
                  </MenuItem>
                  <MenuItem value="mobile-payment">
                    <MobileFriendly sx={{ mr: 1 }} /> Mobile Payment
                  </MenuItem>
                </Select>
              </FormControl>

              {/* Submit Button */}
              <Button
                variant="contained"
                color="primary"
                fullWidth
                sx={{
                  mt: 2,
                  '&:hover': {
                    bgcolor: '#115293',
                  },
                }}
                onClick={handleSubmit}
              >
                Top-up Now
              </Button>

              {/* Tooltip for Help */}
              <Tooltip title="Need help? Contact support!" arrow>
                <IconButton sx={{ mt: 2, float: 'right' }}>
                  <HelpIcon />
                </IconButton>
              </Tooltip>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TopUpWallet;
