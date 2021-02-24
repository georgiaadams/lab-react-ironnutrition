import React from 'react';
import 'bulma/css/bulma.css';

class Foodbox extends React.Component {
  state = {
    quantity: 0,
  };

  addToList = () => {
    const { quantity } = this.state;
    const { food } = this.props;
    this.props.addQuantity({ ...food, quantity });
    this.setState({ quantity: 0 });
  };
  handleChange = ({ target }) => {
    const { value } = target;
    this.setState({ quantity: Number(value) });
  };
  render() {
    const { food } = this.props;
    const { quantity } = this.state;

    return (
      <div>
        <div className="box">
          <article className="media">
            <div className="media-left">
              <figure className="image is-64x64">
                <img src={food.image} alt="foodImg" />
              </figure>
            </div>
            <div className="media-content">
              <div className="content">
                <p>
                  <strong>{food.name}</strong> <br />
                  <small>{food.calories}</small>
                </p>
              </div>
            </div>
            <div className="media-right">
              <div className="field has-addons">
                <div className="control">
                  <input
                    className="input"
                    type="number"
                    value={quantity}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="control">
                  <button onClick={this.addToList} className="button is-info">
                    +
                  </button>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    );
  }
}

export default Foodbox;
