import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import Header from "./components/Header";
import Menu from "./components/Menu";
import NavBar from "./components/NavBar";
import ReservationsPage from "./components/ReservationsPage";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/reservations" element={<ReservationsPage />} />
      </Routes>
    </>
  );
}

export default App;
