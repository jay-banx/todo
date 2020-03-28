import React from "react";

const TodoListItem = ({ value, important = false }) => {
  const style = {
    color: important ? "tomato" : "black"
  };

  return <span style={style}>{value}</span>;
};

export default TodoListItem;
