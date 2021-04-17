const UrlEntry = require("../models/urls")

module.exports = {
    getUrls: async () => {
        try {
            const urls = await Url.find()
            return urls.map(url => {
                return {
                    ...url._doc,
                    _id: url.id,
                    createdAt: new Date(url._doc.createdAt).toISOString()
                }
            })
        } catch (error) {
            throw error
        }
    },

    shortenUrl: async args => {
        try {
            const originalUrl = args.originalUrl
            const shortUrl
            const urlEntry = new UrlEntry({
                originalUrl,
                shortUrl
            })
            const newUrlEntry = await urlEntry.save()
            return {
                ...newUrlEntry._doc, _id: newUrlEntry.id
            }
        } catch (error) {
            throw error
        }
    }
}