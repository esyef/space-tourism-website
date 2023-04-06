import { DestinationCard } from '../../components'

const Destination = () => {
  return (
    <main className='bg-destination min-h-screen pt-[76px]'>
      <div className='grid grid-cols-1 max-w-[1110.5px] mx-auto w-11/12 gap-y-8 md:gap-y-[60px] xl:gap-y-16'>
        <header>
          <h1 className='text-white base font-bold uppercase '>
            <span className='tracking-[2.7px] mr-[18px] opacity-25'>
              {'01'}
            </span>
            Pick your destination
          </h1>
        </header>
        <section>
          <DestinationCard />
        </section>
      </div>
    </main>
  )
}

export default Destination
