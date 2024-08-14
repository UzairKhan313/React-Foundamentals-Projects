import { useDeleteTask, useEditTask } from "./reactQueryCustomHook";

const SingleItem = ({ item }) => {
  const { deleteTask, deleteTaskLoading } = useDeleteTask();
  const { editTask } = useEditTask();

  return (
    <div className="single-item">
      <input
        type="checkbox"
        checked={item.isDone}
        onChange={() => editTask({ taskId: item.id, isDone: !item.isDone })}
      />
      <p
        style={{
          textTransform: "capitalize",
          textDecoration: item.isDone && "line-through",
        }}
      >
        {item.title}
      </p>
      <button
        className="btn remove-btn"
        type="button"
        onClick={() => {
          deleteTask(item.id);
        }}
        disabled={deleteTaskLoading}
      >
        delete
      </button>
    </div>
  );
};
export default SingleItem;
