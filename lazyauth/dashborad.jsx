
import { useAuth } from "./lazytask";

function Dashboard() {
  const { user, logout } = useAuth();
    
  if (!user) return <p>Please log in.</p>;

  return (
    <div>
      <h2>Welcome, {user.name}!</h2>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default Dashboard;
