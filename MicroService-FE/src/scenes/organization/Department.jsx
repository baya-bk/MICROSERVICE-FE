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
} from "@mui/material";
import {
  Dialog,
  DialogActions,
  DialogContentText,
  DialogTitle,
  DialogContent,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
// import PlusIcon from "@mui/icons-material/PlusIcon";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControlLabel from "@mui/material/FormControlLabel";
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";
import dayjs from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import FormLabel from "@mui/material/FormLabel";
import { tokens } from "../../theme";
import AddIcon from "@mui/icons-material/Add";
import SaveIcon from "@mui/icons-material/Save";
import { useState } from "react";
import { Formik, Form } from "formik";

// import useMediaQuery from "@mui/material/useMediaQuery";

// import FormControl from "@mui/material/FormControl";

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
  // const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const [value, setValue] = React.useState("female");
  const [tenant, setTenant] = React.useState("");
  const [region, setRegion] = React.useState("");

  const initialValues = {
    department_name: "",
    mission: "",
    vision: "",
    department_values: "",
    departmentType: 0,
    location: 0,
    established_on: "",
    tenant: 0,
    parent_id: 0,
  };

  const handleChange = (event) => {
    setValue(event.target.value);
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
      <Formik>
        <Form>
          <Box
            backgroundColor={colors.primary[400]}
            sx={{ padding: "20px", boxShadow: 2 }}
          >
            <Stack direction="row">
              <Grid container spacing={2} alignItems="center">
                <Grid item xs={12} md={2}>
                  <Typography>Departement:*</Typography>
                </Grid>
                <Grid item xs={12} md={9}>
                  <TextField
                    name="block_number"
                    value=""
                    onChange={handleChange}
                    id="outlined-size-small"
                    // defaultValue=""
                    size="small"
                    sx={{ width: 250, height: 25 }}
                  />
                </Grid>

                <Grid item xs={12} md={2}>
                  <FormLabel id="demo-radio-buttons-group-label">
                    Type:*
                  </FormLabel>
                </Grid>
                <Grid item xs={12} md={10}>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
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
                </Grid>
                <Grid item xs={12} md={2}>
                  {" "}
                  <Typography variant="h5">
                    <InputLabel id="demo-radio-buttons-group-label">
                      Tenant:
                    </InputLabel>
                  </Typography>
                </Grid>
                <Grid item xs={12} md={10}>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={tenant}
                    label="Tenant"
                    onChange={handleChange}
                    sx={{ width: 250, height: 35 }}
                  >
                    <MenuItem value={10}>Tenant1</MenuItem>
                    <MenuItem value={20}>Tenant2</MenuItem>
                    <MenuItem value={30}>Tenant3</MenuItem>
                  </Select>
                </Grid>
                <Grid item xs={12} md={2}>
                  {" "}
                  <Typography variant="h5">
                    <InputLabel id="demo-radio-buttons-group-label">
                      Region:
                    </InputLabel>
                  </Typography>
                </Grid>
                <Grid item xs={12} md={10}>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={region}
                    label="Region"
                    onChange={handleChange}
                    sx={{ width: 250, height: 35 }}
                  >
                    <MenuItem value={10}>Adis Ababa</MenuItem>
                    <MenuItem value={20}>Jimma</MenuItem>
                    <MenuItem value={30}>Wolkite</MenuItem>
                  </Select>
                </Grid>
                <Grid item xs={12} md={2}>
                  Established on:
                </Grid>
                <Grid item xs={12} md={10}>
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

              <Grid container spacing={2} alignItems="center">
                <Grid item xs={12} md={2}>
                  Mission:
                </Grid>
                <Grid item xs={12} md={10}>
                  <TextField
                    id="outlined-multiline-static"
                    multiline
                    rows={2}
                    sx={{ width: 250 }}
                  />
                </Grid>
                <Grid item xs={12} md={2}>
                  Vision:
                </Grid>
                <Grid item xs={12} md={10}>
                  <TextField
                    id="outlined-multiline-static"
                    multiline
                    rows={2}
                    sx={{ width: 250 }}
                  />
                </Grid>
                <Grid item xs={12} md={2}>
                  Values:
                </Grid>
                <Grid item xs={12} md={9}>
                  <TextField
                    id="outlined-multiline-static"
                    multiline
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
                  <Button autoFocus color="error" onClick={handleClose}>
                    Delete
                  </Button>
                  <Button onClick={handleClose} autoFocus>
                    Cancel
                  </Button>
                </DialogActions>
              </Dialog>
              <Button
                sx={{
                  backgroundColor: colors.blueAccent[700],
                  color: colors.grey[100],
                  fontSize: "14px",
                  fontWeight: "bold",
                  padding: "10px 20px",
                }}
              >
                <SaveIcon sx={{ mr: "10px" }} />
                Update
              </Button>
              <Button
                color="success"
                variant="contained"
                sx={{
                  fontSize: "14px",
                  fontWeight: "bold",
                  padding: "10px 20px",
                }}
              >
                <AddIcon sx={{ mr: "10px" }} />
                New
              </Button>
            </Box>
          </Box>
        </Form>
      </Formik>
    </Box>
  );
};

export default Department;
