import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function AddTodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();

    dispatch(addTodo(input));
    setInput("");
  };

  return (
    <div>
      <h2>Add To do</h2>
      <form onSubmit={addTodoHandler}>
        <input
          type="text"
          placeholder="enter a todo"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          required
        />
        <Button variant="outlined" type="submit">
          add to do
        </Button>
      </form>
    </div>
  );
}
