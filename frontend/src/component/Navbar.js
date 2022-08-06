import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header>
      <div className=''>
        <Link to='/'>
          <h1>Shopping Store</h1>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
