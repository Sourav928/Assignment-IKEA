import { Provider } from "react-redux";
import "./App.css";
import Delivery from "./components/Delivery&Collection/Delivery";
import DeliveryPin from "./components/Delivery&Collection/DeliveryPin";

import Home from "./components/Home";
import ShoppingBag from "./components/ShoppingBag";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import store from "../src/store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<ShoppingBag />} />
          <Route path="/pin" element={<DeliveryPin />} />
          <Route path="/pickup" element={<Delivery />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
