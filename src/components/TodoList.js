import React from "react";
import "./TodoList.css";

import TodoListItem from "./TodoListItem";

const TodoList = ({ todos }) => {
  const elements = todos.map(todo => {
    const { id, ...todoProps } = todo;

    return (
      <li key={id} className="list-group-item">
        <TodoListItem {...todoProps} />
      </li>
    );
  });

  return <ul className="list-group todo-list">{elements}</ul>;
};

export default TodoList;
