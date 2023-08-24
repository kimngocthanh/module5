import axios from "axios"

export const getAll = async () => {
    try{
        const result = await axios.get('http://localhost:8080/book')
        return result.data;
    }catch(e){
        console.log(e);
    }
}

export const deleteBook = async (id) => {
    try{
        const result = await axios.delete('http://localhost:8080/book/'+id)
        return result.data;
    }catch(e){
        console.log(e);
    }
}

export const addBook = async (book) => {
    try{
        const result = await axios.post('http://localhost:8080/book',book)
        return result.data;
    }catch(e){
        console.log(e);
    }
}

export const editBook = async (book,id) => {
    try {
        const result = await axios.put('http://localhost:8080/book/'+id,book)
        return result.status;
    }catch(e){
        console.log(e);
    }
}

export const getById = async (id) => {
    try {
        const result = await axios.get('http://localhost:8080/book/'+id)
        return result.data;
    }catch(e){
        console.log(e);
    }
}