import React from "react";
import AddComponent from "./components/AddComponent";
import ShowComponent from "./components/ShowComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EditComponent from "./components/EditComponent";
import NavbarComponent from "./components/NavbarComponent";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavbarComponent />
        <Routes>
          <Route path="/" element={<ShowComponent />}></Route>
          <Route path="add" element={<AddComponent />}></Route>
          <Route path="edit/:id" element={<EditComponent />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
