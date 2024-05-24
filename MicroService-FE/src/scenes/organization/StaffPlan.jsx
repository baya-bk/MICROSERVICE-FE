import React from "react";
import {
  Box,
  TextField,
  Grid,
  Select,
  Stack,
  Button,
  useTheme,
  useMediaQuery,
  Typography,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import CircularProgress from "@mui/material/CircularProgress";
import { green } from "@mui/material/colors";
import CheckIcon from "@mui/icons-material/Check";
import SaveIcon from "@mui/icons-material/Save";
import Fab from "@mui/material/Fab";
import { tokens } from "../../theme";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import dayjs from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Alert from "@mui/material/Alert";

const StaffPlan = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isSmallScreen = useMediaQuery("(max-width:700px)");
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
      headerName: "Job Code",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "phone",
      headerName: "Quantity",
      flex: 1,
    },
  ];

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <Box
        backgroundColor={colors.primary[400]}
        sx={{ padding: "20px", boxShadow: 2 }}
      >
        <Stack padding={2} direction={isSmallScreen ? "column" : "row"} gap={5}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={3}>
              <Typography variant="h5">
                <InputLabel id="tenant-label">Job Title:*</InputLabel>
              </Typography>
            </Grid>
            <Grid item xs={12} md={9}>
              <Select
                labelId="demo-simple-select-label"
                variant="filled"
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
            <Grid item xs={12} md={3}>
              Quantity:
            </Grid>
            <Grid item xs={12} md={9}>
              <TextField
                id="outlined-size-small"
                variant="filled"
                defaultValue=""
                size="small"
                sx={{ width: 250, height: 25 }}
              />
            </Grid>
          </Grid>
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} md={3}>
              Job Code:
            </Grid>
            <Grid item xs={12} md={9}>
              <TextField
                id="outlined-size-small"
                variant="filled"
                defaultValue=""
                size="small"
                sx={{ width: 250, height: 25 }}
              />
            </Grid>
            <Grid item xs={12} md={3}>
              Job Grade:
            </Grid>
            <Grid item xs={12} md={9}>
              <TextField
                id="outlined-size-small"
                variant="filled"
                defaultValue=""
                size="small"
                sx={{ width: 250, height: 25 }}
              />
            </Grid>
          </Grid>
        </Stack>
      </Box>

      <Box
        backgroundColor={colors.primary[400]}
        sx={{ padding: "20px", boxShadow: 2 }}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
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
            }}
            disabled={loading}
            onClick={handleButtonClick}
          >
            Save
          </Button>
        </Box>
        {success && (
          <Box sx={{ mt: 2 }}>
            <Alert severity="success" onClose={() => setSuccess(false)}>
              Saved Successfully
            </Alert>
          </Box>
        )}
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
        <DataGrid rows={[]} columns={columns} pageSize={5} />
      </Box>

      <Box
        backgroundColor={colors.primary[400]}
        sx={{ padding: "20px", boxShadow: 2 }}
      >
        <Grid container columnSpacing={10} rowSpacing={4}>
          <Grid item xs={12} md={2}>
            Prepared By:
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
            Prepared on:
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

export default StaffPlan;
