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
  try {
    if (allEvents[0]) {
      res.status(200).json({ success: true, data: { payload: allEvents } });
    }
  } catch (err) {
    res.status(404).json({ success: false, data: { error: err } });
  }
});

events.get("/:event_id", async (req, res) => {
  const { event_id } = req.params;
  const oneEvent = await getOneEvent(event_id);
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
    const { event_id } = req.params;
    const deletedEvent = await deleteEvent(event_id);
    if (deletedEvent) {
      res.status(200).json({ success: true, payload: { data: deletedEvent } });
    }
  } catch (err) {
    res.status(404).json({ success: false, data: { error: err } });
  }
});

events.put("/:event_id", async (req, res) => {
  const { event_id } = req.params;
  const updatedEvent = await updateEvent(event_id, req.body);
  if (updatedEvent.event_id) {
    res.status(200).json(updatedEvent);
  } else
    res.status(404).json({ sucess: false, data: { error: "no event found" } });
});

module.exports = events;
