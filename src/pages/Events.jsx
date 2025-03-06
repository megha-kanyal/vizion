import React from 'react';

const EventCards = ({ events }) => {
  return (
    <div className="flex gap-6">
      {events.map((event) => (
        <div key={event.id} className="bg-[#2F2F2F] text-[#FFCB74] p-4 rounded-md mb-4 w-1/3">
          <h2 className="text-xl font-semibold">{event.name}</h2>
          <p>
            <strong>Venue</strong> - {event.venue}
          </p>
          <p>
            <strong>DATE/TIME</strong> - {event.date}
          </p>
          <button className="bg-[#FFCB74] text-black px-4 py-2 mt-2 rounded-md">
            Apply Now
          </button>
        </div>
      ))}
    </div>
  );
};

export default EventCards;
