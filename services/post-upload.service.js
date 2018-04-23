import axios from 'axios'
import { getAccessToken } from './utils/auth'

const BASE_URL = 'localhost:8080'

function getAllPosts () {
  const url = `${BASE_URL}/api/posts/`
  console.log(getAccessToken())
  return axios.get(url, { headers: { Authorization: `Bearer ${getAccessToken()}` } }).then(response => response.data)
}

export { getAllPosts }
