const db = require("../db/dbConfig.js");

const getAllbookings = async (event_id) => {
  try {
    const allbookings = await db.any("SELECT * FROM bookings WHERE event_id=$1", event_id);
    return allbookings;
  } catch (err) {
  }
};

const getAllBookingsDirect = async () => {
  try {
    const allbookings = await db.any("SELECT * FROM bookings");
    return allbookings;
  } catch (err) {
  }
};

const getOnebooking = async (booking_id) => {
  try {
    const onebooking = await db.one(
      "SELECT * FROM bookings WHERE booking_id=$1",
      booking_id
    );
    return onebooking;
  } catch (error) {
    return error;
  }
};

const createbooking = async (booking) => {
  try {
    const createdbooking = db.one(
      "INSERT INTO bookings (meetingName , meetingInRoomId , startDate ,endDate, attendees, event_id ) VALUES($1,$2,$3,$4,$5,$6) RETURNING *",
      [
        booking.meetingName,
        booking.meetingInRoomId,
        booking.startDate,
        booking.endDate,
        booking.attendees,
        booking.event_id
      ]
    );
    return createdbooking;
  } catch (error) {
    return error;
  }
};

const deletebooking = async (booking_id) => {
  try {
    const deletedbooking = await db.one(
      "DELETE FROM bookings WHERE booking_id=$1 RETURNING *",
      booking_id
    );
    return deletedbooking;
  } catch (error) {
    return error;
  }
};

const updatebooking = async (booking_id, booking) => {
  try {
    const { meetingName, meetingInRoomId, startDate, endDate, attendees } =
      booking;
    const updatedbooking = await db.one(
      "UPDATE bookings SET meetingName=$1 , meetingInRoomId=$2, startDate=$3 , endDate=$4 , attendees=$5 WHERE booking_id=$6 RETURNING *",
      [meetingName, meetingInRoomId, startDate, endDate, attendees, booking_id]
    );
    return updatedbooking;
  } catch (err) {
    return err;
  }
};

module.exports = {
  getAllbookings,
  getOnebooking,
  deletebooking,
  updatebooking,
  createbooking,
  getAllBookingsDirect
};
