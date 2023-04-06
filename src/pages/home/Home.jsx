const Home = () => {
  return (
    <main className='bg-home min-h-screen grid grid-cols-1 gap-y-20 md:gap-y-[151px] xl:grid-cols-2 xl:items-center'>
      <section className='text-center w-[327px] md:w-[450px] mx-auto flex flex-col gap-4 md:gap-6'>
        <h2 className='body text-periwinkleBlue md:text-md'>
          SO, YOU WANT TO TRAVEL TO
        </h2>
        <h1 className='text-[80px] text-white font-bellefair md:text-3xl'>
          SPACE
        </h1>
        <p className='body text-white'>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </section>

      <div className='self-center justify-self-center'>
        <a href='#' className='button block'>
          EXPLORE
        </a>
      </div>
    </main>
  )
}

export default Home
