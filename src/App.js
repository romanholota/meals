import React from 'react';
import Meal from './components/Meal/Meal'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            meal: <Meal />,
            mealCount: 1,
        };
    }

    handleClick(e) {
        this.setState({
            meal: <Meal key={this.state.mealCount} />,
            mealCount: this.state.mealCount + 1
        });
    }

    render() {
        return (
            <React.StrictMode>
                <div className="mx-auto text-center mt-5">
                    <h1 className="display-2" href="#">Random Recipes</h1>
                </div>

                <div className="d-flex justify-content-center mt-4">
                    <button className="btn btn-default" onClick={this.handleClick.bind(this)}>Refresh</button>
                </div>     
                {this.state.meal}
            </React.StrictMode>
        );
    }
};

export default App;