const { getAllbookings} = require("../queries/bookings")

const checkBookings = async (req, res, next) => {
    const { event_id } = req.params
    const allBookings = await getAllbookings(event_id)
    if (allBookings!==undefined) {
        return next()
    }
    else {
        res.status(500).json({
            error: `server error in getAllBookings,` +
                ` list validation failed, no bookings`
        })
    }
}

module.exports = {
    checkBookings,
}