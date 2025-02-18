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
