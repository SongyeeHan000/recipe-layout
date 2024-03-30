'use client'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./navbar";
import RecipePage from "./recipes/singleRecipe";

export default function Home() {
  return (
    <main>
      <nav>
        <Navbar />
      </nav>
      <Router>
        <Routes> 
          <Route path= "/" element={<RecipePage/>}/>
          <Route exact path= "/recipe" element={<RecipePage/>}/>
        </Routes>
      </Router>
      
    </main>
  );
}
