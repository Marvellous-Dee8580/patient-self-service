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
  Button,
  Avatar,
} from '@mui/material';
import { Print, Download } from '@mui/icons-material';
import * as XLSX from 'xlsx'; // Importing xlsx library
import jsPDF from 'jspdf'; // Importing jsPDF library
import 'jspdf-autotable'; // Importing the autoTable plugin for jsPDF

const transactions = [
  { date: '2024-09-12', time: '10:30 AM', description: 'Consultation Fee', amount: '-₦20,000.00', balance: '₦12,530,890.00' },
  { date: '2024-09-10', time: '02:15 PM', description: 'Surgery Payment', amount: '-₦200,000.00', balance: '₦12,510,890.00' },
  { date: '2024-09-08', time: '09:45 AM', description: 'Lab Test', amount: '-₦15,000.00', balance: '₦12,310,890.00' },
  { date: '2024-09-05', time: '12:00 PM', description: 'Pharmacy Purchase', amount: '-₦8,000.00', balance: '₦12,295,890.00' },
  { date: '2024-08-30', time: '04:20 PM', description: 'Insurance Payment', amount: '+₦5,000,000.00', balance: '₦12,387,890.00' },
  { date: '2024-08-25', time: '11:30 AM', description: 'Ward Charges', amount: '-₦50,000.00', balance: '₦7,387,890.00' },
  { date: '2024-08-20', time: '03:10 PM', description: 'Blood Test', amount: '-₦12,000.00', balance: '₦7,437,890.00' },
  { date: '2024-08-10', time: '08:55 AM', description: 'Ambulance Service', amount: '-₦30,000.00', balance: '₦7,524,890.00' },
  { date: '2024-08-05', time: '01:45 PM', description: 'Government Grant', amount: '+₦8,000,000.00', balance: '₦7,554,890.00' },
  { date: '2024-08-01', time: '05:00 PM', description: 'Medical Research Funding', amount: '+₦3,500,000.00', balance: '₦15,554,890.00' }
];

const username = 'Mr Biyi'; // Example username
const userAvatar = 'https://storage.needpix.com/rsynced_images/head-659651_1280.png'; // Example avatar URL

const TransactionHistory = () => {
  const handlePrint = () => {
    const printContent = `
      <div style="text-align: center; margin-bottom: 20px;">
        <img src="${userAvatar}" alt="User Avatar" style="border-radius: 50%; width: 120px; height: 120px;" />
        <h2>${username}</h2>
      </div>
      <table style="width: 100%; border-collapse: collapse;">
        <thead>
          <tr>
            <th style="border: 1px solid #000; padding: 8px;">Date</th>
            <th style="border: 1px solid #000; padding: 8px;">Description</th>
            <th style="border: 1px solid #000; padding: 8px;">Amount</th>
            <th style="border: 1px solid #000; padding: 8px;">Balance</th>
          </tr>
        </thead>
        <tbody>
          ${transactions.map(transaction => `
            <tr>
              <td style="border: 1px solid #000; padding: 8px;">${transaction.date} -- ${transaction.time}</td>
              <td style="border: 1px solid #000; padding: 8px;">${transaction.description}</td>
              <td style="border: 1px solid #000; padding: 8px;">${transaction.amount}</td>
              <td style="border: 1px solid #000; padding: 8px;">${transaction.balance}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    `;
    const printWindow = window.open('', '_blank');
    printWindow.document.write(printContent);
    printWindow.document.close();
    printWindow.print();
  };

  const handleDownloadExcel = () => {
    const data = transactions.map(({ date, description, amount, balance }) => ({
      Date: date,
      Description: description,
      Amount: amount.replace(/[₦#]/g, '').trim(),
      Balance: balance.replace(/[₦#]/g, '').trim(),
    }));
  
    const ws = XLSX.utils.json_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Transactions');
  
    XLSX.writeFile(wb, `${username}_transaction_history.xlsx`);
  };
  

  const handleDownloadPDF = () => {
    const doc = new jsPDF();
    
    doc.setFontSize(20);
    doc.text(`Transaction History for ${username}`, 14, 22);
    doc.setFontSize(10);
    
    // Define the table columns
    const tableColumn = ["Date", "Description", "Amount", "Balance"];
    const tableRows = [];

    transactions.forEach(transaction => {
      const transactionData = [
        `${transaction.date} -- ${transaction.time}`,
        transaction.description,
        transaction.amount,
        transaction.balance,
      ];
      tableRows.push(transactionData);
    });

    // Generate the table using autoTable
    doc.autoTable(tableColumn, tableRows, { startY: 30 });
    
    // Save the PDF
    doc.save(`${username}_transaction_history.pdf`);
  };

  return (
    <Box sx={{ flexGrow: 1, p: 3, bgcolor: '#f5f5f5', borderRadius: '8px' }}>
      <Grid container spacing={2}>
        {/* User Info */}
        <Grid item xs={12} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 2 }}>
          <Avatar src={userAvatar} alt="User Avatar" sx={{ width: 120, height: 120 }} />
          <Typography variant="h6" sx={{ mt: 1, mb: 1 }}>
            {username}
          </Typography>
        </Grid>

        {/* Header */}
        <Grid item xs={12}>
          <Typography variant="h4" gutterBottom align="center" sx={{ color: '#1976d2' }}>
            Transaction History
          </Typography>
        </Grid>

        {/* Transaction Table */}
        <Grid item xs={12}>
          <Card sx={{ borderRadius: '12px', boxShadow: 4 }}>
            <CardContent>
              <Box sx={{ overflowX: 'auto' }}>
                <Table sx={{ minWidth: 650 }}>
                  <TableHead>
                    <TableRow>
                      <TableCell sx={{ fontWeight: 'bold', bgcolor: '#1976d2', color: '#fff' }}>Date</TableCell>
                      <TableCell sx={{ fontWeight: 'bold', bgcolor: '#1976d2', color: '#fff' }}>Description</TableCell>
                      <TableCell sx={{ fontWeight: 'bold', bgcolor: '#1976d2', color: '#fff' }}>Amount</TableCell>
                      <TableCell sx={{ fontWeight: 'bold', bgcolor: '#1976d2', color: '#fff' }}>Balance</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {transactions.map((transaction, index) => (
                      <TableRow key={index}>
                        <TableCell>{`${transaction.date} -- ${transaction.time}`}</TableCell>
                        <TableCell>{transaction.description}</TableCell>
                        <TableCell sx={{ color: transaction.amount.startsWith('-') ? 'red' : 'green', fontWeight: 'bold' }}>
                          {transaction.amount}
                        </TableCell>
                        <TableCell>{transaction.balance}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* User Buttons */}
        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
          <Button
            variant="outlined"
            color="primary"
            startIcon={<Print />}
            onClick={handlePrint}
            sx={{ mr: 2 }}
          >
            Print
          </Button>
          <Button
            variant="outlined"
            color="success"
            startIcon={<Download />}
            onClick={handleDownloadExcel}
            sx={{ mr: 2 }}
          >
            Download Excel
          </Button>
          <Button
            variant="outlined"
            color="error"
            startIcon={<Download />}
            onClick={handleDownloadPDF}
          >
            Download PDF
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TransactionHistory;
