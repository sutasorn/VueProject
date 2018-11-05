import axios from 'axios'
export async function  getAllPost(){
    let raw = await axios.get('https://jsonplaceholder.typicode.com/posts')
    return raw.data
}

