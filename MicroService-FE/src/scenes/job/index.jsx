import * as React from "react";
import {
  Box,
  TextField,
  Grid,
  Typography,
  Select,
  Stack,
  Button,
  useTheme,
  MenuItem,
  InputLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
} from "@mui/material";

import { DataGrid } from "@mui/x-data-grid";
import { green } from "@mui/material/colors";
import Fab from "@mui/material/Fab";
import { tokens } from "../../theme";
import AddIcon from "@mui/icons-material/Add";
import FormLabel from "@mui/material/FormLabel";
import Header from "../../components/Header";

export default function Job() {
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
    { field: "no", headerName: "No" },
    {
      field: "name",
      headerName: "Education Level",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "age",
      headerName: "Qualification",
      type: "number",
      headerAlign: "left",
      flex: 1,
    },
    {
      field: "phone",
      headerName: "Minimum Experience",
      flex: 1,
    },
  ];

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Box m="20px">
      <Header title="Job Registration" subtitle="" />

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
          <Stack direction="row">
            <Grid container spacing={3} alignItems="center">
              <Grid item xs={12} md={3}>
                <InputLabel id="demo-radio-buttons-group-label">
                  Tenant:*
                </InputLabel>
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
                Department:*
              </Grid>
              <Grid item xs={12} md={9}>
                <TextField
                  value=""
                  variant="filled"
                  name="address"
                  onChange={handleChange}
                  id="outlined-size-small"
                  // defaultValue=""
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
              <Grid item xs={12} md={3}>
                Job Title:*
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
                <InputLabel id="demo-radio-buttons-group-label">
                  Job Grade:*
                </InputLabel>
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
                <InputLabel id="demo-radio-buttons-group-label">
                  Job Category:*
                </InputLabel>
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
                <FormLabel id="department-type-label">Type:*</FormLabel>
              </Grid>
              <Grid item xs={12} md={9}>
                <RadioGroup
                  row
                  aria-labelledby="department-type-label"
                  name="departmentType"
                  value=""
                  onChange={handleChange}
                >
                  <FormControlLabel
                    value=""
                    control={<Radio />}
                    label="Non Managerial"
                  />
                  <FormControlLabel
                    value=""
                    control={<Radio />}
                    label="Managerial"
                  />
                </RadioGroup>
                {/* {touched.departmentType && errors.departmentType && (
                <Typography color="error">{errors.departmentType}</Typography>
              )} */}
              </Grid>
              <Grid item xs={12} md={3}>
                Job Description:
              </Grid>
              <Grid item xs={12} md={9}>
                <TextField
                  name="mission"
                  value=""
                  onBlur="{handleBlur}"
                  onChange="{handleChange}"
                  multiline
                  variant="filled"
                  rows={2}
                  sx={{ width: 250 }}
                />
              </Grid>
            </Grid>
            <Grid container spacing={3}>
              <Grid item xs={12} md={3}>
                <InputLabel id="demo-radio-buttons-group-label">
                  Work Unit:*
                </InputLabel>
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
                <InputLabel id="demo-radio-buttons-group-label">
                  Reports To:*
                </InputLabel>
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
                Duties:
              </Grid>
              <Grid item xs={12} md={9}>
                <TextField
                  name="mission"
                  value=""
                  onBlur="{handleBlur}"
                  onChange="{handleChange}"
                  multiline
                  variant="filled"
                  rows={2}
                  sx={{ width: 250 }}
                />
              </Grid>
              <Grid item xs={12} md={3}>
                Relevant Experience:
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
                Alternative Experience:
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
                <InputLabel id="demo-radio-buttons-group-label">
                  Language:*
                </InputLabel>
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
            </Grid>
          </Stack>
        </Box>

        <Box
          backgroundColor={colors.primary[400]}
          sx={{ padding: "20px", boxShadow: 2 }}
        >
          <Stack direction="row">
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={12} md={3}>
                <InputLabel id="demo-radio-buttons-group-label">
                  Language:*
                </InputLabel>
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
                Prepared By:
              </Grid>
              <Grid item xs={12} md={9}>
                <TextField
                  id="outlined-size-small"
                  defaultValue=""
                  size="small"
                  variant="filled"
                  sx={{ width: 250, height: 25 }}
                />
              </Grid>{" "}
              <Grid item>
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
                  Add
                </Button>
              </Grid>
              <Grid item></Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={12} md={3}>
                <InputLabel id="demo-radio-buttons-group-label">
                  Language:*
                </InputLabel>
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
            </Grid>
          </Stack>
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
      </Box>
    </Box>
  );
}
