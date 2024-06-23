import Header from "./Header";

function TodoInput(props) {
  let { inputText, inputChange, saveNewTodo } = props;
  return (
    <>
      <Header title="Add New Todo" />
      <section className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Type Todo..."
          value={inputText}
          onChange={inputChange}
        />
        <button
          className="input-group-text btn btn-success"
          onClick={saveNewTodo}
        >
          Save
        </button>
      </section>
    </>
  );
}

export default TodoInput;
