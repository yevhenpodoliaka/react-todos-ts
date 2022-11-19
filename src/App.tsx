import "./App.css";
import { nanoid } from "nanoid";
import { useState } from "react";
import { TodoEditer } from "./TodoEditer/TodoEditer";
import { TodoList } from "./TodoList/TodoList";
import todos from "./todos.json";

const App = () => {
  const [todoList, setTodoList] = useState([...todos]);

  const addTodo = (text: string) => {
    const todo = {
      id: nanoid(),
      text,
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
      <TodoEditer onSubmit={addTodo} />
      <TodoList
        todos={todoList}
        onDeleteTodo={deleteTodo}
        toggleCompleted={completedTodo}
      />
    </div>
  );
};

export default App;
