import axios from "axios";

const API_URL = "http://localhost:5000/api/todos/"; // your backend URL

const axiosInstance = axios.create({
    baseURL: API_URL,
    headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
        "Access-Control-Allow-Credentials": true,
    }
});

// READ
export const fetchTodo = async () => {
    try {
        const response = await axiosInstance.get("/");
        return response.data;
    } catch (err) {
        console.error("Error fetching: ", err);
        throw err;
    }
};

// CREATE
export const createTodo = async (description) => {
    try {
        const response = await axiosInstance.post("/", { description });
        return response.data;
    } catch (err) {
        console.error("Error creating: ", err);
        throw err;
    }
};

// UPDATE (for complete or edit)
export const updateTodo = async (id, updatedTask) => {
    try {
        const response = await axiosInstance.put(`/${id}`, updatedTask);
        return response.data;
    } catch (err) {
        console.error("Error updating: ", err);
        throw err;
    }
};

// DELETE
export const deleteTodo = async (id) => {
    try {
        const response = await axiosInstance.delete(`/${id}`);
        return response.data;
    } catch (err) {
        console.error("Error deleting: ", err);
        throw err;
    }
};

export default axiosInstance;
