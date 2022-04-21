const Header = () => {
  return (
    <>
      <header className="flex mx-auto p-4 max-w-5xl items-center justify-between transition-all">
        <div>
          <h1 className="font-bold text-2xl ">
            Crack<span className="text-yellow-400">JS</span>
          </h1>
        </div>
        <div className=" hidden md:flex space-x-4">
            <h1>Login</h1>
            <h1>Practice</h1>
            <h1>Random</h1>
        </div>
      </header>
    </>
  )
}

export default Header
