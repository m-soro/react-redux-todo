import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import { ListItem } from "@mui/material";

export default function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  return (
    <Box>
      <h1>Todos</h1>
      <List>
        {todos.map((todo) => (
          <ListItem key={todo.id} className="each-todo">
            <span>{todo.text}</span>
            <Button
              variant="outlined"
              onClick={() => dispatch(removeTodo(todo.id))}
              className="button"
            >
              Delete
            </Button>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
