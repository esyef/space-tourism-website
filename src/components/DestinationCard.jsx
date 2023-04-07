/* eslint-disable react/prop-types */
import Slidertext from './Slidertext'

const tabs = [
  { value: 'moon', path: '/moon' },
  { value: 'mars', path: '/mars' },
  { value: 'europa', path: '/europa' },
  { value: 'titan', path: '/titan' },
]

const DestinationCard = ({ onClick, data }) => {
  const { name, images, description, travel, distance } = data
  const footer = [
    { label: 'avg. distance', value: distance },
    { label: 'est. travel time', value: travel },
  ]
  return (
    <article className='grid grid-cols-1 xl:grid-cols-2 justify-items-center xl:justify-items-start gap-y-[26px] md:gap-y-[56px] md:max-w-[573px] xl:max-w-[1047px] mx-auto pb-[58px] md:pb-[62px] '>
      <section>
        <img
          src={images.webp}
          alt={`image destination ${name}`}
          className='object-cover fade-in'
        />
      </section>

      <section className='flex flex-col items-center xl:items-start '>
        <header className='inline-flex gap-8 h-10'>
          {tabs.map(({ value, path }) => (
            <Slidertext
              path={path}
              value={value}
              key={value}
              onClick={() => onClick(value)}
            />
          ))}
        </header>

        <section className='text-center xl:text-left mb-8 fade-in'>
          <h1 className='uppercase text-white heading-3 md:text-[80px] xl:text-2xl md:leading-[91.68px]'>
            {name}
          </h1>
          <p className='text-periwinkleBlue text-[15px] font-barlow md:text-base xl:text-body'>
            {description}
          </p>
        </section>

        <footer className='border-t-[1px] border-[#383B4B] pt-8 w-full fade-in'>
          <ul className='flex flex-col md:flex-row justify-center gap-8 md:gap-3 xl:justify-start xl:gap-20'>
            {footer.map(({ label, value }) => (
              <li key={label} className='text-center xl:text-left'>
                <p className='uppercase text-periwinkleBlue tracking-[2.36px] text-sm font-barlow mb-3'>
                  {label}
                </p>
                <p className='uppercase text-white text-md font-bellefair'>
                  {value}
                </p>
              </li>
            ))}
          </ul>
        </footer>
      </section>
    </article>
  )
}

export default DestinationCard
