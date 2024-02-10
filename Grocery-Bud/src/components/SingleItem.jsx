const SingleItem = ({ item, onRemoveItem, editItemHandler }) => {
  const onChangeHandler = () => {
    editItemHandler(item.id)
  }
  return (
    <div className="single-item">
      <input
        type="checkbox"
        checked={item.completed}
        onChange={onChangeHandler}
      />
      <p
        style={{
          textTransform: 'capitalize',
          textDecoration: item.completed && 'line-through',
        }}
      >
        {item.name}
      </p>
      <button
        className="btn remove-btn"
        onClick={() => onRemoveItem(item.id)}
        type="button"
      >
        Delete
      </button>
    </div>
  )
}

export default SingleItem
