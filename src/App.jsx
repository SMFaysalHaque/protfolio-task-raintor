import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/home";
import WorkProcessDetails from "./pages/workProcessDetails";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <nav className="fixed top-0 left-0 w-full z-50">
          <div className="w-full mx-auto px-[15px]">
            <Navbar />
          </div>
        </nav>
        <main className="bg-[url('/images/hero-bg.png')] bg-no-repeat bg-cover bg-center">
          <div className="w-full mx-auto px-4 pt-28 pb-10">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/workProcessDetails/:id"
                element={<WorkProcessDetails />}
              />
            </Routes>
          </div>
        </main>
        <footer className="bg-[#8B4513]">
          <div className="w-full mx-auto px-4 py-4">
            <Footer />
          </div>
        </footer>
      </BrowserRouter>
    </>
  );
}
