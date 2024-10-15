import React from 'react';
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
  TableContainer,
  Divider,
  Avatar,
} from '@mui/material';
import { CheckCircle, Pending, Error } from '@mui/icons-material';
import { AttachMoney } from '@mui/icons-material';

const billHistory = [
  { date: '2024-08-15', billName: 'General Consultation', amount: '₦50,000', status: 'Paid' },
  { date: '2024-07-25', billName: 'X-ray Services', amount: '₦25,000', status: 'Pending' },
  { date: '2024-07-10', billName: 'Laboratory Test', amount: '₦15,000', status: 'Paid' },
  { date: '2024-06-22', billName: 'Surgery Fees', amount: '₦300,000', status: 'Overdue' },
  { date: '2024-05-30', billName: 'Medication', amount: '₦10,000', status: 'Paid' },
  { date: '2024-05-15', billName: 'Emergency Care', amount: '₦100,000', status: 'Overdue' },
  { date: '2024-04-18', billName: 'CT Scan', amount: '₦75,000', status: 'Pending' },
];

// Function to calculate total amount
const calculateTotal = (bills) => {
  return bills.reduce((total, bill) => {
    const amount = parseInt(bill.amount.replace(/₦|,/g, '')); // Remove '₦' and commas, then convert to number
    return total + amount;
  }, 0);
};

const getStatusIcon = (status) => {
  switch (status) {
    case 'Paid':
      return <CheckCircle style={{ color: 'green' }} />;
    case 'Pending':
      return <Pending style={{ color: 'orange' }} />;
    case 'Overdue':
      return <Error style={{ color: 'red' }} />;
    default:
      return null;
  }
};

const BillHistory = () => {
  const totalAmount = calculateTotal(billHistory);

  return (
    <Box
      sx={{
        flexGrow: 1,
        p: 3,
        bgcolor: 'linear-gradient(to right, #f0f4f7, #fff)',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Grid container spacing={2} justifyContent="center" sx={{ maxWidth: 900 }}>
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
            Hospital Bill Payment History
          </Typography>
        </Grid>

        {/* Bill History Table */}
        <Grid item xs={12}>
          <Card
            sx={{
              boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
              borderRadius: '16px',
              p: 3,
              backgroundColor: '#fafafa',
            }}
          >
            <CardContent>
              <TableContainer>
                <Table>
                  <TableHead sx={{ backgroundColor: '#1976d2' }}>
                    <TableRow>
                      <TableCell sx={{ color: '#fff', fontWeight: 'bold' }}>Date</TableCell>
                      <TableCell sx={{ color: '#fff', fontWeight: 'bold' }}>Bill Name</TableCell>
                      <TableCell sx={{ color: '#fff', fontWeight: 'bold' }}>Amount (₦)</TableCell>
                      <TableCell sx={{ color: '#fff', fontWeight: 'bold' }}>Status</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {billHistory.map((bill, index) => (
                      <TableRow
                        key={index}
                        sx={{
                          '&:nth-of-type(odd)': {
                            backgroundColor: '#f7f7f7',
                          },
                          '&:hover': {
                            backgroundColor: '#e8f4fc',
                          },
                        }}
                      >
                        <TableCell>{bill.date}</TableCell>
                        <TableCell>{bill.billName}</TableCell>
                        <TableCell>{bill.amount}</TableCell>
                        <TableCell
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            color:
                              bill.status === 'Paid'
                                ? 'green'
                                : bill.status === 'Pending'
                                ? 'orange'
                                : 'red',
                            fontWeight: 'bold',
                          }}
                        >
                          {getStatusIcon(bill.status)}
                          <span style={{ marginLeft: 8 }}>{bill.status}</span>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </CardContent>
          </Card>
        </Grid>

        {/* Divider */}
        <Grid item xs={12}>
          <Divider sx={{ my: 3 }} />
        </Grid>

        {/* Total Amount Card */}
        <Grid item xs={12}>
      <Card
        sx={{
          boxShadow: '0 6px 20px rgba(0, 0, 0, 0.1)',
          borderRadius: '16px',
          backgroundImage: 'linear-gradient(to right, #1976d2, #42a5f5)',
          color: '#fff',
          p: 3,
          transition: 'transform 0.3s ease',
          '&:hover': {
            transform: 'scale(1.05)',
          },
        }}
      >
        <CardContent
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Box>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 'bold',
                textTransform: 'uppercase',
              }}
            >
              Total Amount
            </Typography>
            <Typography
              variant="h3"
              sx={{
                fontWeight: 'bold',
                mt: 1,
                textShadow: '1px 2px 4px rgba(0,0,0,0.2)',
              }}
            >
              ₦{totalAmount.toLocaleString()}
            </Typography>
          </Box>

          <Avatar
            sx={{
              bgcolor: '#fff',
              color: '#1976d2',
              width: 64,
              height: 64,
              boxShadow: '0 4px 10px rgba(0, 0, 0, 0.15)',
            }}
          >
            <AttachMoney fontSize="large" />
          </Avatar>
        </CardContent>
      </Card>
    </Grid>
      </Grid>
    </Box>
  );
};

export default BillHistory;