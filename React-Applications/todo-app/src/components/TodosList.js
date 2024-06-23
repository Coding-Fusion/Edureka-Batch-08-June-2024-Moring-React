import Header from "./Header";

function TodosList(props) {
  let { todoList, markAsComplete, removeTodo } = props;
  return (
    <>
      <Header title="Todo List" />
      <section>
        <ul className="list-group">
          {todoList.map((value, index) => {
            return (
              <li
                key={index}
                className={`list-group-item d-flex justify-content-between bg-${
                  value.isCompleted ? "warning" : "primary"
                }-subtle mb-1 rounded-0`}
              >
                <section>
                  <input
                    type="checkbox"
                    className="me-2"
                    checked={value.isCompleted}
                    disabled={value.isCompleted}
                    onClick={function () {
                      markAsComplete(index);
                    }}
                    onChange={() => {}}
                  />
                  {value.name}
                </section>
                {value.isCompleted ? null : (
                  <button
                    className="btn btn-danger btn-sm "
                    onClick={() => removeTodo(index)}
                  >
                    DEL
                  </button>
                )}
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
}

export default TodosList;
