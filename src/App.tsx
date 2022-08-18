import "./styles/global.scss";
import Home from "./pages/home";

import { Route, Routes } from "react-router-dom";
import { Specification } from "./pages/specification";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:productId" element={<Specification />} />
      </Routes>
    </>
  );
}

export default App;
