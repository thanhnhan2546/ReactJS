import React, { Component } from "react";
import Axios from "axios";
import "./todoList.css";
export default class TodoList extends Component {
  state = {
    taskList: [],
    value: {
      taskName: "",
    },
    errors: {
      taskName: "",
    },
  };
  getTaskList = () => {
    let promise = Axios({
      method: "GET",
      url: "https://svcy.myclass.vn/api/ToDoList/GetAllTask",
    });

    promise
      .then((res) => {
        // console.log(res.data);
        this.setState({
          taskList: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  taskToDo = () => {
    return this.state.taskList
      .filter((item) => !item.status)
      .map((item, index) => {
        return (
          <li key={index}>
            <span>{item.taskName}</span>
            <div className="buttons">
              <button className="remove">
                <i className="fa fa-trash-alt" />
              </button>
              <button
                className="complete"
                onClick={() => {
                  this.completeTask(item.taskName);
                }}
              >
                <i className="far fa-check-circle" />
                <i className="fas fa-check-circle" />
              </button>
            </div>
          </li>
        );
      });
  };
  taskToDoComplete = () => {
    return this.state.taskList
      .filter((item) => item.status)
      .map((item, index) => {
        return (
          <li key={index}>
            <span>{item.taskName}</span>
            <div className="buttons">
              <button className="remove">
                <i className="fa fa-trash-alt" />
              </button>
              <button className="complete">
                <i className="far fa-check-circle" />
                <i className="fas fa-check-circle" />
              </button>
            </div>
          </li>
        );
      });
  };
  handleChange = (e) => {
    // e.preventDefault();
    let valueChange = e.target.value;
    // console.log(valueChange);

    let newValue = { ...this.state.value };
    let newErrors = { ...this.state.errors };

    newValue.taskName = valueChange;
    // console.log(newValue);
    const regex = /^[a-zA-Z0-9]+$/i;

    if (!regex.test(newValue.taskName) || newValue.taskName.trim() === "") {
      newErrors.taskName = "Invalid";
    } else {
      newErrors.taskName = "";
    }

    this.setState({
      value: {
        ...newValue,
      },
      errors: newErrors,
    });
  };

  addTask = () => {
    // console.log(this.state.value);
    let promise = Axios({
      url: "https://svcy.myclass.vn//api/ToDoList/AddTask",
      method: "POST",
      data: this.state.value,
    });
    promise
      .then((res) => {
        alert("Success !");
        this.getTaskList();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  completeTask(name) {
    const taskDone = this.state.taskList.filter(
      (task) => task.taskName === name
    );

    console.log(taskDone);
  }

  componentDidMount() {
    this.getTaskList();
  }

  render() {
    return (
      <div className="card">
        <div className="card__header">
          <img src={require("./img/X2oObC4.png")} />
        </div>
        {/* <h2>hello!</h2> */}
        <div className="card__body">
          <div className="card__content">
            <div className="card__title">
              <h2>My Tasks</h2>
              <p>September 9,2020</p>
            </div>
            <div className="card__add">
              <input
                onChange={this.handleChange}
                name="taskName"
                id="newTask"
                type="text"
                placeholder="Enter an activity..."
              />

              <button
                id="addItem"
                onClick={() => {
                  this.addTask();
                }}
              >
                <i className="fa fa-plus" />
              </button>
            </div>
            <p className="text text-danger">{this.state.errors.taskName}</p>
            <div className="card__todo">
              {/* Uncompleted tasks */}
              <ul className="todo" id="todo">
                {this.taskToDo()}
              </ul>
              {/* Completed tasks */}
              <ul className="todo" id="completed">
                {this.taskToDoComplete()}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
