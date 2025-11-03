import React from 'react';


const myRequestsData = [
{ id: 1, taskOwner: 'Sarah Johnson', taskTitle: 'Help Moving Furniture', status: 'Pending', message: "I'd be happy to help with your move!", image: true, time: 'Sent Jul 4, 10:00 AM', location: 'Downtown Seattle, WA' },
];


const MyRequestsPage = () => (
<div className="page-container my-requests-page">
<div className="page-header"><h2>My Requests</h2><p>Track the help requests you've sent</p></div>


<div className="my-requests-list">
<h3>My Requests</h3>
<p className="sub-text">Track the help requests you've sent</p>
{myRequestsData.map(request => (
<div key={request.id} className="my-request-card">
<div className="my-request-header"><div className="profile-initials">SJ</div><div className="request-meta-text"><h4>{request.taskTitle} <span className={`request-status-tag ${request.status.toLowerCase()}`}>{request.status}</span></h4><p className="task-owner">Task owner: {request.taskOwner}</p></div></div>
<div className="my-request-body"><strong>Your message:</strong><p className="request-message">{request.message}</p>{request.image && <div className="request-image-placeholder"></div>}</div>
<div className="request-footer-meta"><p>{request.time}</p><p>{request.location}</p></div>
</div>
))}
</div>
</div>
);


export default MyRequestsPage;