// import React, { useState } from 'react';
// import {
//   Box,
//   Container,
//   Typography,
//   Grid,
//   Button,
//   Tabs,
//   Tab,
//   TextField,
//   InputAdornment,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
//   IconButton,
//   MenuItem,
// } from '@mui/material';
// import SearchIcon from '@mui/icons-material/Search';
// import CheckCircleIcon from '@mui/icons-material/CheckCircle';
// import QueryBuilderIcon from '@mui/icons-material/QueryBuilder'; // For pending status
// import PrintIcon from '@mui/icons-material/Print';
// import DownloadIcon from '@mui/icons-material/Download';
// import { useReactToPrint } from 'react-to-print';

// const initialResultsHistory = [
//   { id: '123', type: 'Laboratory', status: 'Completed', date: '2024-10-01' },
//   { id: '124', type: 'Radiology', status: 'Pending', date: '2024-10-02' },
//   { id: '125', type: 'Laboratory', status: 'Completed', date: '2024-10-03' },
// ];

// const CheckResultsStatus = () => {
//   const [activeTab, setActiveTab] = useState(0);
//   const [resultsId, setResultsId] = useState('');
//   const [results, setResults] = useState(null);
//   const [openDialog, setOpenDialog] = useState(false);
//   const [resultsHistory, setResultsHistory] = useState(initialResultsHistory);
//   const [filteredResults, setFilteredResults] = useState(initialResultsHistory);
//   const [filterType, setFilterType] = useState('');
//   const [filterDate, setFilterDate] = useState('');

//   const handleChangeTab = (event, newValue) => {
//     setActiveTab(newValue);
//     setResultsId('');
//     setResults(null);
//   };

//   const handleSearchResults = () => {
//     setOpenDialog(true);
//     const foundResult = resultsHistory.find(result => result.id === resultsId);
//     setResults(foundResult || null);
//   };

//   const handleFilterChange = () => {
//     setFilteredResults(
//       resultsHistory.filter((result) => {
//         const typeMatch = filterType ? result.type === filterType : true;
//         const dateMatch = filterDate ? result.date === filterDate : true;
//         return typeMatch && dateMatch;
//       })
//     );
//   };

//   const handlePrint = useReactToPrint({
//     content: () => document.getElementById('results-history-table'),
//   });

//   return (
//     <Container maxWidth="md" sx={{ mt: 5 }}>
//       <Typography variant="h4" sx={{ textAlign: 'center', mb: 3 }}>
//         Check Results Status
//       </Typography>

//       <Tabs value={activeTab} onChange={handleChangeTab} centered>
//         <Tab label="Laboratory" />
//         <Tab label="Radiology" />
//       </Tabs>

//       <Box sx={{ mt: 3, textAlign: 'center' }}>
//         <TextField
//           label="Enter Results ID"
//           variant="outlined"
//           value={resultsId}
//           onChange={(e) => setResultsId(e.target.value)}
//           InputProps={{
//             endAdornment: (
//               <InputAdornment position="end">
//                 <Button variant="contained" color="primary" onClick={handleSearchResults}>
//                   <SearchIcon />
//                 </Button>
//               </InputAdornment>
//             ),
//           }}
//           fullWidth
//         />
//       </Box>

//       {results && (
//         <Box sx={{ mt: 5, textAlign: 'center' }}>
//           <Typography variant="h6">Results Status</Typography>
//           <Typography variant="body1">Type: {results.type}</Typography>
//           <Typography variant="body1">ID: {results.id}</Typography>
//           <Typography variant="body1">Status: {results.status}</Typography>
//           {results.status === 'Completed' ? (
//             <CheckCircleIcon sx={{ fontSize: '5rem', color: 'green' }} />
//           ) : (
//             <QueryBuilderIcon sx={{ fontSize: '5rem', color: 'orange' }} />
//           )}
//         </Box>
//       )}

//       <Box sx={{ mt: 4 }}>
//         <Typography variant="h6" sx={{ mb: 2 }}>
//           Filter Results History
//         </Typography>
//         <Grid container spacing={2}>
//           <Grid item xs={12} sm={6}>
//             <TextField
//               label="Filter by Type"
//               select
//               fullWidth
//               value={filterType}
//               onChange={(e) => setFilterType(e.target.value)}
//             >
//               <MenuItem value="">All</MenuItem>
//               <MenuItem value="Laboratory">Laboratory</MenuItem>
//               <MenuItem value="Radiology">Radiology</MenuItem>
//             </TextField>
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <TextField
//               label="Filter by Date"
//               type="date"
//               fullWidth
//               value={filterDate}
//               onChange={(e) => setFilterDate(e.target.value)}
//               InputLabelProps={{
//                 shrink: true,
//               }}
//             />
//           </Grid>
//         </Grid>
//         <Button variant="contained" color="primary" onClick={handleFilterChange} sx={{ mt: 2 }}>
//           Apply Filter
//         </Button>
//       </Box>

//       <TableContainer component={Paper} sx={{ mt: 4 }} id="results-history-table">
//         <Table>
//           <TableHead>
//             <TableRow>
//               <TableCell>ID</TableCell>
//               <TableCell>Type</TableCell>
//               <TableCell>Status</TableCell>
//               <TableCell>Date</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {filteredResults.map((result) => (
//               <TableRow
//                 key={result.id}
//                 sx={{
//                   backgroundColor: result.status === 'Completed' ? 'lightgreen' : 'lightyellow',
//                 }}
//               >
//                 <TableCell>{result.id}</TableCell>
//                 <TableCell>{result.type}</TableCell>
//                 <TableCell>{result.status}</TableCell>
//                 <TableCell>{result.date}</TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>

//       <Box sx={{ mt: 2, textAlign: 'center' }}>
//         <IconButton onClick={handlePrint}>
//           <PrintIcon />
//         </IconButton>
//         <IconButton>
//           <DownloadIcon />
//         </IconButton>
//       </Box>

//       <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
//         <DialogTitle>Results Status</DialogTitle>
//         <DialogContent>
//           {results ? (
//             <Typography>
//               Your {results.type} results with ID <strong>{results.id}</strong> have been successfully retrieved.
//             </Typography>
//           ) : (
//             <Typography>No results found for the provided ID.</Typography>
//           )}
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={() => setOpenDialog(false)}>Close</Button>
//         </DialogActions>
//       </Dialog>
//     </Container>
//   );
// };

// export default CheckResultsStatus;

// import React, { useState } from 'react';
// import {
//   Box,
//   Container,
//   Typography,
//   Grid,
//   TextField,
//   Button,
//   MenuItem,
//   Select,
//   InputLabel,
//   FormControl,
//   InputAdornment,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
//   CircularProgress,
//   Tabs,
//   Tab,
// } from '@mui/material';
// import { DatePicker } from '@mui/x-date-pickers';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
// import EventIcon from '@mui/icons-material/Event';
// import AccessTimeIcon from '@mui/icons-material/AccessTime';
// import PersonIcon from '@mui/icons-material/Person';
// import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
// import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
// import CheckCircleIcon from '@mui/icons-material/CheckCircle';
// // import backgroundImage from '../assets/bookappointment.jpg';

// const appointmentTypes = [
//   { value: 'laboratory', label: 'Laboratory', icon: <MedicalServicesIcon /> },
//   { value: 'radiology', label: 'Radiology', icon: <MedicalServicesIcon /> },
// ];

// const generateTimeSlots = () => {
//   const times = [];
//   for (let hour = 0; hour < 24; hour++) {
//     const formattedHour = String(hour).padStart(2, '0');
//     times.push(`${formattedHour}:00`, `${formattedHour}:30`);
//   }
//   return times;
// };

// const CheckResultsStatus = () => {
//   const [appointmentType, setAppointmentType] = useState('');
//   const [date, setDate] = useState(null);
//   const [time, setTime] = useState('');
//   const [patientName, setPatientName] = useState('');
//   const [comment, setComment] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [success, setSuccess] = useState(false);
//   const [view, setView] = useState('book'); // 'book' or 'status'

//   const timeSlots = generateTimeSlots();

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     setLoading(true);

//     setTimeout(() => {
//       setLoading(false);
//       setSuccess(true);

//       setPatientName('');
//       setAppointmentType('');
//       setDate(null);
//       setTime('');
//       setComment('');

