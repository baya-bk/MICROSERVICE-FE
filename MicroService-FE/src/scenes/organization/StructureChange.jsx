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
  Tooltip,
} from "@mui/material";
// import PlusIcon from "@mui/icons-material/PlusIcon";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import CircularProgress from "@mui/material/CircularProgress";
import { green } from "@mui/material/colors";
import CheckIcon from "@mui/icons-material/Check";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import SaveIcon from "@mui/icons-material/Save";
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";
import dayjs from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { tokens } from "../../theme";
import { useTheme } from "@emotion/react";
import { DataGrid } from "@mui/x-data-grid";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";

// import FormControl from "@mui/material/FormControl";

const StructureChange = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [value, setValue] = React.useState("female");
  const [tenant, setTenant] = React.useState("");
  const [region, setRegion] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const timer = React.useRef();

  const buttonSx = {
    ...(success && {
      bgcolor: green[500],
      "&:hover": {
        bgcolor: green[700],
      },
    }),
  };

  React.useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, []);

  const handleButtonClick = () => {
    if (!loading) {
      setSuccess(false);
      setLoading(true);
      timer.current = setTimeout(() => {
        setSuccess(true);
        setLoading(false);
      }, 2000);
    }
  };

  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "Job Title",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "age",
      headerName: "Type",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "phone",
      headerName: "Region",
      flex: 1,
    },
    {
      field: "phone",
      headerName: "Address",
      flex: 1,
    },
    {
      field: "phone",
      headerName: "Block No",
      flex: 1,
    },
    {
      field: "phone",
      headerName: "House Number",
      flex: 1,
    },
    {
      field: "phone",
      headerName: "Office Number",
      flex: 1,
    },
    {
      field: "phone",
      headerName: "Process Date",
      flex: 1,
    },
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
      <Box
        backgroundColor={colors.primary[400]}
        sx={{ padding: "20px", boxShadow: 2 }}
      >
        <Stack direction="row" spacing={3} alignItems="center">
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} md={2}>
              <Typography>Department Name:*</Typography>
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
              <Typography>Old Work Unit:*</Typography>
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
              <FormLabel id="demo-radio-buttons-group-label">
                Is There Address Change?:*
              </FormLabel>
            </Grid>
            <Grid item xs={12} md={10}>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="no" control={<Radio />} label="No" />
              </RadioGroup>
            </Grid>
          </Grid>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} md={2}>
              <Typography>New Work Unit:*</Typography>
            </Grid>
            <Grid item xs={12} md={10}>
              <TextField
                id="outlined-size-small"
                defaultValue="Use Only From + Button"
                size="small"
                sx={{ width: 200, height: 25 }}
              />
              <Fab
                sx={{
                  backgroundColor: colors.blueAccent[700],
                  color: colors.grey[100],
                  marginLeft: 1,
                  width: 35,
                  height: 3,
                }}
                size="small"
                aria-label="add"
              >
                <AddIcon />
              </Fab>
            </Grid>
            <Grid item xs={12} md={2}>
              <Typography>
                <InputLabel id="demo-simple-select-label">Region:</InputLabel>
              </Typography>
            </Grid>
            <Grid item xs={12} md={10}>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={region}
                label="select"
                onChange={handleChange}
                sx={{ width: 250, height: 35 }}
              >
                <MenuItem value={10}>Tenant1</MenuItem>
                <MenuItem value={20}>Tenant2</MenuItem>
                <MenuItem value={30}>Tenant3</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={12} md={2}>
              <FormLabel id="demo-radio-buttons-group-label">Type:*</FormLabel>
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
          </Grid>
        </Stack>
      </Box>

      <Box
        backgroundColor={colors.primary[400]}
        sx={{ padding: "20px", boxShadow: 2 }}
      >
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
      </Box>
      <Box
        backgroundColor={colors.primary[400]}
        sx={{ padding: "20px", boxShadow: 2 }}
      >
        <Box display="flex" justifyContent="center" alignItems="center">
          <Box sx={{ m: 1, position: "relative" }}>
            <Fab
              aria-label="save"
              sx={{
                backgroundColor: colors.blueAccent[700],
                color: colors.grey[100],
              }}
            >
              {success ? <CheckIcon /> : <SaveIcon />}
            </Fab>
            {loading && (
              <CircularProgress
                size={68}
                sx={{
                  color: green[500],
                  position: "absolute",
                  top: -6,
                  left: -6,
                  zIndex: 1,
                }}
              />
            )}
          </Box>
          <Box
            sx={{
              m: 1,
              position: "relative",
            }}
          >
            <Button
              sx={{
                backgroundColor: colors.blueAccent[700],
                color: colors.grey[100],
                fontSize: "14px",
                fontWeight: "bold",
                padding: "10px 20px",
                buttonSx,
              }}
              disabled={loading}
              onClick={handleButtonClick}
            >
              Save
            </Button>
            {loading}
          </Box>
        </Box>
      </Box>
      <Box
        m="40px 0 0 0"
        height="50vh"
        sx={{
          boxShadow: 2,
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
        }}
      >
        <DataGrid rows="" columns={columns} pageSize={5} />
      </Box>
    </Box>
  );
};

export default StructureChange;
