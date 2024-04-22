import { Box, Button, TextField, IconButton } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import AddIcon from "@mui/icons-material/Add";
const Address = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleFormSubmit = (values) => {
    console.log(values);
  };

  return (
    <Box m="20px">
      {/* <Header title="CREATE USER" subtitle="Create a New User Profile" /> */}
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
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="10px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <TextField
                required
                size="small"
                variant="filled"
                type="text"
                label="Address"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address}
                name="address"
                error={!!touched.address && !!errors.address}
                helperText={touched.address && errors.address}
                sx={{ marginLeft: "10px", gridColumn: "span 1" }}
              />
              <IconButton aria-label="add">
                <AddIcon />
              </IconButton>

              <TextField
                size="small"
                variant="filled"
                type="text"
                label="House Number"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.houseNumber}
                name="houseNumber"
                error={!!touched.houseNumber && !!errors.houseNumber}
                helperText={touched.houseNumber && errors.houseNumber}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                size="small"
                variant="filled"
                type="text"
                label="Block Number"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.blockNumber}
                name="blockNumber"
                error={!!touched.blockNumber && !!errors.blockNumber}
                helperText={touched.blockNumber && errors.blockNumber}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                size="small"
                variant="filled"
                type="text"
                label="Floor"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.floor}
                name="floor"
                error={!!touched.floor && !!errors.floor}
                helperText={touched.floor && errors.floor}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                required
                size="small"
                variant="filled"
                type="text"
                label=" Tel. Office"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.telOfficce}
                name="telOfficce"
                error={!!touched.telOfficce && !!errors.telOfficce}
                helperText={touched.telOfficce && errors.telOfficce}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                size="small"
                variant="filled"
                type="text"
                label="Office Number"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.officeNumber}
                name="mobile"
                error={!!touched.officeNumber && !!errors.officeNumber}
                helperText={touched.officeNumber && errors.officeNumber}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                size="small"
                variant="filled"
                type="text"
                label="Tel. Extension"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.telExtention}
                name="mobile"
                error={!!touched.telExtention && !!errors.telExtention}
                helperText={touched.telExtention && errors.telExtention}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                size="small"
                variant="filled"
                type="text"
                label="Email"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                name="email"
                error={!!touched.email && !!errors.email}
                helperText={touched.email && errors.email}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                size="small"
                variant="filled"
                type="text"
                label="Mobile"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.mobile}
                name="mobile"
                error={!!touched.mobile && !!errors.mobile}
                helperText={touched.mobile && errors.mobile}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                size="small"
                variant="filled"
                type="text"
                label="Website"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.website}
                name="website"
                error={!!touched.website && !!errors.website}
                helperText={touched.website && errors.website}
                sx={{ gridColumn: "span 2" }}
              />
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                Save
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const checkoutSchema = yup.object().shape({
  address: yup.string().required("required"),
  telOfficce: yup.string().required("required"),
  email: yup.string().email("invalid email").required("required"),
  mobile: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("required"),
});
const initialValues = {
  address: "",
  houseNumber: "",
  blockNumber: "",
  floor: "",
  telOfficce: "",
  officeNumber: "",
  telExtention: "",
  email: "",
  mobile: "",
};

export default Address;
