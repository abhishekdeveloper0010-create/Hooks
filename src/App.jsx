import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./component/Navbar/header";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import Footer from "./pages/Footer"
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
            <Route path="/product" element={<Product />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

        </Routes>
        <Footer/>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;