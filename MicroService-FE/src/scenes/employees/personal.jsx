import * as React from "react";
import {
  Box,
  TextField,
  Grid,
  Stack,
  Button,
  useTheme,
  useMediaQuery,
  CircularProgress,
  Fab,
  Typography,
  Alert,
  Snackbar,
  FormControlLabel,
  RadioGroup,
  FormLabel,
  Radio,
  MenuItem,
  Select,
  InputLabel,
  IconButton,
  CardMedia,
  Card,
  Paper,
} from "@mui/material";
import { Formik, Form } from "formik";
import * as yup from "yup";
import { tokens } from "../../theme";
import SaveIcon from "@mui/icons-material/Save";
import AddIcon from "@mui/icons-material/Add";
import { useEffect, useRef } from "react";
import { DateField } from "@mui/x-date-pickers/DateField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider/LocalizationProvider";
import { useState } from "react";
import { green } from "@mui/material/colors";

const Personal = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isSmallScreen = useMediaQuery("(max-width:700px)");
  const initialValues = {};
  const [open, setOpen] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUpload = () => {
    // Handle the upload logic here
    console.log("Uploading:", image);
  };

  const handleCancel = () => {
    setImage(null);
    setPreview(null);
  };

  const timer = useRef();

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, []);
  const handleFormSubmit = (values) => {
    console.log(values);
    if (!loading) {
      setSuccess(false);
      setLoading(true);
      timer.current = setTimeout(() => {
        setSuccess(true);
        setLoading(false);
      }, 2000);
    }
  };
  const buttonSx = {
    ...(success && {
      bgcolor: green[500],
      "&:hover": {
        bgcolor: green[700],
      },
    }),
  };

  const checkoutSchema = yup.object().shape({});
  return (
    <Box sx={{ padding: "20px" }}>
      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={checkoutSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <Form onSubmit={handleSubmit}>
            <Box
              backgroundColor={colors.primary[400]}
              sx={{ padding: "30px", boxShadow: 2, marginBottom: "20px" }}
            >
              <Stack direction={isSmallScreen ? "column" : "row"} gap={2}>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={3}>
                    <Typography>Employee Id:*</Typography>
                  </Grid>
                  <Grid item xs={12} md={9}>
                    <TextField
                      name="employee_id"
                      variant="filled"
                      value={values.employee_id}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      id="outlined-size-small"
                      size="small"
                      sx={{ width: 250, height: 25 }}
                    />
                  </Grid>
                  <Grid item xs={12} md={3}>
                    <Typography variant="h5">
                      <InputLabel id="tenant-label">Title:*</InputLabel>
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={9}>
                    <Select
                      variant="filled"
                      labelId="tenant-label"
                      id="tenant-select"
                      name="tenant"
                      value={values.title}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      sx={{ width: 250, height: 35 }}
                      error={touched.title && !!errors.title}
                    >
                      <MenuItem value="">Select Tenant</MenuItem>
                      <MenuItem value="10">Title1</MenuItem>
                      <MenuItem value="20">Title2</MenuItem>
                      <MenuItem value="30">Title3</MenuItem>
                    </Select>
                    {touched.title && errors.title && (
                      <Typography color="error">{errors.title}</Typography>
                    )}
                  </Grid>
                  <Grid item xs={12} md={3}>
                    <Typography>First Name:*</Typography>
                  </Grid>
                  <Grid item xs={12} md={9}>
                    <TextField
                      name="first_name"
                      variant="filled"
                      value={values.first_name}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      id="outlined-size-small"
                      size="small"
                      sx={{ width: 250, height: 25 }}
                      error={touched.first_name && !!errors.first_name}
                      helperText={touched.first_name && errors.first_name}
                    />
                  </Grid>
                  <Grid item xs={12} md={3}>
                    <Typography>Last_name:*</Typography>
                  </Grid>
                  <Grid item xs={12} md={9}>
                    <TextField
                      name="last_name"
                      variant="filled"
                      value={values.last_name}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      id="outlined-size-small"
                      size="small"
                      sx={{ width: 250, height: 25 }}
                      error={touched.last_name && !!errors.last_name}
                      helperText={touched.last_name && errors.last_name}
                    />
                  </Grid>
                  <Grid item xs={12} md={3}>
                    <Typography>Middle Name:*</Typography>
                  </Grid>
                  <Grid item xs={12} md={9}>
                    <TextField
                      name="middle_name"
                      variant="filled"
                      value={values.middle_name}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      id="outlined-size-small"
                      size="small"
                      sx={{ width: 250, height: 25 }}
                      error={touched.middle_name && !!errors.middle_name}
                      helperText={touched.middle_name && errors.middle_name}
                    />
                  </Grid>

                  <Grid item xs={12} md={3}>
                    <FormLabel id="department-type-label">Gender:*</FormLabel>
                  </Grid>
                  <Grid item xs={12} md={9}>
                    <RadioGroup
                      row
                      aria-labelledby="department-type-label"
                      name="gender"
                      value={values.gender}
                      onChange={handleChange}
                    >
                      <FormControlLabel
                        value="male"
                        control={<Radio />}
                        label="male"
                      />
                      <FormControlLabel
                        value="female"
                        control={<Radio />}
                        label="female"
                      />
                    </RadioGroup>
                    {touched.gender && errors.gender && (
                      <Typography color="error">{errors.gender}</Typography>
                    )}
                  </Grid>
                  <Grid item xs={12} md={3}>
                    Date of Birth:*
                  </Grid>
                  <Grid item xs={12} md={9}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DateField
                        variant="filled"
                        defaultValue={dayjs("2022-04-17")}
                        format="MM-DD-YYYY"
                      />
                    </LocalizationProvider>
                  </Grid>
                  <Grid item xs={12} md={3}>
                    <Typography variant="h5">
                      <InputLabel id="marital-status">
                        Marital Status:*
                      </InputLabel>
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={9}>
                    <Select
                      variant="filled"
                      labelId="marital-status"
                      id="marital-status"
                      name="marital_status"
                      value={values.title}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      sx={{ width: 250, height: 35 }}
                      error={touched.marital_status && !!errors.marital_status}
                    >
                      <MenuItem value="">Select Marital Status</MenuItem>
                      <MenuItem value="10">Married</MenuItem>
                      <MenuItem value="20">Unmarried</MenuItem>
                    </Select>
                    {touched.title && errors.title && (
                      <Typography color="error">{errors.title}</Typography>
                    )}
                  </Grid>
                  <Grid item xs={12} md={3}>
                    <FormLabel id="employee-type-label">
                      Employee Type:*
                    </FormLabel>
                  </Grid>
                  <Grid item xs={12} md={9}>
                    <RadioGroup
                      row
                      aria-labelledby="employee-type-label"
                      name="employeeType"
                      value={values.employee_type}
                      onChange={handleChange}
                    >
                      <FormControlLabel
                        value="Full-time"
                        control={<Radio />}
                        label="Full-time"
                      />
                      <FormControlLabel
                        value="Contract"
                        control={<Radio />}
                        label="Contract"
                      />
                    </RadioGroup>
                    {touched.employeeType && errors.employeeType && (
                      <Typography color="error">
                        {errors.employeeType}
                      </Typography>
                    )}
                  </Grid>
                  <Grid item xs={12} md={3}>
                    Hire Date:*
                  </Grid>
                  <Grid item xs={12} md={9}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DateField
                        variant="filled"
                        defaultValue={dayjs("2022-04-17")}
                        format="MM-DD-YYYY"
                      />
                    </LocalizationProvider>
                  </Grid>
                </Grid>
                <Paper
                  elevation={3}
                  style={{
                    padding: 20,
                    textAlign: "center",
                    width: 300,
                  }}
                >
                  <Card style={{ marginBottom: 20 }}>
                    <CardMedia
                      component="img"
                      height="140"
                      image={
                        preview ||
                        "/assets/Profile_avatar_placeholder_large.png"
                      }
                      alt="Profile Preview"
                    />
                  </Card>
                  <input
                    accept="image/*"
                    style={{ display: "none" }}
                    id="upload-button"
                    type="file"
                    onChange={handleImageChange}
                  />
                  <label htmlFor="upload-button">
                    <IconButton color="primary" component="span"></IconButton>
                  </label>
                  <Button
                    variant="contained"
                    color="primary"
                    component="label"
                    htmlFor="upload-button"
                    style={{ margin: "0 10px" }}
                  >
                    Browse
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleUpload}
                    disabled={!image}
                    style={{ margin: "0 10px" }}
                  >
                    Upload
                  </Button>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={handleCancel}
                    disabled={!image}
                    style={{ margin: "0 10px" }}
                  >
                    Cancel
                  </Button>
                </Paper>
              </Stack>
            </Box>
            <Box
              backgroundColor={colors.primary[400]}
              sx={{ padding: "30px", boxShadow: 2, marginBottom: "20px" }}
            >
              <Stack direction={isSmallScreen ? "column" : "row"} gap={2}>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={3}>
                    <Typography>Department:*</Typography>
                  </Grid>
                  <Grid item xs={12} md={9}>
                    <TextField
                      value={values.address}
                      variant="filled"
                      name="address"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      id="outlined-size-small"
                      size="small"
                      sx={{ width: 200, height: 25 }}
                      error={touched.address && !!errors.address}
                      helperText={touched.address && errors.address}
                    />
                    <Fab
                      sx={{
                        backgroundColor: colors.blueAccent[700],
                        color: colors.grey[100],
                        marginLeft: 1,
                        width: 35,
                        height: 35,
                      }}
                      size="small"
                      aria-label="add"
                    >
                      <AddIcon />
                    </Fab>
                  </Grid>
                  <Grid item xs={12} md={3}>
                    <Typography variant="h5">
                      <InputLabel id="tenant-label">Job Title:*</InputLabel>
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={9}>
                    <Select
                      variant="filled"
                      labelId="tenant-label"
                      id="tenant-select"
                      name="tenant"
                      value={values.tenant}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      sx={{ width: 250, height: 35 }}
                      error={touched.tenant && !!errors.tenant}
                    >
                      <MenuItem value="">Select Tenant</MenuItem>
                      <MenuItem value="10">Tenant1</MenuItem>
                      <MenuItem value="20">Tenant2</MenuItem>
                      <MenuItem value="30">Tenant3</MenuItem>
                    </Select>
                    {touched.tenant && errors.tenant && (
                      <Typography color="error">{errors.tenant}</Typography>
                    )}
                  </Grid>
                  <Grid item xs={12} md={3}>
                    <Typography>Job Codee:*</Typography>
                  </Grid>
                  <Grid item xs={12} md={9}>
                    <TextField
                      name="job_title"
                      variant="filled"
                      value={values.job_title}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      id="outlined-size-small"
                      size="small"
                      sx={{ width: 250, height: 25 }}
                    />
                  </Grid>
                  <Grid item xs={12} md={3}>
                    <Typography>Job Codee:*</Typography>
                  </Grid>
                  <Grid item xs={12} md={9}>
                    <TextField
                      name="job_codee"
                      variant="filled"
                      value={values.job_codee}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      id="outlined-size-small"
                      size="small"
                      sx={{ width: 250, height: 25 }}
                    />
                  </Grid>
                  <Grid item xs={12} md={3}>
                    <Typography>Job Category:*</Typography>
                  </Grid>
                  <Grid item xs={12} md={9}>
                    <TextField
                      name="job_category"
                      variant="filled"
                      value={values.job_category}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      id="outlined-size-small"
                      size="small"
                      sx={{ width: 250, height: 25 }}
                    />
                  </Grid>
                  <Grid item xs={12} md={3}>
                    <Typography>Job Grade:*</Typography>
                  </Grid>
                  <Grid item xs={12} md={9}>
                    <TextField
                      name="job_grade"
                      variant="filled"
                      value={values.job_grade}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      id="outlined-size-small"
                      size="small"
                      sx={{ width: 250, height: 25 }}
                    />
                  </Grid>

                  <Grid item xs={12} md={3}>
                    <Typography variant="h5">
                      <InputLabel id="salary-step-label">
                        Salary Step:*
                      </InputLabel>
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={9}>
                    <Select
                      variant="filled"
                      labelId="salary-step-label"
                      id="salary-step-select"
                      name="tenant"
                      value={values.salary_step}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      sx={{ width: 250, height: 35 }}
                      error={touched.salary_step && !!errors.salary_step}
                    >
                      <MenuItem value="">Select Tenant</MenuItem>
                      <MenuItem value="10">Tenant1</MenuItem>
                      <MenuItem value="20">Tenant2</MenuItem>
                      <MenuItem value="30">Tenant3</MenuItem>
                    </Select>
                    {touched.salary_step && errors.salary_step && (
                      <Typography color="error">
                        {errors.salary_step}
                      </Typography>
                    )}
                  </Grid>
                  <Grid item xs={12} md={3}>
                    <Typography>Salary:*</Typography>
                  </Grid>
                  <Grid item xs={12} md={9}>
                    <TextField
                      name="job_grade"
                      variant="filled"
                      value={values.job_grade}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      id="outlined-size-small"
                      size="small"
                      sx={{ width: 250, height: 25 }}
                    />
                  </Grid>
                  <Grid item xs={12} md={3}>
                    <Typography variant="h5">
                      <InputLabel id="duty-situation-label">
                        {" "}
                        Duty Situation:*
                      </InputLabel>
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={9}>
                    <Select
                      variant="filled"
                      labelId="duty-situation-label"
                      id="duty-situation-select"
                      name="tenant"
                      value={values.duty_situation}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      sx={{ width: 250, height: 35 }}
                      error={touched.duty_situation && !!errors.duty_situation}
                    >
                      <MenuItem value="">Select Tenant</MenuItem>
                      <MenuItem value="10">Tenant1</MenuItem>
                      <MenuItem value="20">Tenant2</MenuItem>
                      <MenuItem value="30">Tenant3</MenuItem>
                    </Select>
                    {touched.duty_situation && errors.duty_situation && (
                      <Typography color="error">
                        {errors.duty_situation}
                      </Typography>
                    )}
                  </Grid>
                </Grid>

                <Grid container spacing={5}>
                  <Grid item xs={12} md={3}>
                    <Typography>Pay Location:*</Typography>
                  </Grid>
                  <Grid item xs={12} md={9}>
                    <TextField
                      name="pay_location"
                      variant="filled"
                      value={values.pay_location}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      id="outlined-size-small"
                      size="small"
                      sx={{ width: 250, height: 25 }}
                    />
                  </Grid>
                  <Grid item xs={12} md={3}>
                    <Typography>Pay Group:*</Typography>
                  </Grid>
                  <Grid item xs={12} md={9}>
                    <TextField
                      name="pay_group"
                      variant="filled"
                      value={values.pay_group}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      id="outlined-size-small"
                      size="small"
                      sx={{ width: 250, height: 25 }}
                    />
                  </Grid>
                  <Grid item xs={12} md={3}>
                    <Typography>Cost Center:*</Typography>
                  </Grid>
                  <Grid item xs={12} md={9}>
                    <TextField
                      name="cost_center"
                      variant="filled"
                      value={values.cost_center}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      id="outlined-size-small"
                      size="small"
                      sx={{ width: 250, height: 25 }}
                    />
                  </Grid>
                  <Grid item xs={12} md={3}>
                    <Typography>System:*</Typography>
                  </Grid>
                  <Grid item xs={12} md={9}>
                    <TextField
                      name="system"
                      variant="filled"
                      value={values.system}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      id="outlined-size-small"
                      size="small"
                      sx={{ width: 250, height: 25 }}
                    />
                  </Grid>
                  <Grid item xs={12} md={3}>
                    <Typography variant="h5">
                      <InputLabel id="nationality-label">
                        Nationality:*
                      </InputLabel>
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={9}>
                    <Select
                      variant="filled"
                      labelId="nationality-label"
                      id="nationality-select"
                      name="nationality"
                      value={values.nationality}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      sx={{ width: 250, height: 35 }}
                      error={touched.nationality && !!errors.nationality}
                    >
                      <MenuItem value="">Select Nationality</MenuItem>
                      <MenuItem value="10">Tenant1</MenuItem>
                      <MenuItem value="20">Tenant2</MenuItem>
                      <MenuItem value="30">Tenant3</MenuItem>
                    </Select>
                    {touched.nationality && errors.nationality && (
                      <Typography color="error">
                        {errors.nationality}
                      </Typography>
                    )}
                  </Grid>
                  <Grid item xs={12} md={3}>
                    <Typography>Tin Number:*</Typography>
                  </Grid>
                  <Grid item xs={12} md={9}>
                    <TextField
                      name="tin_number"
                      variant="filled"
                      value={values.tin_number}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      id="outlined-size-small"
                      size="small"
                      sx={{ width: 250, height: 25 }}
                    />
                  </Grid>
                  <Grid item xs={12} md={3}>
                    <Typography>Pension Number:*</Typography>
                  </Grid>
                  <Grid item xs={12} md={9}>
                    <TextField
                      name="pension_number"
                      variant="filled"
                      value={values.pension_number}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      id="outlined-size-small"
                      size="small"
                      sx={{ width: 250, height: 25 }}
                    />
                  </Grid>
                  <Grid item xs={12} md={3}>
                    <Typography variant="h5">
                      <InputLabel id="bank-label">Bank:*</InputLabel>
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={9}>
                    <Select
                      variant="filled"
                      labelId="bank-label"
                      id="bank-select"
                      name="bank"
                      value={values.bank}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      sx={{ width: 250, height: 35 }}
                      error={touched.bank && !!errors.bank}
                    >
                      <MenuItem value="">Select Bank</MenuItem>
                      <MenuItem value="10">Tenant1</MenuItem>
                      <MenuItem value="20">Tenant2</MenuItem>
                      <MenuItem value="30">Tenant3</MenuItem>
                    </Select>
                  </Grid>
                  <Grid item xs={12} md={3}>
                    <Typography variant="h5">
                      <InputLabel id="bank-branch-label">
                        Bank Branch:*
                      </InputLabel>
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={9}>
                    <Select
                      variant="filled"
                      labelId="bank-branch-label"
                      id="bank-branch-select"
                      name="bank_branch"
                      value={values.bank_branch}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      sx={{ width: 250, height: 35 }}
                    >
                      <MenuItem value="">Select Bank Branch</MenuItem>
                      <MenuItem value="10">Tenant1</MenuItem>
                      <MenuItem value="20">Tenant2</MenuItem>
                      <MenuItem value="30">Tenant3</MenuItem>
                    </Select>
                  </Grid>
                  <Grid item xs={12} md={3}>
                    <Typography>Account Number:*</Typography>
                  </Grid>
                  <Grid item xs={12} md={9}>
                    <TextField
                      name="account_number"
                      variant="filled"
                      value={values.account_number}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      id="outlined-size-small"
                      size="small"
                      sx={{ width: 250, height: 25 }}
                    />
                  </Grid>
                </Grid>
              </Stack>
            </Box>

            <Box
              backgroundColor={colors.primary[400]}
              display="flex"
              justifyContent="center"
              sx={{ padding: "20px", boxShadow: 2, marginBottom: "20px" }}
            >
              <Button
                onClick={handleClick}
                type="submit"
                color="secondary"
                variant="contained"
                sx={{
                  fontSize: "14px",
                  fontWeight: "bold",
                  padding: "10px 20px",
                  buttonSx,
                }}
                disabled={loading}
                startIcon={
                  loading ? <CircularProgress size={24} /> : <SaveIcon />
                }
              >
                {success ? "Saved" : "Save"}
              </Button>
              <Box>
                {success && (
                  <Snackbar
                    open={open}
                    autoHideDuration={6000}
                    onClose={handleClose}
                  >
                    <Alert
                      onClose={handleClose}
                      severity="success"
                      variant="filled"
                      sx={{ width: "100%" }}
                    >
                      Address Saved Successfully!
                    </Alert>
                  </Snackbar>
                )}
              </Box>
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default Personal;
