import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import OurAstrologer from "./components/OurAstrologers/OurAstrologer";
import AstrologyVideo from "./components/AstrologyVideo/AstrologyVideo";
import Product from "./components/Products/Product";
import SignIn from "./components/Auth/SignIn";
import SignUp from "./components/Auth/SignUp";
import KundliMatching from "./components/Kundali/KundaliMatching/KundaliMatching";
import JanamKundali from "./components/Kundali/JanamKundali/JanamKundali";
import Error from "./Error";
import OutletPage from "./OutletPage";
import App from "./App";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";
import Blog from "./components/Blog/Blog";
import PrivacyPolicy from "./components/Policy/PrivacyPolicy";
import TermsConditions from "./components/Policy/TermsConditions";
import ProductDetails from "./components/Products/ProductDetails";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<OutletPage />}>
        <Route path="/" element={<App />} />
        <Route path="" element={<OurAstrologer />} />
        <Route path="" element={<AstrologyVideo />} />
        <Route path="/product-details" element={<ProductDetails />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/kundali-matching" element={<KundliMatching />} />
        <Route path="/janam-kundali" element={<JanamKundali />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-conditions" element={<TermsConditions />} />
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
