import axios from "axios";
import { GET_TASK_API } from "../constants/TodoListConstant";

export const getTaskListAPI = () => {
  // Tiền xử lý dữ liệu trước xử lý function

  return (dispatch) => {
    let promise = axios({
      method: "GET",
      url: "https://svcy.myclass.vn/api/ToDoList/GetAllTask",
    });

    promise
      .then((res) => {
        dispatch({
          type: GET_TASK_API,
          taskList: res.data,
        });
      })
      .catch((err) => {
        console.log(err.respone.data);
      });
  };
};

export const addTaskAPI = (data) => {
  return (dispatch) => {
    let promise = axios({
      url: "https://svcy.myclass.vn//api/ToDoList/AddTask",
      method: "POST",
      data: data,
    });
    promise
      .then((res) => {
        alert("Success !");
        dispatch(getTaskListAPI());
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const delTaskAPI = (name) => {
  return (dispatch) => {
    let promise = axios({
      url: `https://svcy.myclass.vn/api/ToDoList/deleteTask?taskName=${name}`,
      method: "DELETE",
    });
    promise
      .then((res) => {
        dispatch(getTaskListAPI());
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const completeTask = (name) => {
  return (dispatch) => {
    let promise = axios({
      url: ``,
    });
  };
};
