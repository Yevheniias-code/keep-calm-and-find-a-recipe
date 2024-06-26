import { useEffect, useState } from 'react';
import './App.css';
import RecipesComponent from './RecipesComponent';
import icon from './search.png'

function App() {
  const MY_ID = '5eb615b7';
  const MY_KEY = '3c7bf630d1436af5e7fb620550bad96c';

  const[mySearch, setMySearch] = useState('');
  const[myRecipe, setMyRecipe] = useState([]);
  const[wordSubmitted, setWordSubmitted] = useState('');


  useEffect(() => {
    const getRecipe = async () => {
      const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${wordSubmitted}&app_id=${MY_ID}&app_key=${MY_KEY}`)
      const data = await response.json();
      setMyRecipe(data.hits)
    }
    getRecipe()
  }, [wordSubmitted])

  const myRecipeSearch = (e) => {
    setMySearch(e.target.value)
  }

  const finalSearch = (e) => {
    e.preventDefault()
    setWordSubmitted(mySearch)
  }

  return (
    <div className='appContainer'>
      <div className='container, motivationLine'>
        <p>Keep calm and just cook</p>
      </div>

      <div className='main'>
        <div className='container'>
          <h1>What would you like to cook today?</h1>
        </div>

        <div className='container '>
          <form className='inputContainer' onSubmit={finalSearch}>
            <input className='search' placeholder='Enter the name of the recipe or the ingridients...' onChange={myRecipeSearch} value={mySearch} />
            <button><img src={icon} width='23px' alt='search item'/></button>
          </form>
        </div>

        <div className='recipesContainer'>
          {myRecipe.map((item, index) => (
            <RecipesComponent key={index}
            label={item.recipe.label}
            image={item.recipe.image}
            calories={item.recipe.calories}
            ingredients={item.recipe.ingredientLines} />
            ))}
          </div>
        </div>
    </div>
  );
}

export default App;