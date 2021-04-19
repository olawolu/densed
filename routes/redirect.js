const UrlEntry = require("../models/urls")

module.exports = app => {
    app.get('/:hash', async (req, res) => {
        const base_url = process.env.BASE
        const short = base_url + req.originalUrl
        const urlEntry = await UrlEntry.findOne({ shortUrl: short })
        if (urlEntry) {
            return res.redirect(urlEntry.originalUrl)
        } else {
            return res.sendStatus(404)
        }
    })    
}