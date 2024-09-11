import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import {
  BrowserRouter,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import OurAstrologer from "./components/OurAstrologers/OurAstrologer";
import AstrologyVideo from "./components/AstrologyVideo/AstrologyVideo";
import Product from "./components/Products/Product";
import Footer from "./components/Footer/Footer";
import SignIn from "./components/Auth/SignIn";
import SignUp from "./components/Auth/SignUp";
import KundliMatching from "./components/Kundali/KundaliMatching/KundaliMatching";
import JanamKundali from "./components/Kundali/JanamKundali/JanamKundali";
import Error from "./Error";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<App />}>
        <Route path="/" element={<Hero />} />
        <Route path="/our" element={<OurAstrologer />} />
        <Route path="courses" element={<AstrologyVideo />} />
        <Route path="/product" element={<Product />} />
        <Route path="/kundali-matching" element={<KundliMatching />} />
        <Route path="/janam-kundali" element={<JanamKundali />} />
      </Route>
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="*" element={<Error />} />
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