//       setTimeout(() => {
//         setSuccess(false);
//       }, 3000);
//     }, 3000); 
//   };

//   // Appointment status data with corresponding colors
//   const appointmentStatus = {
//     laboratory: [
//       { date: '2024-10-20', time: '14:00', status: 'Declined', color: 'red' },
//       { date: '2024-10-25', time: '09:00', status: 'Approved', color: 'green' },
//     ],
//     radiology: [
//       { date: '2024-10-30', time: '15:00', status: 'Pending', color: 'orange' },
//     ],
//   };

//   return (
//     <LocalizationProvider dateAdapter={AdapterDateFns}>
//       <Box
//         sx={{
//           // backgroundImage: `url(${backgroundImage})`,
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//           backgroundRepeat: 'no-repeat',
//           minHeight: '100vh',
//           display: 'flex',
//           justifyContent: 'center',
//           alignItems: 'center',
//           p: 2,
//         }}
//       >
//         <Container
//           maxWidth="sm"
//           sx={{
//             p: 5,
//             bgcolor: 'rgba(255, 255, 255, 0.9)',
//             boxShadow: 4,
//             borderRadius: 3,
//             textAlign: 'center',
//           }}
//         >
//           {/* Tab to switch between views */}
//           <Tabs
//             value={view}
//             onChange={(e, newValue) => setView(newValue)}
//             centered
//             textColor="primary"
//             indicatorColor="primary"
//           >
//             <Tab label="Book Appointment" value="book" />
//             <Tab label="Appointment Status" value="status" />
//           </Tabs>

//           {view === 'book' ? (
//             <>
//               {/* Book Appointment Form */}
//               <Box sx={{ display: 'flex', alignItems: 'center', mb: 4, justifyContent: 'center', mt: 4, }}>
//                 <CalendarTodayIcon sx={{ fontSize: '2rem', mr: 1, color: '#3f51b5' }} />
//                 <Typography variant="h4" component="h1" sx={{ fontWeight: 'bold', color: '#3f51b5' }}>
//                   Book Appointment
//                 </Typography>
//               </Box>

//               <Typography variant="body1" sx={{ mb: 4 }}>
//                 Choose your desired appointment type and schedule a date and time.
//               </Typography>

//               <Box component="form" onSubmit={handleSubmit} sx={{ width: '100%', p: 3 }}>
//                 <Grid container spacing={3}>
//                   <Grid item xs={12}>
//                     <TextField
//                       label="Patient Name"
//                       fullWidth
//                       value={patientName}
//                       onChange={(e) => setPatientName(e.target.value)}
//                       required
//                       InputProps={{
//                         startAdornment: (
//                           <InputAdornment position="start">
//                             <PersonIcon />
//                           </InputAdornment>
//                         ),
//                       }}
//                     />
//                   </Grid>

//                   <Grid item xs={12}>
//                     <FormControl fullWidth required>
//                       <InputLabel id="appointment-type-label">Appointment Type</InputLabel>
//                       <Select
//                         labelId="appointment-type-label"
//                         value={appointmentType}
//                         label="Appointment Type"
//                         onChange={(e) => setAppointmentType(e.target.value)}
//                       >
//                         {appointmentTypes.map((option) => (
//                           <MenuItem key={option.value} value={option.value}>
//                             <Box sx={{ display: 'flex', alignItems: 'center' }}>
//                               {option.icon}
//                               <Typography sx={{ ml: 2 }}>{option.label}</Typography>
//                             </Box>
//                           </MenuItem>
//                         ))}
//                       </Select>
//                     </FormControl>
//                   </Grid>

//                   <Grid item xs={12} sm={6}>
//                     <DatePicker
//                       label="Select Date"
//                       value={date}
//                       onChange={(newValue) => setDate(newValue)}
//                       renderInput={(params) => (
//                         <TextField
//                           {...params}
//                           fullWidth
//                           required
//                           InputProps={{
//                             startAdornment: (
//                               <InputAdornment position="start">
//                                 <EventIcon />
//                               </InputAdornment>
//                             ),
//                           }}
//                         />
//                       )}
//                     />
//                   </Grid>

//                   <Grid item xs={12} sm={6}>
//                     <TextField
//                       select
//                       label="Select Time"
//                       value={time}
//                       onChange={(e) => setTime(e.target.value)}
//                       fullWidth
//                       required
//                       InputProps={{
//                         startAdornment: (
//                           <InputAdornment position="start">
//                             <AccessTimeIcon />
//                           </InputAdornment>
//                         ),
//                       }}
//                     >
//                       {timeSlots.map((slot) => (
//                         <MenuItem key={slot} value={slot}>
//                           {slot}
//                         </MenuItem>
//                       ))}
//                     </TextField>
//                   </Grid>

//                   <Grid item xs={12}>
//                     <TextField
//                       label="Comments (optional)"
//                       multiline
//                       rows={4}
//                       fullWidth
//                       value={comment}
//                       onChange={(e) => setComment(e.target.value)}
//                     />
//                   </Grid>
//                 </Grid>

//                 <Box sx={{ mt: 4, textAlign: 'center' }}>
//                   <Button variant="contained" color="primary" type="submit" disabled={loading}>
//                     Book Appointment
//                   </Button>
//                 </Box>
//               </Box>
//             </>
//           ) : (
//             <>
//               {/* Appointment Status Section */}
//               <Box sx={{ display: 'flex', alignItems: 'center', mb: 4, justifyContent: 'center', mt: 4, }}>
//                 <CheckCircleIcon sx={{ fontSize: '2rem', mr: 1, color: '#3f51b5' }} />
//                 <Typography variant="h4" component="h1" sx={{ fontWeight: 'bold', color: '#3f51b5' }}>
//                   Appointment Status
//                 </Typography>
//               </Box>

//               <Typography variant="body1" sx={{ mb: 4 }}>
//                 Here are your upcoming appointments.
//               </Typography>

//               {/* Separate appointment status for each type */}
//               <Grid container spacing={3}>
//                 {Object.keys(appointmentStatus).map((type) => (
//                   <Grid item xs={12} key={type}>
//                     <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
//                       {type.charAt(0).toUpperCase() + type.slice(1)} Appointments
//                     </Typography>
//                     {appointmentStatus[type].map((appointment, index) => (
//                       <Box
//                         key={index}
//                         sx={{
//                           display: 'flex',
//                           justifyContent: 'space-between',
//                           alignItems: 'center',
//                           p: 2,
//                           border: `1px solid ${appointment.color}`,
//                           borderRadius: 2,
//                           mb: 1,
//                         }}
//                       >
//                         <Box>
//                           <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
//                             Date: {appointment.date} | Time: {appointment.time}
//                           </Typography>
//                           <Typography variant="body2" sx={{ color: appointment.color }}>
//                             Status: {appointment.status}
//                           </Typography>
//                         </Box>
//                       </Box>
//                     ))}
//                   </Grid>
//                 ))}
//               </Grid>
//             </>
//           )}

//           {/* Loading and Success States */}
//           {loading && (
//             <Dialog open={loading}>
//               <DialogTitle>Booking Appointment...</DialogTitle>
//               <DialogContent>
//                 <CircularProgress />
//               </DialogContent>
//             </Dialog>
//           )}

//           {success && (
//             <Dialog open={success}>
//               <DialogTitle>Appointment Booked!</DialogTitle>
//               <DialogContent>
//                 <Typography>Your appointment has been successfully booked.</Typography>
//               </DialogContent>
//               <DialogActions>
//                 <Button onClick={() => setSuccess(false)}>Close</Button>
//               </DialogActions>
//             </Dialog>
//           )}
//         </Container>
//       </Box>
//     </LocalizationProvider>
//   );
// };

// export default CheckResultsStatus;

// import React, { useState } from 'react';
// import {
//   Box,
//   Container,
//   Typography,
//   Grid,
//   TextField,
//   Button,
//   MenuItem,
//   Select,
//   InputLabel,
//   FormControl,
//   InputAdornment,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
//   CircularProgress,
//   Tabs,
//   Tab,
// } from '@mui/material';
// import { DatePicker } from '@mui/x-date-pickers';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
// import EventIcon from '@mui/icons-material/Event';
// import AccessTimeIcon from '@mui/icons-material/AccessTime';
// import PersonIcon from '@mui/icons-material/Person';
// import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
// import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
// import CheckCircleIcon from '@mui/icons-material/CheckCircle';

