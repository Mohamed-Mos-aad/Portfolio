import { Route, Routes } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import AboutMe from "../pages/AboutMe";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";

export default function Routers() {
    return (
        <>
            <Routes>
                <Route path="/" element={<MainLayout/>}>
                    <Route index element={<Home/>}/>
                    <Route path="about-me" element={<AboutMe/>}/>
                    <Route path="projects" element={<Projects/>}/>
                    <Route path="contact" element={<Contact/>}/>
                </Route>
            </Routes>
        </>
    )
}
