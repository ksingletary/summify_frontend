import logo from '../assets/logo.svg';
import { Link } from 'react-router-dom';
import UserContext from "../context/UserContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import SummifyApi from '../../api';

const Navbar = () => {

  const navigate = useNavigate();
  const {currentUser, token, setToken, LOCAL_STORAGE_KEY } = useContext(UserContext)
  
  function logout(){
    SummifyApi.token = null
    localStorage.removeItem(LOCAL_STORAGE_KEY)
    setToken(() =>  null)
    navigate('/')
    console.log("logout successful!")
  }

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
        
        {!currentUser &&
        <><Link to="/login" className="mr-10 hover:text-orange-500">Login</Link>
          <Link to="/signup" className="mr-10 hover:text-orange-500">Signup</Link>
        </>
        }
        {currentUser && 
          <><button onClick={logout} color="inherit" className='hover:text-orange-500'>
            {" "}
            Sign Out
          </button>
          <Link to={`/user/${currentUser.username}`} className='mr-10 ml-5 hover:text-orange-500'>{currentUser.username}</Link>
          </>
          }
      </div>
      
    </nav>
  );
}

export default Navbar;
