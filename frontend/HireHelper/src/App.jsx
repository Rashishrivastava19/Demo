// App.jsx — Imports (paste at very top)
import React, { useState } from 'react';
import './styles/App.css'; // make sure this path matches your styles folder/file

// Components
import WelcomePanel from './Components/WelcomePanel';
import LoginForm from './Components/LoginForm';
import OtpVerificationPage from './Components/OtpVerificationPage';

// Pages / Layout
import Dashboard from './Pages/Dashboard';
import MyTasksPage from './Pages/MyTasksPage';
import RequestsPage from './Pages/RequestsPage';
import MyRequestsPage from './Pages/MyRequestsPage';
import AddTaskPage from './Pages/AddTaskPage';



const App = () => {
const [appState, setAppState] = useState('login');
const [activeTab, setActiveTab] = useState('signin');


const handleNavigation = (state) => setAppState(state);


const handleAuthenticationComplete = () => setAppState('otp');
const handleVerificationSuccess = () => setAppState('dashboard');
const handleBackToLogin = () => {
setAppState('login');
setActiveTab('signin');
};
const handleLogout = () => {
setAppState('login');
setActiveTab('signin');
};


const renderContent = () => {
switch (appState) {
case 'dashboard':
return <Dashboard onLogout={handleLogout} onNavigate={handleNavigation} appState={appState} />;


case 'mytasks':
case 'requests':
case 'myrequests':
case 'addtask':
return (
<div className="dashboard-layout">
<Dashboard onLogout={handleLogout} onNavigate={handleNavigation} appState={appState} overrideMain={() => (
<div className="main-content">
{appState === 'mytasks' && <MyTasksPage />}
{appState === 'requests' && <RequestsPage />}
{appState === 'myrequests' && <MyRequestsPage />}
{appState === 'addtask' && <AddTaskPage />}
</div>
)} />
</div>
);


case 'otp':
return <OtpVerificationPage onVerificationSuccess={handleVerificationSuccess} onBackToLogin={handleBackToLogin} />;


case 'login':
default:
return (
<div className="app-container">
<WelcomePanel />
<div className="right-panel">
<LoginForm activeTab={activeTab} setActiveTab={setActiveTab} onAuthenticationComplete={handleAuthenticationComplete} />
</div>
</div>
);
}
};


return (
<div className="hirehelper-app">
{renderContent()}
</div>
);
};


export default App;