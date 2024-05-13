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
// import PlusIcon from "@mui/icons-material/PlusIcon";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import MUIDataTable from "mui-datatables";

import dayjs from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
// import FormControl from "@mui/material/FormControl";

const StaffPlan = () => {
  const [value, setValue] = React.useState("female");
  const [tenant, setTenant] = React.useState("");
  const [region, setRegion] = React.useState("");
  const columns = [
    {
      name: "Job Title",
      options: {
        filter: true,
        filterType: "textField",
      },
    },
    {
      name: "Job Code",
      options: {
        filter: true,
        filterType: "textField",
      },
    },
    "Quantity",
  ];
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
        <Stack direction="row" spacing={2} alignItems="center">
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} md={2}>
              {" "}
              <InputLabel id="demo-simple-select-label">Job Title</InputLabel>
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
              <Typography>Quantity:</Typography>
            </Grid>
            <Grid item xs={12} md={10}>
              <TextField
                id="outlined-size-small"
                defaultValue=""
                size="small"
                sx={{ width: 250, height: 25 }}
              />
            </Grid>
          </Grid>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} md={2}>
              <Typography>Job Code:</Typography>
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
              <Typography>Job Grade:</Typography>
            </Grid>
            <Grid item xs={12} md={10}>
              <TextField
                id="outlined-size-small"
                defaultValue=""
                size="small"
                sx={{ width: 250, height: 25 }}
              />
            </Grid>
          </Grid>
        </Stack>
      </Paper>

      <Paper sx={{ padding: "20px" }} elevation={2}>
        <Stack direction="row" spacing={2} alignItems="center">
          <Button color="success" variant="contained">
            Save
          </Button>
        </Stack>
      </Paper>
      <Paper sx={{ padding: "10px" }} elevation={2}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={12}>
            <MUIDataTable title={""} columns={columns} />
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
    </Box>
  );
};

export default StaffPlan;
