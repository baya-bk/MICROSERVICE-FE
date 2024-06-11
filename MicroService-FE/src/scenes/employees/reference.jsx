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
} from "@mui/material";
import { Formik, Form } from "formik";
import * as yup from "yup";
import { tokens } from "../../theme";
import SaveIcon from "@mui/icons-material/Save";
import AddIcon from "@mui/icons-material/Add";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useRef } from "react";
import { green } from "@mui/material/colors";

const Reference = () => {
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
      field: "full_name",
      headerName: "Full Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "job_title",
      headerName: "Job Title",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "relationship",
      headerName: "Relationship",
      flex: 1,
      cellClassName: "name-column--cell",
    },

    {
      field: "phone_no",
      headerName: "Phone No",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "remark",
      headerName: "Remark",
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
                <Grid container spacing={5}>
                  <Grid item xs={12} md={3}>
                    <Typography>Full Name:*</Typography>
                  </Grid>
                  <Grid item xs={12} md={9}>
                    <TextField
                      name="full_name"
                      variant="filled"
                      value={values.full_name}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      id="outlined-size-small"
                      size="small"
                      sx={{ width: 250, height: 25 }}
                      error={touched.full_name && !!errors.full_name}
                      helperText={touched.full_name && errors.full_name}
                    />
                  </Grid>
                  <Grid item xs={12} md={3}>
                    <Typography>Relationship:*</Typography>
                  </Grid>
                  <Grid item xs={12} md={9}>
                    <TextField
                      name="relationship"
                      variant="filled"
                      value={values.relationship}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      id="outlined-size-small"
                      size="small"
                      sx={{ width: 250, height: 25 }}
                      error={touched.relationship && !!errors.relationship}
                      helperText={touched.relationship && errors.relationship}
                    />
                  </Grid>
                  <Grid item xs={12} md={3}>
                    <Typography>Phone No:*</Typography>
                  </Grid>
                  <Grid item xs={12} md={9}>
                    <TextField
                      name="phone_no"
                      variant="filled"
                      value={values.phone_no}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      id="outlined-size-small"
                      size="small"
                      sx={{ width: 250, height: 25 }}
                      error={touched.phone_no && !!errors.phone_no}
                      helperText={touched.phone_no && errors.phone_no}
                    />
                  </Grid>
                  <Grid item xs={12} md={3}>
                    <Typography>Job Title:*</Typography>
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
                      error={touched.job_title && !!errors.job_title}
                      helperText={touched.job_title && errors.job_title}
                    />
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
                    <Typography>Occupation Address:*</Typography>
                  </Grid>
                  <Grid item xs={12} md={9}>
                    <TextField
                      name="occupation_address"
                      variant="filled"
                      value={values.occupation_address}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      id="outlined-size-small"
                      size="small"
                      sx={{ width: 250, height: 25 }}
                      error={
                        touched.occupation_address &&
                        !!errors.occupation_address
                      }
                      helperText={
                        touched.occupation_address && errors.occupation_address
                      }
                    />
                  </Grid>
                  <Grid item xs={12} md={3}>
                    <Typography>Email:*</Typography>
                  </Grid>
                  <Grid item xs={12} md={9}>
                    <TextField
                      name="email"
                      variant="filled"
                      value={values.email}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      id="outlined-size-small"
                      size="small"
                      sx={{ width: 250, height: 25 }}
                      error={touched.email && !!errors.email}
                      helperText={touched.email && errors.email}
                    />
                  </Grid>
                  <Grid item xs={12} md={3}>
                    remark:
                  </Grid>
                  <Grid item xs={12} md={9}>
                    <TextField
                      name="remark"
                      value={values.remark}
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

export default Reference;
