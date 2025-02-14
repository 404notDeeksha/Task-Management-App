import { BrowserRouter as Router } from "react-router-dom";
import { AppRoutes } from "./routes/AppRoutes";
import { useDispatch } from "react-redux";
import Sidebar from "./components/Sidebar";
import Modal from "./components/Modal";
import { toggleSidebar } from "./redux/slices/uiSlice";

function App() {
  const dispatch = useDispatch();
  return (
    <Router>
      <Sidebar />
      <Modal>
        <h2>This is a dynamic modal!</h2>
        <p>Here you can pass any content as children.</p>
        <button>More Info</button>
      </Modal>

      {/* <button onClick={() => dispatch(toggleSidebar())}>Toggle Sidebar</button> */}
      <AppRoutes />
    </Router>
  );
}

export default App;
