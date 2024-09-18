import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  HashRouter,
  createHashRouter
} from "react-router-dom";
import OurAstrologer from "./components/OurAstrologers/OurAstrologer";
import AstrologyVideo from "./components/AstrologyVideo/AstrologyVideo";
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
import TermsConditions from "./components/Policy/TermsConditions";
import ProductDetails from "./components/Products/ProductDetails";
import Blog2 from "./components/Blog/Blog2";
import Blog1 from "./components/Blog/Blog1";
import Blog3 from "./components/Blog/Blog3";
import Blog4 from "./components/Blog/Blog4";

const router = createHashRouter(
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
        <Route path="/terms-conditions" element={<TermsConditions />} />
        <Route path="/blog-1" element={<Blog1 />} />
        <Route path="/blog-2" element={<Blog2 />} />
        <Route path="/blog-3" element={<Blog3 />} />
        <Route path="/blog-4" element={<Blog4 />} />

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
