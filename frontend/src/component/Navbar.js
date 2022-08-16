import { Link } from 'react-router-dom';
import { useLogout } from '../hooks/useLogout';
import { useAuthContext } from '../hooks/useAuthContext';

const Navbar = () => {
  const { user } = useAuthContext();
  const { logout } = useLogout();
  const handleClick = () => {
    logout();
  };

  return (
    <header>
      <div className='flex border-2 border-yellow-200 bg-cyan-200'>
        <Link to='/'>
          <h1 className='p-4 font-bold text-2xl italic'>Shopping Store</h1>
        </Link>
        <nav className='ml-auto mr-8 flex self-center'>
          <div class='text-xl'>{user ? user.email : ''}</div>
          <div className={user ? 'hidden' : 'px-2 text-xl'}>
            <Link to='/login'>Login</Link>
          </div>
          <div className={user ? 'hidden' : 'text-xl'}>
            <Link to='/Signup'>Signup</Link>
          </div>
          <button
            onClick={handleClick}
            className={user ? 'px-2 text-xl' : 'hidden'}
          >
            Logout
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
