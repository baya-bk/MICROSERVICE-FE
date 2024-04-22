import { useState } from "react";
import { useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { Routes, Route } from "react-router-dom";
import Dashboards from "./Dashboard";
import Topbar from "../global/Topbar";
import Sidebar from "../global/Sidebar";
import Team from "../team";
import EditItemForm from "../team";
import Invoices from "../invoices";
import Contacts from "../contacts";
import Bar from "../bar";
import AddItemForm from "../form";
import Pie from "../pie";
import FAQ from "../faq";
import Calendar from "../calendar/calendar";
import OrganizationInfo from "../organization";
import Pay from "../pay";
import Job from "../job";
const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isSidebar, setIsSidebar] = useState(true);

  // const handleDownloadReports = () => {
  //   // Create a dummy anchor element
  //   const link = document.createElement("a");
  //   link.href = "/path/to/reports"; // Replace with the actual URL or path to the reports file
  //   link.download = "reports.pdf"; // Replace with the desired file name

  //   // Simulate a click event on the anchor element to trigger the download
  //   document.body.appendChild(link);
  //   link.click();
  //   document.body.removeChild(link);
  // };

  return (
    <>
      <div className="app">
        <Sidebar isSidebar={isSidebar} />
        <main className="content">
          <Topbar setIsSidebar={setIsSidebar} />
          <Routes>
            <Route path="/team" element={<Team />} />
            <Route path="/team/edit/:id" element={<EditItemForm />} />
            <Route path="/team/add" element={<AddItemForm />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/invoices" element={<Invoices />} />
            <Route path="/form" element={<AddItemForm />} />
            <Route path="/bar" element={<Bar />} />
            <Route path="/pie" element={<Pie />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/job" element={<Job />} />
            <Route path="/pay" element={<Pay />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/organization" element={<OrganizationInfo />} />
            <Route path="/" element={<Dashboards />} />
          </Routes>
        </main>
      </div>
    </>
  );
};

export default Dashboard;
