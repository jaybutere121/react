import React from 'react';

const Todos = ({todos, deleteTodo}) => {

  const todoList = todos.length ? (
    todos.map(todo => {
      return (
        <div className="collection-item" key={todo.id}>
          <span>{todo.content}
          <button className="float-right btn btn-danger" onClick={() => {deleteTodo(todo.id)}}>Delete note</button>
          </span>
        </div>
      )
    })
  ) : (
    <h5 className="center">You have no todo's left, yay!</h5>
  );

  return (
    <div className="todos collection">
      {todoList}
    </div>
  )
}

export default Todos;
