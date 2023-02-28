import "./App.css";
import { nanoid } from "nanoid";
import { useState, useEffect } from "react";
import { TodoEditor } from "./TodoEditor/TodoEditor";
import { TodoList } from "./TodoList/TodoList";
import { ITodo } from "./interfaces";

const getInitialTodoState = () => {
  const savedTodos = localStorage.getItem("todos");
  return savedTodos ? JSON.parse(savedTodos) : [];
};

const App = () => {
  const [todoList, setTodoList] = useState<ITodo[]>(getInitialTodoState);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todoList));
  }, [todoList]);

  const addTodo = (title:string,description:string) => {
    const todo = {
      id: nanoid(),
      title,
      description,
      completed: false,
    };
    setTodoList((prevTodos) => [todo, ...prevTodos]);
  };
  const deleteTodo = (todoId: string) => {
    setTodoList((prevState) => prevState.filter((todo) => todo.id !== todoId));
  };

  const completedTodo = (todoId: string) => {
    setTodoList((prevState) =>
      prevState.map((todo) => {
        if (todo.id === todoId) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      })
    );
  };

  return (
    <div className="App">
      <TodoEditor onSubmit={addTodo} />
      {todoList.length < 1 ? (
        <p> Add your first TODO</p>
      ) : (
        <TodoList
          todos={todoList}
          onDeleteTodo={deleteTodo}
          toggleCompleted={completedTodo}
        />
      )}
    </div>
  );
};

export default App;
