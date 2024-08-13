import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Contract from "./Pages/Contract/Contract";
import ProductDetail from "./Pages/ProductDetail/ProductDetail";
import NotFound from "./Pages/NotFound/NotFound";
import LayoutOne from "./Components/Layout one/LayoutOne";
import LayoutTwo from "./Components/Layout two/LayoutTwo";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LayoutTwo />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contract" element={<Contract />} />
        </Route>

        <Route element={<LayoutOne />}>
          <Route
            path="/product/:product_id/:photo_id"
            element={<ProductDetail />}
          />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
