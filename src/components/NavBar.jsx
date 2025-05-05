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
          <ul className="flex gap-4 items-center">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/events" className="hover:underline">Events</a></li>

            {user?.role === 'user' && ( <>
              <li><a href="/userevents" className="hover:underline">My Events</a></li>
            </>
          ) }

          {user?.role === 'staff' && (
           <li><a href="/manageevents" className="hover:underline">Manage Events</a></li>

          )
          }
          {!user && (
           <li><a href='/login' className='hover:underline'>Login</a></li>
          )
          }
          {user && (
             <li><button onClick={handleLogout} className='"bg-indigo-500 hover:bg-indigo-700 text-white font-semibold py-1 px-3 rounded"'>Logout</button></li>
          )}

          </ul>

        </div>
      </nav>
    );
  }
  
  export default NavBar;
  