import { CommonApi } from "./CommonApi"
import { serverUrl } from "./serverUrl"

export const registerApi = async (reqBody) => {
    return await CommonApi('POST', `${serverUrl}/register`, reqBody)
}

export const loginApi = async (reqBody) => {
    return await CommonApi('POST', `${serverUrl}/login`, reqBody)
}

export const addMenuApi = async (reqBody) => {
    return await CommonApi('POST', `${serverUrl}/addmenu`, reqBody)
}

export const getAllMenuApi = async () => {
    return await CommonApi('GET', `${serverUrl}/getmenu`)
}

export const addMenuItemApi = async (id, reqBody) => {
    return await CommonApi('POST', `${serverUrl}/additems/${id}`, reqBody)
}

export const getAllItemsApi = async () => {
    return await CommonApi('GET', `${serverUrl}/getallitems`)
}

export const deleteItemApi = async (id) => {
    return await CommonApi('DELETE', `${serverUrl}/deleteitem/${id}`)
}

export const handleEditApi = async (id, reqBody) => {
    return await CommonApi('PUT', `${serverUrl}/edititem/${id}`, reqBody)
}