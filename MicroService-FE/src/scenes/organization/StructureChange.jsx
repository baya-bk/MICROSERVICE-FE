import React from "react";
import {
  Box,
  TextField,
  Grid,
  Typography,
  Select,
  Stack,
  Button,
  useMediaQuery,
  Snackbar,
  Alert,
} from "@mui/material";
// import PlusIcon from "@mui/icons-material/PlusIcon";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import CircularProgress from "@mui/material/CircularProgress";
import { green } from "@mui/material/colors";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import SaveIcon from "@mui/icons-material/Save";
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";
import dayjs from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { tokens } from "../../theme";
import { useTheme } from "@emotion/react";
import { DataGrid } from "@mui/x-data-grid";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import { Form, Formik } from "formik";
import * as yup from "yup";

// import FormControl from "@mui/material/FormControl";

const StructureChange = () => {
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

  // const [value, setValue] = React.useState("female");
  // const [tenant, setTenant] = React.useState("");
  // const [region, setRegion] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const timer = React.useRef();

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
    {
      field: "job_type",
      headerName: "Job Title",
      cellClassName: "name-column--cell",
    },
    {
      field: "type",
      headerName: "Type",
      flex: 1,
    },
    {
      field: "region",
      headerName: "Region",
      flex: 1,
    },
    {
      field: "address",
      headerName: "Address",
      flex: 1,
    },
    {
      field: "block_no",
      headerName: "Block No",
      flex: 1,
    },
    {
      field: "house_no",
      headerName: "House Number",
      flex: 1,
    },
    {
      field: "office_no",
      headerName: "Office Number",
      flex: 1,
    },
    {
      field: "process_date",
      headerName: "Process Date",
      flex: 1,
    },
  ];

  // const handleChange = (event) => {
  //   setValue(event.target.value);
  // };
  const initialValues = {
    department_name: "",
    old_work_unit: "",
    address_change: "",
    new_work_unit: "",
    region: "",
    type: "",
  };

  const checkoutSchema = yup.object().shape({
    department_name: yup.string().required("Department name is required"),
    old_work_unit: yup.string().required("Old work unit is required"),
    address_change: yup.string().required("Address change is required"),
    new_work_unit: yup.string().required("New work unit is required"),
    region: yup.string().required("Region is required"),
    type: yup.string().required("Type is required"),
  });

  return (
    <Box sx={{ padding: "20px" }}>
      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={checkoutSchema}
        // onSubmit={(values) => {
        //   console.log(values);
        // }}
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
                <Grid container spacing={4}>
                  <Grid item xs={12} md={3}>
                    <Typography>Department Name:*</Typography>
                  </Grid>
                  <Grid item xs={12} md={9}>
                    <TextField
                      name="department_name"
                      value={values.department_name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      variant="filled"
                      size="small"
                      sx={{ width: 250, height: 25 }}
                      error={
                        touched.department_name && !!errors.department_name
                      }
                      helperText={
                        touched.department_name && errors.department_name
                      }
                    />
                  </Grid>
                  <Grid item xs={12} md={3}>
                    <Typography>Old Work Unit:*</Typography>
                  </Grid>
                  <Grid item xs={12} md={9}>
                    <TextField
                      name="old_work_unit"
                      value={values.old_work_unit}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      variant="filled"
                      size="small"
                      sx={{ width: 250, height: 25 }}
                      error={touched.old_work_unit && !!errors.old_work_unit}
                      helperText={touched.old_work_unit && errors.old_work_unit}
                    />
                  </Grid>
                  <Grid item xs={12} md={3}>
                    <FormLabel id="address-change-label">
                      Is There Address Change?:*
                    </FormLabel>
                  </Grid>
                  <Grid item xs={12} md={9}>
                    <RadioGroup
                      row
                      aria-labelledby="address-change-label"
                      name="address_change"
                      value={values.address_change}
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
                    {touched.address_change && errors.address_change && (
                      <Typography color="error">
                        {errors.address_change}
                      </Typography>
                    )}
                  </Grid>
                </Grid>
                <Grid container spacing={2} alignItems="center">
                  <Grid item xs={12} md={3}>
                    <Typography>New Work Unit:*</Typography>
                  </Grid>
                  <Grid item xs={12} md={9}>
                    <TextField
                      name="new_work_unit"
                      value={values.new_work_unit}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      variant="filled"
                      size="small"
                      sx={{ width: 200, height: 25 }}
                      error={touched.new_work_unit && !!errors.new_work_unit}
                      helperText={touched.new_work_unit && errors.new_work_unit}
                    />
                    <Fab
                      sx={{
                        backgroundColor: colors.blueAccent[700],
                        color: colors.grey[100],
                        marginLeft: 1,
                        width: 35,
                        height: 3,
                      }}
                      size="small"
                      aria-label="add"
                    >
                      <AddIcon />
                    </Fab>
                  </Grid>
                  <Grid item xs={12} md={3}>
                    <Typography>
                      <InputLabel id="region-label">Region:*</InputLabel>
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={9}>
                    <Select
                      name="region"
                      value={values.region}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      variant="filled"
                      labelId="region-label"
                      sx={{ width: 250, height: 35 }}
                      error={touched.region && !!errors.region}
                    >
                      <MenuItem value="">Select Region</MenuItem>
                      <MenuItem value="region1">Region 1</MenuItem>
                      <MenuItem value="region2">Region 2</MenuItem>
                      <MenuItem value="region3">Region 3</MenuItem>
                    </Select>
                    {touched.region && errors.region && (
                      <Typography color="error">{errors.region}</Typography>
                    )}
                  </Grid>
                  <Grid item xs={12} md={3}>
                    <FormLabel id="type-label">Type:*</FormLabel>
                  </Grid>
                  <Grid item xs={12} md={9}>
                    <RadioGroup
                      row
                      aria-labelledby="type-label"
                      name="type"
                      value={values.type}
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
                    {touched.type && errors.type && (
                      <Typography color="error">{errors.type}</Typography>
                    )}
                  </Grid>
                </Grid>
              </Stack>
            </Box>

            <Box
              backgroundColor={colors.primary[400]}
              sx={{ padding: "20px", boxShadow: 2, marginBottom: "20px" }}
            >
              <Box display="flex" justifyContent="center">
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
            </Box>
          </Form>
        )}
      </Formik>
      <Box
        backgroundColor={colors.primary[400]}
        sx={{ padding: "20px", boxShadow: 2, marginBottom: "20px" }}
      >
        <Grid container columnSpacing={10} rowSpacing={4}>
          <Grid item xs={12} md={2}>
            <Typography>Prepared by:</Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField
              id="outlined-size-small"
              variant="filled"
              defaultValue=""
              size="small"
              sx={{ width: 250, height: 25 }}
            />
          </Grid>
          <Grid item xs={12} md={2}>
            <Typography>Prepared on:</Typography>
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
      <Box
        m="40px 0 0 0"
        height="50vh"
        sx={{
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
export default StructureChange;
