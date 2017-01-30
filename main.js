const express = require("express")

const app = express()

app.use(require("body-parser").json())

app.all("/hello-world", (req, res) => {
    let response = "ERROR"

    res.setHeader("content-type", "application/json")

    if (req.body.result.resolvedQuery === "ping") {
        response = "pong"
    }
        

    res.status(200).send({
        "speech": response,
        "displayText": response,
        "data": {},
        "contextOut": [],
        "source": "hello-world"
    })
})

app.listen(8888)