import classes from './ToDoList.module.css';

const ToDoList = (props) => {
    const clickHandler = (id) => {
        props.onDeleteTodo(id);
    }

  return (
    <div className={classes.list_wrapper}>
      <ul>
        {props.todoList.map((list) => {
          return (
            <li key={list.id}>
              <span>{list.title}.</span>
              <button onClick={() => {clickHandler(list.id)}} type="button">X</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ToDoList;
