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

export const getFormattedDate = () => {
  //yyyy-mm-dd
  const date = new Date();

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Ensure 2-digit month
  const day = String(date.getDate()).padStart(2, "0"); // Ensure 2-digit day

  return `${year}-${month}-${day}`;
};

export const formatDate = (date) => {
  // DD MMM YYYY
  return new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(new Date(date));
};
