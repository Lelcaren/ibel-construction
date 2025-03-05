import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Service";
import Contact from "./pages/Contact";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "My Website"; // Default title
    let metaDescription = "Welcome to my website."; // Default meta description

    switch (pathname) {
      case "/":
        title = "Home | My Website";
        metaDescription = "This is the home page.";
        break;
      case "/about":
        title = "About Us | My Website";
        metaDescription = "Learn more about us.";
        break;
      case "/services":
        title = "Our Services | My Website";
        metaDescription = "Discover our services.";
        break;
      case "/contact":
        title = "Contact Us | My Website";
        metaDescription = "Get in touch with us.";
        break;
    }

    // Update document title
    document.title = title;

    // Update meta description
    const metaDescriptionTag = document.querySelector(
      'head > meta[name="description"]'
    );
    if (metaDescriptionTag) {
      metaDescriptionTag.content = metaDescription;
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
