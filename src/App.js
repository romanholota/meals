import React from 'react';
import Meal from './components/Meal/Meal'

class App extends React.Component {
    loadMultiple(number) {
        let meals = [];
        for (let i=0; i < number; i++) {
            meals.push(<Meal />);
        }
        return meals;
    }

    render() {
        return (
            <React.StrictMode>
                <div className="mx-auto text-center mt-5">
                    <h1 class="display-2" href="#">Random Recipes</h1>
                </div>
                {this.loadMultiple(3)}
            </React.StrictMode>
        );
    }
};

export default App;