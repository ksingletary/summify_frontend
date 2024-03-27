import logo from '../assets/logo.svg';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center w-full mb-10 pt-3">
        
      <div>
        <img src={logo} alt="summify_logo" className='w-28 object-contain' />
      </div>
      <div className='flex justify-between items-center mb-10 pt-3'>
        <Link to="/login" className="black_btn mr-36">Login</Link>
        <Link to="/signup" className="black_btn">Signup</Link>
      </div>
    </nav>
  );
}

export default Navbar;
