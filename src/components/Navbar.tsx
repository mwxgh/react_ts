const Navbar = () => {
  return (
    <section className="flex justify-center">
      <div className="container mx-auto flex items-center justify-between px-6 py-4 md:px-10">
        <div className="flex items-center gap-6">
          <img src="./img/logo.png" alt="Logo" className="h-12" />
          <ul className="hidden gap-6 text-gray-800 md:flex">
            <li>Home</li>
            <li>Studio</li>
            <li>Works</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="flex items-center gap-6">
          <img src="./img/search.png" alt="Search Icon" className="w-6" />
          <button className="w-24 cursor-pointer rounded-lg bg-pink-500 px-4 py-2 text-white">
            Hire Now
          </button>
        </div>
      </div>
    </section>
  )
}

export default Navbar
