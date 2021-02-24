import React from 'react';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import Foodbox from './components/Foodbox';

class App extends React.Component {
  state = {
    foods: foods,
  };
  render() {
    return (
      <div className="App">
        <h2 style={{ fontSize: '40px', textAlign: 'center' }}>IRON NURITION</h2>
        {foods.map((food) => {
          return <Foodbox food={food} />;
        })}
      </div>
    );
  }
}

export default App;
