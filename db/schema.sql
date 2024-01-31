
DROP DATABASE IF EXISTS events_dev;
CREATE DATABASE events_dev;

\c events_dev;

CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    firstname VARCHAR(50) NOT NULL DEFAULT 'first name unknown',
    lastname VARCHAR(50) NOT NULL DEFAULt 'last namer unknown',
    email VARCHAR(100) NOT NULL,
    password VARCHAR(255) NOT NULL,
    profile_img TEXT DEFAULT 'profile image',
    about TEXT DEFAULT 'about me',
    dob VARCHAR(20) DEFAULT '1/1/2024',
    registration_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP);

CREATE TABLE events (
 event_id SERIAL PRIMARY KEY,
 user_id INT,
 eventname VARCHAR(200) NOT NULL,
 capacity INT DEFAULT 0,
 floor INT DEFAULT 0,
 event_img TEXT DEFAULT 'image location unknown',
 FOREIGN KEY (user_id) REFERENCES users (user_id) ON DELETE CASCADE);

CREATE TABLE bookings (
 booking_id SERIAL PRIMARY KEY,
 user_id INT,
 meetingname VARCHAR(35) NOT NULL,
 meetinginroomid INT DEFAULT 0,
 startdate TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
 enddate TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
 attendees TEXT,
 event_id INTEGER REFERENCES events (event_id) ON DELETE CASCADE,
FOREIGN KEY (user_id) REFERENCES users (user_id) ON DELETE CASCADE);