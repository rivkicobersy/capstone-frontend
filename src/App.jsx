import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { Header } from "./Header";
import { Home } from "./Home";
import { Footer } from "./Footer";
import { IngredientsIndex } from "./IngredientsIndex";
import { IngredientsIndexPage } from "./IngredientsIndexPage";
import { IngredientsShowPage } from "./IngredientsShowPage";
import { IngredientsNew } from "./IngredientsNew";
export { PantryItemsIndex } from "./PantryItemsIndex";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ingredients" element={<IngredientsIndexPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/ingredients" element={<IngredientsIndex />} />
        <Route path="/ingredients/:id" element={<IngredientsShowPage />} />
        <Route path="/ingredients/new" element={<IngredientsNew />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

// TODO finish using routes
