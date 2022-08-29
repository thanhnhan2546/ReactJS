import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./page/home/Home";
import Contact from "./page/contact/Contact";
import About from "./page/about/About";
import Header from "./components/Home/headers/Header";
import Login from "./page/login/Login";
import Profile from "./page/profile/Profile";
import TodoList from "./page/TodoList_axios/TodoList";
import TodoListRFC from "./page/TodoList_axios/TodoListRFC";
import ToDoListRedux from "./page/TodoList_axios/ToDoListRedux";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/todolistRFC" element={<TodoListRFC />} />
        <Route exact path="/todolistRCC" element={<TodoList />} />
        <Route exact path="/todolistRedux" element={<ToDoListRedux />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
