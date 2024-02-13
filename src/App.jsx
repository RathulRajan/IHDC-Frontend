import { Route, Routes } from "react-router-dom";
import FirstPage from "./Pages/FirstPage";
import SecondPage from "./Pages/SecondPage";
import "./App.css";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="/secondpage" element={<SecondPage />} />
      </Routes>
    </div>
  );
};

export default App;
