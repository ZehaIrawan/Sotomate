import PrivateRoute from '@components/PrivateRoute';
import { UserContext } from '@lib/context';
import { useContext } from 'react';

export default function DashboardPage(props) {
  return (
    <main>
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    </main>
  );
}

function Dashboard() {
  const { user } = useContext(UserContext);
  return (
    <div>
      <h1>Dashboard</h1>
      {user.email}
    </div>
  );
}
