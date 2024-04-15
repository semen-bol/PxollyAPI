const { all } = require("axios");
const request = require("../utils/request.js")

class api {
    #_token; #_version; #_apiUrl
    constructor({token, v = 2.01, url = "https://api.pxolly.com/m/"}) {
        // * settings
        this.#_token = token;
        this.#_version = v;

        // Callback
        /*this.#_CbConfCode = CbConfCode;
        this.#_CbUrl = CbUrl;*/ // made later

        // Other
        this.#_apiUrl = url;
    } 

    acc = {
        getInfo: async () => {
            let params = `?access_token=${this.#_token}&v=${this.#_version}`
            let result = await request.newReq(this.#_apiUrl, "acc.getInfo", params)
            return result
        },
        envelope: async ({user_id, amount, message, random_id}) => {
            let params = `?access_token=${this.#_token}&v=${this.#_version}&amount=${amount}&user_id=${user_id}&random_id=${random_id}`
            if(message) params += `&message=${message}`
            let result = await request.newReq(this.#_apiUrl, "acc.envelope", params)
            return result
        }
    }

    callback = {
        getSettings: async () => {
            let params = `?access_token=${this.#_token}&v=${this.#_version}`
            let result = await request.newReq(this.#_apiUrl, "callback.getSettings", params)
            return result
        },
        getConfirmationCode: async () => {
            let params = `?access_token=${this.#_token}&v=${this.#_version}`
            let result = await request.newReq(this.#_apiUrl, "callback.getConfirmationCode", params)
            return result
        },
        editSettings: async ({url, secret_key, is_hidden}) => {
            let params = `?access_token=${this.#_token}&v=${this.#_version}&url=${url}&secret_key=${secret_key}`
            if(is_hidden) params += `&is_hidden=${is_hidden}`
            let result = await request.newReq(this.#_apiUrl, "callback.editSettings", params)
            return result
        }
    }

    utils = {
        getServerTime: async () => {
            let params = `?access_token=${this.#_token}&v=${this.#_version}`
            let result = await request.newReq(this.#_apiUrl, "utils.getServerTime", params)
            return result
        }
    }

    chats = {}
    db = {
        get: async ({database_id, allow_fakes, key, user_ids}) => {
            if(!user_ids) return { error: { error_code: -3, error_msg: "One of parametr invalid or empty" } }
            let params = `?access_token=${this.#_token}&v=${this.#_version}&database_id=${database_id}&allow_fakes=${allow_fakes}&user_ids=${user_ids}`
            if(key) params += `&key=${key}`
            let result = await request.newReq(this.#_apiUrl, "database.get", params)
            return result
        }
    }

    async execute({code}){
        let params = `?access_token=${this.#_token}&v=${this.#_version}&code=${code}`
        let result = await request.newReq(this.#_apiUrl, "execute", params)
        return result
    }
}

module.exports = { api }
