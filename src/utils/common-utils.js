export const setDataToLocalStorage = (key, user) => {
  return localStorage.setItem(key, JSON.stringify(user));
};

export const getDataFromLocalStorage = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

export const getCurrentDate = () => {
  return new Date().toLocaleDateString("en-GB", {
    month: "long",
    day: "numeric",
  });
};
export const getCurrentDay = () => {
  return new Date().toLocaleDateString("en-GB", { weekday: "long" });
};

export const formatDate = (date) => {
  // DD MMM YYYY
  return new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(new Date(date));
};
