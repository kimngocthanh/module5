import axios from "axios";

export const getAll = async () => {
    try{
        const result = await axios.get('http://localhost:8080/covid')
        return result.data;
    }catch(e){
        console.log(e);
    }
}