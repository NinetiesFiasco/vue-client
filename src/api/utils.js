
const PORT = 3500
const API_URL = `http://localhost:${PORT}/api`

const JSON_HEADER = {'Content-Type': 'application/json'}

const handleResponse = async (response) => {
  const data = await response.json()
  return data.res ? data.res : data 
}

const get = async (url) => {
  const response = await fetch(`${API_URL}/${url}`)
  return await handleResponse(response)
}

const post = async (url, body) => {
  const queryParams = {
    body: JSON.stringify(body),
    method: 'POST',
    headers: {...JSON_HEADER}
  }
  
  const response = await fetch(`${API_URL}/${url}`, queryParams)
  return await handleResponse(response)
}

const put = async (url, body) => {
  const queryParams = {
    body: JSON.stringify(body),
    method: 'PUT',
    headers: {...JSON_HEADER}
  }
  
  const response = await fetch(`${API_URL}/${url}`, queryParams)
  return await handleResponse(response)
}

const _delete = async (url) => {
  const response = await fetch(`${API_URL}/${url}`, {method: 'DELETE'})
  return await handleResponse(response)
}

export default {get, post, put, _delete}
