import { useState } from "react";

import style from "./TodoEditor.module.css";
interface Props {
  onSubmit: (value: string) => void;
}
export const TodoEditor = ({ onSubmit }: Props): JSX.Element => {
  const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(e.currentTarget.value);
  };
  const handleSubmit = (e: React.SyntheticEvent): void => {
    e.preventDefault();
    onSubmit(value);
    setValue("");
  };

  return (
    <div className={style.wrap}>
      <form className={style.form} onSubmit={handleSubmit}>
        <input
          className={style.input}
          onChange={handleChange}
          value={value}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="add new todo ..."
        />
        <button className={style.btnCreate} type="submit">
          create
        </button>
      </form>
    </div>
  );
};
