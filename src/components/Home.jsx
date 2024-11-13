import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import data from '../data.json';
import '../css/Home.css';

const Home = ({ isAuthenticated }) => {
  let navigate = useNavigate();
  
  let [events, setEvents] = useState(data.events);
  let [currentPage, setCurrentPage] = useState(1);
  let eventsPerPage = 6; 

  let indexOfLastEvent = currentPage * eventsPerPage;
  let indexOfFirstEvent = indexOfLastEvent - eventsPerPage;

  let currentEvents = useMemo(() => {
    return events.slice(indexOfFirstEvent, indexOfLastEvent);
  }, [events, currentPage]);

  let handleBookingClick = (eventId) => {
    if (!isAuthenticated) {
      alert("Please login to book tickets.");
      navigate('/login');
    } else {
      setEvents((prevEvents) =>
        prevEvents.map((event) =>
          event.id === eventId && event.availableSeats > 0
            ? { ...event, availableSeats: event.availableSeats - 1 }
            : event
        )
      );
    }
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const totalPages = Math.ceil(events.length / eventsPerPage);

  return (
    <div className="home">
      <h1 className="h1">Event Booking System</h1>
      <div className="event-list">
        {currentEvents.map((event) => (
          <div key={event.id} className="event-card">
            <h3>{event.availableSeats === 0 ? "Fully Booked" : event.title}</h3>
            <p><strong>Category:</strong> {event.category}</p>
            <p><strong>Description:</strong> {event.description}</p>
            <p><strong>Available Seats:</strong> {event.availableSeats}</p>
            <p><strong>Price:</strong> ${event.price}</p>
            <button 
              onClick={() => handleBookingClick(event.id)} 
              disabled={event.availableSeats === 0}
            >
              {event.availableSeats === 0 ? "Fully Booked" : "Book Ticket"}
            </button>
          </div>
        ))}
      </div>

      <div className="pagination">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span>Page {currentPage} of {totalPages}</span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Home;
