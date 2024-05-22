import React from "react";
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
import { useFormik, Formik, Form } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import { tokens } from "../../theme";

const Department = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const initialValues = {
    department_name: "",
    mission: "",
    vision: "",
    department_values: "",
    departmentType: "",
    location: "",
    established_on: null,
    tenant: "",
    parent_id: "",
  };

  const checkoutSchema = yup.object().shape({
    department_name: yup.string().required("Required"),
    departmentType: yup.string().required("Required"),
    tenant: yup.string().required("Required"),
    location: yup.string().required("Required"),
    established_on: yup.date().required("Required").nullable(),
  });

  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleFormSubmit = (values) => {
    console.log(values);
  };

  return (
    <Box
      sx={{
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
    >
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
          setFieldValue,
        }) => (
          <Form onSubmit={handleSubmit}>
            <Box
              backgroundColor={colors.primary[400]}
              sx={{ padding: "20px", boxShadow: 2 }}
            >
              <Stack direction="row">
                <Grid container spacing={3} alignItems="center">
                  <Grid item xs={12} md={2}>
                    <Typography>Department:*</Typography>
                  </Grid>
                  <Grid item xs={12} md={9}>
                    <TextField
                      name="department_name"
                      value={values.department_name}
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
                      onChange={handleChange}
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
                  }}
                >
                  <SaveIcon sx={{ mr: "10px" }} />
                  Save
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
