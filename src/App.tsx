import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { HomePage, EventsPage, TeamPage, PointsPage } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />}></Route>
        <Route path="/home" element={<HomePage />}></Route>
        <Route path="/about" element={<HomePage />}></Route>
        <Route path="/events" element={<EventsPage />}></Route>
        <Route path="/points" element={<PointsPage />}></Route>
        <Route path="/team" element={<TeamPage />}></Route>

        <Route path="*" element={<HomePage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
