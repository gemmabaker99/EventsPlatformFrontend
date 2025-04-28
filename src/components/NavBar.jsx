import logo from '../assets/logo.png'
import { Link } from 'react-router';
import { useNavigate } from 'react-router';

function NavBar({user, setUser}) {
  const navigate = useNavigate()

function handleLogout () {
  localStorage.removeItem('user')
  setUser(null)
  navigate('/login')

}

    return (
      <nav className="bg-indigo-600 p-4 text-white">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link to='/'>
            <img src={logo} alt="Website Logo" className="max-h-34 w-auto" />
            </Link>
          <ul className="flex gap-4">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/events" className="hover:underline">Events</a></li>
            {user ? (
            <li><button onClick={handleLogout} className='hover:underline'>Logout</button></li>
          ) : (
          <li><a href='/login' className='hover:underline'>Login</a></li>
)}          </ul>

        </div>
      </nav>
    );
  }
  
  export default NavBar;
  