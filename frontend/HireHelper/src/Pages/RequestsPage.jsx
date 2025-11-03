import React from 'react';
import { MdCalendarToday, MdLocationOn } from 'react-icons/md';


const requestsData = [
{ id: 1, name: 'Sarah Johnson', rating: 4.8, reviews: 18, details: "I'd love to help with your computer setup...", requestingFor: 'Computer Setup Help', time: 'Jul 4, 4:00 PM', location: 'Within 5 miles' },
{ id: 2, name: 'Emily Chen', rating: 5, reviews: 41, details: "I'm a software engineer...", requestingFor: 'Computer Setup Help', time: 'Jul 4, 2:00 PM', location: 'Within 5 miles' },
];


const RequestsPage = () => (
<div className="page-container requests-page">
<div className="page-header"><h2>Requests</h2><p>People who want to help with your tasks</p></div>


<div className="incoming-requests-section">
<h3>Incoming Requests</h3>
<p className="sub-text">People who want to help with your tasks</p>
{requestsData.map(request => (
<div key={request.id} className="request-card">
<div className="request-header">
<div className="profile-initials">{request.name.split(' ').map(n => n[0]).join('')}</div>
<div className="request-meta">
<h4>{request.name} <span className="rating">{request.rating} ({request.reviews} reviews)</span></h4>
<p className="request-details">{request.details}</p>
<div className="requesting-for-tag">Requesting for: {request.requestingFor}</div>
</div>
<div className="request-actions"><button className="action-button primary-action">Accept</button><button className="action-button secondary-action">Decline</button></div>
</div>
<div className="request-footer-meta"><p><MdCalendarToday /> {request.time}</p><p><MdLocationOn /> {request.location}</p></div>
</div>
))}
</div>
</div>
);


export default RequestsPage;