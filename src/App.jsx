import {ToastContainer} from "react-toastify"
import Nav from './component/Navbar/Nav'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from './component/About/About';
import Contact from './component/Contact/Contact';
import Footer from './component/Footer/Footer';
import Project from './component/Project/Project';
import Achievement from './component/Achievement/Achievement';
import HomePage from './component/Home/HomePage';
import Home from "./component/Home/Home";

function App() {

  return (
    <>
      <ToastContainer 
        position="top-center"  // This will show the toast in the center of the screen
        autoClose={3000}  // Toast will disappear after 4 seconds
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Router>
          <Nav/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer/>
      </Router>
    </>
  );
}

export default App
