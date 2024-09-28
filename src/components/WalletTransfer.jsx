import React, { useState } from 'react';
import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  Card,
  CardContent,
  InputAdornment,
} from '@mui/material';
import { AccountBalanceWallet, AttachMoney, Note } from '@mui/icons-material';

const WalletTransfer = () => {
  const [formData, setFormData] = useState({
    recipientId: '',
    amount: '',
    note: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleTransfer = () => {
    // Implement transfer logic here
    console.log('Transfer Data:', formData);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        p: 3,
        minHeight: '100vh',
        bgcolor: 'linear-gradient(to right, #ece9e6, #ffffff)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Grid container justifyContent="center" sx={{ maxWidth: 600 }}>
        {/* Header */}
        <Grid item xs={12}>
          <Typography
            variant="h4"
            align="center"
            gutterBottom
            sx={{
              fontWeight: 'bold',
              color: '#1976d2',
              mb: 4,
              textShadow: '1px 1px 2px #ccc',
            }}
          >
            Wallet-to-Wallet Transfer
          </Typography>
        </Grid>

        {/* Transfer Form */}
        <Grid item xs={12}>
          <Card
            sx={{
              borderRadius: '16px',
              boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.1)',
              bgcolor: '#fafafa',
              p: 3,
            }}
          >
            <CardContent>
              <TextField
                label="Recipient Wallet ID"
                name="recipientId"
                fullWidth
                margin="normal"
                variant="outlined"
                value={formData.recipientId}
                onChange={handleChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountBalanceWallet sx={{ color: '#1976d2' }} />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  mb: 2,
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '8px',
                  },
                }}
              />
              <TextField
                label="Amount"
                name="amount"
                type="number"
                fullWidth
                margin="normal"
                variant="outlined"
                value={formData.amount}
                onChange={handleChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AttachMoney sx={{ color: '#1976d2' }} />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  mb: 2,
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '8px',
                  },
                }}
              />
              <TextField
                label="Note (Optional)"
                name="note"
                fullWidth
                margin="normal"
                variant="outlined"
                value={formData.note}
                onChange={handleChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Note sx={{ color: '#1976d2' }} />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  mb: 2,
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '8px',
                  },
                }}
              />
              <Button
                variant="contained"
                color="primary"
                fullWidth
                sx={{
                  mt: 3,
                  py: 1.5,
                  fontWeight: 'bold',
                  borderRadius: '24px',
                  bgcolor: '#1976d2',
                  transition: '0.3s ease',
                  '&:hover': {
                    bgcolor: '#155a9e',
                    transform: 'scale(1.02)',
                  },
                }}
                onClick={handleTransfer}
              >
                Transfer Funds
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default WalletTransfer;
