export const getToken = () => localStorage.getItem('token');
export const getUserInfo = () => localStorage.getItem('userInfo');
export const getItem = (itemKey) => localStorage.getItem(itemKey);

export const setToken = (token) => localStorage.setItem('token', token);
export const setUserInfo = (userInfo) => localStorage.setItem('userInfo', userInfo);
export const setItem = (itemKey, itemVale) => localStorage.setItem(itemKey, itemVale);

export const removeItem = (itemKey) => localStorage.removeItem(itemKey);

export const clearSessionStorage = () => localStorage.clear();
