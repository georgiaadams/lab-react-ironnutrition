import React from 'react';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import Foodbox from './components/Foodbox';
import AddFood from './components/AddFood';
import SearchBar from './components/SearchBar';
import './App.css';

class App extends React.Component {
  state = {
    foods: foods,
    filteredFoods: foods,
    selectedFoods: [],
  };

  addNewFood = (newFood) => {
    const updateFood = [...this.state.filteredFoods, newFood];
    this.setState({ filteredFoods: updateFood });
  };

  filterFoods = (searchStr) => {
    const filteredFoods = this.state.foods.filter((oneFood) => {
      if (oneFood.name.toLowerCase().includes(searchStr.toLowerCase())) {
        return true;
      } else {
        return false;
      }
    });
    this.setState({ filteredFoods });
  };

  handleClick = (newFood) => {
    const selectedFoods = [newFood, ...this.state.selectedFoods];
    this.setState({ selectedFoods });
  };

  render() {
    return (
      <div className="App">
        <SearchBar filterFoods={this.filterFoods} />
        <br />
        <AddFood addFood={this.addNewFood} />

        <br />
        <section className="foods">
          <h2>My Food List</h2>
          <div class="columns">
            {this.state.selectedFoods.map((food) => (
              <div class="column">
                <p>Name: {food.name}</p>
                <p>Calories: {food.calories * food.quantity}</p>
                <p>Quantity: {food.quantity}</p>
              </div>
            ))}
            <div class="column"></div>
          </div>
          <h2 style={{ fontSize: '40px', textAlign: 'center' }}>
            IRON NURITION
          </h2>
          {this.state.filteredFoods.map((food) => {
            return (
              <Foodbox
                key={food.image}
                food={food}
                addQuantity={this.handleClick}
              />
            );
          })}
          <br />
        </section>
      </div>
    );
  }
}

export default App;
