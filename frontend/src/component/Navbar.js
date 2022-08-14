import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header>
      <div className='flex border-2 border-yellow-200 bg-cyan-200'>
        <Link to='/'>
          <h1 className='p-4 font-bold text-2xl italic'>Shopping Store</h1>
        </Link>
        <nav className='ml-auto mr-8 flex self-center'>
          <div className='px-2 text-xl'>
            <Link to='/login'>Login</Link>
          </div>
          <div className='text-xl'>
            <Link to='/Signup'>Signup</Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
