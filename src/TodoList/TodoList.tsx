import style from "./TodoList.module.css";
import { TodoItem } from "../TodoItem/TodoItem";
import { ITodo } from "../interfaces";
interface Props {
  todos: ITodo[];
  toggleCompleted: (id: string) => void;
  onDeleteTodo: (id: string) => void;
}

export const TodoList = ({
  todos,
  onDeleteTodo,
  toggleCompleted,
}: Props): JSX.Element => {
  return (
    <ul className={style.grid}>
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
