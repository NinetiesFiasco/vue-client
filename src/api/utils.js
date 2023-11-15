
const PORT = 3500
const API_URL = `http://localhost:${PORT}/api`

const get = async (url) => {
  const response = await fetch(`${API_URL}/${url}`)
  const obj = await response.json()
  return obj
}
const post = async (url, body) => {
  const queryParams = {
    body: JSON.stringify(body),
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
  }
  
  const response = await fetch(`${API_URL}/${url}`, queryParams)
  const obj = await response.json()
  return obj
}

export default {get, post}
