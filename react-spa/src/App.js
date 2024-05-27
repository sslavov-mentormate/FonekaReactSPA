import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import StoreItemDetails from "./pages/ItemDetails/ItemDetails";
import Items from "./pages/Items/Items";
import AddItem from "./pages/AddItem/AddItem";
import UpdateItem from "./pages/UpdateItem/UpdateItem";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/items" element={<Items />} />
        <Route path="/add-item" element={<AddItem />} />
        <Route path="/update-item/:id" element={<UpdateItem />} />
        <Route path="/item/:id" element={<StoreItemDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
