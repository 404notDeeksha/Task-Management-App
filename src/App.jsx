import { BrowserRouter as Router } from "react-router-dom";
import { AppRoutes } from "./routes/AppRoutes";
import { Modal } from "./components/Modal";

function App() {
  return (
    <Router>
      <AppRoutes />
      <Modal />
    </Router>
  );
}

export default App;
