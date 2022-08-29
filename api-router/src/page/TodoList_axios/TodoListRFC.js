import React, { useEffect, useState } from "react";
import axios from "axios";
import "./todoList.css";
export default function TodoListRFC() {
  let [state, setState] = useState({
    taskList: [],
    value: {
      taskName: "",
    },
    errors: {
      taskName: "",
    },
  });

  const getTaskList = () => {
    let promise = axios({
      method: "GET",
      url: "https://svcy.myclass.vn/api/ToDoList/GetAllTask",
    });

    promise
      .then((res) => {
        setState({
          ...state,
          taskList: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const addTask = () => {};

  const taskToDo = () => {
    return state.taskList
      .filter((item) => !item.status)
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
  const taskToDoComplete = () => {
    return state.taskList
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

  useEffect(() => {
    getTaskList();
  }, []);
  const renderList = (e) => {
    e.preventDefault();
    getTaskList();

    console.log(state);
  };

  const handleChange = (e) => {};

  return (
    <div className="card">
      <button onClick={renderList} className="btn btn-primary">
        Render
      </button>
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
              id="newTask"
              type="text"
              placeholder="Enter an activity..."
            />
            <button id="addItem">
              <i className="fa fa-plus" />
            </button>
          </div>
          <div className="card__todo">
            {/* Uncompleted tasks */}
            <ul className="todo" id="todo">
              {taskToDo()}
            </ul>
            {/* Completed tasks */}
            <ul className="todo" id="completed">
              {taskToDoComplete()}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
