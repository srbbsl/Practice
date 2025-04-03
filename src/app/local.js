import Cookie from 'js-cookie';

export const setUserToLocal = (user) => {
    Cookie.set('user', JSON.stringify(user))
};

export const getUserFromLocal = () => {
    const user = Cookie.get('user');
    return user ? JSON.parse(user) : null;
};

export const removeUserFromLocal = () => {
    Cookie.remove('user');
}