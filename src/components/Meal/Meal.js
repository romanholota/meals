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
                            idMeal,strMeal, strInstructions, strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5, strIngredient6, strIngredient7, strIngredient8, strIngredient9, strIngredient10, strIngredient11, strIngredient12, strIngredient13, strIngredient14, strIngredient15, strIngredient16, strIngredient17, strIngredient18, strIngredient19, strIngredient20, strMeasure1, strMeasure2, strMeasure3, strMeasure4, strMeasure5, strMeasure6, strMeasure7, strMeasure8, strMeasure9, strMeasure10, strMeasure11, strMeasure12, strMeasure13, strMeasure14, strMeasure15, strMeasure16, strMeasure17, strMeasure18, strMeasure19, strMeasure20
                        } = meal;

                        const ingredientNames = [strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5, strIngredient6, strIngredient7, strIngredient8, strIngredient9, strIngredient10, strIngredient11, strIngredient12, strIngredient13, strIngredient14, strIngredient15, strIngredient16, strIngredient17, strIngredient18, strIngredient19, strIngredient20].filter(n => n);
                        const measures = [strMeasure1, strMeasure2, strMeasure3, strMeasure4, strMeasure5, strMeasure6, strMeasure7, strMeasure8, strMeasure9, strMeasure10, strMeasure11, strMeasure12, strMeasure13, strMeasure14, strMeasure15, strMeasure16, strMeasure17, strMeasure18, strMeasure19, strMeasure20];

                        const ingredients = [];

                        ingredientNames.forEach((value, i) => ingredients.push(`${measures[i].toLowerCase()} ${ingredientNames[i].toLowerCase()}`))

                        return (
                            <div className="container bg-light p-5 mx-auto my-5 text-center" key={idMeal}>
                                <h2 className="display-3">{strMeal}</h2>
                                <div className="py-5">
                                <h3 className="display-4">Ingredients</h3>
                                <ul className="list-group pt-3">
                                  {ingredients.map((value, index) => {
                                    return {value} === '' ? null : <li className="list-group-item" key={index}>{value}</li>;
                                  })}
                                </ul>
                                </div>
                                <div className="py-2">                              
                                <h3 className="display-4">Instructions</h3>
                                <p className="pt-3 text-justify">{strInstructions}</p>
                                </div>
                            </div>
                        );
                    })
                ) : (
                  <div className="container bg-light p-5 mx-auto my-5 text-center">
                    <h2 className="display-3">Loading...</h2>
                  </div>
                )}
            </React.Fragment>
        );
    }
}

export default Meal;