import React, { useState } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom"; // Import Link for navigation
import backgroundImage from '../assets/istockphoto-1301633822-612x612.jpg'; // Update with your background image path
import logo from '../assets/Login Logo.jpg'; // Update with your logo path

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation for email
    if (!email) {
      setError("Email is required.");
      return;
    } else {
      setError("");
    }

    // Simulate password reset process
    console.log("Password reset link sent to:", email);
    setMessage("A password reset link has been sent to your email address.");
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: "400px",
          padding: "2rem",
          backgroundColor: "rgba(255, 255, 255, 0.9)", // Semi-transparent white
          borderRadius: "12px",
          boxShadow: "0 8px 30px rgba(0, 0, 0, 0.15)",
          textAlign: "center",
        }}
      >
        <img src={logo} alt="Logo" style={{ width: '100px', marginBottom: '20px' }} />
        <Typography variant="h5" component="h1" sx={{ mb: 3, color: "#1976d2" }}>
          Forgot Password
        </Typography>
        
        <form onSubmit={handleSubmit}>
          <TextField
            label="Email"
            name="email"
            fullWidth
            margin="normal"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={!!error}
            helperText={error}
            sx={{
              mb: 2,
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: '#1976d2',
                },
                '&:hover fieldset': {
                  borderColor: '#1a7a7a',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#1976d2',
                },
              },
            }}
          />
          
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              mt: 2,
              py: 1.5,
              backgroundColor: "#1976d2",
              '&:hover': { backgroundColor: '#1a7a7a' },
              borderRadius: '8px',
              fontWeight: 'bold',
            }}
          >
            Send Reset Link
          </Button>
        </form>

        {message && (
          <Typography variant="body2" sx={{ mt: 2, color: "green" }}>
            {message}
          </Typography>
        )}

        <Typography variant="body2" sx={{ mt: 2 }}>
          Remembered your password?{" "}
          <Link 
            to="/login" // Navigate to login page
            style={{ color: "#1976d2", textDecoration: 'none', fontWeight: 'bold' }} // Style for the link
          >
            Login
          </Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default ForgotPassword;
