import ReactDOM from "react-dom";

const Portal = ({ children, containerId }) => {
  const container = document.getElementById(containerId);
  console.log("Portal-Html", containerId);
  if (!container) {
    console.error("Portal root not found in the DOM.");
    return null;
  }
  return ReactDOM.createPortal(children, container);
};

export default Portal;
