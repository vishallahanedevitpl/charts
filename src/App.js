import "./assets/css/bootstrap.min.css";
import "./assets/css/style.css";
import { Route, Routes } from "react-router-dom";
import ChartPage from "./pages/Charts";
import TablePage from "./pages/Table";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ChartPage />} />
      <Route path="/sales" element={<TablePage />} />
    </Routes>
  );
}

export default App;
