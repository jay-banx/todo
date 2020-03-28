import React from "react";

import AppHeader from "./components/AppHeader";
import SearchPanel from "./components/SearchPanel";
import ItemStatusFilter from "./components/ItemStatusFilter";
import TodoList from "./components/TodoList";

import "./App.css";

const App = () => {
  const todoData = [
    {
      id: 0,
      label: "Write letter",
      important: false
    },
    {
      id: 1,
      label: "Buy smartphone",
      important: false
    },
    {
      id: 2,
      label: "Kiss my girlfriend",
      important: true
    }
  ];

  return (
    <div className="app">
      <AppHeader toDo={1} done={3} />
      <div className="top-panel d-flex">
        <SearchPanel />
        <ItemStatusFilter />
      </div>
      <TodoList todos={todoData} />
    </div>
  );
};

export default App;
