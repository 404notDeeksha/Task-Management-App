export const setDataToLocalStorage = (key, user) => {
  return localStorage.setItem(key, JSON.stringify(user));
};

export const getDataFromLocalStorage = (key) => {
  return JSON.parse(localStorage.getItem(key));
};
