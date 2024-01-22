const pxolly = require("pxolly-api")

const api = new pxolly.api({token: "Here Token"})

async function getInfo() {
    let request = await api.acc.getInfo()
    console.log(request)
}

getInfo()