import { useState } from "react";
import { ITodo } from "../../interfaces";
import style from "./TodoItem.module.css";

interface Props {
  todo: ITodo;
  toggleCompleted: (id: number) => void;
  onClose: () => void;
}

export const TodoItem = ({
  todo: { title, completed, description, id },
  toggleCompleted,
  onClose,
}: Props) => {
  const [completedValue, setCompletedValue] = useState<boolean>(completed);

  return (
    <div className={style.card}>
      <h2 className={style.title}>{title}</h2>
      <p className={style.descriptionTitle}>Description :</p>
      <p className={style.description}>{description}</p>
      <label className={style.status}>
        Status
        <input
          type="checkbox"
          checked={completedValue}
          onChange={() => {
            toggleCompleted(id);
            setCompletedValue(!completedValue);
          }}
        />
      </label>

      <button className={style.btnClose} onClick={onClose}>
        close
      </button>
    </div>
  );
};
