import { useEffect, useState } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { useProSidebar } from "react-pro-sidebar";
import { useSidebarContext } from "./sideBarContext";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import WorkHistoryOutlinedIcon from "@mui/icons-material/WorkHistoryOutlined";
import PaymentsOutlinedIcon from "@mui/icons-material/PaymentsOutlined";
import CorporateFareOutlinedIcon from "@mui/icons-material/CorporateFareOutlined";
import SwitchRightOutlinedIcon from "@mui/icons-material/SwitchRightOutlined";
import SwitchLeftOutlinedIcon from "@mui/icons-material/SwitchLeftOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{ color: colors.grey[100] }}
      onClick={() => setSelected(title)}
      icon={icon}
      routerLink={<Link to={to} />}
    >
      <Typography>{title}</Typography>
    </MenuItem>
  );
};

const MyProSidebar = () => {
  const [admin, setAdmin] = useState(false);
  const [admin2, setAdmin2] = useState(false);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [selected, setSelected] = useState("Dashboard");
  const { sidebarRTL, setSidebarRTL, sidebarImage } = useSidebarContext();
  const { collapseSidebar, toggleSidebar, collapsed, broken } = useProSidebar();

  useEffect(() => {
    const role = localStorage.getItem("role");
    if (role === "admin1") {
      setAdmin(true);
    } else if (role === "admin2") {
      setAdmin2(true);
    }
    const email = localStorage.getItem("userToken");
    if (email) {
      console.log("user email:", email);
    }
  }, [admin]);
  return (
    <Box
      sx={{
        position: "sticky",
        display: "flex",
        height: "100vh",
        top: 0,
        bottom: 0,
        zIndex: 10000,
        "& .sidebar": {
          border: "none",
        },
        "& .menu-icon": {
          backgroundColor: "transparent !important",
        },
        "& .menu-item": {
          // padding: "5px 35px 5px 20px !important",
          backgroundColor: "transparent !important",
        },
        "& .menu-anchor": {
          color: "inherit !important",
          backgroundColor: "transparent !important",
        },
        "& .menu-item:hover": {
          color: `${colors.blueAccent[500]} !important`,
          backgroundColor: "transparent !important",
        },
        "& .menu-item.active": {
          color: `${colors.greenAccent[500]} !important`,
          backgroundColor: "transparent !important",
        },
      }}
    >
      <Sidebar
        breakPoint="md"
        rtl={sidebarRTL}
        backgroundColor={colors.primary[400]}
        image={sidebarImage}
      >
        <Menu iconshape="square">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            icon={
              collapsed ? (
                <MenuOutlinedIcon onClick={() => collapseSidebar()} />
              ) : sidebarRTL ? (
                <SwitchLeftOutlinedIcon
                  onClick={() => setSidebarRTL(!sidebarRTL)}
                />
              ) : (
                <SwitchRightOutlinedIcon
                  onClick={() => setSidebarRTL(!sidebarRTL)}
                />
              )
            }
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!collapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3" color={colors.grey[100]}>
                  ADMINIS
                </Typography>
                <IconButton
                  onClick={
                    broken ? () => toggleSidebar() : () => collapseSidebar()
                  }
                >
                  <CloseOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {!collapsed && (
            <Box mb="25px">
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                sx={{
                  "& .avater-image": {
                    backgroundColor: colors.primary[500],
                  },
                }}
              >
                <img
                  alt="profile-user"
                  width="100px"
                  height="100px"
                  src="/assets/insa.png"
                  style={{ cursor: "pointer", borderRadius: "50%" }}
                />
              </Box>

              <Box textAlign="center">
                <Typography
                  variant="h2"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  Abdi Geremewu
                </Typography>
                <Typography variant="h5" color={colors.greenAccent[500]}>
                  Admin
                </Typography>
              </Box>
            </Box>
          )}

          <Box paddingLeft={collapsed ? undefined : "10%"}>
            <Item
              title="Dashboard"
              to="/dashboard/"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Data
            </Typography>
            {admin && (
              <Item
                title="Manage Employees"
                to="employee"
                icon={<PeopleOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
            )}
            {admin && (
              <Item
                title="Employee's Personal Record"
                to="record"
                icon={<ContactsOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
            )}
            {(admin || admin2) && (
              <Item
                title="Projects"
                to="invoices"
                icon={<ReceiptOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
            )}

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Pages
            </Typography>
            {(admin || admin2) && (
              <Item
                title="Employees"
                to="team"
                icon={<PersonOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
            )}
            {(admin || admin2) && (
              <Item
                title="Calendar"
                to="calendar"
                icon={<CalendarTodayOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
            )}
            {(admin || admin2) && (
              <Item
                title="FAQ Page"
                to="faq"
                icon={<HelpOutlineOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
            )}
            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Organization
            </Typography>

            <Item
              title="Manage Organizations"
              to="organization"
              icon={<CorporateFareOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Job"
              to="job"
              icon={<WorkHistoryOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Pay Grade"
              to="pay"
              icon={<PaymentsOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Charts
            </Typography>
            <Item
              title="Bar Chart"
              to="bar"
              icon={<BarChartOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Pie Chart"
              to="pie"
              icon={<PieChartOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Line Chart"
              to="line"
              icon={<TimelineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Geography Chart"
              to="geography"
              icon={<MapOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </Sidebar>
    </Box>
  );
};

export default MyProSidebar;
