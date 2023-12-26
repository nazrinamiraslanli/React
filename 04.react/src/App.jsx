import "./App.css";
import Header from "./layouts/header";
import Footer from "./layouts/footer";
import AboutPage from "./pages/about-pages";
import HomePage from "./pages/home-pages";
import ProductsPage from "./pages/products-pages";
import ProductsDetails from "./pages/products-details";
import { Route, Routes } from "react-router-dom";
import NotFound from "./pages/not-found";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:id" element={<ProductsDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