// const appointmentTypes = [
//   { value: 'laboratory', label: 'Laboratory', icon: <MedicalServicesIcon /> },
//   { value: 'radiology', label: 'Radiology', icon: <MedicalServicesIcon /> },
// ];

// const generateTimeSlots = () => {
//   const times = [];
//   for (let hour = 0; hour < 24; hour++) {
//     const formattedHour = String(hour).padStart(2, '0');
//     times.push(`${formattedHour}:00`, `${formattedHour}:30`);
//   }
//   return times;
// };

// const CheckResultsStatus = () => {
//   const [appointmentType, setAppointmentType] = useState('');
//   const [date, setDate] = useState(null);
//   const [time, setTime] = useState('');
//   const [patientName, setPatientName] = useState('');
//   const [comment, setComment] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [success, setSuccess] = useState(false);
//   const [view, setView] = useState('book'); // 'book', 'labStatus', 'radiologyStatus'

//   const timeSlots = generateTimeSlots();

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     setLoading(true);

//     setTimeout(() => {
//       setLoading(false);
//       setSuccess(true);

//       setPatientName('');
//       setAppointmentType('');
//       setDate(null);
//       setTime('');
//       setComment('');

//       setTimeout(() => {
//         setSuccess(false);
//       }, 3000);
//     }, 3000);
//   };

//   // Appointment status data with corresponding colors
//   const appointmentStatus = {
//     laboratory: [
//       { date: '2024-10-20', time: '14:00', status: 'Declined', color: 'red' },
//       { date: '2024-10-25', time: '09:00', status: 'Approved', color: 'green' },
//     ],
//     radiology: [
//       { date: '2024-10-30', time: '15:00', status: 'Pending', color: 'orange' },
//     ],
//   };

//   return (
//     <LocalizationProvider dateAdapter={AdapterDateFns}>
//       <Box
//         sx={{
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//           backgroundRepeat: 'no-repeat',
//           minHeight: '100vh',
//           display: 'flex',
//           justifyContent: 'center',
//           alignItems: 'center',
//           p: 2,
//         }}
//       >
//         <Container
//           maxWidth="sm"
//           sx={{
//             p: 5,
//             bgcolor: 'rgba(255, 255, 255, 0.9)',
//             boxShadow: 4,
//             borderRadius: 3,
//             textAlign: 'center',
//           }}
//         >
//           {/* Tabs for switching views */}
//           <Tabs
//             value={view}
//             onChange={(e, newValue) => setView(newValue)}
//             centered
//             textColor="primary"
//             indicatorColor="primary"
//           >
//             <Tab label="Book Appointment" value="book" />
//             <Tab label="Laboratory Status" value="labStatus" />
//             <Tab label="Radiology Status" value="radiologyStatus" />
//           </Tabs>

//           {/* Content based on selected tab */}
//           {view === 'book' && (
//             <>
//               {/* Book Appointment Form */}
//               <Box sx={{ display: 'flex', alignItems: 'center', mb: 4, justifyContent: 'center', mt: 4 }}>
//                 <CalendarTodayIcon sx={{ fontSize: '2rem', mr: 1, color: '#3f51b5' }} />
//                 <Typography variant="h4" component="h1" sx={{ fontWeight: 'bold', color: '#3f51b5' }}>
//                   Book Appointment
//                 </Typography>
//               </Box>

//               <Typography variant="body1" sx={{ mb: 4 }}>
//                 Choose your desired appointment type and schedule a date and time.
//               </Typography>

//               <Box component="form" onSubmit={handleSubmit} sx={{ width: '100%', p: 3 }}>
//                 <Grid container spacing={3}>
//                   <Grid item xs={12}>
//                     <TextField
//                       label="Patient Name"
//                       fullWidth
//                       value={patientName}
//                       onChange={(e) => setPatientName(e.target.value)}
//                       required
//                       InputProps={{
//                         startAdornment: (
//                           <InputAdornment position="start">
//                             <PersonIcon />
//                           </InputAdornment>
//                         ),
//                       }}
//                     />
//                   </Grid>

//                   <Grid item xs={12}>
//                     <FormControl fullWidth required>
//                       <InputLabel id="appointment-type-label">Appointment Type</InputLabel>
//                       <Select
//                         labelId="appointment-type-label"
//                         value={appointmentType}
//                         label="Appointment Type"
//                         onChange={(e) => setAppointmentType(e.target.value)}
//                       >
//                         {appointmentTypes.map((option) => (
//                           <MenuItem key={option.value} value={option.value}>
//                             <Box sx={{ display: 'flex', alignItems: 'center' }}>
//                               {option.icon}
//                               <Typography sx={{ ml: 2 }}>{option.label}</Typography>
//                             </Box>
//                           </MenuItem>
//                         ))}
//                       </Select>
//                     </FormControl>
//                   </Grid>

//                   <Grid item xs={12} sm={6}>
//                     <DatePicker
//                       label="Select Date"
//                       value={date}
//                       onChange={(newValue) => setDate(newValue)}
//                       renderInput={(params) => (
//                         <TextField
//                           {...params}
//                           fullWidth
//                           required
//                           InputProps={{
//                             startAdornment: (
//                               <InputAdornment position="start">
//                                 <EventIcon />
//                               </InputAdornment>
//                             ),
//                           }}
//                         />
//                       )}
//                     />
//                   </Grid>

//                   <Grid item xs={12} sm={6}>
//                     <TextField
//                       select
//                       label="Select Time"
//                       value={time}
//                       onChange={(e) => setTime(e.target.value)}
//                       fullWidth
//                       required
//                       InputProps={{
//                         startAdornment: (
//                           <InputAdornment position="start">
//                             <AccessTimeIcon />
//                           </InputAdornment>
//                         ),
//                       }}
//                     >
//                       {timeSlots.map((slot) => (
//                         <MenuItem key={slot} value={slot}>
//                           {slot}
//                         </MenuItem>
//                       ))}
//                     </TextField>
//                   </Grid>

//                   <Grid item xs={12}>
//                     <TextField
//                       label="Comments (optional)"
//                       multiline
//                       rows={4}
//                       fullWidth
//                       value={comment}
//                       onChange={(e) => setComment(e.target.value)}
//                     />
//                   </Grid>
//                 </Grid>

//                 <Box sx={{ mt: 4, textAlign: 'center' }}>
//                   <Button variant="contained" color="primary" type="submit" disabled={loading}>
//                     Book Appointment
//                   </Button>
//                 </Box>
//               </Box>
//             </>
//           )}

//           {view === 'labStatus' && (
//             <>
//               {/* Laboratory Status */}
//               <Box sx={{ display: 'flex', alignItems: 'center', mb: 4, justifyContent: 'center', mt: 4 }}>
//                 <CheckCircleIcon sx={{ fontSize: '2rem', mr: 1, color: '#3f51b5' }} />
//                 <Typography variant="h4" component="h1" sx={{ fontWeight: 'bold', color: '#3f51b5' }}>
//                   Laboratory Status
//                 </Typography>
//               </Box>

//               <Typography variant="body1" sx={{ mb: 4 }}>
//                 Your laboratory appointment statuses are listed below.
//               </Typography>

//               <Grid container spacing={3}>
//                 {appointmentStatus.laboratory.map((appointment, index) => (
//                   <Grid item xs={12} key={index}>
//                     <Box
//                       sx={{
//                         display: 'flex',
//                         justifyContent: 'space-between',
//                         alignItems: 'center',
//                         p: 2,
//                         border: `1px solid ${appointment.color}`,
//                         borderRadius: 2,
//                         mb: 1,
//                       }}
//                     >
//                       <Box>
//                         <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
//                           Date: {appointment.date} | Time: {appointment.time}
//                         </Typography>
//                         <Typography variant="body2" sx={{ color: appointment.color }}>
//                           Status: {appointment.status}
//                         </Typography>
//                       </Box>
//                     </Box>
//                   </Grid>
//                 ))}
//               </Grid>
//             </>
//           )}

//           {view === 'radiologyStatus' && (
//             <>
//               {/* Radiology Status */}
//               <Box sx={{ display: 'flex', alignItems: 'center', mb: 4, justifyContent: 'center', mt: 4 }}>
//                 <CheckCircleIcon sx={{ fontSize: '2rem', mr: 1, color: '#3f51b5' }} />
//                 <Typography variant="h4" component="h1" sx={{ fontWeight: 'bold', color: '#3f51b5' }}>
//                   Radiology Status
//                 </Typography>
//               </Box>

