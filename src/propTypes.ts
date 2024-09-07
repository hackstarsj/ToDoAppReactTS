interface ItemProps {
  id: string;
  todo: string;
  completed: boolean;
  userId: Number;
  onMarkCompleted?: Function;
  onDelete?: Function;
}

interface AddItemProps {
  onAddItem: Function;
}

interface TodoListProps {
  items: any;
}

interface SortProps {
  onFilterBy: Function;
}
