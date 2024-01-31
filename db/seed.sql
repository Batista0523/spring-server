\c events_dev;

INSERT INTO events (eventName ,capacity, floor, user_id ) VALUES
('Meeting Room 1', 6, 22, 3 ),
('Boardroom 2', 12, 21, 3),
('Hub', 30, 22, 3),
('Summit Suite', 30, 85, 3),
('Executive Oasis', 20, 90, 3),
('Harmony Hall', 50, 1, 3),
('Leadership Lounge 1', 5, 44, 3);

INSERT INTO bookings (meetingname, meetinginroomid, startdate, enddate, attendees, event_id, user_id) VALUES
('Pursuit Admissions', 57, '2024-03-20T11:00:00.000Z', '2024-03-20T12:30:00.000Z', 8, 1, 3),
('Pinnacle Powwow', 8, '2024-04-10T13:15:00.000Z', '2024-04-10T15:00:00.000Z', 17, 1, 3),
('Synergetic Summit', 68, '2024-04-25T09:00:00.000Z', '2024-04-25T10:15:00.000Z', 22, 1, 3),
('Nexux Encounter', 79, '2024-05-12T16:30:00.000Z', '2024-05-12T18:00:00.000Z', 31, 2, 3),
('Luminary Exchange', 90, '2024-05-28T10:45:00.000Z', '2024-05-28T12:15:00.000Z', 5, 2, 3),
('Eleveation Symposium', 62, '2024-06-08T12:00:00.000Z', '2024-06-08T13:30:00.000Z', 14, 2, 3),
('Harmony Huddle', 12, '2024-06-23T15:15:00.000Z', '2024-06-23T16:45:00.000Z', 27, 3, 3),
('Fusion Forum', 73, '2024-07-05T14:45:00.000Z', '2024-07-05T16:15:00.000Z', 10, 3, 3),
('Stellar Roundtable', 34, '2024-07-20T08:00:00.000Z', '2024-07-20T09:30:00.000Z', 19, 3, 3),
('Catalyst Caucus', 5, '2024-08-10T11:30:00.000Z', '2024-08-10T13:00:00.000Z', 36, 4, 3),
('Spectrum Gathering', 51, '2024-08-25T17:00:00.000Z', '2024-08-25T18:30:00.000Z', 43, 4, 3),
('Insight Insight', 84, '2024-09-12T09:15:00.000Z', '2024-09-12T10:45:00.000Z', 12, 4, 3),
('Momentum Meetup', 23, '2024-09-27T13:30:00.000Z', '2024-09-27T15:00:00.000Z', 29, 5, 3),
('Zen Workshop', 44, '2024-10-08T16:45:00.000Z', '2024-10-08T18:15:00.000Z', 15, 5, 3),
('Elysian Session', 29, '2024-10-23T10:00:00.000Z', '2024-10-23T11:30:00.000Z', 7, 5, 3),
('Epoch Dialogue', 40, '2024-11-05T12:15:00.000Z', '2024-11-05T13:45:00.000Z', 24, 6, 3),
('Frontier Fusion', 1, '2024-11-20T15:30:00.000Z', '2024-11-20T17:00:00.000Z', 40, 6, 3),
('Celestial Confernece', 95, '2024-12-05T14:45:00.000Z', '2024-12-05T16:15:00.000Z', 33, 6, 3),
('Luminary Lab', 17, '2024-12-20T08:00:00.000Z', '2024-12-20T09:30:00.000Z', 6, 7, 3);