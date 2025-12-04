import axios from "axios";
import config from "../../config.js";


class HttpProvider {
    static baseUrl = config.baseUrl;
    static  get = async (url, headers) => {

        headers = {
            headers: {
                ...headers, "Content-Type": "Application/json", "Accept": "Application/json",
            },
        }

        url = HttpProvider.baseUrl + url
        return await axios.get(url, headers)

    }

    static post = async (url, data = {}, headers = {}) => {
        headers = {
            headers: {
                ...headers,
            }
        }

        url = HttpProvider.baseUrl + url
        return await axios.post(url, data, headers)
    }

    static put = async (url, data = {}, headers = {}) => {
        headers = {
            headers: {
                ...headers, 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': "*"
            }
        }
        url = HttpProvider.baseUrl + url
        return await axios.put(url, data, headers)
    }

    static delete = async (url, headers) => {
        headers = {
            headers: {
                ...headers, "Content-Type": "Application/json", "Accept": "Application/json",
            },
        }

        url = HttpProvider.baseUrl + url
        return await axios.delete(url, headers)

    }
    static deleteWithData = async (url, data, headers) => {
        headers = {
            headers: {
                ...headers, "Content-Type": "Application/json", "Accept": "Application/json",
            },
            data
        }

        url = HttpProvider.baseUrl + url
        return await axios.delete(url, headers)

    }

    static setTokenHeader = (store , stage = 'front') => {
        if (stage === 'panel') {
            return {
                Authorization: 'Bearer ' + store().verify.panelToken?.token
            }
        }
        return {
            Authorization: 'Bearer ' + store().verify.user.token
        }
    }
}

export default HttpProvider


