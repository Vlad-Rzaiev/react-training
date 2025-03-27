import { useDispatch, useSelector } from 'react-redux';
import { tasksSelector } from '../redux/tasksSlice';
import { useEffect } from 'react';
import { fetchTasks } from '../redux/operations';

function App() {
  const dispatch = useDispatch();

  const { items, isLoading, error } = useSelector(tasksSelector);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <div>
      {isLoading && <p>Loading tasks...</p>}
      {error && <p>{error}</p>}
      {items.length > 0 && <p>{JSON.stringify(items, null, 2)}</p>}
    </div>
  );
}

export default App;
