const mongoose = require("mongoose")

const urlSchema = new mongoose.Schema(
    {
        originalUrl: {
            type: String,
            required: true,
        },
        shortUrl: String,
    },
    { timestamps: true }
)

module.exports = mongoose.model("UrlEntry", urlSchema)