import React, { useState } from 'react';
import { Box, Container, Typography, Grid, TextField, Button, MenuItem, Select, InputLabel, FormControl } from '@mui/material';
import { DatePicker, TimePicker } from '@mui/x-date-pickers';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

const appointmentTypes = [
  { value: 'consultation', label: 'Consultation' },
  { value: 'laboratory', label: 'Laboratory Test' },
  { value: 'radiology', label: 'Radiology' },
];

const BookAppointment = () => {
  const [appointmentType, setAppointmentType] = useState('');
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);
  const [patientName, setPatientName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic
    console.log('Appointment Type:', appointmentType);
    console.log('Patient Name:', patientName);
    console.log('Date:', date);
    console.log('Time:', time);
    alert('Appointment successfully booked!');
  };

  return (
    <Container maxWidth="md" sx={{ mt: 5 }}>
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Book Appointment
        </Typography>
        <Typography variant="body1">
          Choose your desired appointment type and schedule a date and time.
        </Typography>
      </Box>

      <Box component="form" onSubmit={handleSubmit} sx={{ p: 4, bgcolor: '#f9f9f9', borderRadius: 2, boxShadow: 3 }}>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <TextField
              label="Patient Name"
              fullWidth
              value={patientName}
              onChange={(e) => setPatientName(e.target.value)}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth required>
              <InputLabel id="appointment-type-label">Appointment Type</InputLabel>
              <Select
                labelId="appointment-type-label"
                value={appointmentType}
                label="Appointment Type"
                onChange={(e) => setAppointmentType(e.target.value)}
              >
                {appointmentTypes.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                label="Select Date"
                value={date}
                onChange={(newValue) => setDate(newValue)}
                renderInput={(params) => <TextField {...params} fullWidth required />}
              />
            </LocalizationProvider>
          </Grid>
          <Grid item xs={12} sm={6}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <TimePicker
                label="Select Time"
                value={time}
                onChange={(newValue) => setTime(newValue)}
                renderInput={(params) => <TextField {...params} fullWidth required />}
              />
            </LocalizationProvider>
          </Grid>
        </Grid>

        <Box sx={{ mt: 4, textAlign: 'center' }}>
          <Button variant="contained" color="primary" type="submit">
            Book Appointment
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default BookAppointment;