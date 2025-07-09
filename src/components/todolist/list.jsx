const List = ({ list, onDeleteTask }) => {
  return (
    <ul>
      {list.map((item) => (
        <li key={item.id}>
          <span className="task-item">{item.task}</span>
          <button className="delete-btn" onClick={() => onDeleteTask(item.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default List;
