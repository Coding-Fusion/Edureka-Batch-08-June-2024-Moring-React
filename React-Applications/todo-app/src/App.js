import { useState } from "react";
import TodosList from "./components/TodosList";
import TodoInput from "./components/TodoInput";
import NavigationBar from "./components/NavigationBar";
import { Navigate, Route, Routes } from "react-router-dom";
import PageNotFound from "./components/PageNotFound";

function App() {
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
      <section className="container-fluid">
        <NavigationBar />
        <section className="row justify-content-center">
          <section className="col-lg-6 col-10 col-md-8">
            <Routes>
              <Route
                path="/"
                element={
                  <TodoInput
                    inputText={inputText}
                    inputChange={inputChange}
                    saveNewTodo={saveNewTodo}
                  />
                }
              />
              <Route
                path="/todo-list"
                element={
                  <TodosList
                    todoList={todoList}
                    markAsComplete={markAsComplete}
                    removeTodo={removeTodo}
                  />
                }
              />
              {/* <Route path="*" element={<PageNotFound />} /> */}
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </section>
        </section>
      </section>
    </>
  );
}

export default App;
