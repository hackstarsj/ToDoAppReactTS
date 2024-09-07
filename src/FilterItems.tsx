const FilterItems = (props: SortProps) => {
  return (
    <div>
      <span>Filter : </span>
      <div className="form">
        <button onClick={() => props.onFilterBy("all")}>All</button>
        <button onClick={() => props.onFilterBy("completed")}>Completed</button>
        <button onClick={() => props.onFilterBy("pending")}>Pending</button>
      </div>
    </div>
  );
};
export default FilterItems;
