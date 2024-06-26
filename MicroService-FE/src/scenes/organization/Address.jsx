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
} from "@mui/material";
import { Formik, Form } from "formik";
import * as yup from "yup";
import { tokens } from "../../theme";
import SaveIcon from "@mui/icons-material/Save";
import { useDispatch } from "react-redux";
import AddIcon from "@mui/icons-material/Add";
import { addAddressThunks } from "../../store";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useState } from "react";

const Address = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const dispatch = useDispatch();
  const handleFormSubmit = async (values, { setSubmitting }) => {
    try {
      setSuccess(false);
      setLoading(true);

      await dispatch(addAddressThunks.addItem(values.tenant_id, values)).then(
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

  const initialValues = {
    department_id: 2,
    address: "",
    block_number: "",
    tel_office: "",
    tel_extension: "",
    mobile: "",
    house_number: "",
    floor: "",
    office_number: "",
    email: "",
    website: "",
    tenant_id: 2,
  };

  const phoneRegExp =
    /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

  const checkoutSchema = yup.object().shape({
    address: yup.string().required("Required"),
    tel_office: yup.string().required("Required"),
    email: yup.string().email("Invalid email"),
    mobile: yup.string().matches(phoneRegExp, "Phone number is not valid"),
  });

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isSmallScreen = useMediaQuery("(max-width:700px)");

  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);

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
                    <Typography>Block No:</Typography>
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
                    <Typography>Tel. Office:*</Typography>
                  </Grid>
                  <Grid item xs={12} md={10}>
                    <TextField
                      value={values.tel_office}
                      name="tel_office"
                      variant="filled"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      id="outlined-size-small"
                      size="small"
                      sx={{ width: 250, height: 25 }}
                      error={touched.tel_office && !!errors.tel_office}
                      helperText={touched.tel_office && errors.tel_office}
                    />
                  </Grid>
                  <Grid item xs={12} md={2}>
                    <Typography>Tel. Extension:</Typography>
                  </Grid>
                  <Grid item xs={12} md={10}>
                    <TextField
                      value={values.tel_extension}
                      variant="filled"
                      name="tel_extension"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      id="outlined-size-small"
                      size="small"
                      sx={{ width: 250, height: 25 }}
                    />
                  </Grid>
                  <Grid item xs={12} md={2}>
                    <Typography>Mobile:</Typography>
                  </Grid>
                  <Grid item xs={12} md={10}>
                    <TextField
                      value={values.mobile}
                      variant="filled"
                      name="mobile"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      id="outlined-size-small"
                      size="small"
                      sx={{ width: 250, height: 25 }}
                    />
                  </Grid>
                </Grid>

                <Grid container spacing={3}>
                  <Grid item xs={12} md={2}>
                    <Typography>House Number:</Typography>
                  </Grid>
                  <Grid item xs={12} md={10}>
                    <TextField
                      value={values.house_number}
                      variant="filled"
                      name="house_number"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      id="outlined-size-small"
                      size="small"
                      sx={{ width: 250, height: 25 }}
                    />
                  </Grid>
                  <Grid item xs={12} md={2}>
                    <Typography>Floor: </Typography>
                  </Grid>
                  <Grid item xs={12} md={10}>
                    <TextField
                      value={values.floor}
                      variant="filled"
                      name="floor"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      id="outlined-size-small"
                      size="small"
                      sx={{ width: 250, height: 25 }}
                    />
                  </Grid>
                  <Grid item xs={12} md={2}>
                    <Typography>Office Number:</Typography>
                  </Grid>
                  <Grid item xs={12} md={10}>
                    <TextField
                      value={values.office_number}
                      variant="filled"
                      name="office_number"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      id="outlined-size-small"
                      size="small"
                      sx={{ width: 250, height: 25 }}
                    />
                  </Grid>
                  <Grid item xs={12} md={2}>
                    <Typography>Email:</Typography>
                  </Grid>
                  <Grid item xs={12} md={10}>
                    <TextField
                      value={values.email}
                      variant="filled"
                      name="email"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      id="outlined-size-small"
                      size="small"
                      sx={{ width: 250, height: 25 }}
                      error={touched.email && !!errors.email}
                      helperText={touched.email && errors.email}
                    />
                  </Grid>
                  <Grid item xs={12} md={2}>
                    <Typography>Website:</Typography>
                  </Grid>
                  <Grid item xs={12} md={10}>
                    <TextField
                      value={values.website}
                      variant="filled"
                      name="website"
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
        sx={{ padding: "30px", boxShadow: 2, marginTop: "20px" }}
      >
        <Grid container spacing={4}>
          <Grid item xs={12} md={2}>
            <Typography>Prepared By:</Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField
              variant="filled"
              id="outlined-size-small"
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
    </Box>
  );
};

export default Address;
