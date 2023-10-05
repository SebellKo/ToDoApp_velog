import {useState} from 'react';

import classes from './ToDoForm.module.css';

const ToDoForm = (props) => {
    const [todo, setTodo] = useState('');

    const errorHandler = (value) => {
      if (value.length === 0) {
        return false;
      } else {
        return true;
      }
    }

    const changeHandler = (event) => {
        setTodo(event.target.value);
    }
    const submitHandler = (event) => {
        event.preventDefault();
        const isValid = errorHandler(todo);
        if (isValid) {
          const todoList = {title: todo, id: Math.random()};
          props.onGetTodo(todoList);
        } else {
          props.onGetError(true);
        }
        
        setTodo('');
    }
  return (
    <div className={classes.form_wrapper}>
      <form onSubmit={submitHandler}>
          <label htmlFor='todoInput'>Type your To Do.</label>
          <input onChange={changeHandler} value={todo} id='todoInput' type='text'></input>
          <button type='submit'>Add</button>
      </form>
    </div>
  );
};

export default ToDoForm;
