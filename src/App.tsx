import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/common/Header/Header.tsx";
import HomePage from "./pages/home/HomePage.tsx";
import ExercisesPage from "./pages/exercises/ExercisesPage.tsx";
import LocalStorageDemoPage from "./pages/exercises/LocalStorageDemoPage/LocalStorageDemoPage.tsx";
import DialogDemoPage from "./pages/exercises/DialogDemoPage/DialogDemoPage.tsx";
import AutoFilterDropdownDemo from "./pages/exercises/AutoFilterDropdownDemo/AutoFilterDropdownDemo.tsx";

function App() {
  return (
    <Router>
      <Header />
      <div className="p-4 bg-nearWhite">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="exercises" element={<ExercisesPage />}>
            <Route path="1" element={<LocalStorageDemoPage />} />
            <Route path="2" element={<DialogDemoPage />} />
            <Route path="3" element={<AutoFilterDropdownDemo/>} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