//               <Typography variant="body1" sx={{ mb: 4 }}>
//                 Your radiology appointment statuses are listed below.
//               </Typography>

//               <Grid container spacing={3}>
//                 {appointmentStatus.radiology.map((appointment, index) => (
//                   <Grid item xs={12} key={index}>
//                     <Box
//                       sx={{
//                         display: 'flex',
//                         justifyContent: 'space-between',
//                         alignItems: 'center',
//                         p: 2,
//                         border: `1px solid ${appointment.color}`,
//                         borderRadius: 2,
//                         mb: 1,
//                       }}
//                     >
//                       <Box>
//                         <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
//                           Date: {appointment.date} | Time: {appointment.time}
//                         </Typography>
//                         <Typography variant="body2" sx={{ color: appointment.color }}>
//                           Status: {appointment.status}
//                         </Typography>
//                       </Box>
//                     </Box>
//                   </Grid>
//                 ))}
//               </Grid>
//             </>
//           )}

//           {/* Success dialog */}
//           <Dialog open={success} onClose={() => setSuccess(false)}>
//             <DialogTitle>Appointment Successfully Booked</DialogTitle>
//             <DialogContent>
//               <Typography>Your appointment has been successfully booked.</Typography>
//             </DialogContent>
//             <DialogActions>
//               <Button onClick={() => setSuccess(false)} color="primary">
//                 OK
//               </Button>
//             </DialogActions>
//           </Dialog>

//           {/* Loading spinner */}
//           {loading && (
//             <Dialog open={loading}>
//               <DialogContent>
//                 <CircularProgress />
//               </DialogContent>
//             </Dialog>
//           )}
//         </Container>
//       </Box>
//     </LocalizationProvider>
//   );
// };

// export default CheckResultsStatus;
// import React, { useState } from 'react';
// import {
//   Box,
//   Container,
//   Typography,
//   Grid,
//   TextField,
//   Button,
//   MenuItem,
//   Select,
//   InputLabel,
//   FormControl,
//   InputAdornment,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
//   CircularProgress,
//   Tabs,
//   Tab,
// } from '@mui/material';
// import { DatePicker } from '@mui/x-date-pickers';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
// import EventIcon from '@mui/icons-material/Event';
// import AccessTimeIcon from '@mui/icons-material/AccessTime';
// import PersonIcon from '@mui/icons-material/Person';
// import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
// import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
// import CheckCircleIcon from '@mui/icons-material/CheckCircle';

// const appointmentTypes = [
//   { value: 'laboratory', label: 'Laboratory', icon: <MedicalServicesIcon /> },
//   { value: 'radiology', label: 'Radiology', icon: <MedicalServicesIcon /> },
// ];

// const generateTimeSlots = () => {
//   const times = [];
//   for (let hour = 0; hour < 24; hour++) {
//     const formattedHour = String(hour).padStart(2, '0');
//     times.push(`${formattedHour}:00`, `${formattedHour}:30`);
//   }
//   return times;
// };

// const CheckResultsStatus = () => {
//   const [appointmentType, setAppointmentType] = useState('');
//   const [date, setDate] = useState(null);
//   const [time, setTime] = useState('');
//   const [patientName, setPatientName] = useState('');
//   const [comment, setComment] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [success, setSuccess] = useState(false);
//   const [view, setView] = useState('book'); // 'book', 'diagnoLabStatus', 'diagnoLabResult'
//   const [statusView, setStatusView] = useState('labStatus'); // 'labStatus', 'radiologyStatus'
//   const [resultView, setResultView] = useState('labResult'); // 'labResult', 'radiologyResult'

//   const timeSlots = generateTimeSlots();

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     setLoading(true);

//     setTimeout(() => {
//       setLoading(false);
//       setSuccess(true);

//       setPatientName('');
//       setAppointmentType('');
//       setDate(null);
//       setTime('');
//       setComment('');

//       setTimeout(() => {
//         setSuccess(false);
//       }, 3000);
//     }, 3000);
//   };

//   const appointmentStatus = {
//     laboratory: [
//       { date: '2024-10-20', time: '14:00', status: 'Declined', color: 'red' },
//       { date: '2024-10-25', time: '09:00', status: 'Approved', color: 'green' },
//     ],
//     radiology: [
//       { date: '2024-10-30', time: '15:00', status: 'Pending', color: 'orange' },
//     ],
//   };

//   return (
//     <LocalizationProvider dateAdapter={AdapterDateFns}>
//       <Box
//         sx={{
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//           backgroundRepeat: 'no-repeat',
//           minHeight: '100vh',
//           display: 'flex',
//           justifyContent: 'center',
//           alignItems: 'center',
//           p: 2,
//         }}
//       >
//         <Container
//           maxWidth="sm"
//           sx={{
//             p: 5,
//             bgcolor: 'rgba(255, 255, 255, 0.9)',
//             boxShadow: 4,
//             borderRadius: 3,
//             textAlign: 'center',
//           }}
//         >
//           {/* Tabs for switching views */}
//           <Tabs
//             value={view}
//             onChange={(e, newValue) => setView(newValue)}
//             centered
//             textColor="primary"
//             indicatorColor="primary"
//           >
//             <Tab label="Book Appointment" value="book" />
//             <Tab label="DiagnoLab Status" value="diagnoLabStatus" />
//             <Tab label="DiagnoLab Result" value="diagnoLabResult" />
//           </Tabs>

//           {/* Content based on selected tab */}
//           {view === 'book' && (
//             <>
//               {/* Book Appointment Form */}
//               <Box sx={{ display: 'flex', alignItems: 'center', mb: 4, justifyContent: 'center', mt: 4 }}>
//                 <CalendarTodayIcon sx={{ fontSize: '2rem', mr: 1, color: '#3f51b5' }} />
//                 <Typography variant="h4" component="h1" sx={{ fontWeight: 'bold', color: '#3f51b5' }}>
//                   Book Appointment
//                 </Typography>
//               </Box>

//               <Typography variant="body1" sx={{ mb: 4 }}>
//                 Choose your desired appointment type and schedule a date and time.
//               </Typography>

//               <Box component="form" onSubmit={handleSubmit} sx={{ width: '100%', p: 3 }}>
//                 <Grid container spacing={3}>
//                   <Grid item xs={12}>
//                     <TextField
//                       label="Patient Name"
//                       fullWidth
//                       value={patientName}
//                       onChange={(e) => setPatientName(e.target.value)}
//                       required
//                       InputProps={{
//                         startAdornment: (
//                           <InputAdornment position="start">
//                             <PersonIcon />
//                           </InputAdornment>
//                         ),
//                       }}
//                     />
//                   </Grid>

//                   <Grid item xs={12}>
//                     <FormControl fullWidth required>
//                       <InputLabel id="appointment-type-label">Appointment Type</InputLabel>
//                       <Select
//                         labelId="appointment-type-label"
//                         value={appointmentType}
//                         label="Appointment Type"
//                         onChange={(e) => setAppointmentType(e.target.value)}
//                       >
//                         {appointmentTypes.map((option) => (
//                           <MenuItem key={option.value} value={option.value}>
//                             <Box sx={{ display: 'flex', alignItems: 'center' }}>
//                               {option.icon}
//                               <Typography sx={{ ml: 2 }}>{option.label}</Typography>
//                             </Box>
//                           </MenuItem>
//                         ))}
//                       </Select>
//                     </FormControl>
//                   </Grid>

//                   <Grid item xs={12} sm={6}>
//                     <DatePicker
//                       label="Select Date"
//                       value={date}
//                       onChange={(newValue) => setDate(newValue)}
//                       renderInput={(params) => (
//                         <TextField
//                           {...params}
//                           fullWidth
//                           required
//                           InputProps={{
//                             startAdornment: (
//                               <InputAdornment position="start">
//                                 <EventIcon />
//                               </InputAdornment>
//                             ),
//                           }}
//                         />
//                       )}
//                     />
//                   </Grid>

