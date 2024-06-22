import { useState } from "react";

function Todo() {
  // handling input with useState
  let [inputText, setInputText] = useState("");
  let [todoList, setTodoList] = useState([]);

  let inputChange = (event) => {
    let _value = event.target.value;
    setInputText(_value);
  };
  let saveNewTodo = () => {
    let newTodo = {
      name: inputText,
      isCompleted: false,
    };
    // from start of array
    // let _todoList = [...todoList];// create a copy
    //_todoList.unshift(newTodo);// add data from start
    //setTodoList(_todoList);// update state

    setTodoList([newTodo, ...todoList]);
    alert("Todo added");
    setInputText(""); // resting input
  };

  let markAsComplete = (index) => {
    let _todoList = [...todoList];
    _todoList[index].isCompleted = true;
    setTodoList(_todoList);
  };

  let removeTodo = (index) => {
    // delete a array value with a location

    let isDelete = window.confirm("Are you sure delete ?");
    if (isDelete) {
      let _todoList = [...todoList];
      _todoList.splice(index, 1); // index, DeleteCount
      setTodoList(_todoList);
      alert("Delete Successfully");
    }
  };
  return (
    <>
      <section className="row justify-content-center">
        <section className="col-lg-6 col-10 col-md-8">
          <h1 className="text-center mt-3 text-primary">My Todos</h1>
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
        </section>
      </section>
    </>
  );
}

export default Todo;
