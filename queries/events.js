const db = require("../db/dbConfig.js");

const getAllEvents = async () => {
  try {
    const allEvents = await db.any("SELECT * FROM events");
    console.log("data retrieved from databse", allEvents);
    return allEvents;
  } catch (err) {
    console.error(`Error in getAllEvents ${err}` );
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
      "INSER INTO events (eventName , capacity , floor) VALUES($1,$2,$3) RETURNING *",
      [event.eventName, event.capacity, event.floor]
    );
    return createdEvent;
  } catch (error) {
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
    const { eventName, capacity, floor } = event;
    const updatedEvent = await db.one(
      "UPDATE events SET eventName=$1 , capacity=$2, floor=$3 WHERE event_id=$4 RETURNING *",
      [eventName, capacity, floor, event_id]
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
}