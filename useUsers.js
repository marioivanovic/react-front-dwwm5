// import { useLocalStorage } from "./useLocalStorage";

// export const useUser = () => {
//     const [user, setUser] = useLocalStorage('user', null);

//     const userSaved = (userData) => {
//         setUser(userData);
//     };


//     return {
//         user,
//         userSaved
//     };
// };


import { useState, useEffect, useCallback } from 'react';
import { userAPI } from '../api/config';

export const useUsers = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchUsers = useCallback(async () => {
        setLoading(true);
        try {
            const response = await userAPI.getAllUsers();
            setUsers(response.data);
            setError(null);
        } catch (err) {
            setError('Erreur lors du chargement des utilisateurs');
            setUsers([]);
        } finally {
            setLoading(false);
        }
    }, []);

    const createUser = async (userData) => {
        setLoading(true);
        try {
            const response = await userAPI.createUser(userData);
            setUsers(currentUsers => [...currentUsers, response.data]);
            setError(null);
            return response.data;
        } catch (err) {
            setError('Erreur lors de la création de l\'utilisateur');
            throw err;
        } finally {
            setLoading(false);
        }
    };

    const updateUser = async (id, userData) => {
        setLoading(true);
        try {
            const response = await userAPI.updateUser(id, userData);
            setUsers(currentUsers => 
                currentUsers.map(user => user.id === id ? response.data : user)
            );
            setError(null);
            return response.data;
        } catch (err) {
            setError('Erreur lors de la mise à jour de l\'utilisateur');
            throw err;
        } finally {
            setLoading(false);
        }
    };

    const deleteUser = async (id) => {
        setLoading(true);
        try {
            await userAPI.deleteUser(id);
            setUsers(currentUsers => currentUsers.filter(user => user.id !== id));
            setError(null);
        } catch (err) {
            setError('Erreur lors de la suppression de l\'utilisateur');
            throw err;
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, [fetchUsers]);

    return {
        users,
        loading,
        error,
        fetchUsers,
        createUser,
        updateUser,
        deleteUser
    };
};