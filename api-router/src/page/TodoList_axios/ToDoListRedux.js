import React, { useEffect, useState } from "react";
import axios from "axios";
import "./todoList.css";
import { useDispatch, useSelector } from "react-redux";

import {
  addTaskAPI,
  delTaskAPI,
  getTaskListAPI,
} from "../../redux/actions/ToDoListAction";
import Axios from "axios";

export default function ToDoListRedux() {
  const { taskList } = useSelector((state) => state.TodoListReducer);
  const dispatch = useDispatch();
  let [state, setState] = useState({
    // taskList: [],
    value: {
      taskName: "",
    },
    errors: {
      taskName: "",
    },
  });

  const getTaskList = () => {
    dispatch(getTaskListAPI());
  };

  const addTask = (e) => {
    e.preventDefault();
    dispatch(addTaskAPI(state.value));
  };

  const delTask = (name) => {
    // console.log(name);
    dispatch(delTaskAPI(name));
  };

  const taskToDo = () => {
    return taskList
      .filter((item) => !item.status)
      .map((item, index) => {
        return (
          <li key={index}>
            <span>{item.taskName}</span>
            <div className="buttons">
              <button className="remove" onClick={() => delTask(item.taskName)}>
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
    return taskList
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

    // console.log(state);
  };

  const handleChange = (e) => {
    let valueChange = e.target.value;
    // console.log(valueChange);

    let newValue = { ...state.value };
    let newErrors = { ...state.errors };

    newValue.taskName = valueChange;
    // console.log(newValue);
    const regex = /^[a-zA-Z0-9]+$/i;

    if (!regex.test(newValue.taskName) || newValue.taskName.trim() === "") {
      newErrors.taskName = "Invalid";
    } else {
      newErrors.taskName = "";
    }

    setState({
      value: {
        ...newValue,
      },
      errors: newErrors,
    });
  };

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
              onChange={handleChange}
              id="newTask"
              type="text"
              placeholder="Enter an activity..."
            />
            <button id="addItem" onClick={addTask}>
              <i className="fa fa-plus" />
            </button>
          </div>
          <p className="text text-danger">{state.errors.taskName}</p>
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
