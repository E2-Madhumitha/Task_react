import "./App.css";
import Employeeform from "./Employeeform";
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import { View } from "./View";
import DeptList from "./DeptList";
import { Deptview } from "./Deptview";
import { Navbar } from "./Navbar";

function App() {
    return (
        <div className="App">
           <Router>
            <Navbar/>
    <Routes>
        <Route  path="/"  element={<Employeeform />} />
        <Route  path="/view"  element={<View />} />
        <Route  path="/deptdetails"  element={<DeptList />} />
        <Route  path="/deptview"  element={<Deptview />} />
    </Routes>
    </Router>
        </div>
    );
}

export default App;
