import "./styles/global.scss";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Home from "./pages/home";
import { Specification } from "./pages/specification";

function App() {
  const location = useLocation();
  return (
    <>
      <AnimatePresence exitBeforeEnter>
        <Routes key={location.pathname} location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/product/:productId" element={<Specification />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
