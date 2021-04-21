# Densed - A URL shortner

Densed is a graphql URL shortner api built with nodejs and mongodb. The api is hosted on [densed.herokuapp.com/graphiql](https://densed.herokuapp.com/graphiql).

## Usage

- To shorten a url

```graph
mutation {
  shortenUrl(originalUrl: "original-url.tld") {
    originalUrl
    shortUrl
    createdAt
  }
}
```

- To retrieve all urls

```graph
query {
  getUrls {
    _id
    originalUrl
    shortUrl
    createdAt
  }
}
```
