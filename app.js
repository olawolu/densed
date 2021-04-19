const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const graphqlSchema = require("./graphql/schema")
const graphqlResolvers = require("./graphql/resolver")
const redirect = require("./routes/redirect")
const mongoose = require("mongoose")

const app = express()

app.use("/graphiql", graphqlHTTP({
    schema: graphqlSchema,
    rootValue: graphqlResolvers,
    graphiql: true,
}));
redirect(app)

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