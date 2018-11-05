import axios from 'axios'
export async function getAllPlugins() {
    let raw = await axios.get('http://localhost/api/testApi.php')
    console.log("raw.data="+raw.data)
    return raw.data
}