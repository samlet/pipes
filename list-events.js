const https = require("https")
require('dotenv').config()

console.log(process.env.PIPEDREAM)
const options = {
    hostname: "api.pipedream.com",
    port: 443,
    path: "/v1/sources/<SOURCE-ID>/event_summaries?expand=event",
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
        // console.log(JSON.parse(data))
        console.log(data)
    })
}).on("error", err => {
    console.error("[error] " + err.message)
})
req.end()
