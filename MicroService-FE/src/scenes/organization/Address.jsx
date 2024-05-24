import * as React from "react";
import {
  Box,
  Paper,
  TextField,
  Grid,
  Typography,
  Stack,
  Button,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { tokens } from "../../theme";
import CircularProgress from "@mui/material/CircularProgress";
import { green } from "@mui/material/colors";
import CheckIcon from "@mui/icons-material/Check";
import SaveIcon from "@mui/icons-material/Save";
import dayjs from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useState } from "react";
import HttpClient from "../../middleware/HttpClient.js";
import { useDispatch } from "react-redux";
import { addAddressThunks } from "../../store.js";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";

const Address = () => {
  const api = HttpClient();
  const initialValues = {
    department_id: 52,
    address: "",
    block_number: "",
    tel_office: "",
    tel_extension: "",
    mobile: "",
    house_number: "",
    floor: "",
    office_number: "",
    email: "",
    website: "",
    tenant_id: 53,
  };
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isSmallScreen = useMediaQuery("(max-width:700px)");

  const dispatch = useDispatch();
  const [formData, setFormData] = useState(initialValues);
  // const formData = useSelector((state)) => state.;
  const handleChange = (e) => {
    e.preventDefault();
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async () => {
    try {
      setSuccess(false);
      setLoading(true);

      await dispatch(
        addAddressThunks.addItem(formData.tenant_id, formData)
      ).then((res) => {
        setSuccess(true);
        console.log(res);
      });
      // .unwrap();
    } catch (error) {
      console.error("Failed to submit the data:", error);
      setSuccess(false);
    } finally {
      setLoading(false);
    }
  };
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
        sx={{ padding: "30px", boxShadow: 2 }}
      >
        <Stack direction={isSmallScreen ? "column" : "row"} gap={2}>
          <Grid container spacing={5}>
            <Grid item xs={12} md={2}>
              Address:*
            </Grid>
            <Grid item xs={12} md={10}>
              <TextField
                value={formData.address}
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
            <Grid item xs={12} md={2}>
              Block No:
            </Grid>
            <Grid item xs={12} md={10}>
              <TextField
                name="block_number"
                variant="filled"
                value={formData.block_number}
                onChange={handleChange}
                id="outlined-size-small"
                // defaultValue=""
                size="small"
                sx={{ width: 250, height: 25 }}
              />
            </Grid>
            <Grid item xs={12} md={2}>
              Tel.Office:*
            </Grid>
            <Grid item xs={12} md={10}>
              <TextField
                value={formData.tel_office}
                name="tel_office"
                variant="filled"
                onChange={handleChange}
                id="outlined-size-small"
                // defaultValue=""
                size="small"
                sx={{ width: 250, height: 25 }}
              />
            </Grid>
            <Grid item xs={12} md={2}>
              Tel. Extension:*
            </Grid>
            <Grid item xs={12} md={10}>
              <TextField
                value={formData.tel_extension}
                variant="filled"
                name="tel_extension"
                onChange={handleChange}
                id="outlined-size-small"
                // defaultValue=""
                size="small"
                sx={{ width: 250, height: 25 }}
              />
            </Grid>
            <Grid item xs={12} md={2}>
              Mobile:
            </Grid>
            <Grid item xs={12} md={10}>
              <TextField
                value={formData.mobile}
                variant="filled"
                name="mobile"
                onChange={handleChange}
                id="outlined-size-small"
                // defaultValue=""
                size="small"
                sx={{ width: 250, height: 25 }}
              />
            </Grid>
          </Grid>

          <Grid container spacing={4}>
            <Grid item xs={12} md={2}>
              House Number:
            </Grid>
            <Grid item xs={12} md={10}>
              <TextField
                value={formData.house_number}
                variant="filled"
                name="house_number"
                onChange={handleChange}
                id="outlined-size-small"
                // defaultValue=""
                size="small"
                sx={{ width: 250, height: 25 }}
              />
            </Grid>
            <Grid item xs={12} md={2}>
              Floor:
            </Grid>
            <Grid item xs={12} md={10}>
              <TextField
                value={formData.floor}
                variant="filled"
                name="floor"
                onChange={handleChange}
                id="outlined-size-small"
                // defaultValue=""
                size="small"
                sx={{ width: 250, height: 25 }}
              />
            </Grid>
            <Grid item xs={12} md={2}>
              Office Number:
            </Grid>
            <Grid item xs={12} md={10}>
              <TextField
                value={formData.office_number}
                variant="filled"
                name="office_number"
                onChange={handleChange}
                id="outlined-size-small"
                // defaultValue=""
                size="small"
                sx={{ width: 250, height: 25 }}
              />
            </Grid>
            <Grid item xs={12} md={2}>
              Email:
            </Grid>
            <Grid item xs={12} md={10}>
              <TextField
                value={formData.email}
                variant="filled"
                name="email"
                onChange={handleChange}
                id="outlined-size-small"
                // defaultValue="info@eep.gov.et"
                size="small"
                sx={{ width: 250, height: 25 }}
              />
            </Grid>
            <Grid item xs={12} md={2}>
              Website:
            </Grid>
            <Grid item xs={12} md={10}>
              <TextField
                value={formData.website}
                variant="filled"
                name="website"
                onChange={handleChange}
                id="outlined-size-small"
                // defaultValue="http://www.eep.gov.et"
                size="small"
                sx={{ width: 250, height: 25 }}
              />
            </Grid>
          </Grid>
        </Stack>
      </Box>
      <Box
        backgroundColor={colors.primary[400]}
        sx={{ padding: "10px", boxShadow: 2 }}
      >
        <Grid container columnSpacing={10} rowSpacing={4}>
          <Grid item xs={12} md={2}>
            Prepared by:
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField
              onChange={handleChange}
              variant="filled"
              id="outlined-size-small"
              // defaultValue=""
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
              }}
              disabled={loading}
              onClick={handleSubmit}
            >
              Save
            </Button>
            {loading}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Address;
