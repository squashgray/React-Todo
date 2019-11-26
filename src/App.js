import React from "react";
import Header from "./components/Header";
import ToDoList from "./components/TodoComponents/TodoList";
import ToDoForm from "./components/TodoComponents/TodoForm";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newItem: "",
      list: [
        {
          task: "Organize Garage",
          id: 1528817077286,
          completed: false
        },
        {
          task: "Bake Cookies",
          id: 1528817084358,
          completed: false
        }
      ]
    };
  }

  toggleCompleted = id => {
    this.setState({
      list: this.state.list.map(item => {
        if (item.id === id) {
          return {
            ...item,
            completed: !item.completed
          };
        } else {
          return item;
        }
      })
    });
  };

  clearCompleted = () => {
    this.setState({
      list: this.state.list.filter(item => {
        return !item.completed;
      })
    });
    console.log("clear completed");
  };

  addItem = name => {
    const newItem = {
      task: name,
      id: Date.now(),
      completed: false
    };
    this.setState({
      list: [...this.state.list, newItem]
    });
  };

  handleChange = e => {
    this.setState({
      newItem: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.addItem(this.state.newItem);
    this.setState({ newItem: "" });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <div className="cont">
          <ToDoList
            newItem={this.state.newItem}
            list={this.state.list}
            toggleCompleted={this.toggleCompleted}
          />
          <ToDoForm
            newItem={this.state.newItem}
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
            clearCompleted={this.clearCompleted}
          />
        </div>
      </div>
    );
  }
}

export default App;
