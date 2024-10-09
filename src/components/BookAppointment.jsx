import React, { useState } from 'react';
import { Box, Container, Typography, Grid, TextField, Button, MenuItem, Select, InputLabel, FormControl, InputAdornment } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import EventIcon from '@mui/icons-material/Event';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PersonIcon from '@mui/icons-material/Person';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'; // Icon next to heading
import backgroundImage from '../assets/bookappointment.jpg';
// import backgroundImage from '../assets/bookappointment2.jpg';
// import backgroundImage from '../assets/bookappointment3.webp';


const appointmentTypes = [
  { value: 'consultation', label: 'Consultation', icon: <MedicalServicesIcon /> },
  { value: 'laboratory', label: 'Laboratory Test', icon: <MedicalServicesIcon /> },
  { value: 'radiology', label: 'Radiology', icon: <MedicalServicesIcon /> },
];

// Function to generate time slots from 00:00 to 23:30 in 30-minute intervals
const generateTimeSlots = () => {
  const times = [];
  for (let hour = 0; hour < 24; hour++) {
    const formattedHour = String(hour).padStart(2, '0');
    times.push(`${formattedHour}:00`, `${formattedHour}:30`);
  }
  return times;
};

const BookAppointment = () => {
  const [appointmentType, setAppointmentType] = useState('');
  const [date, setDate] = useState(null);
  const [time, setTime] = useState('');
  const [patientName, setPatientName] = useState('');
  const [comment, setComment] = useState(''); // New comment state

  const timeSlots = generateTimeSlots();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Appointment Type:', appointmentType);
    console.log('Patient Name:', patientName);
    console.log('Date:', date);
    console.log('Time:', time);
    console.log('Comment:', comment); // Log the optional comment
    alert('Appointment successfully booked!');
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Box
        sx={{
          backgroundImage: `url(${backgroundImage})`, // Replace with the actual path of your image
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          minHeight: '100vh', // Ensures it covers the full screen height
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          p: 2,
        }}
      >
        <Container
          maxWidth="sm"
          sx={{
            p: 5,
            bgcolor: 'rgba(255, 255, 255, 0.9)', // Slightly transparent white background
            boxShadow: 4,
            borderRadius: 3,
            textAlign: 'center',
          }}
        >
          {/* Heading with Icon */}
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
            <CalendarTodayIcon sx={{ fontSize: '2rem', mr: 1, color: '#3f51b5' }} />
            <Typography variant="h4" component="h1" sx={{ fontWeight: 'bold', color: '#3f51b5' }}>
              Book Appointment
            </Typography>
          </Box>

          <Typography variant="body1" sx={{ mb: 4 }}>
            Choose your desired appointment type and schedule a date and time.
          </Typography>

          {/* Form Section */}
          <Box component="form" onSubmit={handleSubmit} sx={{ width: '100%', p: 3 }}>
            <Grid container spacing={3}>
              {/* Patient Name Input */}
              <Grid item xs={12}>
                <TextField
                  label="Patient Name"
                  fullWidth
                  value={patientName}
                  onChange={(e) => setPatientName(e.target.value)}
                  required
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PersonIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>

              {/* Appointment Type Select */}
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
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                          {option.icon}
                          <Typography sx={{ ml: 2 }}>{option.label}</Typography>
                        </Box>
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>

              {/* Date Picker */}
              <Grid item xs={12} sm={6}>
                <DatePicker
                  label="Select Date"
                  value={date}
                  onChange={(newValue) => setDate(newValue)}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      fullWidth
                      required
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <EventIcon />
                          </InputAdornment>
                        ),
                      }}
                    />
                  )}
                />
              </Grid>

              {/* Time Select Dropdown */}
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth required>
                  <InputLabel id="time-label">Select Time</InputLabel>
                  <Select
                    labelId="time-label"
                    value={time}
                    label="Select Time"
                    onChange={(e) => setTime(e.target.value)}
                    MenuProps={{
                      PaperProps: {
                        style: {
                          maxHeight: 200, // Limit dropdown height
                        },
                      },
                    }}
                  >
                    {timeSlots.map((timeSlot, index) => (
                      <MenuItem key={index} value={timeSlot}>
                        {timeSlot}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>

              {/* Comment Input */}
              <Grid item xs={12}>
                <TextField
                  label="Comment (Optional)"
                  fullWidth
                  multiline
                  rows={3}
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="Any additional information..."
                />
              </Grid>
            </Grid>

            {/* Submit Button */}
            <Box sx={{ mt: 4, textAlign: 'center' }}>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                sx={{
                  px: 4,
                  py: 1.5,
                  fontSize: '1rem',
                  fontWeight: 'bold',
                  bgcolor: '#3f51b5',
                  ':hover': { bgcolor: '#303f9f' },
                }}
              >
                Book Appointment
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
    </LocalizationProvider>
  );
};

export default BookAppointment;