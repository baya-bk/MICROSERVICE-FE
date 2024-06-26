import * as React from "react";
import {
  Box,
  TextField,
  Grid,
  Button,
  useTheme,
  useMediaQuery,
  CircularProgress,
  Typography,
  Alert,
  Snackbar,
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

const ContractRenewal = () => {
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
              direction={isSmallScreen ? "column" : "row"}
            >
              <Grid container spacing={3}>
                <Grid item xs={12} md={3}>
                  <Typography>Employee ID :*</Typography>
                </Grid>
                <Grid item xs={12} md={9}>
                  <TextField
                    name="training_title"
                    variant="filled"
                    value={values.training_title}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    id="outlined-size-small"
                    size="small"
                    sx={{ width: 250, height: 25 }}
                    error={touched.training_title && !!errors.training_title}
                    helperText={touched.training_title && errors.training_title}
                  />
                </Grid>
                <Grid item xs={12} md={3}>
                  Contract Start Date:*
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
                  Contract End Date:*
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
                <Grid container spacing={3}>
                  <Grid item xs={12} md={2}>
                    Reason:
                  </Grid>
                  <Grid item xs={12} md={10}>
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
              </Grid>
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

export default ContractRenewal;
