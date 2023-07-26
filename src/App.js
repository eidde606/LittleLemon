import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import BookingPage from "./components/BookingPage";
import Header from "./components/Header";
import Menu from "./components/Menu";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/reservations" element={<BookingPage />} />
      </Routes>
    </>
  );
}

export default App;
