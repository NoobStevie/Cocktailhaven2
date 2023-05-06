import React, { useState } from 'react';

import './App.css'

import Filter from './components/Filter';
import RandomCocktail from './components/RandomCocktail';
import NavBar from './components/Navbar';
import SearchContainer from './components/SearchContainer';
import About from './pages/About';
import CocktailReviews from './pages/CocktailReviews'

const API_KEY = '1';

function App() {
  const [cocktails, setCocktails] = useState([]);
  const [reviewsUpdate, setReviewsUpdate] = useState(false);

  function updateReviews() {
    setReviewsUpdate(!reviewsUpdate);
  }


  return (
    <div>
      <NavBar />

      <div>
        <Filter setCocktails={setCocktails} apiKey={API_KEY} />
        <ul className="cocktail-grid">
          {cocktails.map(cocktail => (
            <li key={cocktail.idDrink}>
              <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
              {cocktail.strDrink}
            </li>
    ))}
  </ul>
</div>

        <div>
          <RandomCocktail />
          <SearchContainer />
          <About />
           
        
        </div>
        <div>
           <h1>Reviews</h1>
           <CocktailReviews cocktailID={1} updateReviews={updateReviews} />
      </div>
    </div>
  );
}

export default App;