//                   <Grid item xs={12} sm={6}>
//                     <TextField
//                       select
//                       label="Select Time"
//                       value={time}
//                       onChange={(e) => setTime(e.target.value)}
//                       fullWidth
//                       required
//                       InputProps={{
//                         startAdornment: (
//                           <InputAdornment position="start">
//                             <AccessTimeIcon />
//                           </InputAdornment>
//                         ),
//                       }}
//                     >
//                       {timeSlots.map((slot) => (
//                         <MenuItem key={slot} value={slot}>
//                           {slot}
//                         </MenuItem>
//                       ))}
//                     </TextField>
//                   </Grid>

//                   <Grid item xs={12}>
//                     <TextField
//                       label="Comments (optional)"
//                       multiline
//                       rows={4}
//                       fullWidth
//                       value={comment}
//                       onChange={(e) => setComment(e.target.value)}
//                     />
//                   </Grid>
//                 </Grid>

//                 <Box sx={{ mt: 4, textAlign: 'center' }}>
//                   <Button variant="contained" color="primary" type="submit" disabled={loading}>
//                     Book Appointment
//                   </Button>
//                 </Box>
//               </Box>
//             </>
//           )}

//           {view === 'diagnoLabStatus' && (
//             <>
//               {/* DiagnoLab Status Tabs */}
//               <Tabs
//                 value={statusView}
//                 onChange={(e, newValue) => setStatusView(newValue)}
//                 centered
//                 textColor="primary"
//                 indicatorColor="primary"
//               >
//                 <Tab label="Lab Status" value="labStatus" />
//                 <Tab label="Radiology Status" value="radiologyStatus" />
//               </Tabs>

//               {statusView === 'labStatus' && (
//                 <>
//                   {/* Laboratory Status */}
//                   <Box sx={{ display: 'flex', alignItems: 'center', mb: 4, justifyContent: 'center', mt: 4 }}>
//                     <CheckCircleIcon sx={{ fontSize: '2rem', mr: 1, color: '#3f51b5' }} />
//                     <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#3f51b5' }}>
//                       Laboratory Status
//                     </Typography>
//                   </Box>
//                   {/* List of lab statuses */}
//                   {appointmentStatus.laboratory.map((status, index) => (
//                     <Box
//                       key={index}
//                       sx={{
//                         display: 'flex',
//                         justifyContent: 'space-between',
//                         p: 2,
//                         mb: 2,
//                         bgcolor: '#f5f5f5',
//                         borderRadius: 2,
//                       }}
//                     >
//                       <Typography>
//                         Date: {status.date} | Time: {status.time}
//                       </Typography>
//                       <Typography sx={{ color: status.color }}>{status.status}</Typography>
//                     </Box>
//                   ))}
//                 </>
//               )}

//               {statusView === 'radiologyStatus' && (
//                 <>
//                   {/* Radiology Status */}
//                   <Box sx={{ display: 'flex', alignItems: 'center', mb: 4, justifyContent: 'center', mt: 4 }}>
//                     <CheckCircleIcon sx={{ fontSize: '2rem', mr: 1, color: '#3f51b5' }} />
//                     <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#3f51b5' }}>
//                       Radiology Status
//                     </Typography>
//                   </Box>
//                   {/* List of radiology statuses */}
//                   {appointmentStatus.radiology.map((status, index) => (
//                     <Box
//                       key={index}
//                       sx={{
//                         display: 'flex',
//                         justifyContent: 'space-between',
//                         p: 2,
//                         mb: 2,
//                         bgcolor: '#f5f5f5',
//                         borderRadius: 2,
//                       }}
//                     >
//                       <Typography>
//                         Date: {status.date} | Time: {status.time}
//                       </Typography>
//                       <Typography sx={{ color: status.color }}>{status.status}</Typography>
//                     </Box>
//                   ))}
//                 </>
//               )}
//             </>
//           )}

//           {view === 'diagnoLabResult' && (
//             <>
//               {/* DiagnoLab Result Tabs */}
//               <Tabs
//                 value={resultView}
//                 onChange={(e, newValue) => setResultView(newValue)}
//                 centered
//                 textColor="primary"
//                 indicatorColor="primary"
//               >
//                 <Tab label="Lab Result" value="labResult" />
//                 <Tab label="Radiology Result" value="radiologyResult" />
//               </Tabs>

//               {resultView === 'labResult' && (
//                 <>
//                   {/* Lab Results */}
//                   <Box sx={{ display: 'flex', alignItems: 'center', mb: 4, justifyContent: 'center', mt: 4 }}>
//                     <CheckCircleIcon sx={{ fontSize: '2rem', mr: 1, color: '#3f51b5' }} />
//                     <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#3f51b5' }}>
//                       Lab Results
//                     </Typography>
//                   </Box>
//                   {/* Lab results content */}
//                   <Typography>Lab results will be displayed here.</Typography>
//                 </>
//               )}

//               {resultView === 'radiologyResult' && (
//                 <>
//                   {/* Radiology Results */}
//                   <Box sx={{ display: 'flex', alignItems: 'center', mb: 4, justifyContent: 'center', mt: 4 }}>
//                     <CheckCircleIcon sx={{ fontSize: '2rem', mr: 1, color: '#3f51b5' }} />
//                     <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#3f51b5' }}>
//                       Radiology Results
//                     </Typography>
//                   </Box>
//                   {/* Radiology results content */}
//                   <Typography>Radiology results will be displayed here.</Typography>
//                 </>
//               )}
//             </>
//           )}

//           {/* Loading and Success Dialogs */}
//           <Dialog open={loading} aria-labelledby="loading-dialog">
//             <DialogTitle id="loading-dialog">Booking Appointment</DialogTitle>
//             <DialogContent sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
//               <CircularProgress />
//             </DialogContent>
//           </Dialog>

//           <Dialog open={success} aria-labelledby="success-dialog">
//             <DialogTitle id="success-dialog">Success</DialogTitle>
//             <DialogContent>Your appointment has been successfully booked!</DialogContent>
//             <DialogActions>
//               <Button onClick={() => setSuccess(false)} color="primary">
//                 OK
//               </Button>
//             </DialogActions>
//           </Dialog>
//         </Container>
//       </Box>
//     </LocalizationProvider>
//   );
// };

// export default CheckResultsStatus;

// import React, { useState } from 'react';
// import {
//   Box,
//   Container,
//   Typography,
//   Grid,
//   TextField,
//   Button,
//   MenuItem,
//   Select,
//   InputLabel,
//   FormControl,
//   InputAdornment,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
//   CircularProgress,
//   Tabs,
//   Tab,
//   useMediaQuery,
//   useTheme,
// } from '@mui/material';
// import { DatePicker } from '@mui/x-date-pickers';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
// import EventIcon from '@mui/icons-material/Event';
// import AccessTimeIcon from '@mui/icons-material/AccessTime';
// import PersonIcon from '@mui/icons-material/Person';
// import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
// import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
// import CheckCircleIcon from '@mui/icons-material/CheckCircle';
// import { styled } from '@mui/system';

// // // Custom Styled Tabs
// // const StyledTabs = styled(Tabs)(({ theme }) => ({
// //   borderBottom: `1px solid ${theme.palette.divider}`,
// //   '& .MuiTabs-indicator': {
// //     backgroundColor: theme.palette.primary.main,
// //   },
// // }));

// // // Custom Styled Tab
// // const StyledTab = styled(Tab)(({ theme }) => ({
// //   textTransform: 'none',
// //   minWidth: 120,
// //   fontWeight: theme.typography.fontWeightMedium,
// //   marginRight: theme.spacing(1),
// //   '&.Mui-selected': {
// //     color: theme.palette.primary.main,
// //   },
// // }));

// const StyledTabs = styled(Tabs)(({ theme }) => ({
//   borderBottom: `1px solid ${theme?.palette?.divider || '#e0e0e0'}`, // Fallback value
//   '& .MuiTabs-indicator': {
//     backgroundColor: theme?.palette?.primary?.main || '#1976d2', // Fallback value
//   },
// }));

// const StyledTab = styled(Tab)(({ theme }) => ({
//   textTransform: 'none',
//   minWidth: 120,
//   fontWeight: theme?.typography?.fontWeightMedium || 500, // Fallback value
//   marginRight: theme?.spacing(1) || '8px', // Fallback value
//   '&.Mui-selected': {
//     color: theme?.palette?.primary?.main || '#1976d2', // Fallback value
//   },
// }));


