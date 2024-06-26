import React from "react";
import {
  Box,
  TextField,
  Grid,
  Select,
  Stack,
  Button,
  useTheme,
  useMediaQuery,
  Typography,
  MenuItem,
  InputLabel,
  FormHelperText,
  CircularProgress,
  Alert,
  Snackbar,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import SaveIcon from "@mui/icons-material/Save";
import { green } from "@mui/material/colors";
import { tokens } from "../../theme";

import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import * as yup from "yup";
import { Formik, Form } from "formik";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { useRef } from "react";

const StaffPlan = () => {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isSmallScreen = useMediaQuery("(max-width:700px)");
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const timer = useRef();

  const initialValues = {
    job_title: "",
    quantity: "",
    job_code: "",
    job_grade: "",
  };

  const checkoutSchema = yup.object().shape({
    job_title: yup.string().required("Required"),
    quantity: yup.string().required("Required"),
  });

  const buttonSx = {
    ...(success && {
      bgcolor: green[500],
      "&:hover": {
        bgcolor: green[700],
      },
    }),
  };

  React.useEffect(() => {
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

  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "Job Title",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "age",
      headerName: "Job Code",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "phone",
      headerName: "Quantity",
      flex: 1,
    },
  ];

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
                <Grid container spacing={2}>
                  <Grid item xs={12} md={3}>
                    <Typography variant="h5">
                      <InputLabel id="tenant-label">Job Title:*</InputLabel>
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={9}>
                    <Select
                      name="job_title"
                      labelId="demo-simple-select-label"
                      variant="filled"
                      id="demo-simple-select"
                      label="Tenant"
                      value={values.job_title}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.job_title && !!errors.job_title}
                      sx={{ width: 250, height: 35 }}
                    >
                      <MenuItem value="Tenant1">Tenant1</MenuItem>
                      <MenuItem value="Tenant2">Tenant2</MenuItem>
                      <MenuItem value="Tenant3">Tenant3</MenuItem>
                    </Select>
                    {touched.job_title && errors.job_title && (
                      <FormHelperText error>{errors.job_title}</FormHelperText>
                    )}
                  </Grid>
                  <Grid item xs={12} md={3}>
                    Quantity:
                  </Grid>
                  <Grid item xs={12} md={9}>
                    <TextField
                      name="quantity"
                      id="outlined-size-small"
                      variant="filled"
                      size="small"
                      value={values.quantity}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.quantity && !!errors.quantity}
                      helperText={touched.quantity && errors.quantity}
                      sx={{ width: 250, height: 25 }}
                    />
                  </Grid>
                </Grid>
                <Grid container spacing={5} alignItems="center">
                  <Grid item xs={12} md={3}>
                    Job Code:
                  </Grid>
                  <Grid item xs={12} md={9}>
                    <TextField
                      name="job_code"
                      id="outlined-size-small"
                      variant="filled"
                      value={values.job_code}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.job_code && !!errors.job_code}
                      helperText={touched.job_code && errors.job_code}
                      size="small"
                      sx={{ width: 250, height: 25 }}
                    />
                  </Grid>
                  <Grid item xs={12} md={3}>
                    Job Grade:
                  </Grid>
                  <Grid item xs={12} md={9}>
                    <TextField
                      name="job_grade"
                      id="outlined-size-small"
                      variant="filled"
                      value={values.job_grade}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.job_grade && !!errors.job_grade}
                      helperText={touched.job_grade && errors.job_grade}
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
      <Box
        backgroundColor={colors.primary[400]}
        sx={{ padding: "20px", boxShadow: 2 }}
      >
        <Grid container columnSpacing={10} rowSpacing={4}>
          <Grid item xs={12} md={2}>
            Prepared By:
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField
              id="outlined-size-small"
              defaultValue=""
              size="small"
              sx={{ width: 250, height: 25 }}
            />
          </Grid>
          <Grid item xs={12} md={2}>
            Prepared on:
          </Grid>
          <Grid item xs={12} md={4}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["DatePicker"]}>
                <DemoItem>
                  <DatePicker
                    sx={{ width: 250, height: 60 }}
                    defaultValue={dayjs("2022-04-17")}
                  />
                </DemoItem>
              </DemoContainer>
            </LocalizationProvider>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default StaffPlan;
