const express = require("express")
const bookingsDirect = express.Router()

const { getAllBookingsDirect,
} = require("../queries/bookings")

bookingsDirect.get("/", async (req, res) => {
    try {
        let allBookings = await getAllBookingsDirect()

        res.status(200).json(allBookings)
    }
    catch (error) {
    res.status(400).json({
        error: `${error}, error in index` +
            ` controller path for bookings Direct.`
    })
}
})


module.exports = bookingsDirect