const https = require("https")
require('dotenv').config()

const options = {
    hostname: "api.pipedream.com",
    port: 443,
    path: "/v1/users/me/sources",
    headers: {
        "Authorization": "Bearer "+process.env.PIPEDREAM,
    },
}

const req = https.request(options, resp => {
    let data = ""
    resp.on("data", chunk => {
        data += chunk
    })
    resp.on("end", () => {
        console.log(JSON.parse(data))
    })
}).on("error", err => {
    console.error("[error] " + err.message)
})
req.end()