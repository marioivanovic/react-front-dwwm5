import axios from "axios";

const API_URL = process.env.REACT_APP_API_BACK_URL || 'http://localhost:8787';

export const api = axios.create({
    baseURL: API_URL
});

api.interceptors.request.use((config) => {
    if (config.data instanceof FormData) {
        config.headers['Content-Type'] = 'multipart/form-data';
    } else {
        config.headers['Content-Type'] = 'application/json';
    }

    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export const userAPI = {
    getAllUsers: () => api.get('/users'),

    getUser: (id) => api.get(`/user/${id}`),

    createUser: (userData) => api.post('/user', userData),

    updateUser: (id, userData) => api.put(`/user/${id}`, userData),

    deleteUser: (id) => api.delete(`/user/${id}`),

    updateProfileImage: (id, imageFile) => {
        const formData = new FormData();
        formData.append('profileImage', imageFile);
        return api.put(`/user/profileImage/${id}`, formData);
    }
};

export const authAPI = {
    register: (userData) => api.post('/auth/register', userData),

    login: (credentials) => api.post('/auth/login', credentials),

    me: () => api.get('/auth/me'),

    logout: () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
    }
};

export const dishAPI = {
    getAllDishes: () => api.get('/dishes'),

    getDish: (id) => api.get(`/dish/${id}`),

    createDish: (dishData) => api.post('/dish', dishData),

    updateDish: (id, dishData) => api.put(`/dish/${id}`, dishData),

    deleteDish: (id) => api.delete(`/dish/${id}`),

    addDishImages: (dishId, formData) => api.post(`/dish/${dishId}/images`, formData),

    setDishPrimaryImage: (dishId, imageId) => api.put(`/dish/${dishId}/images/${imageId}/primary`),

    deleteDishImage: (dishId, imageId) => api.delete(`/dish/${dishId}/images/${imageId}`)
};

export const ingredientAPI = {
    getAllIngredients: () => api.get('/ingredients'),
    createIngredient: (ingredientData) => api.post('/ingredient', ingredientData)
};

export const reviewsAPI = {
    getAllReviews: () => api.get('/reviews'),
    createReview: (reviewData) => api.post('/reviews', reviewData)
}