import React from "react";
import "./icoons/ionicons.min.css";
import "./TodoItem.css";

function TodoItem({ data: { title, status, id }, onClickCross, onClickDiv }) {
  const handleTodoCross = () => {
    onClickCross(id);
  };

  const handleStatusChange = () => {
    onClickDiv(id);
  };

  return (
    <div
      className="eachTodoBox"
      style={{ background: status ? "green" : "white" }}
    >
      <div className="doneCheckBox">
        <input
          onClick={handleStatusChange}
          type="checkBox"
          className="doneCheckBox"
        />
      </div>
      <div
        style={{ textDecoration: status ? "line-through" : "none" }}
        className="eachTodos"
      >
        {title}
      </div>
      <button
        onClick={handleTodoCross}
        className="ion-close-round eachTodoManageButton"
      ></button>
    </div>
  );
}

export default TodoItem;
