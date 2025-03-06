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
    <div>Events</div>
  )
}
