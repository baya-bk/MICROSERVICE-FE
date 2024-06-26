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
  Typography,
  Alert,
  Snackbar,
  MenuItem,
  Select,
  InputLabel,
  CardMedia,
  Card,
} from "@mui/material";
import { Formik, Form } from "formik";
import * as yup from "yup";
import { tokens } from "../../theme";
import SaveIcon from "@mui/icons-material/Save";
import { useEffect, useRef } from "react";
import { DateField } from "@mui/x-date-pickers/DateField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider/LocalizationProvider";
import { useState } from "react";
import { green } from "@mui/material/colors";

const EmployeeRecord = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isSmallScreen = useMediaQuery("(max-width:700px)");
  const initialValues = {};
  const [open, setOpen] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  //   const [image, setImage] = useState(null);
  const [preview] = useState(null);
  //   const [preview, setPreview] = useState(null);

  //   const handleImageChange = (event) => {
  //     const file = event.target.files[0];
  //     if (file) {
  //       setImage(file);
  //       const reader = new FileReader();
  //       reader.onloadend = () => {
  //         setPreview(reader.result);
  //       };
  //       reader.readAsDataURL(file);
  //     }
  //   };

  //   const handleUpload = () => {
  //     // Handle the upload logic here
  //     console.log("Uploading:", image);
  //   };

  //   const handleCancel = () => {
  //     setImage(null);
  //     setPreview(null);
  //   };

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
                    <Typography>Employee Name:</Typography>
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
                    <Typography>Sex:</Typography>
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
                    <Typography>Department </Typography>
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
                    <Typography>Salary Step:</Typography>
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
                    <Typography>Hire Date:</Typography>
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
                    <Typography>Job Position:</Typography>
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
                </Grid>
                <Grid container spacing={5}>
                  <Grid item xs={6} md={6}>
                    <Card style={{ marginBottom: 20, marginTop: 20 }}>
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
                  </Grid>
                  <Grid item xs={12} md={12}></Grid>

                  <Grid item xs={12} md={3}>
                    <Typography>Grade :</Typography>
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
                    <Typography>Salary:</Typography>
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
                    <Typography>Service Year:*</Typography>
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
                </Grid>
              </Stack>
            </Box>
            <Box
              backgroundColor={colors.primary[400]}
              sx={{ padding: "30px", boxShadow: 2, marginBottom: "20px" }}
            >
              <Stack direction={isSmallScreen ? "column" : "row"} gap={2}>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={3}>
                    <Typography>From Duty Station:</Typography>
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
                    <Typography variant="h5">
                      <InputLabel id="tenant-label">Movement Type:</InputLabel>
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
                    <Typography>Department:*</Typography>
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
                    <Typography>Job Title:*</Typography>
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
                    <Typography> Grade:</Typography>
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
                    <Typography>Salary:</Typography>
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
                  <Grid item>
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
                  </Grid>
                  <Grid item>
                    <Button
                      sx={{
                        backgroundColor: colors.blueAccent[700],
                        color: colors.grey[100],
                        fontSize: "14px",
                        fontWeight: "bold",
                        padding: "10px 20px",
                      }}
                      // disabled={loading}
                      // onClick={handleButtonClick}
                    >
                      Reset
                    </Button>
                  </Grid>
                </Grid>

                <Grid container spacing={5}>
                  <Grid item xs={12} md={3}>
                    <Typography variant="h5">
                      <InputLabel id="tenant-label">
                        To Duty Station :*
                      </InputLabel>
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
                    <Typography>Reference Number:</Typography>
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
                    End Date:*
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
                    Remark:
                  </Grid>
                  <Grid item xs={12} md={9}>
                    <TextField
                      name="description"
                      value={values.description}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      multiline
                      variant="filled"
                      rows={2}
                      sx={{ width: 250 }}
                    />
                  </Grid>
                </Grid>
              </Stack>
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default EmployeeRecord;
