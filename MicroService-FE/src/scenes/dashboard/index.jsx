import { useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { Routes, Route } from "react-router-dom";
import Dashboards from "./Dashboard";
import Topbar from "../global/Topbar";
import Team from "../team";
import EditItemForm from "../team";
import Invoices from "../invoices";
import Contacts from "../contacts";
import Bar from "../bar";
// import AddItemForm from "../employees";
import AddNewUser from "../team/AddNewUser";
import Pie from "../pie";
import FAQ from "../faq";
import Calendar from "../calendar/calendar";
import OrganizationInfo from "../organization";
import EmpoloyeeInfo from "../employees";
import Pay from "../pay";
import Job from "../job";
import EmployeeRecord from "../record";
import ContractRenewal from "../contract";
import { MyProSidebarProvider } from "../global/sideBarContext";
const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <>
      <MyProSidebarProvider>
        <div style={{ height: "100%", width: "100%" }}>
          <div className="app">
            <main className="content">
              <Topbar />
              <Routes>
                <Route path="/team" element={<Team />} />
                <Route path="/team/edit/:id" element={<EditItemForm />} />
                <Route path="/team/add" element={<AddNewUser />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/record" element={<EmployeeRecord />} />
                <Route path="/contract" element={<ContractRenewal />} />
                <Route path="/invoices" element={<Invoices />} />
                <Route path="/employee" element={<EmpoloyeeInfo />} />
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
        </div>
      </MyProSidebarProvider>
    </>
  );
};

export default Dashboard;
