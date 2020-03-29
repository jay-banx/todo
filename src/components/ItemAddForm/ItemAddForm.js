import React from "react";
import "./ItemAddForm.css";

const ItemAddForm = ({ onAdded }) => {
  return (
    <div className="item-add-form">
      <button
        type="button"
        className="btn btn-outline-primary float-right"
        onClick={() => onAdded("Hello world")}
      >
        Add Item
      </button>
    </div>
  );
};

export default ItemAddForm;
