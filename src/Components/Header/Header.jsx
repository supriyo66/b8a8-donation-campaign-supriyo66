import { Link } from "react-router-dom";


const Header = () => {
    const links=<>
        <li className="focus:bg-red300 hover:bg-red-400 rounded-md text-2xl"><Link to="/">Home</Link></li>
        <li className="focus:bg-red-300 hover:bg-red-400 rounded-md  text-2xl"><Link to="/donation">Donation</Link></li>
        <li className="focus:bg-red-300 hover:bg-red-400 rounded-md text-2xl"><Link to="/statistic">Statistic</Link></li>
    
    </>
    return (
        <div className="container mx-auto">
            <div className="navbar bg-base-100 flex justify-between">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-1  rounded-box w-52">
        {links}
      </ul>
    </div>
    <div className="ml-24  md:ml-72 lg:ml-0">
    <img className=""  src="/Resources/Logo.png"></img>
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
    </ul>
  </div>
  
</div>
        </div>
    );
};

export default Header;