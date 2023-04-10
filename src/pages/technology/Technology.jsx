import { SliderNumber } from '../../components'
import data from '../../data.json'

const Technology = () => {
  const tech = data.technology
  const info = tech[0]
  return (
    <main className='relative py-[81px] overflow-hidden'>
      <section className='w-11/12 sm:container mx-auto grid grid-cols-1 max-lg:gap-y-8 lg:grid-cols-4 lg:grid-flow-row'>
        {/* page title */}
        <section className='justify-self-center sm:justify-self-start lg:mb-[26px]'>
          <h1 className='text-white font-barlow text-base uppercase tracking-[2.7px] md:text-[20px] md:tracking-[3.38px]'>
            <span className='opacity-25 mr-4'>{'03'}</span>
            space launch 101
          </h1>
        </section>

        {/* page image */}
        <figure className='h-[170px] md:h-[310px] xl:h-auto  lg:col-[3_/span_2] lg:row-[2_/span_2] justify-self-end border-2 border-white'>
          <div className='banner h-[170px] md:h-[310px] lg:hidden' />
          <img
            src={info.images.portrait}
            className='hidden lg:block max-w-full object-contain'
            width={515}
            height={527}
          />
        </figure>

        {/* page content */}
        <section className='md:justify-self-center lg:justify-self-start  lg:col-[1_/span_2] md:w-[458px] lg:row-[2_/span_2] lg:self-center lg:w-full'>
          <div className='flex flex-col max-lg:items-center gap-8 lg:justify-start lg:flex-row lg:gap-[80px]'>
            {/* slider numbers */}
            <div className='inline-block'>
              <SliderNumber number={1} />
            </div>

            {/* details content */}
            <aside className='max-lg:text-center flex flex-col gap-4'>
              <section className='uppercase'>
                <h3 className='text-periwinkleBlue font-barlow text-sm mb-[9px] tracking-[2.7px]'>
                  the terminology...
                </h3>
                <h2 className='text-white font-bellefair text-[24px]  md:text-[40px]  lg:text-xl'>
                  {' '}
                  {info.name}
                </h2>
              </section>
              <section>
                <p className='font-barlow text-[15px] text-periwinkleBlue lg:max-w-[444px] lg:text-[18px]'>
                  {info.description}
                </p>
              </section>
            </aside>
          </div>
        </section>
      </section>{' '}
    </main>
  )
}

export default Technology
