import { useState } from "react";
import style from "./TodoEditor.module.css";
interface Props {
  onSubmit: (title: string, description: string) => void;
}
export const TodoEditor = ({ onSubmit }: Props): JSX.Element => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [titleError, setTitleError] = useState(false);
  const [descriptionError, setDescriptionError] = useState(false);

  const handleChange = ({
    target: { name, value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    switch (name) {
      case "title":
        setTitleError(false);
        return setTitle(value);
      case "description":
        setDescriptionError(false);
        return setDescription(value);
      default:
        return;
    }
  };

  const handleSubmit = (e: React.SyntheticEvent): void => {
    e.preventDefault();
    if (!title && !description) {
      setTitleError(true);
      setDescriptionError(true);
      alert("This field is empty");
      return;
    }
    if (!title) {
      setTitleError(true);
      alert("This field is empty");
      return;
    }
    if (!description) {
      setDescriptionError(true);
      alert("This field is empty");
      return;
    }
    onSubmit(title, description);
    setTitle("");
    setDescription("");
  };

  return (
    <div className={style.wrap}>
      <form className={style.form} onSubmit={handleSubmit}>
        <label>
          Title
          <input
            style={{ borderColor: `${titleError ? "red" : "transparent"}` }}
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
            style={{
              borderColor: `${descriptionError ? "red" : "transparent"}`,
            }}
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
