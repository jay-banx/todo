import React, { Component } from "react";

import AppHeader from "../AppHeader";
import SearchPanel from "../SearchPanel";
import ItemStatusFilter from "../ItemStatusFilter";
import TodoList from "../TodoList";
import ItemAddForm from "../ItemAddForm";

import "./App.css";

class App extends Component {
  nextId = 0;

  state = {
    todoData: [
      this.createItem("Write letter"),
      this.createItem("Buy smartphone"),
      this.createItem("Kiss my girlfriend")
    ]
  };

  createItem(label) {
    return {
      id: this.nextId++,
      label,
      important: false,
      done: false
    };
  }

  deleteItem = id => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex(el => el.id === id);

      const newArray = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)];

      return {
        todoData: newArray
      };
    });
  };

  addItem = text => {
    this.setState(({ todoData }) => {
      return {
        todoData: [...todoData, this.createItem(text)]
      };
    });
  };

  toggleProperty = (arr, id, propName) => {
    const idx = arr.findIndex(el => el.id === id);

    const oldItem = arr[idx];
    const newItem = { ...oldItem, [propName]: !oldItem[propName] };

    return [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)];
  };

  toggleImportant = id => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, "important")
      };
    });
  };

  toggleDone = id => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, "done")
      };
    });
  };

  render() {
    const { todoData } = this.state;

    const doneCount = todoData.filter(el => el.done).length;
    const todoCount = todoData.length - doneCount;

    return (
      <div className="app">
        <AppHeader toDo={todoCount} done={doneCount} />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>
        <TodoList
          todos={todoData}
          onDeleted={this.deleteItem}
          onToggleDone={this.toggleDone}
          onToggleImportant={this.toggleImportant}
        />
        <ItemAddForm onAdded={this.addItem} />
      </div>
    );
  }
}

export default App;
