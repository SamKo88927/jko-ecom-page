import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Product from "./page/product/product";
import Header from "./layouts/header";
import { store } from "./store";
import { Provider } from "react-redux";
import Cart from "./page/cart/cart";
import { ToastProvider } from "./provider/toast-provider";
import { testProductId } from "./@fake-data/product/data";
function App() {
  return (
    <Provider store={store}>
      <ToastProvider />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="/"
            element={<Navigate to={`/products/${testProductId}`} />}
          />
          <Route path="/products/:itemName" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
