import { useEffect } from "react";
import {
  Route,
  Routes,
  useLocation,
  useNavigationType
} from "react-router-dom";
import FullScreen from "./pages/FullScreen";
import Gallery from "./pages/Gallery";
import OURMENU from "./pages/OURMENU";

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
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "Home";
        metaDescription = "Welcome to Multani Biryani";
        break;

      case "/OURMENU":
        title = "Our Menu"; // Set title for OUR MENU page
        metaDescription = "Explore our delicious biryani menu"; // Set meta description for OUR MENU page
        break;

      case "/GALLERY":
        title = "Gallery";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<FullScreen />} />
      <Route path="/OURMENU" element={<OURMENU/> }/>
      <Route path="/Gallery" element={<Gallery/>} />
    </Routes>
  );
}
export default App;
