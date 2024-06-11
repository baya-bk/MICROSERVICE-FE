import * as React from "react";
import {
  Box,
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
} from "@mui/material";
import { Formik, Form } from "formik";
import * as yup from "yup";
import { tokens } from "../../theme";
import SaveIcon from "@mui/icons-material/Save";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useRef } from "react";
import { green } from "@mui/material/colors";

const Languages = () => {
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
      field: "language",
      headerName: " Language",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "listening",
      headerName: "Listening",
      type: "String",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "speaking",
      headerName: "Speaking",
      type: "String",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "reading",
      headerName: "Reading",
      type: "String",
      headerAlign: "left",
      align: "left",
    },

    {
      field: "writing",
      headerName: "Writing",
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
                      <InputLabel id="tenant-label">Language Type:*</InputLabel>
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={9}>
                    <Select
                      variant="filled"
                      labelId="tenant-label"
                      id="tenant-select"
                      name="language_type"
                      value={values.language_type}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      sx={{ width: 250, height: 35 }}
                      error={touched.language_type && !!errors.language_type}
                    >
                      <MenuItem value="">--Select One--</MenuItem>
                      <MenuItem value="10">Tenant1</MenuItem>
                      <MenuItem value="20">Tenant2</MenuItem>
                      <MenuItem value="30">Tenant3</MenuItem>
                    </Select>
                    {touched.language_type && errors.language_type && (
                      <Typography color="error">
                        {errors.language_type}
                      </Typography>
                    )}
                  </Grid>
                  <Grid item xs={12} md={3}>
                    <Typography variant="h5">
                      <InputLabel id="tenant-label">Listening:*</InputLabel>
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={9}>
                    <Select
                      variant="filled"
                      labelId="tenant-label"
                      id="tenant-select"
                      name="listening"
                      value={values.listening}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      sx={{ width: 250, height: 35 }}
                      error={touched.listening && !!errors.listening}
                    >
                      <MenuItem value="">--Select One--</MenuItem>
                      <MenuItem value="10">Tenant1</MenuItem>
                      <MenuItem value="20">Tenant2</MenuItem>
                      <MenuItem value="30">Tenant3</MenuItem>
                    </Select>
                    {touched.listening && errors.listening && (
                      <Typography color="error">{errors.listening}</Typography>
                    )}
                  </Grid>
                  <Grid item xs={12} md={3}>
                    <Typography variant="h5">
                      <InputLabel id="tenant-label">Reading:*</InputLabel>
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={9}>
                    <Select
                      variant="filled"
                      labelId="tenant-label"
                      id="tenant-select"
                      name="reading"
                      value={values.reading}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      sx={{ width: 250, height: 35 }}
                      error={touched.reading && !!errors.reading}
                    >
                      <MenuItem value="">--Select One--</MenuItem>
                      <MenuItem value="10">Tenant1</MenuItem>
                      <MenuItem value="20">Tenant2</MenuItem>
                      <MenuItem value="30">Tenant3</MenuItem>
                    </Select>
                    {touched.reading && errors.reading && (
                      <Typography color="error">{errors.reading}</Typography>
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
                <Grid container spacing={3}>
                  <Grid item xs={12} md={3}>
                    <Typography variant="h5">
                      <InputLabel id="tenant-label">Speaking:*</InputLabel>
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={9}>
                    <Select
                      variant="filled"
                      labelId="tenant-label"
                      id="tenant-select"
                      name="spaeking"
                      value={values.spaeking}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      sx={{ width: 250, height: 35 }}
                      error={touched.spaeking && !!errors.spaeking}
                    >
                      <MenuItem value="">--Select One--</MenuItem>
                      <MenuItem value="10">Tenant1</MenuItem>
                      <MenuItem value="20">Tenant2</MenuItem>
                      <MenuItem value="30">Tenant3</MenuItem>
                    </Select>
                    {touched.speaking && errors.speaking && (
                      <Typography color="error">{errors.speaking}</Typography>
                    )}
                  </Grid>
                  <Grid item xs={12} md={3}>
                    <Typography variant="h5">
                      <InputLabel id="tenant-label">Writing:*</InputLabel>
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={9}>
                    <Select
                      variant="filled"
                      labelId="tenant-label"
                      id="tenant-select"
                      name="writing"
                      value={values.writing}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      sx={{ width: 250, height: 35 }}
                      error={touched.writing && !!errors.writing}
                    >
                      <MenuItem value="">--Select One--</MenuItem>
                      <MenuItem value="10">Tenant1</MenuItem>
                      <MenuItem value="20">Tenant2</MenuItem>
                      <MenuItem value="30">Tenant3</MenuItem>
                    </Select>
                    {touched.writing && errors.writing && (
                      <Typography color="error">{errors.writing}</Typography>
                    )}
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

export default Languages;
