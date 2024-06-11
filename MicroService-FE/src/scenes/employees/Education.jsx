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
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateField } from "@mui/x-date-pickers/DateField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";

const Education = () => {
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
            >
              <Stack direction={isSmallScreen ? "column" : "row"} gap={2}>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={2}>
                    <Typography variant="h5">
                      <InputLabel id="education-level-label">
                        Education Level:*
                      </InputLabel>
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={10}>
                    <Select
                      variant="filled"
                      labelId="education-level-label"
                      id="education-level-select"
                      name="education_level"
                      value={values.education_level}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      sx={{ width: 250, height: 35 }}
                      error={
                        touched.education_level && !!errors.education_level
                      }
                    >
                      <MenuItem value="">--Select One--</MenuItem>
                      <MenuItem value="10">Tenant1</MenuItem>
                      <MenuItem value="20">Tenant2</MenuItem>
                      <MenuItem value="30">Tenant3</MenuItem>
                    </Select>
                    {touched.education_level && errors.education_level && (
                      <Typography color="error">
                        {errors.education_level}
                      </Typography>
                    )}
                  </Grid>
                  <Grid item xs={12} md={2}>
                    <Typography variant="h5">
                      <InputLabel id="field-of-study-label">
                        Field of Study:*
                      </InputLabel>
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={10}>
                    <Select
                      variant="filled"
                      labelId="field-of-study-label"
                      id="field-of-study-select"
                      name="field_of_study"
                      value={values.field_of_study}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      sx={{ width: 250, height: 35 }}
                      error={touched.field_of_study && !!errors.field_of_study}
                    >
                      <MenuItem value="">--Select One--</MenuItem>
                      <MenuItem value="10">Tenant1</MenuItem>
                      <MenuItem value="20">Tenant2</MenuItem>
                      <MenuItem value="30">Tenant3</MenuItem>
                    </Select>
                    {touched.field_of_study && errors.field_of_study && (
                      <Typography color="error">
                        {errors.field_of_study}
                      </Typography>
                    )}
                  </Grid>
                  <Grid item xs={12} md={2}>
                    <Typography>Institution:*</Typography>
                  </Grid>
                  <Grid item xs={12} md={10}>
                    <TextField
                      name="institutionr"
                      variant="filled"
                      value={values.institutionr}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      id="outlined-size-small"
                      size="small"
                      sx={{ width: 250, height: 25 }}
                      error={touched.institution && !!errors.institution}
                      helperText={touched.institution && errors.institution}
                    />
                  </Grid>
                  <Grid item xs={12} md={2}>
                    <Typography>Address:*</Typography>
                  </Grid>
                  <Grid item xs={12} md={10}>
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
                  <Grid item xs={12} md={2}>
                    <Typography variant="h5">
                      <InputLabel id="sponsor-label">Sponsored by:*</InputLabel>
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={10}>
                    <Select
                      variant="filled"
                      labelId="sponsor-label"
                      id="sponsor-select"
                      name="sponsored_by"
                      value={values.sponsored_by}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      sx={{ width: 250, height: 35 }}
                      error={touched.sponsored_by && !!errors.sponsored_by}
                    >
                      <MenuItem value="">Select Tenant</MenuItem>
                      <MenuItem value="10">Tenant1</MenuItem>
                      <MenuItem value="20">Tenant2</MenuItem>
                      <MenuItem value="30">Tenant3</MenuItem>
                    </Select>
                    {touched.sponsored_by && errors.sponsored_by && (
                      <Typography color="error">
                        {errors.sponsored_by}
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
                <Grid container spacing={3}>
                  <Grid item xs={12} md={3}>
                    Start Date:*
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
                    <Typography>Result:</Typography>
                  </Grid>
                  <Grid item xs={12} md={9}>
                    <TextField
                      name="result"
                      variant="filled"
                      value={values.result}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      id="outlined-size-small"
                      size="small"
                      sx={{ width: 250, height: 25 }}
                    />
                  </Grid>
                  <Grid item xs={12} md={3}>
                    <Typography>Award:</Typography>
                  </Grid>
                  <Grid item xs={12} md={9}>
                    <TextField
                      name="award"
                      variant="filled"
                      value={values.award}
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

export default Education;
