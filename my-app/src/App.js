import Navbar from "./componants/Navbar";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from "./Routing/Home";
import About from "./Routing/About";
import ProductDetails from "./componants/ProductDetails";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="products/:productId" element={<ProductDetails />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
