import React from "react";

import AppHeader from "./components/AppHeader";
import SearchPanel from "./components/SearchPanel";
import TodoList from "./components/TodoList";

const todoListArr = ["Write letter", "Buy smartphone", "Kiss my girlfriend"];

const App = () => {
  return (
    <div className="App">
      <AppHeader />
      <SearchPanel />
      <TodoList list={todoListArr} />
    </div>
  );
};

export default App;
