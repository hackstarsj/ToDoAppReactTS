import TodoItem from "./TodoItem";

const TodoList = (props: TodoListProps) => {
  return (
    <ul>
      {props?.items?.map((item: ItemProps) => (
        <TodoItem
          {...item}
          onMarkCompleted={props.onMarkCompleted}
          onDelete={props.onDelete}
        />
      ))}
    </ul>
  );
};

export default TodoList;
