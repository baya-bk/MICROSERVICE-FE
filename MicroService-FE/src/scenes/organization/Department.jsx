import * as React from "react";
import {
  Box,
  TextField,
  Grid,
  Typography,
  Select,
  Stack,
  Button,
  useTheme,
  MenuItem,
  InputLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
  CircularProgress,
} from "@mui/material";
import {
  Dialog,
  DialogActions,
  DialogContentText,
  DialogTitle,
  DialogContent,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import FormLabel from "@mui/material/FormLabel";
import AddIcon from "@mui/icons-material/Add";
import SaveIcon from "@mui/icons-material/Save";
import { useState } from "react";
import { Formik, Form } from "formik";
import * as yup from "yup";
// import useMediaQuery from "@mui/material/useMediaQuery";
import { useDispatch, useSelector } from "react-redux";
import { addDepartmentThunks } from "../../store";
import { updateDepartmentThunks } from "../../store";

import { tokens } from "../../theme";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { useEffect } from "react";

const initialValues = {
  department_id: 7,
  department_name: "",
  mission: "",
  vision: "",
  department_values: "",
  departmentType: 2,
  location: 1,
  established_on: null,
  tenant: 2,
  parent_id: 1,
  created_by: "",
  created_on: "2024-05-30T12:59:07.252Z",
  isActive: true,
};

const Department = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const [department, setDepartment] = useState({
    department_id: 0,
    department_name: "",
    mission: "",
    vision: "",
    department_values: "",
    departmentType: 2,
    location: 1,
    established_on: null,
    tenant: 2,
    parent_id: 1,
    created_by: "",
    created_on: "2024-05-30T12:59:07.252Z",
    isActive: true,
  });

  const departmentItems = useSelector((state) => state.getDepartmentById.items);
  console.log("populated departmemt", departmentItems[0]);
  const dept = departmentItems[0];

  // Function to map departmentItems to department state
  const mapDepartmentItems = (dept) => {
    setDepartment({
      department_id: dept.department_id || 0,
      department_name: dept.department_name || "",
      mission: dept.mission || "",
      vision: dept.vision || "",
      department_values: dept.department_values || "",
      departmentType:
        dept.department_type_name === "Engineering" ? "project" : "non-project",
      location: dept.location_name === "Headquarters" ? 1 : 0,
      established_on: dept.established_on || null,
      tenant: dept.tenant || 2,
      parent_id: dept.parent_id || 1,
      created_by: dept.created_by || "",
      created_on: dept.created_on || "",
      isActive: dept.isActive || true,
    });
  };

  useEffect(() => {
    if (departmentItems.length > 0) {
      mapDepartmentItems(departmentItems[0]);
    }
  }, [departmentItems]);
  console.log("department state ", department);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const checkoutSchema = yup.object().shape({
    department_name: yup.string().required("Required"),
    departmentType: yup.string().required("Required"),
    tenant: yup.string().required("Required"),
    location: yup.string().required("Required"),
    established_on: yup.date().required("Required").nullable(),
  });

  // const isNonMobile = useMediaQuery("(min-width:600px)");

  // const handleFormSubmit = (values) => {
  //   console.log(values);
  // };
  const dispatch = useDispatch();
  const handleFormSubmit = async (values, { setSubmitting }) => {
    try {
      setSuccess(false);
      setLoading(true);

      await dispatch(addDepartmentThunks.addItem(values.tenant, values)).then(
        (res) => {
          setSuccess(true);
          console.log(res);
        }
      );
    } catch (error) {
      console.error("Failed to submit the data:", error);
      setSuccess(false);
    } finally {
      setLoading(false);
      setSubmitting(false);
    }
  };
  const handleFormUpdate = async (values, { setSubmitting }) => {
    try {
      setSuccess(false);
      setLoading(true);

      await dispatch(
        updateDepartmentThunks.editItem(
          values.tenant,
          values.department_id,
          values
        )
      ).then((res) => {
        setSuccess(true);
        console.log(res);
      });
    } catch (error) {
      console.error("Failed to submit the data:", error);
      setSuccess(false);
    } finally {
      setLoading(false);
      setSubmitting(false);
    }
  };

  const buttonSx = {
    ...(success && {
      backgroundColor: colors.blueAccent[700],
      "&:hover": {
        color: colors.grey[100],
      },
    }),
  };

  return (
    <Box sx={{ padding: "20px" }}>
      <Formik
        onSubmit={handleFormUpdate}
        initialValues={department}
        validationSchema={checkoutSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
          setFieldValue,
        }) => (
          <Form onSubmit={handleSubmit}>
            <Box
              backgroundColor={colors.primary[400]}
              sx={{ padding: "20px", boxShadow: 2, marginBottom: "20px" }}
            >
              <Stack direction="row">
                <Grid container spacing={3} alignItems="center">
                  <Grid item xs={12} md={2}>
                    <Typography>Department:*</Typography>
                  </Grid>
                  <Grid item xs={12} md={9}>
                    <TextField
                      name="department_name"
                      value={department.department_name}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      id="outlined-size-small"
                      size="small"
                      variant="filled"
                      sx={{ width: 250, height: 25 }}
                      error={
                        touched.department_name && !!errors.department_name
                      }
                      helperText={
                        touched.department_name && errors.department_name
                      }
                    />
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
                    <Typography variant="h5">
                      <InputLabel id="region-label">Region:*</InputLabel>
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={10}>
                    <Select
                      labelId="region-label"
                      id="region-select"
                      name="location"
                      variant="filled"
                      value={values.location}
                      // onChange={handleChange}
                      onBlur={handleBlur}
                      sx={{ width: 250, height: 35 }}
                      error={touched.location && !!errors.location}
                    >
                      <MenuItem value="">Select Region</MenuItem>
                      <MenuItem value="10">Adis Ababa</MenuItem>
                      <MenuItem value="20">Jimma</MenuItem>
                      <MenuItem value="30">Wolkite</MenuItem>
                    </Select>
                    {touched.location && errors.location && (
                      <Typography color="error">{errors.location}</Typography>
                    )}
                  </Grid>

                  <Grid item xs={12} md={2}>
                    Established on:
                  </Grid>
                  <Grid item xs={12} md={10}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DatePicker
                        name="established_on"
                        value={values.established_on}
                        onChange={(newValue) => {
                          setFieldValue("established_on", newValue);
                        }}
                        slotProps={{
                          textField: {
                            sx: { width: 250, height: 60 },
                            error:
                              touched.established_on && !!errors.established_on,
                            helperText:
                              touched.established_on && errors.established_on,
                          },
                        }}
                      />
                    </LocalizationProvider>
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
                  <Grid item xs={12} md={2}>
                    Vision:
                  </Grid>
                  <Grid item xs={12} md={10}>
                    <TextField
                      name="vision"
                      value={values.vision}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      multiline
                      variant="filled"
                      rows={2}
                      sx={{ width: 250 }}
                    />
                  </Grid>
                  <Grid item xs={12} md={2}>
                    Values:
                  </Grid>
                  <Grid item xs={12} md={9}>
                    <TextField
                      name="department_values"
                      value={values.department_values}
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
              sx={{ padding: "20px", boxShadow: 2, marginBottom: "20px" }}
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

            <Box
              backgroundColor={colors.primary[400]}
              sx={{ padding: "20px", boxShadow: 2 }}
            >
              <Box
                display="flex"
                justifyContent="space-around"
                alignItems="center"
              >
                <Button
                  color="error"
                  variant="contained"
                  sx={{
                    fontSize: "14px",
                    fontWeight: "bold",
                    padding: "10px 20px",
                  }}
                  onClick={handleClickOpen}
                >
                  <DeleteIcon sx={{ mr: "10px" }} />
                  Delete
                </Button>
                <Dialog
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="responsive-dialog-title"
                >
                  <DialogTitle variant="warning" id="responsive-dialog-title">
                    {"Warning"}
                  </DialogTitle>
                  <DialogContent>
                    <DialogContentText>
                      Are you sure you want to delete?
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions>
                    <Button
                      autoFocus
                      onClick={handleClose}
                      color="error"
                      variant="contained"
                    >
                      No
                    </Button>
                    <Button
                      onClick={handleClose}
                      autoFocus
                      color="secondary"
                      variant="contained"
                    >
                      Yes
                    </Button>
                  </DialogActions>
                </Dialog>
                <Button
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
                  {success ? "Updated" : "Update"}
                </Button>
                <Button
                  type="submit"
                  color="secondary"
                  variant="contained"
                  sx={{
                    fontSize: "14px",
                    fontWeight: "bold",
                    padding: "10px 20px",
                  }}
                >
                  <AddIcon sx={{ mr: "10px" }} />
                  Add
                </Button>
              </Box>
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default Department;
