import { useState } from 'react';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const navigationItems = [
    { id: 'dashboard', label: 'Dashboard' },
    { id: 'leads', label: 'Lead Generation' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'seo', label: 'Local SEO' },
    { id: 'social', label: 'Social Media' },
    { id: 'appointments', label: 'Appointments' },
    { id: 'templates', label: 'Templates' },
    { id: 'analytics', label: 'Analytics' }
  ];

  const handleLogin = (e) => {
    e.preventDefault();
    setIsAuthenticated(true);
  };

  if (!isAuthenticated) {
    return (
      <div className="login-container">
        <form onSubmit={handleLogin} className="login-form">
          <h2>Login to Marketing Platform</h2>
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }

  return (
    <div className="app-container">
      <nav className="sidebar">
        <div className="logo">
          <h2>Local Business Marketing</h2>
        </div>
        <ul className="nav-items">
          {navigationItems.map(item => (
            <li
              key={item.id}
              className={activeTab === item.id ? 'active' : ''}
              onClick={() => setActiveTab(item.id)}
            >
              {item.label}
            </li>
          ))}
        </ul>
      </nav>

      <main className="main-content">
        <header>
          <h1>{navigationItems.find(item => item.id === activeTab)?.label}</h1>
          <div className="user-controls">
            <button onClick={() => setIsAuthenticated(false)}>Logout</button>
          </div>
        </header>

        <div className="dashboard-grid">
          <div className="card">
            <h3>Lead Statistics</h3>
            <div className="stat">
              <span className="number">150</span>
              <span className="label">New Leads</span>
            </div>
          </div>

          <div className="card">
            <h3>Campaign Performance</h3>
            <div className="stat">
              <span className="number">85%</span>
              <span className="label">Conversion Rate</span>
            </div>
          </div>

          <div className="card">
            <h3>Reviews</h3>
            <div className="stat">
              <span className="number">4.8</span>
              <span className="label">Average Rating</span>
            </div>
          </div>

          <div className="card">
            <h3>Appointments</h3>
            <div className="stat">
              <span className="number">28</span>
              <span className="label">This Week</span>
            </div>
          </div>
        </div>

        <div className="quick-actions">
          <button className="action-button">Create Campaign</button>
          <button className="action-button">View Reports</button>
          <button className="action-button">Manage Templates</button>
          <button className="action-button">Support</button>
        </div>
      </main>
    </div>
  );
}

export default App;