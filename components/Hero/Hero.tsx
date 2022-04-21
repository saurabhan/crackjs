const Hero = () => {
  return (
    <>
      <section className="relative w-full flex  md:h-screen  items-center justify-center">
        <div className="animate-spin-slow">
          <div className="overflow-hidden animate-pulse animate-bounce-slow h-32 w-32 md:h-52 md:w-52 rounded-full  bg-orange-500 blur-3xl"></div>
          <div className="overflow-hidden animate-pulse animate-bounce-slow h-52 w-52 md:h-72 md:w-72 rounded-full  bg-yellow-500 blur-3xl"></div>
        </div>
        <div className="absolute p-4 max-w-sm md:max-w-5xl mx-auto   ">
            <h1 className="font-extrabold text-5xl md:text-8xl text-center">
                Your One stop for JS Interview Prep
            </h1>
        </div>
      </section>
    </>
  )
}

export default Hero
