import Home from "./Components/Pages/Home/Home";
import Signup from "./Components/Pages/Signup/Signup"
import AddArticle from "./Components/Pages/AddArticle/AddArticle";
import AddSupply from "./Components/Pages/AddSupply/AddSupply";
import AddSell from "./Components/Pages/AddSell/AddSell";
import Login from "./Components/Pages/Login/Login";
import HomeMenu from "./Components/HomeMenu/HomeMenu";
import PageArticle from "./Components/Pages/PageArticle/PageArticle";
import PageSell from "./Components/Pages/PageSell/PageSell";
import PageSupply from "./Components/Pages/PageSupply/PageSupply";
import PageInventaire from "./Components/Pages/PageInventaire/PageInventaire";

import { BrowserRouter,Routes,Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        
      <Route path="/Home" element={<Home />} />
      <Route path="/Signup" element={<Signup />} />
      <Route path="/Login" element={<Login />} />

        <Route path="/" element={<HomeMenu />} >
          <Route path="/PageArticle" element={<PageArticle />} />
          <Route path="/PageSell" element={<PageSell />} />
          <Route path="/PageSupply" element={<PageSupply />} />
          <Route path="/PageInventaire" element={<PageInventaire />} />
          
        </Route>

        <Route path="/Deconnexion" element={<Home />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;

