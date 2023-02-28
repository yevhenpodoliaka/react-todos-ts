import style from "./TodosTable.module.css"
import { ITodo } from "../../interfaces";

interface IProps {
    todos: ITodo[];
    toggleCompleted: (id: number) => void;
}

export const TodosTable = ({todos,toggleCompleted}:IProps) => {
  return (
      <ul className={style.table}>
          {todos.map(({ id, title, description, completed }) =>
          (<li className={style.row} key={id}>
              <p>{id}.</p>
              <p>{ title.slice(0,10)}...</p>
              <p>{description.slice(0,10)}...</p>
              <input type="checkbox"
                  checked={completed}
                  onChange={()=>toggleCompleted(id) } />
          </li>))}
    </ul>
  )
}
