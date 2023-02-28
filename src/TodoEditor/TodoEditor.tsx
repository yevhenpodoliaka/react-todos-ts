import { useState } from "react";
import style from "./TodoEditor.module.css";
interface Props {
  onSubmit: (title:string,description:string) => void;
}
export const TodoEditor = ({ onSubmit }: Props): JSX.Element => {

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

    const handleChange = ({ target: { name, value } }: React.ChangeEvent<HTMLInputElement>) => {
    switch (name) {
      case 'title':
        return setTitle(value);
      case 'description':
        return setDescription(value);
      default:
        return;
    }
  };


  const handleSubmit = (e: React.SyntheticEvent): void => {
    e.preventDefault();
    onSubmit(title,description);
    setTitle("");
    setDescription("");
  };

  return (
    <div className={style.wrap}>
      <form className={style.form} onSubmit={handleSubmit}>
        <label>
          Title
        <input
          className={style.input}
          onChange={handleChange}
          value={title}
          name="title"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="add title"
        />
        </label>
        <label>
          Description
          <input
          className={style.input}
          onChange={handleChange}
          value={description}
          name="description"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="add description ..."
      />
      </label>
        <button className={style.btnCreate} type="submit">
          create
        </button>
      </form>
    </div>
  );
};
