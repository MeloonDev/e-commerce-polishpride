import Home from "./pages/Home";
import SingleProduct from "./pages/SingleProduct";
import ProductList from "./pages/ProductList";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:category" element={<ProductList />} />
        <Route path="/product/:id" element={<SingleProduct />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
