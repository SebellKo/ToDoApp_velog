import React from "react";
import { useState } from "react";
import "./App.css";
import Modal from "./components/Modal/Modal";
import ToDoForm from "./components/ToDoForm/ToDoForm";
import ToDoList from "./components/ToDoList/ToDoList";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [isError, setIsError] = useState(false);

  const getToDo = (todo) => {
    setTodoList((prevList) => {
      return [...prevList, todo];
    });
  };

  const deleteToDo = (id) => {
    setTodoList((prevList) => {
      const updatedList = prevList.filter((list) => list.id !== id);
      return updatedList;
    });
  };

  const checkValid = (isValid) => {
    if (isValid === true) {
      setIsError(true);
    } else {
      setIsError(false);
    }
  }

  return (
    <div className="App">
      {isError && <Modal onGetError={checkValid}></Modal>}
      <ToDoForm onGetTodo={getToDo} onGetError={checkValid}></ToDoForm>
      <ToDoList todoList={todoList} onDeleteTodo={deleteToDo}></ToDoList>
    </div>
  );
}

export default App;
