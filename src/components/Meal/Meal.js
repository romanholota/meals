import React from 'react';
import './Meal.css'

class Meal extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        meals: []
      };
    }
  
    componentDidMount() {
      fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              meals: result.meals
            });
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    }
  
    render() {
        const { error, isLoaded, meals } = this.state;
        return (
            <React.Fragment>
                {error ? <p>{error.message}</p> : null}
                {isLoaded ? (
                    meals.map(meal => {
                        const {
                            mealId,strMeal, strInstructions, strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5, strIngredient6, strIngredient7, strIngredient8, strIngredient9, strIngredient10, strIngredient11, strIngredient12, strIngredient13, strIngredient14, strIngredient15, strIngredient16, strIngredient17, strIngredient18, strIngredient19, strIngredient20, strMeasure1, strMeasure2, strMeasure3, strMeasure4, strMeasure5, strMeasure6, strMeasure7, strMeasure8, strMeasure9, strMeasure10, strMeasure11, strMeasure12, strMeasure13, strMeasure14, strMeasure15, strMeasure16, strMeasure17, strMeasure18, strMeasure19, strMeasure20
                        } = meal;

                        const ingredientNames = [strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5, strIngredient6, strIngredient7, strIngredient8, strIngredient9, strIngredient10, strIngredient11, strIngredient12, strIngredient13, strIngredient14, strIngredient15, strIngredient16, strIngredient17, strIngredient18, strIngredient19, strIngredient20].filter(n => n);
                        const measures = [strMeasure1, strMeasure2, strMeasure3, strMeasure4, strMeasure5, strMeasure6, strMeasure7, strMeasure8, strMeasure9, strMeasure10, strMeasure11, strMeasure12, strMeasure13, strMeasure14, strMeasure15, strMeasure16, strMeasure17, strMeasure18, strMeasure19, strMeasure20];

                        const ingredients = [];

                        ingredientNames.forEach((value, i) => ingredients.push(`${measures[i].toLowerCase()} ${ingredientNames[i].toLowerCase()}`))

                        return (
                            <div className="container bg-light p-5 mx-auto my-5" key={mealId}>
                                <h1>{strMeal}</h1>
                                <h2>Ingredients</h2>
                                <ul>
                                  {ingredients.map((value, index) => {
                                    return {value} === '' ? null : <li key={index}>{value}</li>;
                                  })}
                                </ul>
                                <h2>Instructions</h2>
                                <p>{strInstructions}</p>
                            </div>
                        );
                    })
                ) : (
                    <h3>loading...</h3>
                )}
            </React.Fragment>
        );
    }
}

export default Meal;