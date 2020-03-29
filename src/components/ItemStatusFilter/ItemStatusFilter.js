import React from "react";
import "./ItemStatusFilter.css";

const ItemStatusFilter = ({ filters, onFilter }) => {
  const buttons = filters.map(({ id, enabled, label }) => {
    return (
      <button
        key={id}
        type="button"
        className={"btn" + (enabled ? " btn-info" : " btn-outline-secondary")}
        onClick={() => onFilter(id)}
      >
        {label}
      </button>
    );
  });

  return <div className="btn-group">{buttons}</div>;
};

export default ItemStatusFilter;
