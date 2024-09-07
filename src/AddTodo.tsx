import { useState } from "react";

const AddTodo = (props: AddItemProps) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState(null);

  const generateUniqueId = () => {
    return Date.now().toString(36) + Math.random().toString(36).substr(2, 9);
  };

  const addItem = () => {
    if (value == "") {
      setError("Please Add To do");
      return;
    }
    setError(null);
    props.onAddItem({
      id: generateUniqueId(),
      todo: value,
      completed: false,
      userId: 1,
    });
    setValue("");
  };
  return (
    <div className="form">
      <input
        type={"text"}
        value={value}
        name="todo"
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={addItem}>Add Todo</button>
      <br />
      {error != null && <p>{error}</p>}
    </div>
  );
};

export default AddTodo;
