import { tokens } from "../../theme";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Fab,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import Header from "../../components/Header";
import AddIcon from "@mui/icons-material/Add";
import { DataGrid } from "@mui/x-data-grid";
import SaveIcon from "@mui/icons-material/Save";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";

const Pay = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isSmallScreen = useMediaQuery("(max-width:700px)");
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  // const handleFormSubmit = (values) => {
  //   console.log(values);
  // };
  const columns = [
    { field: "no", headerName: "No" },
    {
      field: "name",
      headerName: "Salary Step",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "age",
      headerName: "Salary",
      type: "number",
      headerAlign: "left",
      flex: 1,
    },
    {
      field: "phone",
      headerName: "Action ",
      flex: 1,
    },
  ];

  return (
    <Box m="20px">
      <Header title="Pay Grade" />
      <Box
        backgroundColor={colors.primary[400]}
        sx={{ padding: "30px", boxShadow: 2, marginBottom: "20px" }}
      >
        <Stack padding={2} direction={isSmallScreen ? "column" : "row"} gap={5}>
          <Grid container spacing={5}>
            <Grid item xs={12} md={3}>
              Grade:*
            </Grid>
            <Grid item xs={12} md={9}>
              <TextField
                value=""
                variant="filled"
                name="address"
                onChange="{handleChange}"
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
                  height: 2,
                }}
                size="small"
                aria-label="add"
              >
                <AddIcon />
              </Fab>
            </Grid>
            <Grid item xs={12} md={3}>
              Initial Salary:*
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
              Maximum Salary:*
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

          <Grid container spacing={0}>
            <Grid item xs={12} md={3}>
              Mission:
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
            </Grid>{" "}
          </Grid>
        </Stack>
      </Box>
      <Box
        backgroundColor={colors.primary[400]}
        sx={{ padding: "30px", boxShadow: 2, marginBottom: "20px" }}
      >
        <Grid container spacing={3}>
          <Grid item xs={12} md={2}>
            <Typography variant="h5">
              <InputLabel id="tenant-label">Tenant:*</InputLabel>
            </Typography>
          </Grid>
          <Grid item xs={12} md={10}>
            <Select
              variant="filled"
              labelId="tenant-label"
              id="tenant-select"
              name="tenant"
              value=""
              // onChange={handleChange}
              // onBlur={handleBlur}
              sx={{ width: 250, height: 35 }}
              // error="{touched.tenant && !!errors.tenant}"
            >
              <MenuItem value="">Select Tenant</MenuItem>
              <MenuItem value="10">Tenant1</MenuItem>
              <MenuItem value="20">Tenant2</MenuItem>
              <MenuItem value="30">Tenant3</MenuItem>
            </Select>
            {/* {touched.tenant && errors.tenant && (
                      <Typography color="error">{errors.tenant}</Typography>
                    )} */}
          </Grid>
          <Grid item xs={12} md={2}>
            Floor:
          </Grid>
          <Grid item xs={12} md={10}>
            <TextField
              value=""
              variant="filled"
              name="floor"
              // onChange={handleChange}
              id="outlined-size-small"
              // defaultValue=""
              size="small"
              sx={{ width: 250, height: 25 }}
            />
          </Grid>
          <Grid item>
            <Button
              sx={{
                backgroundColor: colors.blueAccent[700],
                color: colors.grey[100],
                fontSize: "14px",
                fontWeight: "bold",
                padding: "10px 20px",
              }}
              // disabled={loading}
              // onClick={handleButtonClick}
            >
              Add
            </Button>
          </Grid>
        </Grid>
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
        sx={{ padding: "30px", boxShadow: 2, marginTop: "20px" }}
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
          Reset
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
            <Button
              autoFocus
              onClick={handleClose}
              color="error"
              variant="contained"
            >
              No
            </Button>
            <Button
              onClick={handleClose}
              autoFocus
              color="secondary"
              variant="contained"
            >
              Yes
            </Button>
          </DialogActions>
        </Dialog>
        <Button
          type="submit"
          color="secondary"
          variant="contained"
          sx={{
            fontSize: "14px",
            fontWeight: "bold",
            padding: "10px 20px",
          }}
        >
          <SaveIcon sx={{ mr: "10px" }} />
          Save
        </Button>
      </Box>
    </Box>
  );
};

export default Pay;
