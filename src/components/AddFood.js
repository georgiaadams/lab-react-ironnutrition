import React, { Component } from 'react';

class AddFood extends Component {
  state = {
    name: '',
    calories: 0,
    image: '',
  };

  handleInput = (event) => {
    let { value, name } = event.target;
    this.setState({ [name]: value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    const newFood = this.state;
    this.props.addFood(newFood);
    this.setState({ name: '', calories: 0, image: '' });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleInput}
          />

          <br />

          <label>Calories</label>
          <input
            type="number"
            name="calories"
            value={this.state.calories}
            onChange={this.handleInput}
          />
          <br />

          <label>Image</label>
          <input
            type="text"
            name="image"
            value={this.state.image}
            onChange={this.handleInput}
          />

          <br />
          <button type="submit">Create</button>
        </form>
      </div>
    );
  }
}

export default AddFood;
