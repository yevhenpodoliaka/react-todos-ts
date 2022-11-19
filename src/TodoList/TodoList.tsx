import style from "./TodoList.module.css";
import { TodoItem } from "../TodoItem/TodoItem";
import { Todo } from "../type";
interface Props {
  todos: Todo[];
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
      {todos.map(({ id, text, completed }) => (
        <TodoItem
          key={id}
          text={text}
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
