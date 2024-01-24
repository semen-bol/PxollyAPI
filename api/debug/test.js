const pxolly = require("pxolly-api")

const api = new pxolly.api({token: ""})

async function getInfo() {
    let request = await api.acc.getInfo()
    console.log(request)
}

getInfo()