const db = require("../db/dbConfig.js");

const getAllEvents = async () => {
  try {
    const allEvents = await db.any("SELECT * FROM events");
    return allEvents;
  } catch (err) {
    console.error(`Error in getAllEvents ${err}`);
  }
};

const getOneEvent = async (event_id) => {
  try {
    const oneEvent = await db.one(
      "SELECT * FROM events WHERE event_id=$1",
      event_id
    );
    return oneEvent;
  } catch (error) {
    return error;
  }
};

const createEvent = async (event) => {
  try {
    const createdEvent = db.one(
      "INSERT INTO events (eventname , capacity , floor, event_img, user_id) VALUES($1,$2,$3,$4,$5) RETURNING *",
      [event.eventName, event.capacity, event.floor, event.event_img, 3]
    );
    return createdEvent;
  } catch (error) {
    console.error("hello", error);
    return error;
  }
};

const deleteEvent = async (event_id) => {
  try {
    const deletedEvent = await db.one(
      "DELETE FROM events WHERE event_id=$1 RETURNING *",
      event_id
    );
    return deletedEvent;
  } catch (error) {
    return error;
  }
};

const updateEvent = async (event_id, event) => {
  try {
    const { eventname, capacity, floor, event_img } = event;
    const updatedEvent = await db.one(
      "UPDATE events SET eventname=$1 , capacity=$2, floor=$3, event_img=$4 WHERE event_id=$5 RETURNING *",
      [eventname, capacity, floor, event_img, event_id]
    );
    return updatedEvent;
  } catch (err) {
    return err;
  }
};

module.exports = {
  getAllEvents,
  getOneEvent,
  deleteEvent,
  updateEvent,
  createEvent,
};
