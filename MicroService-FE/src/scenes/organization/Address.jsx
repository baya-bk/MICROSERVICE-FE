import {
  Box,
  Paper,
  TextField,
  Grid,
  Typography,
  Select,
  Stack,
  Button,
  Tooltip,
  Container,
} from "@mui/material";
import dayjs from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const Address = () => {
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
      <Paper sx={{ padding: "20px" }} elevation={2}>
        <Stack direction="row">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={2}>
              <Typography>Address:*</Typography>
            </Grid>
            <Grid item xs={12} md={10}>
              <TextField
                id="outlined-size-small"
                defaultValue=""
                size="small"
                sx={{ width: 200, height: 25 }}
              />
              <Tooltip
                color="success"
                describeChild
                title="Does not add if it already exists."
              >
                <Button>Add</Button>
              </Tooltip>
            </Grid>
            <Grid item xs={12} md={2}>
              <Typography>Block No:</Typography>
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
              <Typography>Tel.Office:*</Typography>
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
              <Typography>Tel.Extension:*</Typography>
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
              <Typography>Mobile:</Typography>
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
              <Typography>House Number:</Typography>
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
              <Typography>Floor:</Typography>
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
              <Typography>Office Number:</Typography>
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
              <Typography>Email:</Typography>
            </Grid>
            <Grid item xs={12} md={10}>
              <TextField
                id="outlined-size-small"
                defaultValue="info@eep.gov.et"
                size="small"
                sx={{ width: 250, height: 25 }}
              />
            </Grid>
            <Grid item xs={12} md={2}>
              <Typography>Website:</Typography>
            </Grid>
            <Grid item xs={12} md={10}>
              <TextField
                id="outlined-size-small"
                defaultValue="http://www.eep.gov.et"
                size="small"
                sx={{ width: 250, height: 25 }}
              />
            </Grid>
          </Grid>
        </Stack>
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
          <Button color="success" variant="contained">
            Save
          </Button>
        </Stack>
      </Paper>
    </Box>
  );
};

export default Address;
