import React from 'react';
import Meal from './components/Meal/Meal'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            meals: [],
            random: 1,
        };
    }

    handleClick(e) {
        let newMeals = [];
        for (let i=0; i < 3; i++) {
            newMeals.push(<Meal key={this.state.random + i} />);
        }
        this.setState({
             meals: newMeals,
             random: Math.random()
            });
    }

    render() {
        return (
            <React.StrictMode>
                <div className="mx-auto text-center mt-5">
                    <h1 className="display-2" href="#">Random Recipes</h1>
                </div>

                <div className="d-flex justify-content-center">
                    <button className="btn btn-default" onClick={this.handleClick.bind(this)}>Load meals</button>
                </div>     
                {this.state.meals}
            </React.StrictMode>
        );
    }
};

export default App;