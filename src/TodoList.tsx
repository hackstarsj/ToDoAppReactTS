import TodoItem from "./TodoItem";

const TodoList = (props: TodoListProps) => {
  return (
    <ul>
      {props?.items?.map((item: ItemProps) => (
        <TodoItem
          key={item.id}
          {...item}
          onMarkCompleted={props.onMarkCompleted} // Correct function signature
          onDelete={props.onDelete}
        />
      ))}
    </ul>
  );
};

export default TodoList;
