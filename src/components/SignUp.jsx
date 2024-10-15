import React, { useState } from "react";
import { Box, TextField, Button, Typography, MenuItem } from "@mui/material";
import { Link } from "react-router-dom"; // Import Link for navigation
import logo from '../assets/Login Logo.jpg'; // Update the path to your logo

// Password validation logic
const validatePassword = (password) => {
  const capitalLetter = /[A-Z]/;
  const smallLetter = /[a-z]/;
  const number = /[0-9]/;
  const specialChar = /[!@#$%^&*]/;
  const noSpaces = /^\S+$/;

  return (
    capitalLetter.test(password) &&
    smallLetter.test(password) &&
    number.test(password) &&
    specialChar.test(password) &&
    noSpaces.test(password)
  );
};

const SignUp = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: "",
    maritalStatus: "",
    stateOfOrigin: "",
    pid: "", // PID field
    phoneNumber: "", // Phone Number field
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!formData.fullName) newErrors.fullName = "Full Name is required.";
    if (!formData.email) newErrors.email = "Email is required.";
    if (!formData.phoneNumber) newErrors.phoneNumber = "Phone Number is required."; // Validation for Phone Number
    if (!validatePassword(formData.password))
      newErrors.password = "Password must include an uppercase letter, a lowercase letter, a number, a symbol, and no spaces.";
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match.";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Submit form (send data to backend or proceed further)
      console.log("Form data submitted:", formData);
    }
  };

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "500px",
        margin: "2rem auto",
        padding: "2rem",
        backgroundColor: "#f7f9fc", // Light background for contrast
        borderRadius: "8px",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
        border: "1px solid #1976d2", // Blue border
      }}
    >
      <Typography variant="h4" component="h1" sx={{ textAlign: "center", mb: 3, color: "#1976d2" }}>
        Create Account
      </Typography>
      
      {/* Logo Image */}
      <img src={logo} alt="Logo" style={{ width: '100px', display: 'block', margin: '0 auto 20px' }} /> {/* Center the logo */}

      <form onSubmit={handleSubmit}>
        <TextField
          label="PID (optional)"
          name="pid"
          fullWidth
          margin="normal"
          value={formData.pid}
          onChange={handleChange}
          placeholder="I already have a PID"
          sx={{ mb: 2 }}
        />
        <TextField
          label="Full Name"
          name="fullName"
          fullWidth
          margin="normal"
          value={formData.fullName}
          onChange={handleChange}
          error={!!errors.fullName}
          helperText={errors.fullName}
          sx={{ mb: 2 }}
        />
        <TextField
          label="Email"
          name="email"
          fullWidth
          margin="normal"
          type="email"
          value={formData.email}
          onChange={handleChange}
          error={!!errors.email}
          helperText={errors.email}
          sx={{ mb: 2 }}
        />
        <TextField
          label="Phone Number"
          name="phoneNumber"
          fullWidth
          margin="normal"
          type="tel"
          value={formData.phoneNumber}
          onChange={handleChange}
          error={!!errors.phoneNumber}
          helperText={errors.phoneNumber}
          sx={{ mb: 2 }}
        />
        <TextField
          label="Password"
          name="password"
          fullWidth
          margin="normal"
          type="password"
          value={formData.password}
          onChange={handleChange}
          error={!!errors.password}
          helperText={errors.password}
          sx={{ mb: 2 }}
        />
        <TextField
          label="Confirm Password"
          name="confirmPassword"
          fullWidth
          margin="normal"
          type="password"
          value={formData.confirmPassword}
          onChange={handleChange}
          error={!!errors.confirmPassword}
          helperText={errors.confirmPassword}
          sx={{ mb: 2 }}
        />
        <TextField
          label="Gender"
          name="gender"
          fullWidth
          margin="normal"
          select
          value={formData.gender}
          onChange={handleChange}
          sx={{ mb: 2 }}
        >
          <MenuItem value="male">Male</MenuItem>
          <MenuItem value="female">Female</MenuItem>
          <MenuItem value="other">Other</MenuItem>
        </TextField>
        <TextField
          label="Marital Status"
          name="maritalStatus"
          fullWidth
          margin="normal"
          select
          value={formData.maritalStatus}
          onChange={handleChange}
          sx={{ mb: 2 }}
        >
          <MenuItem value="single">Single</MenuItem>
          <MenuItem value="married">Married</MenuItem>
          <MenuItem value="divorced">Divorced</MenuItem>
        </TextField>
        <TextField
          label="State of Origin"
          name="stateOfOrigin"
          fullWidth
          margin="normal"
          value={formData.stateOfOrigin}
          onChange={handleChange}
          sx={{ mb: 2 }}
        />
        <Button
          type="submit"
          variant="contained"
          fullWidth
          sx={{ mt: 2, py: 1.5, backgroundColor: "#1976d2", '&:hover': { backgroundColor: '#1a7a7a' } }} // Darker blue on hover
        >
          Create Account
        </Button>
      </form>
      <Typography variant="body2" sx={{ textAlign: "center", mt: 2 }}>
        Already have an account?{" "}
        <Link 
          to="/login" // Navigate to login page
          style={{ color: "#1976d2", textDecoration: 'none', fontWeight: 'bold' }} // Style for the link
        >
          Login
        </Link>
      </Typography>
    </Box>
  );
};

export default SignUp;