import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Shop from "./Pages/Shop";
import Cart from "./Pages/Cart";
import Product from "./Pages/Product";
import Footer from "./Components/Footer/Footer";
import ShopCategory from "./Pages/ShopCategory";
import garden_banner from "./Components/Assets/banner_garden.png";
import home_banner from "./Components/Assets/banner_home.png";
import office_banner from "./Components/Assets/banner_office.png";
import LoginSignup from "./Pages/LoginSignup";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop gender="all" />} />
          <Route
            path="/home"
            element={<ShopCategory banner={home_banner} category="home" />}
          />
          <Route
            path="/garden"
            element={<ShopCategory banner={garden_banner} category="garden" />}
          />
          <Route
            path="/office"
            element={<ShopCategory banner={office_banner} category="office" />}
          />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
