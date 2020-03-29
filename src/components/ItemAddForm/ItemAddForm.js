import React, { Component } from "react";
import "./ItemAddForm.css";

class ItemAddForm extends Component {
  state = {
    label: ""
  };

  onChangeLabel = event => {
    this.setState({
      label: event.target.value
    });
  };

  onSubmit = event => {
    event.preventDefault();
    const label = this.state.label.trim();
    if (label !== "") {
      this.props.onAdded(label);
      this.setState({
        label: ""
      });
    }
  };

  render() {
    return (
      <form className="item-add-form d-flex" onSubmit={this.onSubmit}>
        <input
          type="text"
          className="form-control"
          placeholder="Type new todo"
          value={this.state.label}
          onChange={this.onChangeLabel}
        />
        <input
          type="submit"
          value="Add todo"
          className="btn btn-outline-primary"
        />
      </form>
    );
  }
}

export default ItemAddForm;
