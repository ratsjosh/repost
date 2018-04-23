import axios from 'axios'
import { getAccessToken } from './utils/auth'

const BASE_URL = 'https://repost-29c3d.firebaseapp.com'

function getAllPosts () {
  const url = `${BASE_URL}/api/posts/`
  console.log(getAccessToken())
  return axios.get(url, { headers: { Authorization: `Bearer ${getAccessToken()}` } }).then(response => response.data)
}

export { getAllPosts }
