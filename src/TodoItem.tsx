const TodoItem = (props: ItemProps) => {
  return (
    <li>
      <p>{props.todo}</p>
      <div className="btn-group">
        {props.completed ? (
          <button className="primary">Completed</button>
        ) : (
          <button
            className="success"
            onClick={() => props.onMarkCompleted(props.id)}
          >
            Mark Completed
          </button>
        )}
        <button className="error" onClick={() => props.onDelete(props.id)}>
          Delete
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