// const appointmentTypes = [
//   { value: 'laboratory', label: 'Laboratory', icon: <MedicalServicesIcon /> },
//   { value: 'radiology', label: 'Radiology', icon: <MedicalServicesIcon /> },
// ];

// const generateTimeSlots = () => {
//   const times = [];
//   for (let hour = 0; hour < 24; hour++) {
//     const formattedHour = String(hour).padStart(2, '0');
//     times.push(`${formattedHour}:00`, `${formattedHour}:30`);
//   }
//   return times;
// };

// const CheckResultsStatus = () => {
//   const [appointmentType, setAppointmentType] = useState('');
//   const [date, setDate] = useState(null);
//   const [time, setTime] = useState('');
//   const [patientName, setPatientName] = useState('');
//   const [comment, setComment] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [success, setSuccess] = useState(false);
//   const [view, setView] = useState('book'); // 'book', 'diagnoLabStatus', 'diagnoLabResult'
//   const [statusView, setStatusView] = useState('labStatus'); // 'labStatus', 'radiologyStatus'
//   const [resultView, setResultView] = useState('labResult'); // 'labResult', 'radiologyResult'

//   const timeSlots = generateTimeSlots();

//   const theme = useTheme();
//   const isLargeScreen = useMediaQuery(theme.breakpoints.up('md'));

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     setLoading(true);

//     setTimeout(() => {
//       setLoading(false);
//       setSuccess(true);

//       setPatientName('');
//       setAppointmentType('');
//       setDate(null);
//       setTime('');
//       setComment('');

//       setTimeout(() => {
//         setSuccess(false);
//       }, 3000);
//     }, 3000);
//   };

//   const appointmentStatus = {
//     laboratory: [
//       { date: '2024-10-20', time: '14:00', status: 'Declined', color: 'red' },
//       { date: '2024-10-25', time: '09:00', status: 'Approved', color: 'green' },
//       { date: '2024-10-20', time: '14:00', status: 'Declined', color: 'red' },
//       { date: '2024-10-25', time: '09:00', status: 'Approved', color: 'green' },
//       { date: '2024-10-20', time: '14:00', status: 'Declined', color: 'red' },
//       { date: '2024-10-25', time: '09:00', status: 'Approved', color: 'green' },
//       { date: '2024-10-20', time: '14:00', status: 'Declined', color: 'red' },
//       { date: '2024-10-25', time: '09:00', status: 'Approved', color: 'green' },
//     ],
//     radiology: [
//       { date: '2024-10-30', time: '15:00', status: 'Pending', color: 'orange' },
//       { date: '2024-10-30', time: '15:00', status: 'Pending', color: 'orange' },
//       { date: '2024-10-20', time: '14:00', status: 'Declined', color: 'red' },
//       { date: '2024-10-25', time: '09:00', status: 'Approved', color: 'green' },
//       { date: '2024-10-30', time: '15:00', status: 'Pending', color: 'orange' },
//       { date: '2024-10-30', time: '15:00', status: 'Pending', color: 'orange' },
//       { date: '2024-10-30', time: '15:00', status: 'Pending', color: 'orange' },
//       { date: '2024-10-20', time: '14:00', status: 'Declined', color: 'red' },
//       { date: '2024-10-25', time: '09:00', status: 'Approved', color: 'green' },
//       { date: '2024-10-30', time: '15:00', status: 'Pending', color: 'orange' },
//     ],
//   };

//   return (
//     <LocalizationProvider dateAdapter={AdapterDateFns}>
//       <Box
//         sx={{
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//           backgroundRepeat: 'no-repeat',
//           minHeight: '100vh',
//           display: 'flex',
//           justifyContent: 'center',
//           alignItems: 'center',
//           p: 2,
//         }}
//       >
//         <Container
//           maxWidth={isLargeScreen ? 'lg' : 'md'}
//           sx={{
//             p: 5,
//             bgcolor: 'rgba(255, 255, 255, 0.95)',
//             boxShadow: 4,
//             borderRadius: 3,
//             textAlign: 'center',
//             width: '100%',
//             maxWidth: '1200px',
//           }}
//         >
//           {/* Main Tabs for switching views */}
//           <StyledTabs
//             value={view}
//             onChange={(e, newValue) => setView(newValue)}
//             centered
//             variant={isLargeScreen ? 'fullWidth' : 'scrollable'}
//             scrollButtons={isLargeScreen ? 'auto' : 'on'}
//           >
//             <StyledTab
//               label={
//                 <Box sx={{ display: 'flex', alignItems: 'center' }}>
//                   <CalendarTodayIcon sx={{ mr: 1 }} />
//                   Book Appointment
//                 </Box>
//               }
//               value="book"
//             />
//             <StyledTab
//               label={
//                 <Box sx={{ display: 'flex', alignItems: 'center' }}>
//                   <CheckCircleIcon sx={{ mr: 1 }} />
//                   DiagnoLab Status
//                 </Box>
//               }
//               value="diagnoLabStatus"
//             />
//             <StyledTab
//               label={
//                 <Box sx={{ display: 'flex', alignItems: 'center' }}>
//                   <CheckCircleIcon sx={{ mr: 1 }} />
//                   DiagnoLab Result
//                 </Box>
//               }
//               value="diagnoLabResult"
//             />
//           </StyledTabs>

//           {/* Content based on selected tab */}
//           {view === 'book' && (
//             <>
//               {/* Book Appointment Form */}
//               <Box
//                 sx={{
//                   display: 'flex',
//                   alignItems: 'center',
//                   mb: 4,
//                   justifyContent: 'center',
//                   mt: 4,
//                 }}
//               >
//                 <CalendarTodayIcon sx={{ fontSize: '2rem', mr: 1, color: 'primary.main' }} />
//                 <Typography variant="h4" component="h1" sx={{ fontWeight: 'bold', color: 'primary.main' }}>
//                   Book Appointment
//                 </Typography>
//               </Box>

//               <Typography variant="body1" sx={{ mb: 4 }}>
//                 Choose your desired appointment type and schedule a date and time.
//               </Typography>

//               <Box component="form" onSubmit={handleSubmit} sx={{ width: '100%', p: 3 }}>
//                 <Grid container spacing={3}>
//                   <Grid item xs={12} md={6}>
//                     <TextField
//                       label="Patient Name"
//                       fullWidth
//                       value={patientName}
//                       onChange={(e) => setPatientName(e.target.value)}
//                       required
//                       InputProps={{
//                         startAdornment: (
//                           <InputAdornment position="start">
//                             <PersonIcon />
//                           </InputAdornment>
//                         ),
//                       }}
//                     />
//                   </Grid>

//                   <Grid item xs={12} md={6}>
//                     <FormControl fullWidth required>
//                       <InputLabel id="appointment-type-label">Appointment Type</InputLabel>
//                       <Select
//                         labelId="appointment-type-label"
//                         value={appointmentType}
//                         label="Appointment Type"
//                         onChange={(e) => setAppointmentType(e.target.value)}
//                       >
//                         {appointmentTypes.map((option) => (
//                           <MenuItem key={option.value} value={option.value}>
//                             <Box sx={{ display: 'flex', alignItems: 'center' }}>
//                               {option.icon}
//                               <Typography sx={{ ml: 2 }}>{option.label}</Typography>
//                             </Box>
//                           </MenuItem>
//                         ))}
//                       </Select>
//                     </FormControl>
//                   </Grid>

//                   <Grid item xs={12} md={6}>
//                     <DatePicker
//                       label="Select Date"
//                       value={date}
//                       onChange={(newValue) => setDate(newValue)}
//                       renderInput={(params) => (
//                         <TextField
//                           {...params}
//                           fullWidth
//                           required
//                           InputProps={{
//                             ...params.InputProps,
//                             startAdornment: (
//                               <InputAdornment position="start">
//                                 <EventIcon />
//                               </InputAdornment>
//                             ),
//                           }}
//                         />
//                       )}
//                     />
//                   </Grid>

//                   <Grid item xs={12} md={6}>
//                     <TextField
//                       select
//                       label="Select Time"
//                       value={time}
//                       onChange={(e) => setTime(e.target.value)}
//                       fullWidth
//                       required
//                       InputProps={{
//                         startAdornment: (
//                           <InputAdornment position="start">
//                             <AccessTimeIcon />
//                           </InputAdornment>
//                         ),
//                       }}
//                     >
//                       {timeSlots.map((slot) => (
//                         <MenuItem key={slot} value={slot}>
//                           {slot}
//                         </MenuItem>
//                       ))}
//                     </TextField>
//                   </Grid>

