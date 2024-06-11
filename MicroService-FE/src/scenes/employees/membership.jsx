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
  TextField,
} from "@mui/material";
import { Formik, Form } from "formik";
import * as yup from "yup";
import { tokens } from "../../theme";
import SaveIcon from "@mui/icons-material/Save";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useRef } from "react";
import { green } from "@mui/material/colors";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateField } from "@mui/x-date-pickers/DateField";
import dayjs from "dayjs";

const Membership = () => {
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
      field: "membership",
      headerName: "Membership",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "sub_paid",
      headerName: "Subscription Paid By",
      flex: 1,
      cellClassName: "name-column--cell",
    },

    {
      field: "sub_amount",
      headerName: "Subscription Amount",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "sub_date",
      headerName: "Subscription Date",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "sub_renewal",
      headerName: "Subscription Renewal Date",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "option",
      headerName: "Option",
      flex: 1,
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
                <Grid container spacing={3}>
                  <Grid item xs={12} md={3}>
                    <Typography variant="h5">
                      <InputLabel id="tenant-label">Membership:*</InputLabel>
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={9}>
                    <Select
                      variant="filled"
                      labelId="tenant-label"
                      id="tenant-select"
                      name="membership"
                      value={values.membership}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      sx={{ width: 250, height: 35 }}
                      error={touched.membership && !!errors.membership}
                    >
                      <MenuItem value="">Select Tenant</MenuItem>
                      <MenuItem value="10">Tenant1</MenuItem>
                      <MenuItem value="20">Tenant2</MenuItem>
                      <MenuItem value="30">Tenant3</MenuItem>
                    </Select>
                    {touched.membership && errors.membership && (
                      <Typography color="error">{errors.membership}</Typography>
                    )}
                  </Grid>
                  <Grid item xs={12} md={3}>
                    <Typography variant="h5">
                      <InputLabel id="tenant-label">
                        Subscription Paid by:*
                      </InputLabel>
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={9}>
                    <Select
                      variant="filled"
                      labelId="tenant-label"
                      id="tenant-select"
                      name="sub_paid"
                      value={values.sub_paid}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      sx={{ width: 250, height: 35 }}
                      error={touched.sub_paid && !!errors.sub_paid}
                    >
                      <MenuItem value="">Select Tenant</MenuItem>
                      <MenuItem value="10">Tenant1</MenuItem>
                      <MenuItem value="20">Tenant2</MenuItem>
                      <MenuItem value="30">Tenant3</MenuItem>
                    </Select>
                    {touched.sub_paid && errors.sub_paid && (
                      <Typography color="error">{errors.sub_paid}</Typography>
                    )}
                  </Grid>
                  <Grid item xs={12} md={3}>
                    Subscription Date:*
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
                    <Typography>Subscription Amount:*</Typography>
                  </Grid>
                  <Grid item xs={12} md={9}>
                    <TextField
                      name="sub_amount"
                      variant="filled"
                      value={values.sub_amount}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      id="outlined-size-small"
                      size="small"
                      sx={{ width: 250, height: 25 }}
                      error={touched.sub_amount && !!errors.sub_amount}
                      helperText={touched.sub_amount && errors.sub_amount}
                    />
                  </Grid>
                  <Grid item xs={12} md={3}>
                    Subscription Renewal Date:*
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

export default Membership;
