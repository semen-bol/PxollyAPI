/*
/ 100% javascript. Made with Love 
/ Axios module :D
/ 100% javascript. Made with Love 
*/

const axios = require("axios")

async function newReq (url, method, params){ 
    let newUrl = url + method + params

    let request = await axios.get(newUrl)
    let data = request.data

    if(data.error){ 
        return data.error
    } else if (data.response){ 
        return data.response
    } else if(request.status !== 200){ 
        return { error: { error_code: -1, error_msg: "Server has been disabled" }} 
    } else {
        return data.response
    }
}

module.exports = { newReq: newReq }