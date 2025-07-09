import { useState } from "react";
import Card from "../general/card";
import Form from "./form";
import List from "./list";

const TodoApp = () => {
  const [list, setList] = useState([]);
  const onDeleteTask = (id) => {
    setList(list.filter((item) => item.id !== id));
  };

  return (
    <>
      <Card>
        <Form onTaskSubmit={(task) => setList([...list, task])} />
        <List list={list} onDeleteTask={onDeleteTask} />
      </Card>
    </>
  );
};

export default TodoApp;
