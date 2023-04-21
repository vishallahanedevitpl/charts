import "./assets/css/bootstrap.min.css";
import "./assets/css/style.css";
import { Route, Routes } from "react-router-dom";
import DashboardPage from "./pages/Dashboard";
import MultiLevelPieChart from "./components/charts/MultiLevelPieChart";

function App() {
  return (
    <Routes>
      <Route path="/" element={<DashboardPage />} />
      <Route path="/pie-chart" element={<MultiLevelPieChart />} />
    </Routes>
  );
}

export default App;
