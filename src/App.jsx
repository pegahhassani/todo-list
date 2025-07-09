import Header from "./components/layout/header";
import TodoApp from "./components/todolist";
import "./App.css";

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <TodoApp />
      </div>
    </>
  );
}

export default App;
