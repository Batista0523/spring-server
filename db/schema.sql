
DROP DATABASE IF EXISTS events_dev;
CREATE DATABASE events_dev;

\c events_dev;

CREATE TABLE events (
 event_id SERIAL PRIMARY KEY,
 eventName VARCHAR(35) NOT NULL,
 capacity INT DEFAULT 0,
 floor INT DEFAULT 0
);

CREATE TABLE bookings (
 booking_id SERIAL PRIMARY KEY,
 meetingName VARCHAR(35) NOT NULL,
 meetingInRoomId INT DEFAULT 0,
 startDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
 endDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
 attendees TEXT,
 event_id INTEGER REFERENCES events (event_id)
    ON DELETE CASCADE
);