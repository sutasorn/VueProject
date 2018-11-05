import axios from 'axios'
export async function getAllData() {
    let raw = await axios.get('https://jsonplaceholder.typicode.com/todos')
    return raw.data
}