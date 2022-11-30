import { NavLink } from "react-router-dom";

export const Navbar = () => {
    return (
        <nav className="primary-nav">
            <NavLink to="/">EMPLOYEE ADD</NavLink>
            <NavLink to="/view">EMPLOYEE LIST</NavLink>
            <NavLink to="/deptdetails">DEPARTMENT ADD</NavLink>
            <NavLink to="/deptview">DEPARTMENT LIST</NavLink>
        </nav>
    );
};