import './App.css';
import axios from "axios";
import {useDispatch} from "react-redux";
import {useCallback, useEffect} from "react";
import {setTickets, setUsers} from "./redux/slice/kanbanSlice";
import Kanban from "./components/kanban";
import Navbar from "./components/navbar";

function App() {
  const dispatch = useDispatch();

  const fetchKanbanData = useCallback(async () => {
    try {
      const response = await axios.get('https://api.quicksell.co/v1/internal/frontend-assignment');
      const { tickets, users } = response.data;

      dispatch(setTickets(tickets));
      dispatch(setUsers(users));
    } catch (error) {
      console.error('Error fetching Kanban data:', error);
    }
  }, [dispatch]);

  useEffect(() => {
    fetchKanbanData();
  }, [fetchKanbanData]);

  return (
    <div className="App bg-gray-100 w-full h-full min-h-screen">
      <Navbar />
      <Kanban />
    </div>
  );
}

export default App;