//                   <Grid item xs={12}>
//                     <TextField
//                       label="Comments (optional)"
//                       multiline
//                       rows={4}
//                       fullWidth
//                       value={comment}
//                       onChange={(e) => setComment(e.target.value)}
//                     />
//                   </Grid>
//                 </Grid>

//                 <Box sx={{ mt: 4, textAlign: 'center' }}>
//                   <Button variant="contained" color="primary" type="submit" disabled={loading}>
//                     {loading ? <CircularProgress size={24} color="inherit" /> : 'Book Appointment'}
//                   </Button>
//                 </Box>
//               </Box>
//             </>
//           )}

//           {view === 'diagnoLabStatus' && (
//             <>
//               {/* DiagnoLab Status Tabs */}
//               <StyledTabs
//                 value={statusView}
//                 onChange={(e, newValue) => setStatusView(newValue)}
//                 centered
//                 variant={isLargeScreen ? 'standard' : 'scrollable'}
//                 scrollButtons={isLargeScreen ? 'auto' : 'on'}
//                 sx={{ marginBottom: 3 }}
//               >
//                 <StyledTab label="Lab Status" value="labStatus" />
//                 <StyledTab label="Radiology Status" value="radiologyStatus" />
//               </StyledTabs>

//               {statusView === 'labStatus' && (
//                 <>
//                   {/* Laboratory Status */}
//                   <Box
//                     sx={{
//                       display: 'flex',
//                       alignItems: 'center',
//                       mb: 4,
//                       justifyContent: 'center',
//                       mt: 4,
//                     }}
//                   >
//                     <CheckCircleIcon sx={{ fontSize: '2rem', mr: 1, color: 'primary.main' }} />
//                     <Typography variant="h5" sx={{ fontWeight: 'bold', color: 'primary.main' }}>
//                       Laboratory Status
//                     </Typography>
//                   </Box>
//                   {/* List of lab statuses */}
//                   {appointmentStatus.laboratory.map((status, index) => (
//                     <Box
//                       key={index}
//                       sx={{
//                         display: 'flex',
//                         justifyContent: 'space-between',
//                         p: 2,
//                         mb: 2,
//                         bgcolor: '#f5f5f5',
//                         borderRadius: 2,
//                         boxShadow: 1,
//                       }}
//                     >
//                       <Typography>
//                         Date: {status.date} | Time: {status.time}
//                       </Typography>
//                       <Typography sx={{ color: status.color, fontWeight: 'bold' }}>{status.status}</Typography>
//                     </Box>
//                   ))}
//                 </>
//               )}

//               {statusView === 'radiologyStatus' && (
//                 <>
//                   {/* Radiology Status */}
//                   <Box
//                     sx={{
//                       display: 'flex',
//                       alignItems: 'center',
//                       mb: 4,
//                       justifyContent: 'center',
//                       mt: 4,
//                     }}
//                   >
//                     <CheckCircleIcon sx={{ fontSize: '2rem', mr: 1, color: 'primary.main' }} />
//                     <Typography variant="h5" sx={{ fontWeight: 'bold', color: 'primary.main' }}>
//                       Radiology Status
//                     </Typography>
//                   </Box>
//                   {/* List of radiology statuses */}
//                   {appointmentStatus.radiology.map((status, index) => (
//                     <Box
//                       key={index}
//                       sx={{
//                         display: 'flex',
//                         justifyContent: 'space-between',
//                         p: 2,
//                         mb: 2,
//                         bgcolor: '#f5f5f5',
//                         borderRadius: 2,
//                         boxShadow: 1,
//                       }}
//                     >
//                       <Typography>
//                         Date: {status.date} | Time: {status.time}
//                       </Typography>
//                       <Typography sx={{ color: status.color, fontWeight: 'bold' }}>{status.status}</Typography>
//                     </Box>
//                   ))}
//                 </>
//               )}
//             </>
//           )}

//           {view === 'diagnoLabResult' && (
//             <>
//               {/* DiagnoLab Result Tabs */}
//               <StyledTabs
//                 value={resultView}
//                 onChange={(e, newValue) => setResultView(newValue)}
//                 centered
//                 variant={isLargeScreen ? 'standard' : 'scrollable'}
//                 scrollButtons={isLargeScreen ? 'auto' : 'on'}
//                 sx={{ marginBottom: 3 }}
//               >
//                 <StyledTab label="Lab Result" value="labResult" />
//                 <StyledTab label="Radiology Result" value="radiologyResult" />
//               </StyledTabs>

//               {resultView === 'labResult' && (
//                 <>
//                   {/* Lab Results */}
//                   <Box
//                     sx={{
//                       display: 'flex',
//                       alignItems: 'center',
//                       mb: 4,
//                       justifyContent: 'center',
//                       mt: 4,
//                     }}
//                   >
//                     <CheckCircleIcon sx={{ fontSize: '2rem', mr: 1, color: 'primary.main' }} />
//                     <Typography variant="h5" sx={{ fontWeight: 'bold', color: 'primary.main' }}>
//                       Lab Results
//                     </Typography>
//                   </Box>
//                   {/* Lab results content */}
//                   <Typography>Lab results will be displayed here.</Typography>
//                 </>
//               )}

//               {resultView === 'radiologyResult' && (
//                 <>
//                   {/* Radiology Results */}
//                   <Box
//                     sx={{
//                       display: 'flex',
//                       alignItems: 'center',
//                       mb: 4,
//                       justifyContent: 'center',
//                       mt: 4,
//                     }}
//                   >
//                     <CheckCircleIcon sx={{ fontSize: '2rem', mr: 1, color: 'primary.main' }} />
//                     <Typography variant="h5" sx={{ fontWeight: 'bold', color: 'primary.main' }}>
//                       Radiology Results
//                     </Typography>
//                   </Box>
//                   {/* Radiology results content */}
//                   <Typography>Radiology results will be displayed here.</Typography>
//                 </>
//               )}
//             </>
//           )}

//           {/* Loading and Success Dialogs */}
//           <Dialog open={loading} aria-labelledby="loading-dialog">
//             <DialogTitle id="loading-dialog">Booking Appointment</DialogTitle>
//             <DialogContent sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
//               <CircularProgress />
//             </DialogContent>
//           </Dialog>

//           <Dialog open={success} aria-labelledby="success-dialog">
//             <DialogTitle id="success-dialog">Success</DialogTitle>
//             <DialogContent>Your appointment has been successfully booked!</DialogContent>
//             <DialogActions>
//               <Button onClick={() => setSuccess(false)} color="primary">
//                 OK
//               </Button>
//             </DialogActions>
//           </Dialog>
//         </Container>
//       </Box>
//     </LocalizationProvider>
//   );
// };

// export default CheckResultsStatus;




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
  useMediaQuery,
  useTheme,
  Pagination, // Import Pagination component
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
import { styled } from '@mui/system';

// Custom Styled Tabs
const StyledTabs = styled(Tabs)(({ theme }) => ({
  borderBottom: `1px solid ${theme?.palette?.divider || '#e0e0e0'}`, // Fallback value
  '& .MuiTabs-indicator': {
    backgroundColor: theme?.palette?.primary?.main || '#1976d2', // Fallback value
  },
}));

const StyledTab = styled(Tab)(({ theme }) => ({
  textTransform: 'none',
  minWidth: 120,
  fontWeight: theme?.typography?.fontWeightMedium || 500, // Fallback value
  marginRight: theme?.spacing(1) || '8px', // Fallback value
  '&.Mui-selected': {
    color: theme?.palette?.primary?.main || '#1976d2', // Fallback value
  },
}));

