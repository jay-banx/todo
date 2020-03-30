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
    filters: [
      {
        id: 0,
        label: "All",
        enabled: true,
        filterFunc: data => data
      },
      {
        id: 1,
        label: "Active",
        enabled: false,
        filterFunc: data => data.filter(el => !el.done)
      },
      {
        id: 2,
        label: "Done",
        enabled: false,
        filterFunc: data => data.filter(el => el.done)
      },
      {
        id: 3,
        label: "Important",
        enabled: false,
        filterFunc: data => data.filter(el => el.important)
      }
    ],
    todoData: [
      this.createItem("Write letter"),
      this.createItem("Buy smartphone"),
      this.createItem("Kiss my girlfriend")
    ],
    searchText: ""
  };

  createItem(label) {
    return {
      id: this.nextId++,
      label,
      important: false,
      done: false
    };
  }

  addItem = text => {
    this.setState(({ todoData }) => {
      return {
        todoData: [...todoData, this.createItem(text)]
      };
    });
  };

  deleteItem = id => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex(el => el.id === id);

      const newArray = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)];

      return {
        todoData: newArray
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

  switchProperty = (arr, id, propName) => {
    return arr.map(el => ({ ...el, [propName]: el.id === id ? true : false }));
  };

  switchEnabledFilter = id => {
    this.setState(({ filters }) => {
      return {
        filters: this.switchProperty(filters, id, "enabled")
      };
    });
  };

  setSearchText = searchText => {
    this.setState({ searchText });
  };

  searchData(arr, searchText) {
    return arr.filter(item =>
      item.label.toLowerCase().includes(searchText.toLowerCase())
    );
  }

  filterData(arr, filters) {
    return filters.find(filter => filter.enabled).filterFunc(arr);
  }

  render() {
    const { filters, todoData, searchText } = this.state;

    const doneCount = todoData.filter(el => el.done).length;
    const todoCount = todoData.length - doneCount;

    const data = this.searchData(
      this.filterData(todoData, filters),
      searchText
    );

    return (
      <div className="app">
        <AppHeader toDo={todoCount} done={doneCount} />
        <div className="top-panel d-flex">
          <SearchPanel searchText={searchText} onSearch={this.setSearchText} />
          <ItemStatusFilter
            filters={filters}
            onFilter={this.switchEnabledFilter}
          />
        </div>
        <TodoList
          todos={data}
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
