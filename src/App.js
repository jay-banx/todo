import React from "react";

import AppHeader from "./components/AppHeader";
import SearchPanel from "./components/SearchPanel";
import TodoList from "./components/TodoList";

const App = () => {
  const todoData = [
    {
      id: 0,
      value: "Write letter",
      important: false
    },
    {
      id: 1,
      value: "Buy smartphone",
      important: false
    },
    {
      id: 2,
      value: "Kiss my girlfriend",
      important: true
    }
  ];

  return (
    <div className="App">
      <AppHeader />
      <SearchPanel />
      <TodoList todos={todoData} />
    </div>
  );
};

export default App;
