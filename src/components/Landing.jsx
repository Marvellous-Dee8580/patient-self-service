import React, { useState } from 'react';
import { Box, Typography, Button, Container, Modal, TextField, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import backgroundImage from '../assets/HEALTHCARE_ENVIRONMENT-RENDER_01-crop.jpeg';
import successImage from '../assets/Success.png'; // Import your success image

const Landing = () => {
  const [open, setOpen] = useState(false); // For the deposit modal
  const [openConfirm, setOpenConfirm] = useState(false); // For confirmation dialog
  const [openSuccess, setOpenSuccess] = useState(false); // For success modal
  const [buttonText, setButtonText] = useState('Make Deposit'); // State for button text

  const [formValues, setFormValues] = useState({ amount: 0.0, description: '', pid: 0 });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'amount') {
      setFormValues({ ...formValues, [name]: parseFloat(value) });
    } else if (name === 'pid') {
      setFormValues({ ...formValues, [name]: parseInt(value, 10) });
    } else {
      setFormValues({ ...formValues, [name]: value });
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    if (name === 'amount') {
      const numericValue = parseFloat(value);
      if (Number.isInteger(numericValue)) {
        setFormValues((prev) => ({ ...prev, amount: parseFloat(value + '.00') }));
      }
    }
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleConfirmOpen = () => setOpenConfirm(true);
  const handleConfirmClose = () => setOpenConfirm(false);
  const handleSuccessClose = () => setOpenSuccess(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleConfirmOpen();
  };

  const handleFinalSubmit = () => {
    console.log('Deposit Submitted', formValues);
    setOpenSuccess(true); // Show success modal
    handleConfirmClose();
    handleClose();
  };

  const handleMouseEnter = () => {
    setButtonText('Proceed...');
  };

  const handleMouseLeave = () => {
    setButtonText('Make Deposit');
  };

  return (
    <Box
      sx={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'top',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
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
      {/* Success Modal */}
      <Modal open={openSuccess} onClose={handleSuccessClose} aria-labelledby="success-modal-title" aria-describedby="success-modal-description">
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
            textAlign: 'center',
          }}
        >
          <img src={successImage} alt="Success" style={{ width: '100px', marginBottom: '16px' }} />
          <Typography id="success-modal-title" variant="h6" color="green" gutterBottom>
            Deposit Successful!
          </Typography>
          <Typography id="success-modal-description" variant="body1">
            Thank you for your payment. Your transaction has been completed.
          </Typography>
          <Button variant="contained" color="primary" onClick={handleSuccessClose} sx={{ mt: 2 }}>
            Go Back
          </Button>
        </Box>
      </Modal>

      {/* Main Content */}
      <>
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
            
            {/* Button to open the deposit modal */}
            <Button
              variant="contained"
              color="primary"
              size="large"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onClick={handleOpen}
            >
              {buttonText}
            </Button>
          </motion.div>
        </Container>

        {/* Modal for making deposit */}
        <Modal open={open} onClose={handleClose} aria-labelledby="modal-title" aria-describedby="modal-description">
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: 400,
              bgcolor: 'background.paper',
              boxShadow: 24,
              p: 4,
            }}
          >
            <Typography id="modal-title" variant="h6" component="h2" mb={2}>
              Make a Deposit
            </Typography>
            <form onSubmit={handleSubmit}>
              <TextField
                name="pid"
                label="PID"
                fullWidth
                required
                margin="normal"
                type="number"
                value={formValues.pid}
                onChange={handleChange}
              />
              <TextField
                name="amount"
                label="Amount (Naira and Kobo)"
                fullWidth
                required
                margin="normal"
                type="number"
                step="0.01"
                value={formValues.amount}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <TextField
                name="description"
                label="Description"
                fullWidth
                margin="normal"
                value={formValues.description}
                onChange={handleChange}
              />
              <Button type="submit" variant="contained" color="primary" fullWidth>
                Make Payment
              </Button>
            </form>
          </Box>
        </Modal>

        {/* Confirmation dialog */}
        <Dialog
          open={openConfirm}
          onClose={handleConfirmClose}
          aria-labelledby="confirm-dialog-title"
          aria-describedby="confirm-dialog-description"
        >
          <DialogTitle id="confirm-dialog-title">Confirm Deposit</DialogTitle>
          <DialogContent>
            <DialogContentText id="confirm-dialog-description">
              Are you sure you want to proceed with payment?
            </DialogContentText>
            <br />
            <Typography variant="body1"><strong>PID:</strong> {formValues.pid}</Typography>
            <Typography variant="body1"><strong>Amount:</strong> {formValues.amount}</Typography>
            <Typography variant="body1"><strong>Description:</strong> {formValues.description}</Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleConfirmClose} color="primary">
              Cancel
            </Button>
            <Button onClick={handleFinalSubmit} color="primary">
              Confirm
            </Button>
          </DialogActions>
        </Dialog>
      </>
    </Box>
  );
};

export default Landing;