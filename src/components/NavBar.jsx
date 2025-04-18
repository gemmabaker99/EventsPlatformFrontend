function NavBar() {
    return (
      <nav className="bg-indigo-600 p-4 text-white">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Kids Events</h1>
          <ul className="flex gap-4">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/events" className="hover:underline">Events</a></li>
          </ul>
        </div>
      </nav>
    );
  }
  
  export default NavBar;
  