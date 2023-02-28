import style from "./TodoList.module.css";
import { TodoItem } from "../TodoItem/TodoItem";
import { ITodo } from "../../interfaces";
interface Props {
  todos: ITodo[];
  toggleCompleted: (id: number) => void;
  onDeleteTodo: (id: number) => void;
}

export const TodoList = ({
  todos,
  onDeleteTodo,
  toggleCompleted,
}: Props): JSX.Element => {
  return (
    <ul className={style.table}>
      {todos.map(({ id, title,description, completed }) => (
        <TodoItem
          key={id}
          title={title}
          description={description}
          completed={completed}
          onDeleteTodo={() => {
            onDeleteTodo(id);
          }}
          toggleCompleted={() => {
            toggleCompleted(id);
          }}
        />
      ))}
    </ul>
  );
};
