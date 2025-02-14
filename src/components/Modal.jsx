import { useDispatch, useSelector } from "react-redux";

const Modal = ({ children }) => {
  const isModalOpen = useSelector((state) => state.ui.isModalOpen);
  const dispatch = useDispatch();

  if (!isModalOpen) return null;

  return (
    <Portal containerId="modal-root">
      <div className="modal-overlay">
        <div className="modal-content">
          {children}
          <button onClick={() => dispatch(closeModal())}>Close</button>
        </div>
      </div>
    </Portal>
  );
};

export default Modal;
