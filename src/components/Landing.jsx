import React, { useState } from 'react';
import { Box, Typography, Button, Container, Modal, TextField, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, CircularProgress } from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import backgroundImage from '../assets/HEALTHCARE_ENVIRONMENT-RENDER_01-crop.jpeg';
import successImage from '../assets/Success.png'; // Import your success image

const Landing = () => {
  const [open, setOpen] = useState(false); // For the deposit modal
  const [openConfirm, setOpenConfirm] = useState(false); // For confirmation dialog
  const [openSuccess, setOpenSuccess] = useState(false); // For success modal
  const [openLoader, setOpenLoader] = useState(false); // For loader modal
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
  const handleLoaderClose = () => setOpenLoader(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleConfirmOpen();
  };

  const handleFinalSubmit = () => {
    console.log('Deposit Submitted', formValues);
    setOpenLoader(true); // Show loader modal
    handleConfirmClose();
    handleClose();

    // Simulate a network request
    setTimeout(() => {
      setOpenLoader(false); // Close loader modal after some time
      setOpenSuccess(true); // Show success modal
    }, 3000); // Adjust the duration as needed
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

      {/* Loader Modal */}
      <Modal open={openLoader} onClose={handleLoaderClose}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
            textAlign: 'center',
          }}
        >
          <CircularProgress />
          <Typography variant="h6" sx={{ mt: 2 }}>
            Processing your deposit...
          </Typography>
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
            <Typography
              variant="h2"
              component="h1"
              sx={{ mb: 2, fontWeight: 'bold', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)' }}
            >
              Welcome to Our Self-Service Kiosk
            </Typography>
            <Typography
              variant="h5"
              sx={{ mb: 4, textShadow: '1px 1px 3px rgba(0, 0, 0, 0.5)' }}
            >
              Manage your wallet and payments effortlessly with our intuitive system.
            </Typography>

            {/* Button to open the deposit modal */}
            <Button
              variant="contained"
              onClick={handleOpen}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              sx={{
                backgroundColor: '#1976d2',
                '&:hover': { backgroundColor: '#115293' },
                transition: 'background-color 0.3s',
              }}
            >
              {buttonText}
            </Button>

            {/* Signup text and link */}
            <Box sx={{ mt: 2, textAlign: 'center' }}>
              <Typography variant="body2" sx={{ color: '#fff', mb: 2, fontWeight: 'bold' }}>
                Already have an account?
              </Typography>
              <Link to="/login" style={{ textDecoration: 'none', fontWeight: 'bold', padding: '4px 8px', border: '2px solid #1976d2', borderRadius: '4px', color: '#ffffff', display: 'inline-block' }}>
                Login
              </Link>
            </Box>

            {/* Forgot password text and link */}
            <Box sx={{ mt: 4, textAlign: 'center' }}>
              <Typography variant="body2" sx={{ color: '#fff', mb: 2, fontWeight: 'bold' }}>
                Forgot your password?
              </Typography>
              <Link to="/forgot-password" style={{ textDecoration: 'none', fontWeight: 'bold', padding: '4px 8px', border: '2px solid #1976d2', borderRadius: '4px', color: '#ffffff', display: 'inline-block' }}>
                Reset it here
              </Link>
            </Box>
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
              borderRadius: 2, // Rounded corners for the modal
              border: '1px solid #1976d2', // Border color to match the theme
            }}
          >
            <Typography id="modal-title" variant="h6" component="h2" mb={2} sx={{ textAlign: 'center', fontWeight: 'bold' }}>
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
                sx={{ bgcolor: '#f5f5f5', borderRadius: 1 }} // Light background for input
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
                sx={{ bgcolor: '#f5f5f5', borderRadius: 1 }} // Light background for input
              />
              <TextField
                name="description"
                label="Description"
                fullWidth
                margin="normal"
                value={formValues.description}
                onChange={handleChange}
                sx={{ bgcolor: '#f5f5f5', borderRadius: 1 }} // Light background for input
              />
              <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
                Make Payment
              </Button>
            </form>
          </Box>
        </Modal>

        {/* Confirmation Dialog */}
        <Dialog open={openConfirm} onClose={handleConfirmClose}>
          <DialogTitle sx={{ fontWeight: 'bold', textAlign: 'center' }}>Confirm Deposit</DialogTitle>
          <DialogContent>
            <DialogContentText sx={{ mb: 2 }}>
              Are you sure you want to deposit the following details?
            </DialogContentText>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Typography variant="body1" sx={{ fontWeight: 'bold' }}>Amount:</Typography>
              <Typography variant="body2" sx={{ color: '#1976d2' }}>{formValues.amount} </Typography>
              
              <Typography variant="body1" sx={{ fontWeight: 'bold' }}>PID:</Typography>
              <Typography variant="body2" sx={{ color: '#1976d2' }}>{formValues.pid}</Typography>
              
              <Typography variant="body1" sx={{ fontWeight: 'bold' }}>Description:</Typography>
              <Typography variant="body2" sx={{ color: '#1976d2' }}>{formValues.description || 'No description provided'}</Typography>
            </Box>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleConfirmClose} color="primary">Cancel</Button>
            <Button onClick={handleFinalSubmit} color="primary">Confirm</Button>
          </DialogActions>
        </Dialog>
      </>
    </Box>
  );
};

export default Landing;
