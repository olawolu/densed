const validUrl = require('valid-url')
const UrlEntry = require("../models/urls")
const shortener = require('../middleware/shortener')

module.exports = {
    getUrls: async () => {
        try {
            const urls = await UrlEntry.find()
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
            const base_url = process.env.BASE
            const originalUrl = args.originalUrl
            if (validUrl.isUri(originalUrl)) {
                const shortUrl = base_url + "/" + shortener.hashUrl(originalUrl)
                const urlEntry = new UrlEntry({
                    originalUrl,
                    shortUrl
                })
                const newUrlEntry = await urlEntry.save()
                return {
                    ...newUrlEntry._doc, _id: newUrlEntry.id
                }
            } else {
                return "Invalid Url"
            }
        } catch (error) {
            throw error
        }
    }
}