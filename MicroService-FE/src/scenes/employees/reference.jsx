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
                <Grid container spacing={5}>
                  <Grid item xs={12} md={2}>
                    <Typography>EmployeeId:*</Typography>
                  </Grid>
                  <Grid item xs={12} md={10}>
                    <TextField
                      name="block_number"
                      variant="filled"
                      value={values.block_number}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      id="outlined-size-small"
                      size="small"
                      sx={{ width: 250, height: 25 }}
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
                    <FormLabel id="department-type-label">Type:*</FormLabel>
                  </Grid>
                  <Grid item xs={12} md={10}>
                    <RadioGroup
                      row
                      aria-labelledby="department-type-label"
                      name="departmentType"
                      value={values.departmentType}
                      onChange={handleChange}
                    >
                      <FormControlLabel
                        value="project"
                        control={<Radio />}
                        label="Project"
                      />
                      <FormControlLabel
                        value="non-project"
                        control={<Radio />}
                        label="Non-project"
                      />
                    </RadioGroup>
                    {touched.departmentType && errors.departmentType && (
                      <Typography color="error">
                        {errors.departmentType}
                      </Typography>
                    )}
                  </Grid>
                  <Grid item xs={12} md={2}>
                    <Typography variant="h5">
                      <InputLabel id="tenant-label">Tenant:*</InputLabel>
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={10}>
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
                  <Grid item xs={12} md={2}>
                    Mission:
                  </Grid>
                  <Grid item xs={12} md={10}>
                    <TextField
                      name="mission"
                      value={values.mission}
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
