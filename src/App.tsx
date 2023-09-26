import { useState } from 'react';
import Home from './containers/Home';
import Dashboard from './containers/Dashboard';
import AllUsers from './containers/AllUsers';
import NewUser from './containers/NewUser';
import UserProfile from './containers/UserProfile';
import Reports  from './containers/Reports';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-primary w-full overflow-hidden'>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/users" element={<AllUsers />} >
            <Route path="/users/new" element={<NewUser />} />
            <Route path="/users/profile" element={<UserProfile />} />
          </Route>
          <Route path="/reports" element={<Reports />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
