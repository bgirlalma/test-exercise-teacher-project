import { NavLink } from "react-router-dom";
const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/teachers">Teachers</NavLink>
              </li>
              
            
      </ul>
    </nav>
  );
};

export default Navigation;
