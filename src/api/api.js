const PORT = 3500
const API_URL = `http://localhost:${PORT}/api`

const apiCall = async (url) => {
  const response = await fetch(`${API_URL}/${url}`)
  const obj = await response.json()
  return obj
}

export default apiCall
