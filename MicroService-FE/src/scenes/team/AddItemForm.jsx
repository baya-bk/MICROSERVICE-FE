import { Box, TextField, Button } from "@mui/material";
import { Formik, Form } from "formik";
import { useDispatch } from "react-redux";
import { addItemAction } from "../../actions";

const AddItemForm = () => {
  console.log("smsms");
  const initialValues = {
    name: "",
    role: "",
    location: "",
    AbstractRange: "",
    phone: "",
    access: "",
  };
  const dispatch = useDispatch();

  const onSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      // await axios.post("http://localhost:3000/items", values);
      dispatch(addItemAction(values));
      resetForm();
      alert("Item added successfully!");
    } catch (error) {
      console.error("Error adding item:", error);
      alert("Failed to add item.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Box m="20px">
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({ errors, touched, handleChange, handleBlur }) => (
          <Form>
            <Box
              display="flex"
              flexDirection="column"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
            >
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Name"
                onBlur={handleBlur}
                onChange={handleChange}
                name="name"
                error={touched.name && !!errors.name}
                helperText={touched.name && errors.name}
              />

              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Role"
                onBlur={handleBlur}
                onChange={handleChange}
                name="role"
                error={touched.role && !!errors.role}
                helperText={touched.role && errors.role}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Location"
                onBlur={handleBlur}
                onChange={handleChange}
                name="location"
                error={touched.location && !!errors.location}
                helperText={touched.location && errors.location}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Age"
                onBlur={handleBlur}
                onChange={handleChange}
                name="age"
                error={touched.age && !!errors.age}
                helperText={touched.age && errors.age}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Phone"
                onBlur={handleBlur}
                onChange={handleChange}
                name="phone"
                error={touched.phone && !!errors.phone}
                helperText={touched.phone && errors.phone}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Access"
                onBlur={handleBlur}
                onChange={handleChange}
                name="access"
                error={touched.access && !!errors.access}
                helperText={touched.access && errors.access}
              />
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                Add Item
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default AddItemForm;

/**
import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { editItemAction } from "../actions";

const EditItemForm = () => {
  const { id } = useParams();
  console.log(id);

  const [formData, setFormData] = useState({
    id: "",
    name: "",
    role: "",
    location: "",
  });

  useEffect(() => {
    const items = useSelector((state) => state.items.items) || [];

    for (let i = 0; i < items.length; i++) {
      if (items[i].id === id) {
        const selectedItem = items[i];
        setFormData({
          id: selectedItem.id,
          name: selectedItem.name,
          role: selectedItem.role,
          location: selectedItem.location,
        });
        break;
      }
    }
  }, [items, id]);
  return (
    <Box m="20px">

      <Formik
        // onSubmit={handleSubmit}
        initialValues={formData}
        validationSchema={checkoutSchema}
      >
        {({ errors, touched, handleBlur, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="flex"
              flexDirection="column"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
            >
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Name"
                onBlur={handleBlur}
                // onChange={handleChange}
                value={formData.name}
                name="name"
                error={!!touched.Name && !!errors.Name}
                helperText={touched.Name && errors.Name}
                sx={{ gridColumn: "span 2" }}
              />

              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Role"
                onBlur={handleBlur}
                // onChange={handleChange}
                value={formData.role}
                name="role"
                error={!!touched.role && !!errors.role}
                helperText={touched.role && errors.role}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Location"
                onBlur={handleBlur}
                // onChange={handleChange}
                value={formData.location}
                name="location"
                error={!!touched.location && !!errors.location}
                helperText={touched.location && errors.location}
                sx={{ gridColumn: "span 4" }}
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

const checkoutSchema = yup.object().shape({
  name: yup.string().required("required"),
  role: yup.string().required("required"),
  location: yup.string().required("required"),
});

// const initialValues = {
//   name: "",
//   role: "",
//   location: "",
// };

// EditItemForm.propTypes = {
//   // console.log(items);,
//   items: PropTypes.object.isRequired,
// };

export default EditItemForm;
**/
