import icon from './fireIcon.png'

function RecipesComponent({label, image, calories, ingredients}) {
    return(
        <div className="recipeContainer">
            <div className="container">
                <img className="recipeImage" src={image} alt='recipe' />
            </div>
            <div className="container">
                <h3>{label}</h3>
            </div>
            <div className="container">
                <p><img src={icon} width='12px' alt='icon'/> {calories.toFixed()} calories</p>
            </div>
            <ul>
                {ingredients.map((item, index) => (
                <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    )
}

export default RecipesComponent