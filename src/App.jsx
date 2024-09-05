import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Form from "./components/Form.jsx";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/reset-password" element={<Form />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
