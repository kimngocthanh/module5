import axios from "axios"
 const getAllUser = async () => {
    try {
        const result = await axios.get('http://localhost:8080/users');
        return result.data;
    } catch(e){
        console.log(e);
    }
}
export default getAllUser;