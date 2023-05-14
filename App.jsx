import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Layout } from "./components/Layout";

function App() {
   return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<Layout />} />
         </Routes>
      </BrowserRouter>
   );
}

export default App;
