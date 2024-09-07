interface ItemProps {
  id: string;
  todo: string;
  completed: boolean;
  userId: Number;
  onMarkCompleted: (id: string) => void;
  onDelete: (id: string) => void;
}

interface AddItemProps {
  onAddItem: Function;
}

interface TodoListProps {
  items: any;
  onMarkCompleted: (id: string) => void;
  onDelete: (id: string) => void;
}

interface SortProps {
  onFilterBy: Function;
}
