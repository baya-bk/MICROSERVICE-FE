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
  FormControlLabel,
  RadioGroup,
  FormLabel,
  Radio,
  MenuItem,
  Select,
  InputLabel,
} from "@mui/material";
import { Formik, Form } from "formik";
import * as yup from "yup";
import { tokens } from "../../theme";
import SaveIcon from "@mui/icons-material/Save";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useRef } from "react";
import { green } from "@mui/material/colors";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateField } from "@mui/x-date-pickers/DateField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";

const Family = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isSmallScreen = useMediaQuery("(max-width:700px)");
  const initialValues = {};
  const [open, setOpen] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
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
  const columns = [
    { field: "no", headerName: "No" },
    {
      field: "relationship",
      headerName: " Relationship",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "first_name",
      headerName: "First Name",
      type: "String",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "middle_name",
      headerName: "Middle Name",
      type: "String",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "last_name",
      headerName: "Last Name",
      type: "String",
      headerAlign: "left",
      align: "left",
    },

    {
      field: "date_of_birth",
      headerName: "Date of Birth",
      flex: 1,
    },
    {
      field: "gender",
      headerName: "Gender ",
      type: "String",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "emergency_contact",
      headerName: "Emergency Contact ",
      type: "String",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "option",
      headerName: "Option ",
      type: "String",
      headerAlign: "left",
      align: "left",
    },
  ];
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
                <Grid container spacing={5}>
                  <Grid item xs={12} md={3}>
                    <Typography variant="h5">
                      <InputLabel id="relationship-label">
                        Relationship:*
                      </InputLabel>
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={9}>
                    <Select
                      variant="filled"
                      labelId="relationship-label"
                      id="relationship-select"
                      name="relationship"
                      value={values.relationship}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      sx={{ width: 250, height: 35 }}
                      error={touched.relationship && !!errors.relationship}
                    >
                      <MenuItem value="">--Select One--</MenuItem>
                      <MenuItem value="10">Wife</MenuItem>
                      <MenuItem value="20">Husband</MenuItem>
                      <MenuItem value="30">Son</MenuItem>
                      <MenuItem value="30">Daughter</MenuItem>
                    </Select>
                    {touched.relationship && errors.relationship && (
                      <Typography color="error">
                        {errors.relationship}
                      </Typography>
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
                      error={touched.first_name && !!errors.first_name}
                      helperText={touched.first_name && errors.first_name}
                      sx={{ width: 250, height: 25 }}
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
                      error={touched.middle_name && !!errors.middle_name}
                      helperText={touched.middle_name && errors.middle_name}
                      sx={{ width: 250, height: 25 }}
                    />
                  </Grid>
                  <Grid item xs={12} md={3}>
                    <Typography>Last Name:</Typography>
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
                    />
                  </Grid>
                </Grid>
                <Grid container spacing={3}>
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
                    Date of Birth:
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
                    <FormLabel id="department-type-label">
                      Emergency Contact:*
                    </FormLabel>
                  </Grid>
                  <Grid item xs={12} md={9}>
                    <RadioGroup
                      row
                      aria-labelledby="emergency-contact-label"
                      name="emergency_contact"
                      value={values.emergency_contact}
                      onChange={handleChange}
                    >
                      <FormControlLabel
                        value="yes"
                        control={<Radio />}
                        label="Yes"
                      />
                      <FormControlLabel
                        value="no"
                        control={<Radio />}
                        label="No"
                      />
                    </RadioGroup>
                    {touched.emergency_contact && errors.emergency_contact && (
                      <Typography color="error">
                        {errors.emergency_contact}
                      </Typography>
                    )}
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
                      Add
                    </Button>
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
      <Box
        m="40px 0 0 0"
        height="50vh"
        sx={{
          marginBottom: "20px",
          boxShadow: 2,
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
        }}
      >
        <DataGrid rows={[]} columns={columns} pageSize={5} />
      </Box>
    </Box>
  );
};

export default Family;