const appointmentTypes = [
  { value: 'laboratory', label: 'Laboratory', icon: <MedicalServicesIcon /> },
  { value: 'radiology', label: 'Radiology', icon: <MedicalServicesIcon /> },
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

const CheckResultsStatus = () => {
  const [appointmentType, setAppointmentType] = useState('');
  const [clinicType, setClinicType] = useState('');
  const [date, setDate] = useState(null);
  const [time, setTime] = useState('');
  const [patientName, setPatientName] = useState('');
  const [comment, setComment] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [view, setView] = useState('book'); // 'book', 'diagnoLabStatus', 'diagnoLabResult'
  const [statusView, setStatusView] = useState('labStatus'); // 'labStatus', 'radiologyStatus'
  const [resultView, setResultView] = useState('labResult'); // 'labResult', 'radiologyResult'
  const [currentPage, setCurrentPage] = useState(1); // Current page state

  const timeSlots = generateTimeSlots();

  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('md'));

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSuccess(true);

      setPatientName('');
      setAppointmentType('');
      setDate(null);
      setTime('');
      setComment('');

      setTimeout(() => {
        setSuccess(false);
      }, 3000);
    }, 3000);
  };

  const appointmentStatus = {
    laboratory: [
      { date: '2024-10-20', time: '14:00', status: 'Declined', color: 'red' },
      { date: '2024-10-25', time: '09:00', status: 'Approved', color: 'green' },
      { date: '2024-10-20', time: '14:00', status: 'Declined', color: 'red' },
      { date: '2024-10-25', time: '09:00', status: 'Approved', color: 'green' },
      { date: '2024-10-20', time: '14:00', status: 'Declined', color: 'red' },
      { date: '2024-10-25', time: '09:00', status: 'Approved', color: 'green' },
      { date: '2024-10-20', time: '14:00', status: 'Declined', color: 'red' },
      { date: '2024-10-25', time: '09:00', status: 'Approved', color: 'green' },
      { date: '2024-10-20', time: '14:00', status: 'Declined', color: 'red' },
      { date: '2024-10-25', time: '09:00', status: 'Approved', color: 'green' },
    ],
    radiology: [
      { date: '2024-10-30', time: '15:00', status: 'Pending', color: 'orange' },
      { date: '2024-10-30', time: '15:00', status: 'Pending', color: 'orange' },
      { date: '2024-10-20', time: '14:00', status: 'Declined', color: 'red' },
      { date: '2024-10-25', time: '09:00', status: 'Approved', color: 'green' },
      { date: '2024-10-30', time: '15:00', status: 'Pending', color: 'orange' },
      { date: '2024-10-30', time: '15:00', status: 'Pending', color: 'orange' },
      { date: '2024-10-30', time: '15:00', status: 'Pending', color: 'orange' },
      { date: '2024-10-20', time: '14:00', status: 'Declined', color: 'red' },
      { date: '2024-10-25', time: '09:00', status: 'Approved', color: 'green' },
      { date: '2024-10-30', time: '15:00', status: 'Pending', color: 'orange' },
    ],
  };

  // Function to handle pagination logic
  const itemsPerPage = 5;
  const paginatedStatus = (statusArray) => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return statusArray.slice(startIndex, startIndex + itemsPerPage);
  };

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Box
        sx={{
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
          maxWidth={isLargeScreen ? 'md' : 'md'}
          sx={{
            p: 5,
            bgcolor: 'rgba(255, 255, 255, 0.95)',
            boxShadow: 4,
            borderRadius: 3,
            textAlign: 'center',
            width: '100%',
            maxWidth: '1200px',
          }}
        >
          {/* Main Tabs for switching views */}
          <StyledTabs
            value={view}
            onChange={(e, newValue) => {
              setView(newValue);
              setCurrentPage(1); // Reset page when view changes
            }}
            centered
            variant={isLargeScreen ? 'fullWidth' : 'scrollable'}
            scrollButtons={isLargeScreen ? 'auto' : 'on'}
          >
            <StyledTab
              label={
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <CalendarTodayIcon sx={{ mr: 1 }} />
                  Book Appointment
                </Box>
              }
              value="book"
            />
            <StyledTab
              label={
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <CheckCircleIcon sx={{ mr: 1 }} />
                  DiagnoLab Status
                </Box>
              }
              value="diagnoLabStatus"
            />
            <StyledTab
              label={
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <CheckCircleIcon sx={{ mr: 1 }} />
                  DiagnoLab Result
                </Box>
              }
              value="diagnoLabResult"
            />
          </StyledTabs>

          {view === 'book' && (
            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <FormControl fullWidth variant="outlined">
                    <InputLabel id="appointment-type-label">Appointment Type</InputLabel>
                    <Select
                      labelId="appointment-type-label"
                      value={appointmentType}
                      onChange={(e) => setAppointmentType(e.target.value)}
                      label="Appointment Type"
                    >
                      {appointmentTypes.map((type) => (
                        <MenuItem key={type.value} value={type.value}>
                          {type.icon}
                          {type.label}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <FormControl fullWidth variant="outlined">
                    <InputLabel id="clinic-type-label">Select Clinic</InputLabel>
                    <Select
                      labelId="appointment-type-label"
                      value={clinicType}
                      onChange={(e) => setClinicType(e.target.value)}
                      label="Clinic Type"
                    >
                      {clinicTypes.map((type) => (
                        <MenuItem key={type.value} value={type.value}>
                          {type.icon}
                          {type.label}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={6}>
                  <DatePicker
                    label="Select Date"
                    value={date}
                    onChange={(newValue) => setDate(newValue)}
                    renderInput={(params) => <TextField {...params} fullWidth />}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <FormControl fullWidth variant="outlined">
                    <InputLabel id="time-slot-label">Time Slot</InputLabel>
                    <Select
                      labelId="time-slot-label"
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                      label="Time Slot"
                    >
                      {timeSlots.map((timeSlot) => (
                        <MenuItem key={timeSlot} value={timeSlot}>
                          {timeSlot}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Patient Name"
                    variant="outlined"
                    value={patientName}
                    onChange={(e) => setPatientName(e.target.value)}
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
                  <TextField
                    fullWidth
                    label="Comment"
                    variant="outlined"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button type="submit" variant="contained" color="primary" disabled={loading}>
                    {loading ? <CircularProgress size={24} /> : 'Submit'}
                  </Button>
                  {success && <Typography variant="body2" color="success.main">Appointment booked successfully!</Typography>}
                </Grid>
              </Grid>
            </Box>
          )}

          {(view === 'diagnoLabStatus' || view === 'diagnoLabResult') && (
            <>
              <StyledTabs
                value={statusView}
                onChange={(e, newValue) => {
                  setStatusView(newValue);
                  setCurrentPage(1); // Reset page when status view changes
                }}
                centered
                variant={isLargeScreen ? 'fullWidth' : 'scrollable'}
                scrollButtons={isLargeScreen ? 'auto' : 'on'}
              >
                <StyledTab label="Laboratory Status" value="labStatus" />
                <StyledTab label="Radiology Status" value="radiologyStatus" />
              </StyledTabs>

              {statusView === 'labStatus' && (
                <Box sx={{ mt: 3 }}>
                  {paginatedStatus(appointmentStatus.laboratory).map((status, index) => (
                    <Box key={index} sx={{ p: 2, border: '1px solid #e0e0e0', mb: 2, borderRadius: 2 }}>
                      <Typography variant="h6">
                        {status.date} - {status.time}
                      </Typography>
                      <Typography variant="body1" sx={{ color: status.color }}>
                        Status: {status.status}
                      </Typography>
                    </Box>
                  ))}
                  <Pagination
                    count={Math.ceil(appointmentStatus.laboratory.length / itemsPerPage)}
                    page={currentPage}
                    onChange={handlePageChange}
                    variant="outlined"
                    shape="rounded"
                    sx={{ mt: 3 }}
                  />
                </Box>
              )}

              {statusView === 'radiologyStatus' && (
                <Box sx={{ mt: 3 }}>
                  {paginatedStatus(appointmentStatus.radiology).map((status, index) => (
                    <Box key={index} sx={{ p: 2, border: '1px solid #e0e0e0', mb: 2, borderRadius: 2 }}>
                      <Typography variant="h6">
                        {status.date} - {status.time}
                      </Typography>
                      <Typography variant="body1" sx={{ color: status.color }}>
                        Status: {status.status}
                      </Typography>
                    </Box>
                  ))}
                  <Pagination
                    count={Math.ceil(appointmentStatus.radiology.length / itemsPerPage)}
                    page={currentPage}
                    onChange={handlePageChange}
                    variant="outlined"
                    shape="rounded"
                    sx={{ mt: 3 }}
                  />
                </Box>
              )}
            </>
          )}
        </Container>
      </Box>
    </LocalizationProvider>
  );
};

export default CheckResultsStatus;
