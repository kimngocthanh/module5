import axios from "axios";
export const getAll = async () => {
    try {
        const res = await axios.get("http://localhost:8080/services");
        return res.data
    } catch (e) {
        console.log(e);
    }
}
export const addService = async (service) => {
    try {
        const res = await axios.post("http://localhost:8080/services", service)
        return res.data;
    } catch (e) {
        console.log(e);
    }
}
export const editService = async (service) => {
    console.log(service);
    try {
        const res = await axios.put("http://localhost:8080/services/" + service.id, service)
        return res.data;
    } catch (e) {
        console.log(e);
    }
}
export const getById = async (id) => {
    try {
        const res = await axios.get("http://localhost:8080/services/" + id)
        return res.data;
    } catch (e) {
        console.log(e);
    }
}

export const deleteService = async (id) => {
    try {
        const res = await axios.delete("http://localhost:8080/services/" + id)
        return res.data;
    } catch (e) {
        console.log(e);
    }
}