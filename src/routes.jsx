import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Skills from "./pages/Skills"
import About from "./pages/About";
import Projects from "./pages/Projects";

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/about" element={<About />} />
        </Routes>
    )
}

export default AppRoutes