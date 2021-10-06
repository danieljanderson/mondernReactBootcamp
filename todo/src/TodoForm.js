import Paper from '@mui/material/Paper';
import { TextField } from '@mui/material';
import useInputState from './Hooks/useInputState';
function TodoForm({ addTodo }) {
  const [value, handleChange, reset] = useInputState('');
  return (
    <Paper sx={{ margin: '1rem 0', padding: '0 1rem' }}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addTodo(value);
          reset();
        }}
      >
        <TextField
          value={value}
          onChange={handleChange}
          margin="normal"
          label="Add New Todo"
          fullWidth
        ></TextField>
      </form>
    </Paper>
  );
}
export default TodoForm;
