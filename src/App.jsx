import { useState } from 'react';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [theme, setTheme] = useState('light');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigationItems = [
    { id: 'dashboard', label: 'Dashboard', icon: '📊' },
    { id: 'leads', label: 'Lead Generation', icon: '🎯' },
    { id: 'reviews', label: 'Reviews', icon: '⭐' },
    { id: 'seo', label: 'Local SEO', icon: '🔍' },
    { id: 'social', label: 'Social Media', icon: '📱' },
    { id: 'appointments', label: 'Appointments', icon: '📅' },
    { id: 'templates', label: 'Templates', icon: '📄' },
    { id: 'analytics', label: 'Analytics', icon: '📈' },
    { id: 'marketing', label: 'Marketing', icon: '📣' },
    { id: 'roi', label: 'ROI Tracking', icon: '💰' }
  ];

  const handleLogin = (e) => {
    e.preventDefault();
    if (email && password) {
      setIsAuthenticated(true);
      setEmail('');
      setPassword('');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setActiveTab('dashboard');
  };

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  if (!isAuthenticated) {
    return (
      <div className={`login-container ${theme}`}>
        <form onSubmit={handleLogin} className="login-form">
          <h2>Local Business Marketing Platform</h2>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
          <button type="button" onClick={toggleTheme} className="theme-toggle">
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className={`app-container ${theme}`}>
      <nav className="sidebar">
        <div className="logo">
          <h2>Marketing Platform</h2>
        </div>
        <ul className="nav-items">
          {navigationItems.map((item) => (
            <li
              key={item.id}
              className={activeTab === item.id ? 'active' : ''}
              onClick={() => setActiveTab(item.id)}
            >
              <span className="icon">{item.icon}</span>
              {item.label}
            </li>
          ))}
        </ul>
      </nav>

      <main className="main-content">
        <header>
          <h1>{navigationItems.find((item) => item.id === activeTab)?.label}</h1>
          <div className="user-controls">
            <button onClick={toggleTheme} className="theme-toggle">
              {theme === 'light' ? '🌙' : '☀️'}
            </button>
            <button onClick={handleLogout}>Logout</button>
          </div>
        </header>

        <div className="dashboard-grid">
          <div className="card">
            <h3>Lead Statistics</h3>
            <div className="stat">
              <span className="number">150</span>
              <span className="label">New Leads</span>
            </div>
            <div className="trend positive">+12% from last month</div>
          </div>

          <div className="card">
            <h3>Campaign Performance</h3>
            <div className="stat">
              <span className="number">85%</span>
              <span className="label">Conversion Rate</span>
            </div>
            <div className="trend positive">+5% from last month</div>
          </div>

          <div className="card">
            <h3>Reviews</h3>
            <div className="stat">
              <span className="number">4.8</span>
              <span className="label">Average Rating</span>
            </div>
            <div className="trend">32 new reviews</div>
          </div>

          <div className="card">
            <h3>ROI Metrics</h3>
            <div className="stat">
              <span className="number">324%</span>
              <span className="label">Marketing ROI</span>
            </div>
            <div className="trend positive">+15% from last month</div>
          </div>
        </div>

        <div className="quick-actions">
          <button className="action-button primary">Create Campaign</button>
          <button className="action-button">Generate Report</button>
          <button className="action-button">Manage Templates</button>
          <button className="action-button">View Analytics</button>
          <button className="action-button">Optimize SEO</button>
        </div>

        <div className="analytics-overview">
          <div className="chart-container">
            <h3>Lead Sources</h3>
            <div className="placeholder-chart">Chart Component</div>
          </div>
          <div className="chart-container">
            <h3>Customer Journey</h3>
            <div className="placeholder-chart">Chart Component</div>
          </div>
          <div className="chart-container">
            <h3>Campaign Performance</h3>
            <div className="placeholder-chart">Chart Component</div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;