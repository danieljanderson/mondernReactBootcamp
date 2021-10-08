import { ListItem } from '@mui/material';
import { ListItemText } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import CreateIcon from '@mui/icons-material/Create';
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';

function Todo({ id, task, completed, removeTodo, toggleTodo }) {
  return (
    <ListItem>
      <Checkbox checked={completed} onClick={() => toggleTodo(id)} />
      <ListItemText
        sx={{ textDecoration: completed ? 'line-through' : 'none' }}
      >
        {task}
      </ListItemText>
      <ListItemSecondaryAction>
        <IconButton aria-label="Delete" onClick={() => removeTodo(id)}>
          <DeleteIcon></DeleteIcon>
        </IconButton>
        <IconButton>
          <CreateIcon aria-label="Edit"></CreateIcon>
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
}
export default Todo;
