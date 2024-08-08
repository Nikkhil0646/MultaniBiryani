import { useEffect } from "react";
import {
  Route,
  Routes,
  useLocation,
  useNavigationType,
} from "react-router-dom";

import BIRYANI from "./pages/BIRYANI";
import BREADS from "./pages/BREADS";
import CHICKEN from "./pages/CHICKEN";
import DESSERT from "./pages/DESSERT";
import FullScreen from "./pages/FullScreen";
import Gallery from "./pages/Gallery";
import MIXVEG from "./pages/MIXVEG";
import MUHSROOM from "./pages/MUHSROOM";
import MUTTON from "./pages/MUTTON";
import OURMENU from "./pages/OURMENU";
import PANNER from "./pages/PANNER";
import RICE from "./pages/RICE";
import SOFTDRINK from "./pages/SOFTDRINK";

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

      case "/MUTTON":
        title = "Muttom menu";
        metaDescription = "Explore our delicious mutton items";
        break;

      case "/BREADS":
        title = "Bread menu";
        metaDescription = "Explore our delicious bread items";
        break;

      case "/BIRYANI":
        title = "Biryani menu";
        metaDescription = "Explore our delicious biryani items";
        break;

      case "/RICE":
        title = "RICE menu";
        metaDescription = "Explore our delicious rice items";
        break;

      case "/CHICKEN":
        title = "Chicken menu";
        metaDescription = "Explore our delicious rice items";
        break;

      case "/PANNER":
        title = "Paneer menu";
        metaDescription = "Explore our delicious paneer items";
        break;

      case "/MUHSROOM":
        title = "MUHSROOM menu";
        metaDescription = "Explore our delicious paneer items";
        break;

      case "/MIXVEG":
        title = "MIXVEG menu";
        metaDescription = "Explore our delicious paneer items";
        break;

      case "/DESSERT":
        title = "DESSERT menu";
        metaDescription = "Explore our delicious paneer items";
        break;

        case "/SOFTDRINK":
          title = "SOFTDRINK menu";
          metaDescription = "Explore our delicious paneer items";
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
      <Route path="/OURMENU" element={<OURMENU />} />
      <Route path="/GALLERY" element={<Gallery />} />
      <Route path="/MUTTON" element={<MUTTON />} />
      <Route path="/BREADS" element={<BREADS />} />
      <Route path="/BIRYANI" element={<BIRYANI />} />
      <Route path="/RICE" element={<RICE />} />
      <Route path="/CHICKEN" element={<CHICKEN />} />
      <Route path="/PANNER" element={<PANNER />} />
      <Route path="/MUHSROOM" element={<MUHSROOM />} />
      <Route path="/MIXVEG" element={<MIXVEG />} />
      <Route path="/DESSERT" element={<DESSERT />} />
      <Route path="/SOFTDRINK" element={<SOFTDRINK />} />
    </Routes>
  );
}
export default App;
