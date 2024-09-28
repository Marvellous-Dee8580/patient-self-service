import React, { useState } from 'react';
import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';

const bills = [
  { name: 'Surgery Fee - St. Nicholas Hospital', dueDate: '2024-09-30', amount: '₦350,000' },
  { name: 'Lab Tests - Lagoon Hospital', dueDate: '2024-09-25', amount: '₦45,000' },
  { name: 'Consultation - Reddington Hospital', dueDate: '2024-09-20', amount: '₦25,000' },
  { name: 'Pharmacy - Cedarcrest Hospital', dueDate: '2024-09-18', amount: '₦12,500' },
  { name: 'Ambulance Service - LUTH', dueDate: '2024-09-15', amount: '₦75,000' },
];

const OutstandingBills = () => {
  const [open, setOpen] = useState(false);
  const [selectedBill, setSelectedBill] = useState(null);

  const handleClickOpen = (bill) => {
    setSelectedBill(bill);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedBill(null);
  };

  return (
    <Box sx={{ flexGrow: 1, p: 3, bgcolor: '#f5f5f5', borderRadius: '8px' }}>
      <Grid container spacing={2}>
        {/* Header */}
        <Grid item xs={12}>
          <Typography variant="h4" gutterBottom align="center" sx={{ color: '#1976d2' }}>
            Outstanding Hospital Bills
          </Typography>
        </Grid>

        {/* Bills Table */}
        <Grid item xs={12}>
          <Card sx={{ borderRadius: '8px', boxShadow: 3 }}>
            <CardContent>
              <Box sx={{ overflowX: 'auto' }}>
                <Table sx={{ minWidth: 700, borderCollapse: 'separate', borderSpacing: '0 10px' }}>
                  <TableHead>
                    <TableRow sx={{ backgroundColor: '#e3f2fd' }}>
                      <TableCell sx={{ fontWeight: 'bold', padding: '10px 16px' }}>Bill Name</TableCell>
                      <TableCell sx={{ fontWeight: 'bold', padding: '10px 16px' }}>Due Date</TableCell>
                      <TableCell sx={{ fontWeight: 'bold', padding: '10px 16px' }}>Amount (₦)</TableCell>
                      <TableCell sx={{ fontWeight: 'bold', padding: '10px 16px' }} align="right">Action</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {bills.map((bill, index) => (
                      <TableRow key={index} sx={{ backgroundColor: '#fff', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)' }}>
                        <TableCell sx={{ padding: '10px 16px' }}>{bill.name}</TableCell>
                        <TableCell sx={{ padding: '10px 16px' }}>{bill.dueDate}</TableCell>
                        <TableCell sx={{ padding: '10px 16px', fontWeight: 'bold', color: '#d32f2f' }}>{bill.amount}</TableCell>
                        <TableCell sx={{ padding: '10px 16px' }} align="right">
                          <Button
                            variant="contained"
                            color="primary"
                            onClick={() => handleClickOpen(bill)}
                            sx={{ textTransform: 'none', borderRadius: '20px' }}
                          >
                            Pay Now
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Dialog for Payment */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle sx={{ bgcolor: '#1976d2', color: '#fff' }}>Payment Details</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <Typography variant="h6" sx={{ mb: 2 }}>
              {selectedBill?.name}
            </Typography>
            <Typography variant="body1">
              Due Date: {selectedBill?.dueDate}
            </Typography>
            <Typography variant="body1" sx={{ fontWeight: 'bold', mt: 1, color: '#d32f2f' }}>
              Amount: {selectedBill?.amount}
            </Typography>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} sx={{ textTransform: 'none' }}>
            Cancel
          </Button>
          <Button
            variant="contained"
            color="primary"
            sx={{ textTransform: 'none', borderRadius: '20px' }}
          >
            Checkout Payment
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default OutstandingBills;
