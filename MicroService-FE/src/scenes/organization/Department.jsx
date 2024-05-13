import React from "react";
import {
  Box,
  Paper,
  TextField,
  Grid,
  Typography,
  Select,
  Stack,
  Button,
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
// import FormControl from "@mui/material/FormControl";

const Department = () => {
  const [value, setValue] = React.useState("female");
  const [tenant, setTenant] = React.useState("");
  const [region, setRegion] = React.useState("");

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
      <Paper sx={{ padding: "20px" }} elevation={2}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={2}>
            <Typography>Departement:*</Typography>
          </Grid>
          <Grid item xs={12} md={10}>
            <TextField
              id="outlined-size-small"
              defaultValue=""
              size="small"
              sx={{ width: 250, height: 25 }}
            />
          </Grid>

          <Grid item xs={12} md={2}>
            <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
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
            <InputLabel id="demo-simple-select-label">Tenant</InputLabel>
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
            <InputLabel id="demo-simple-select-label">Region</InputLabel>
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
            <Typography>Established on:</Typography>
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
          <Grid item xs={12} md={2}>
            <Typography>Mission:</Typography>
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
            <Typography>Vision:</Typography>
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
            <Typography>Values:</Typography>
          </Grid>
          <Grid item xs={12} md={10}>
            <TextField
              id="outlined-multiline-static"
              multiline
              rows={2}
              sx={{ width: 250 }}
            />
          </Grid>
        </Grid>
      </Paper>
      <Paper sx={{ padding: "10px" }} elevation={2}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={2}>
            <Typography>Prepared by:</Typography>
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
            <Typography>Prepared by:</Typography>
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
      </Paper>
      <Paper sx={{ padding: "20px" }} elevation={2}>
        <Stack direction="row" spacing={2} alignItems="center">
          <Button color="error" variant="contained" startIcon={<DeleteIcon />}>
            Delete
          </Button>
          <Button color="success" variant="contained">
            Update
          </Button>
          <Button color="success" variant="contained">
            New
          </Button>
        </Stack>
      </Paper>
    </Box>
  );
};

export default Department;
