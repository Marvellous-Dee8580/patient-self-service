import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  InputAdornment,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  CircularProgress,
  Tabs,
  Tab,
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import EventIcon from '@mui/icons-material/Event';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PersonIcon from '@mui/icons-material/Person';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital'; 
import HealingIcon from '@mui/icons-material/Healing'; 
import VaccinesIcon from '@mui/icons-material/Vaccines'; 
import PsychologyIcon from '@mui/icons-material/Psychology'; 
// import backgroundImage from '../assets/bookappointment.jpg';

const appointmentTypes = [
  { value: 'consultation', label: 'Consultation', icon: <MedicalServicesIcon /> },
];
const clinicTypes = [
  { value: 'surgery', label: 'Surgery', icon: <LocalHospitalIcon /> },
  { value: 'therapy', label: 'Therapy', icon: <HealingIcon /> },
  { value: 'vaccination', label: 'Vaccination', icon: <VaccinesIcon /> },
  { value: 'counseling', label: 'Counseling', icon: <PsychologyIcon /> },
];

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
  const [clinicType, setClinicType] = useState('');
  const [date, setDate] = useState(null);
  const [time, setTime] = useState('');
  const [patientName, setPatientName] = useState('');
  const [comment, setComment] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [view, setView] = useState('book'); // 'book' or 'status'

  const timeSlots = generateTimeSlots();

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSuccess(true);

      setPatientName('');
      setAppointmentType('');
      setClinicType('');
      setDate(null);
      setTime('');
      setComment('');

      setTimeout(() => {
        setSuccess(false);
      }, 3000);
    }, 3000); 
  };

// Appointment status data with corresponding colors
    const appointmentStatus = [
    { date: '2024-10-10', time: '10:00', type: 'Consultation', status: 'Approved', color: 'green' },
    { date: '2024-10-15', time: '12:30', type: 'Consultation', status: 'Pending', color: 'orange' },
    { date: '2024-10-20', time: '14:00', type: 'Consultation', status: 'Declined', color: 'red' },
    { date: '2024-10-25', time: '09:00', type: 'Consultation', status: 'Approved', color: 'green' },
    { date: '2024-10-30', time: '15:00', type: 'Consultation', status: 'Pending', color: 'orange' },
  ];  

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Box
        sx={{
        //   backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          minHeight: '100vh',
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
            bgcolor: 'rgba(255, 255, 255, 0.9)',
            boxShadow: 4,
            borderRadius: 3,
            textAlign: 'center',
          }}
        >
          {/* Tab to switch between views */}
          <Tabs
            value={view}
            onChange={(e, newValue) => setView(newValue)}
            centered
            textColor="primary"
            indicatorColor="primary"
          >
            <Tab label="Book Appointment" value="book" />
            <Tab label="Appointment Status" value="status" />
          </Tabs>

          {view === 'book' ? (
            <>
              {/* Book Appointment Form */}
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 4, mt:4 }}>
                <CalendarTodayIcon sx={{ fontSize: '2rem', mr: 1, color: '#3f51b5' }} />
                <Typography variant="h4" component="h1" sx={{ fontWeight: 'bold', color: '#3f51b5' }}>
                    Book Appointment
                </Typography>
              </Box>

              <Typography variant="body1" sx={{ mb: 4 }}>
                Choose your desired appointment type and schedule a date and time.
              </Typography>

              <Box component="form" onSubmit={handleSubmit} sx={{ width: '100%', p: 3 }}>
                <Grid container spacing={3}>
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

                  <Grid item xs={12}>
                    <FormControl fullWidth required>
                      <InputLabel id="clinic-type-label">Select Clinic</InputLabel>
                      <Select
                        labelId="appointment-type-label"
                        value={clinicType}
                        label="Clinic Type"
                        onChange={(e) => setClinicType(e.target.value)}
                      >
                        {clinicTypes.map((option) => (
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

                  <Grid item xs={12} sm={6}>
                    <TextField
                      select
                      label="Select Time"
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                      fullWidth
                      required
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <AccessTimeIcon />
                          </InputAdornment>
                        ),
                      }}
                    >
                      {timeSlots.map((slot) => (
                        <MenuItem key={slot} value={slot}>
                          {slot}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      label="Comments (optional)"
                      multiline
                      rows={4}
                      fullWidth
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                    />
                  </Grid>
                </Grid>

                <Box sx={{ mt: 4, textAlign: 'center' }}>
                  <Button variant="contained" color="primary" type="submit" disabled={loading}>
                    Book Appointment
                  </Button>
                </Box>
              </Box>
            </>
          ) : (
            <>
              {/* Appointment Status Section */}
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 4, justifyContent: 'center', mt: 4 }}>
                <CheckCircleIcon sx={{ fontSize: '2rem', mr: 1, color: '#3f51b5' }} />
                <Typography variant="h4" component="h1" sx={{ fontWeight: 'bold', color: '#3f51b5' }}>
                  Appointment Status
                </Typography>
              </Box>

              <Typography variant="body1" sx={{ mb: 4 }}>
                Here are your upcoming appointments.
              </Typography>

              <Grid container spacing={3}>
                {appointmentStatus.map((appointment, index) => (
                  <Grid item xs={12} key={index}>
                    <Box
                      sx={{
                        p: 2,
                        border: '1px solid #3f51b5',
                        borderRadius: 2,
                        textAlign: 'left',
                        backgroundColor: '#f5f5f5',
                      }}
                    >
                      <Typography variant="h6">
                        {appointment.type} - {appointment.date} at {appointment.time}
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        Status: <span style={{ color: appointment.color }}>{appointment.status}</span>
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </>
          )}
        </Container>
      </Box>

      {/* Loading Spinner */}
      <Dialog open={loading}>
        <DialogTitle>Loading...</DialogTitle>
        <DialogContent>
          <CircularProgress />
        </DialogContent>
      </Dialog>

      {/* Success Message */}
      <Dialog open={success}>
        <DialogTitle>Success</DialogTitle>
        <DialogContent>
          <Typography>Your appointment has been booked successfully!</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setSuccess(false)} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </LocalizationProvider>
  );
};

export default BookAppointment;