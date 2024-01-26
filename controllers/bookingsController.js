const express = require("express");

const bookings = express.Router({ mergeParams: true });

const {
  getAllbookings,
  getOnebooking,
  deletebooking,
  updatebooking,
  createbooking,
} = require("../queries/bookings.js");

bookings.get("/", async (req, res) => {
  const { event_id } = req.params;
  const allbookings = await getAllbookings(event_id);
  console.log(allbookings);
  try {
    if (allbookings[0]) {
      res.status(200).json({ success: true, data: { payload: allbookings } });
    }
  } catch (err) {
    console.log(err);
    res.status(404).json({ success: false, data: { error: err } });
  }
});

bookings.get("/:booking_id", async (req, res) => {
  const { booking_id } = req.params;
  const onebooking = await getOnebooking(booking_id);
  try {
    if (onebooking) {
      res.json(onebooking);
    }
  } catch (err) {
    res.status(404).json({ success: false, data: { error: err } });
  }
});

bookings.post("/", async (req, res) => {
  try {
    const createdbooking = await createbooking(req.body);
    res.json(createdbooking);
  } catch (err) {
    res.status(404).json({ success: false, data: { error: err } });
  }
});

bookings.delete("/:booking_id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedbooking = await deletebooking(id);
    if (deletedbooking) {
      res
        .status(200)
        .json({ success: true, payload: { data: deletedbooking } });
    }
  } catch (err) {
    res.status(404).json({ success: false, data: { error: err } });
  }
});

bookings.put("/:booking_id", async (req, res) => {
  const { id } = req.params;
  const updatedbooking = await updatebooking(id, req.body);
  if (updatedbooking.id) {
    res.status(200).json(updatedbooking);
  } else
    res
      .status(404)
      .json({ sucess: false, data: { error: "no booking found" } });
});

module.exports = bookings;
