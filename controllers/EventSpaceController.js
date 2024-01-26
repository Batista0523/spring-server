const express = require("express");

const events = express.Router();


const {
  getAllEvents,
  getOneEvent,
  deleteEvent,
  updateEvent,
  createEvent,
} = require("../queries/events.js");



const bookingsController = require("../controllers/bookingsController.js");
events.use("/:event_id/bookings", bookingsController);

events.get("/", async (req, res) => {
  const allEvents = await getAllEvents();
  console.log(allEvents);
  try {
    if (allEvents[0]) {
      res.status(200).json({ success: true, data: { payload: allEvents } });
    }
  } catch (err) {
    console.log(err);
    res.status(404).json({ success: false, data: { error: err } });
  }
});

events.get("/:event_id", async (req, res) => {
  const { id } = req.params;
  const oneEvent = await getOneEvent(id);
  try {
    if (oneEvent) {
      res.json(oneEvent);
    }
  } catch (err) {
    res.status(404).json({ success: false, data: { error: err } });
  }
});

events.post("/", async (req, res) => {
  try {
    const createdEvent = await createEvent(req.body);
    res.json(createdEvent);
  } catch (err) {
    res.status(404).json({ success: false, data: { error: err } });
  }
});

events.delete("/:event_id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedEvent = await deleteEvent(id);
    if (deletedEvent) {
      res.status(200).json({ success: true, payload: { data: deletedEvent } });
    }
  } catch (err) {
    res.status(404).json({ success: false, data: { error: err } });
  }
});

events.put("/:event_id", async (req, res) => {
  const { id } = req.params;
  const updatedEvent = await updateEvent(id, req.body);
  if (updatedEvent.id) {
    res.status(200).json(updatedEvent);
  } else
    res.status(404).json({ sucess: false, data: { error: "no event found" } });
});

module.exports = events;
