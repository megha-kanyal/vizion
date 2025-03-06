import React, { useState } from "react";
import Efilters from "../Components/Efilters"; 

export default function Events() {
  const mockEvents = [
    { id: 1, name: "Tech Summit 2025", venue: "Auditorium A", date: "2025-03-10", speaker: "Dr. John Doe" },
    { id: 2, name: "AI & ML Workshop", venue: "Lab 2", date: "2025-03-15", speaker: "Alice Smith" },
    { id: 3, name: "Startup Pitch Night", venue: "Hall 3", date: "2025-03-20", speaker: "Bob Johnson" },
    { id: 4, name: "Cybersecurity Conference", venue: "Main Hall", date: "2025-03-25", speaker: "Charlie Brown" },
    { id: 5, name: "Blockchain & Web3 Meetup", venue: "Room 101", date: "2025-03-30", speaker: "David White" },
  ];

  const [filteredEvents, setFilteredEvents] = useState(mockEvents);

  // Function to filter events
  const handleFilterChange = (filters) => {
    let filtered = mockEvents;

    if (filters.search) {
      filtered = filtered.filter(event =>
        event.name.toLowerCase().includes(filters.search.toLowerCase())
      );
    }

    if (filters.dateRange) {
      filtered = filtered.filter(event => event.date === filters.dateRange);
    }

    if (filters.venue) {
      filtered = filtered.filter(event => event.venue === filters.venue);
    }

    if (filters.speaker) {
      filtered = filtered.filter(event =>
        event.speaker.toLowerCase().includes(filters.speaker.toLowerCase())
      );
    }

    setFilteredEvents(filtered);
  };

  return (
    <div className="flex min-h-screen bg-gray-800 text-white p-6">
      {/* Left Side - Filters Section */}
      <div className="w-1/3 mr-6">
        <Efilters onFilterChange={handleFilterChange} />
      </div>

      {/* Right Side - Events Section */}
      <div className="flex-1 bg-gray-900 p-6 rounded-lg">
        <h1 className="text-2xl font-bold mb-4">Events</h1>

        {/* Event Cards Layout */}
        <EventCards events={filteredEvents} />
      </div>
    </div>
  );
}

// Event Cards Component
const EventCards = ({ events }) => {
  return (
    <div className="grid gap-5">
      {events.length > 0 ? (
        events.map((event) => (
          <div key={event.id} className="bg-[#2F2F2F] text-[#FFCB74] p-4 rounded-md">
            <h2 className="text-xl font-semibold">{event.name}</h2>
            <p><strong>Venue</strong> - {event.venue}</p>
            <p><strong>DATE/TIME</strong> - {event.date}</p>
            <p><strong>Speaker</strong> - {event.speaker}</p>
            <button className="bg-[#FFCB74] text-black px-4 py-2 mt-2 rounded-md">
              Apply Now
            </button>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-400">No events found</p>
      )}
    </div>
  );
};

