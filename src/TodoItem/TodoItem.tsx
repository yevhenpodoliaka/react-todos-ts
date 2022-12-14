import style from "./TodoItem.module.css";
import { TiTrash } from "react-icons/ti";
interface Props {
  text: string;
  completed: boolean;
  toggleCompleted: () => void;
  onDeleteTodo: () => void;
}
export const TodoItem = ({
  text,
  completed,
  toggleCompleted,
  onDeleteTodo,
}: Props): JSX.Element => {
  return (
    <li className={style.card}>
      <input
        type="checkbox"
        className={style.checkbox}
        checked={completed}
        onChange={toggleCompleted}
      />
      <p className={completed ? style.line_through : style.text}>{text}</p>
      <button
        className={style.btnDelete}
        onClick={onDeleteTodo}
        aria-label="delete todo"
      >
        <TiTrash fontSize={24} />
      </button>
    </li>
  );
};
