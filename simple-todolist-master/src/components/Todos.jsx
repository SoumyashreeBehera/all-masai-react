import React, { useState } from "react";
import TodoItem from "./TodoItem";
import "./Todos.css";
import "./icoons/ionicons.min.css";
import { v4 as uuid } from "uuid";

function Todos() {
  const [value, setValue] = useState("");
  const [todoList, setTodoList] = useState([]);

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const handleClick = () => {
    setTodoList([{ status: false, title: value, id: uuid() }, ...todoList]);
    setValue("");
  };

  const handleCross = (selectedTodo) => {
    let data = todoList;
    data = data.filter((el) => el.id !== selectedTodo);
    setTodoList(data);
  };

  const handleStatus = (selectedTodo) => {
    let data = todoList;
    data = data.map((el) => {
      if (el.id === selectedTodo) el.status = !el.status;
      return el;
    });
    setTodoList(data);
  };

  const handleCompleted = () => {
    let data = todoList;
    data = data.filter((el) => el.status === true);
    setTodoList(data);
  };

  return (
    <div className="section">
      <div>
        <div className="inputTodoBox">
          <button className="addButton ion-plus" onClick={handleClick}></button>
          <input
            className="inputbox"
            value={value}
            onChange={handleChange}
            type="text"
            placeholder="Write Something"
          />
        </div>
      </div>
      <button onClick={handleCompleted}>Show Completeed Todos</button>
      {todoList.map((el) => {
        return (
          <TodoItem
            key={el.id}
            data={el}
            onClickCross={handleCross}
            onClickDiv={handleStatus}
          />
        );
      })}
    </div>
  );
}
export default Todos;
