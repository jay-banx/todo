import React from "react";

import TodoListItem from "./TodoListItem";

const TodoList = ({ todos }) => {
  const elements = todos.map((todo, index) => (
    <li key={index}>
      <TodoListItem {...todo} />
    </li>
  ));

  return <ul>{elements}</ul>;
};

export default TodoList;
