import { request } from '../config/request';

export const getUserData = () => {
    const token = localStorage.getItem('token');
    if (!token) {
        console.error("Token mavjud emas!");
        return null;
    }

    request
        .get('/stores/', {
            headers: {
                Authorization: `Bearer ${token}` // Tokenni headerga qo'shish
            }
        })
        .then(response => {
            const userData = response.data;
            localStorage.setItem("user", userData)
        })
        .catch(error => {
            console.error('Error fetching user data:', error.response?.data || error.message);
        });
}
