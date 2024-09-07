import { useState, useEffect } from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import FilterItems from "./FilterItems";

const TodoApp = () => {
  const getItems = () => {
    const storedItems = localStorage.getItem("todolist");

    if (storedItems) {
      try {
        return JSON.parse(storedItems);
      } catch (error) {
        return [];
      }
    } else {
      return [];
    }
  };
  const [items, setItems] = useState(getItems());
  const [filterItems, setFilterItems] = useState(getItems());
  const onAddItem = (data: ItemProps) => {
    setItems([...items, data]);
  };

  useEffect(() => {
    localStorage.setItem("todolist", JSON.stringify(items));
    setFilterItems(items);
  }, [items]);

  const onFilterBy = (data: string) => {
    if (data === "all") {
      setFilterItems(items);
    } else if (data == "pending") {
      let temp = items.filter((item: any) => !item.completed);
      setFilterItems(temp);
    } else if (data == "completed") {
      let temp = items.filter((item: any) => item.completed);
      setFilterItems(temp);
    }
  };

  const markCompleted = (id: string) => {
    const updatedItems = items.map((item: any) =>
      item.id === id ? { ...item, completed: true } : item
    );
    setItems(updatedItems);
  };

  const deleteItem = (id: string) => {
    const updatedItems = items.filter((item: any) => item.id !== id);
    setItems(updatedItems);
  };

  return (
    <>
      <AddTodo onAddItem={onAddItem} />
      <FilterItems onFilterBy={onFilterBy} />
      <TodoList
        items={filterItems}
        onMarkCompleted={markCompleted}
        onDelete={deleteItem}
      />
    </>
  );
};
export default TodoApp;
