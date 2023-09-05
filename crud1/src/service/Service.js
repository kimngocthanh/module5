import axios from "axios";

export const getAll = async (page,searchName) => {
    try {
        const res = await axios.get(`http://localhost:8080/products?page=${page}&limit=1&searchName=${searchName}`)
        console.log(res);
        return res;
    } catch (e) {
        console.log(e);
    }
}

export const searchName = async (nameProduct) => {
    try {
        const res = await axios.get(`http://localhost:8080/products/name=${nameProduct}`)
        return res.data;
    }catch(e) {
        console.log(e);
    }
}

export const getByIdProduct = async (id) => {
    try {
        const res = await axios.get('http://localhost:8080/products/' + id)
        return res.data
    } catch (e) {
        console.log(e);
    }
}

export const editProducts = async (product) => {
    try {
        product.typeProduct = await getByIdTypeProducts(product.typeProduct);
        await axios.put('http://localhost:8080/products/' + product.id, product)
    } catch (e) {
        console.log(e);
    }
}

export const getAllTypeProducts = async () => {
    try {
        const res = await axios.get('http://localhost:8080/type')
        return res.data
    } catch (e) {
        console.log(e);
    }
}

export const getByIdTypeProducts = async (id) => {
    try {
        const res = await axios.get(`http://localhost:8080/type/${id}`)
        return res.data
    } catch (e) {
        console.log(e);
    }
}

export const addProduct = async (value) => {
    try{
        await axios.post('http://localhost:8080/products/create',value)
    }catch(e){
        console.log(e);
    }
}

export const deleteProduct = async (id) => {
    try {
        await axios.delete('http://localhost:8080/products/'+id)
    }catch(e) {
        console.log(e);
    }
} 

