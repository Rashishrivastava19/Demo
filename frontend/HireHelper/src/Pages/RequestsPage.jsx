import React from 'react';
import { MdCalendarToday, MdLocationOn, MdNotificationsNone } from 'react-icons/md';
import { FaBell, FaStar, FaEnvelope, FaUserCircle } from "react-icons/fa";


const requestsData = [
{ id: 1,
  name: 'Sarah Johnson',
  rating: 4.8, reviews: 18,
  details:  "Hi! I’d love to help with your computer setup. I have 5+ years of IT experience and can handle networking, software installation, and troubleshooting. Available tomorrow afternoon as requested.",
  requestingFor: 'Computer Setup Help',
  time: 'Jul 4, 4:00 PM',
  location: 'Within 5 miles' },
{ id: 2,
  name: 'Emily Chen',
  rating: 5, reviews: 41,
  details: "I'm a software engineer...",
  requestingFor: 'Computer Setup Help',
  time: 'Jul 4, 2:00 PM',
  location: 'Within 5 miles' },
];


const RequestsPage = () => (
  <div className="page-container requests-page">
    {/* ---- Page Header with Search + Notification ---- */}
    <div className="page-header">
      <div className="header-left">
        <h1>Requests</h1>
      </div>

      <div className="header-right">
        <input
          type="text"
          placeholder="Search tasks..."
          className="search-bar"
        />
        <MdNotificationsNone className="notification-icon" />
      </div>
    </div>

    {/* ---- Incoming Requests ---- */}
    <div className="incoming-requests-section">
      <h2>Incoming Requests</h2>
      <p>People who want to help with your tasks</p>

      {requestsData.map((request) => (
        <div key={request.id} className="request-card">
          <h3>
            {request.name} {request.rating} ({request.reviews} reviews)
          </h3>
          <p>{request.details}</p>

          <p>
            <strong>Requesting for:</strong> {request.requestingFor}
          </p>

          <p>
            📅 {request.time} • 📍 {request.location}
          </p>

          <div className="request-actions">
            <button className="accept-btn">Accept</button>
            <button className="decline-btn">Decline</button>
          </div>
        </div>
      ))}
    </div>
  </div>
);


export default RequestsPage;


