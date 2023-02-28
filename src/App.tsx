import { useState, useEffect } from "react";
import { TodoEditor } from "./components/TodoEditor/TodoEditor";
import { TodosTable } from "./components/TodosTable/TodosTable";
import { Modal } from "./components/Modal/Modal";
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
      id:todoList.length +1,
      title,
      description,
      completed: false,
    };
    setTodoList((prevTodos) => [ ...prevTodos,todo]);
  };

  const completedTodo = (todoId: number) => {
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
        <TodosTable
          todos={todoList}
          toggleCompleted={completedTodo}
        />
      )}
      {/* <Modal /> */}
    </div>
  );
};

export default App;
