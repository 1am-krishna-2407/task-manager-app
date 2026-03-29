import { useEffect, useState } from "react";
import API, { setAuthToken } from "../services/api";

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [form, setForm] = useState({ title: "", description: "" });

  useEffect(() => {
    const token = localStorage.getItem("token");
    setAuthToken(token);
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const res = await API.get("/tasks/");
    setTasks(res.data);
  };

  const createTask = async (e) => {
    e.preventDefault();
    await API.post("/tasks/", form);
    fetchTasks();
  };

  const deleteTask = async (id) => {
    await API.delete(`/tasks/${id}/`);
    fetchTasks();
  };

  return (
    <div>
      <h2>Dashboard</h2>

      <form onSubmit={createTask}>
        <input placeholder="Title" onChange={(e) => setForm({ ...form, title: e.target.value })} />
        <input placeholder="Description" onChange={(e) => setForm({ ...form, description: e.target.value })} />
        <button type="submit">Add Task</button>
      </form>

      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.title} - {task.description}
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}