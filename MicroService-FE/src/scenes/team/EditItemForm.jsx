import { Box, Button, TextField } from "@mui/material";
import { Formik, Form } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { editItemAction } from "../../actions";
import { useParams } from "react-router-dom";

const EditItemForm = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.items.items) || [];

  const { id } = useParams();

  const selectedItem = items.find((item) => item.id === id);

  const initialValues = {
    id: selectedItem ? selectedItem.id : "",
    name: selectedItem ? selectedItem.name : "",
    email: selectedItem ? selectedItem.email : "",
    age: selectedItem ? selectedItem.age : "",
    phone: selectedItem ? selectedItem.phone : "",
    access: selectedItem ? selectedItem.access : "",
  };

  const onSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      await dispatch(editItemAction(selectedItem.id, values));
      resetForm();
      alert("Item updated successfully!");
    } catch (error) {
      console.error("Error updating item:", error);
      alert("Failed to update item.");
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
                label="ID"
                onBlur={handleBlur}
                onChange={handleChange}
                name="id"
                value={initialValues.id}
                error={touched.id && !!errors.id}
                helperText={touched.id && errors.id}
              />

              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Name"
                onBlur={handleBlur}
                onChange={handleChange}
                name="name"
                value={initialValues.name}
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
                value={initialValues.role}
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
                value={initialValues.location}
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
                value={initialValues.age}
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
                value={initialValues.phone}
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
                value={initialValues.access}
                error={touched.access && !!errors.access}
                helperText={touched.access && errors.access}
              />
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                Update
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default EditItemForm;
