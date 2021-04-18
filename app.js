const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const graphqlSchema = require("./graphql/schema")
const graphqlResolvers = require("./graphql/resolver")
const mongoose = require("mongoose")
const UrlEntry = require("./models/urls")

const app = express()

app.use("/graphiql", graphqlHTTP({
    schema: graphqlSchema,
    rootValue: graphqlResolvers,
    graphiql: true,
}));

app.get('/:hash', async (req, res) => {
    const base_url = process.env.BASE
    const short = base_url + req.originalUrl
    console.log(req.originalUrl);
    console.log(short);
    const urlEntry = await UrlEntry.findOne({ shortUrl: short })
    if (urlEntry) {
        return res.redirect(urlEntry.originalUrl)
    }
})

const mongouri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@kawura.1u6zd.gcp.mongodb.net/${process.env.MONGO_DB}?retryWries=true&w=majority`
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}
mongoose
    .connect(mongouri, options)
    .then(() => app.listen(process.env.PORT, console.log(`Server is running on port ${process.env.PORT}`)))
    .catch(error => {
        throw error
    })