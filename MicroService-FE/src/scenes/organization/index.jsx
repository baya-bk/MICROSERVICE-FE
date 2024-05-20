import { useState } from "react";
import { Box, useTheme, Typography, Tabs, Tab } from "@mui/material";
import Header from "../../components/Header";
import { tokens } from "../../theme";
import OrganizationStructure from "./OrganizationStructure";
import Department from "./Department";
import Address from "./Address";
import StaffPlan from "./StaffPlan";
import StructureChange from "./StructureChange";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function CustomTab({ title, index, selected, setSelected }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const handleClick = () => {
    setSelected(index);
  };

  return <Tab label={<Typography>{title}</Typography>} onClick={handleClick} />;
}

const OrganizationInfo = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const pages = [
    "Organization Structure",
    "Department/Process",
    "Address",
    "Staff Plan",
    "Structure Change",
  ];

  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box m="20px">
      <Header title="Organization Information" subtitle="" />
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          TabIndicatorProps={{
            style: {
              backgroundColor: "#D97D54",
            },
          }}
        >
          {pages.map((page, index) => (
            <CustomTab
              key={index}
              title={page}
              index={index}
              selected={value}
              setSelected={setValue}
            />
          ))}
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <OrganizationStructure />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Department />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <Address />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <StaffPlan />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4}>
        <StructureChange />
      </CustomTabPanel>
    </Box>
  );
};

export default OrganizationInfo;
