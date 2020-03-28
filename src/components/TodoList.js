import React from "react";

import TodoListItem from "./TodoItemList";

const TodoList = props => {
  return (
    <ul>
      {props.list.map((value, index) => (
        <li key={index}>
          <TodoListItem value={value} />
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
