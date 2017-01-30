const express = require("express")

const app = express()

app.all("/hello-world", (req, res) => {
    let body = ""

    console.log(req.method, "/hello-world")
    
    res.on("data", chunk => body += chunk.toString())
        .on("end", () => console.log(body))
        .on("error", e => {throw e})
})

app.listen(8888)