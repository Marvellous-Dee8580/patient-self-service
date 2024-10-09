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

// Sample data
const bills = [
  { name: 'Surgery Fee - St. Nicholas Hospital', dueDate: '2024-09-30', amount: 350000 },
  { name: 'Lab Tests - Lagoon Hospital', dueDate: '2024-09-25', amount: 45000 },
  { name: 'Consultation - Reddington Hospital', dueDate: '2024-09-20', amount: 25000 },
  { name: 'Pharmacy - Cedarcrest Hospital', dueDate: '2024-09-18', amount: 12500 },
  { name: 'Ambulance Service - LUTH', dueDate: '2024-09-15', amount: 75000 },
];

// Utility function to convert numbers to words
const convertNumberToWords = (num) => {
  const units = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
  const teens = ['Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
  const tens = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
  const thousands = ['', 'Thousand', 'Million', 'Billion'];

  if (num === 0) return 'Zero';

  let word = '';
  let thousandIndex = 0;

  const toHundreds = (num) => {
    let str = '';
    if (num > 99) {
      str += `${units[Math.floor(num / 100)]} Hundred `;
      num %= 100;
    }
    if (num > 10 && num < 20) {
      str += teens[num - 11];
    } else {
      str += tens[Math.floor(num / 10)];
      if (num % 10) {
        str += ` ${units[num % 10]}`;
      }
    }
    return str.trim();
  };

  while (num > 0) {
    if (num % 1000 !== 0) {
      word = `${toHundreds(num % 1000)} ${thousands[thousandIndex]} ${word}`.trim();
    }
    num = Math.floor(num / 1000);
    thousandIndex++;
  }

  return word.trim();
};

const OutstandingBills = () => {
  const [open, setOpen] = useState(false);
  const [openPayAll, setOpenPayAll] = useState(false);
  const [selectedBill, setSelectedBill] = useState(null);

  // Calculate total outstanding bills
  const totalOutstanding = bills.reduce((total, bill) => total + bill.amount, 0);

  // Convert total outstanding to words
  const totalOutstandingInWords = convertNumberToWords(totalOutstanding);

  const handleClickOpen = (bill) => {
    setSelectedBill(bill);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedBill(null);
  };

  const handlePayAllOpen = () => {
    setOpenPayAll(true);
  };

  const handlePayAllClose = () => {
    setOpenPayAll(false);
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
                        <TableCell sx={{ padding: '10px 16px', fontWeight: 'bold', color: '#d32f2f' }}>
                          ₦{bill.amount.toLocaleString()}
                        </TableCell>
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
              <Box sx={{ mt: 10, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="h6">
                  Total Outstanding: <span style={{ fontWeight: 'bold', color: '#d32f2f' }}>₦{totalOutstanding.toLocaleString()}</span>
                </Typography>
                <Typography variant="subtitle1">
                  <span style={{ fontStyle: 'italic' }}>{totalOutstandingInWords} Naira only</span>
                </Typography>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={handlePayAllOpen}
                  sx={{ textTransform: 'none', borderRadius: '20px' }}
                >
                  Pay All
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Dialog for Single Payment */}
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
              Amount: ₦{selectedBill?.amount.toLocaleString()}
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

      {/* Dialog for Pay All */}
      <Dialog open={openPayAll} onClose={handlePayAllClose}>
        <DialogTitle sx={{ bgcolor: '#1976d2', color: '#fff' }}>Pay All Outstanding Bills</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <Typography variant="body1" sx={{ fontWeight: 'bold', mt: 1, color: '#d32f2f' }}>
              Total Amount: ₦{totalOutstanding.toLocaleString()}
            </Typography>
            <Typography variant="body2" sx={{ mt: 2 }}>
              In Words: {totalOutstandingInWords} Naira only
            </Typography>
            <Typography variant="body2" sx={{ mt: 2 }}>
              This will pay all the outstanding bills listed. Do you want to proceed?
            </Typography>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handlePayAllClose} sx={{ textTransform: 'none' }}>
            Cancel
          </Button>
          <Button
            variant="contained"
            color="primary"
            sx={{ textTransform: 'none', borderRadius: '20px' }}
          >
            Proceed to Payment
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default OutstandingBills;