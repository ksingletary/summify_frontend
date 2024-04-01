import logo from '../assets/logo.svg';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className={`flex justify-between shadow-lg items-center w-full mb-10 `}>
      <div>
        <Link to='/' variant="button">
        <img src={logo} alt="summify_logo" className='w-28 object-contain' />
        </Link>
      </div>
      <div className='flex justify-between items-center mb-6 pt-3'>
        <Link to="/" className="mr-10 hover:text-orange-500">Home</Link>
        <Link to="/" className="mr-10 hover:text-orange-500">About</Link>
        <Link to="/login" className="mr-10 hover:text-orange-500">Login</Link>
        <Link to="/signup" className="mr-10 hover:text-orange-500">Signup</Link>
        <Link to="/" className="mr-10 hover:text-orange-500">Username</Link>
      </div>
      
    </nav>
  );
}

export default Navbar;
