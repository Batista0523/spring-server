\c events_dev;

INSERT INTO events (eventName ,capacity, floor) VALUES
('meetingRoom1', 5, 12),
('meetingRoom2', 20, 1),
('meetingRoom3', 15, 40);

INSERT INTO bookings (meetingName,meetingInRoomId,startDate,endDate,attendees,event_id) VALUES
('pursuit addmissions', 3, '2022-03-23T17:01:00.000Z','2030-03-23T17:01:01.000Z', 5, 1),
('recruitment', 6, '2021-03-23T17:02:00.000Z','2023-03-23T17:04:00.000Z', 55, 1),
('scrum', 1, '2020-03-23T17:01:00.000Z','2022-03-23T17:08:00.000Z', 2, 1),
('class', 9, '2026-03-23T17:02:00.000Z','2028-03-23T17:11:00.000Z', 2, 2),
('pace', 12, '2013-03-23T17:00:30.000Z','2014-03-23T17:00:45.000Z', 7, 2),
('leadership', 43, '2011-03-23T17:00:20.000Z','2022-03-23T17:00:59.000Z', 3, 2),
('interview', 2, '2001-03-23T17:00:10.000Z','2002-03-23T17:00:15.000Z', 4, 3),
('technical', 7, '2018-03-23T17:00:15.000Z','2019-03-23T17:00:20.000Z', 10, 3),
('mock interview prep', 3, '2001-03-23T17:00:35.000Z','2002-03-23T17:00:40.000Z', 15, 3);