import style from "./TodosTable.module.css";
import { ITodo } from "../../interfaces";

interface IProps {
  todos: ITodo[];
  toggleCompleted: (id: number) => void;
  showTodoDetails: (id: number) => void;
}

export const TodosTable = ({
  todos,
  toggleCompleted,
  showTodoDetails,
}: IProps) => {
  return (
    <ul className={style.table}>
      {todos.map(({ id, title, description, completed }) => (
        <li
          className={style.row}
          key={id}
          onClick={(e) => {
            showTodoDetails(id);
          }}
        >
          <p className={style.id}>{id}.</p>
          <p className={style.title}>{title.slice(0, 10)}{title.length>9?title.slice(0, 10)+"...":""}</p>
          <p className={style.description}>{description.length>24?description.slice(0, 25)+"...":""}</p>
          <input
            type="checkbox"
            checked={completed}
            onClick={(e) => e.stopPropagation()}
            onChange={() => toggleCompleted(id)}
          />
        </li>
      ))}
    </ul>
  );
};
