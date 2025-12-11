import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";

function Navbar() {
  const authCtx = useContext(AuthContext)!;
  const { user, logOut } = authCtx;

  return (
    <nav className="text-white flex justify-around items-center w-full h-10">
      <div className="flex justify-between pr-10 w-full">
        <NavLink to="/">Home</NavLink>
        {user && <NavLink to="/projects">Projects</NavLink>}
        {!user ? <NavLink to="/auth">Signin/Signup</NavLink>: <div onClick={() => logOut()}>Signout</div>}
      </div>
      {user && <div className="border rounded-full text-center">Hello {user.username}</div>}
    </nav>
  );
}

export default Navbar;
