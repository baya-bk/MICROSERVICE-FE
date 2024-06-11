import { useState } from "react";
import { Box, useTheme, Typography, Tabs, Tab } from "@mui/material";
import Header from "../../components/Header";
import { tokens } from "../../theme";
import Personal from "./personal";
import Address from "./address";
import Family from "./family";
import Education from "./Education";
import Training from "./training";
import Languages from "./languages";
import Skill from "./skill";
import ExternalExperience from "./externalexperience";
import Reference from "./reference";
import Membership from "./membership";

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

const EmployeeInfo = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const pages = [
    "Personal",
    "Family",
    "Address",
    "Education",
    "Training",
    "Languages",
    "Skill",
    "External Experience",
    "Reference",
    "Membership",
  ];

  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box m="20px">
      <Header title="Employees Information" subtitle="" />
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
        <Personal />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Family />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <Address />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <Education />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4}>
        <Training />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={5}>
        <Languages />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={6}>
        <Skill />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={7}>
        <ExternalExperience />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={8}>
        <Reference />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={9}>
        <Membership />
      </CustomTabPanel>
    </Box>
  );
};

export default EmployeeInfo;
