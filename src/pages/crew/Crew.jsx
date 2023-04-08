import { useReducer } from 'react'
import data from '../../data.json'
import { SliderDot } from '../../components'

const initialState = {
  crew: data.crew,
  index: '0',
}

function reducer(state, action) {
  switch (action.type) {
    case 'new_index':
      return {
        ...state,
        index: action.index,
      }
  }
}

const Crew = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const lengthSliderDots = Object.keys(state.crew).map((index) => index)

  const handleIndexChange = (index) => {
    console.log(index)
    dispatch({
      type: 'new_index',
      index,
    })
  }

  const crewInfo = state.crew[state.index]

  return (
    <main className='relative'>
      <div className='container mx-auto max-sm:w-11/12 pt-6 relative z-[1] '>
        <section className='grid grid-cols-1 xl:grid-cols-4 grid-flow-row'>
          {/* title page */}
          <section className='text-center md:text-left w-full max-xl:mb-[60px] col-span-2'>
            <h1 className='font-barlow text-base tracking-[2.7px] xl:text-md xl:tracking-[4.72px] text-white uppercase'>
              <span className='opacity-25 mr-4'>{'02'}</span>
              meet your crew
            </h1>
          </section>

          {/* Body */}
          <article className='flex flex-col col-span-2 xl:order-2 max-md:order-3'>
            {/* sidebar dots */}
            <section className='flex justify-center xl:justify-start gap-4 md:order-2 max-xl:mb-[40px]'>
              {/* Here sider bar dots */}
              {lengthSliderDots.map((dot) => (
                <SliderDot key={dot} onclick={() => handleIndexChange(dot)} />
              ))}
            </section>
            {/* crew rol and name */}
            <article className='flex flex-col gap-4 xl:mb-[157px] md:justify-self-center'>
              <article className='font-bellefair uppercase text-center xl:mb-[27px] xl:text-left'>
                <h2 className='text-white opacity-50 xl:text-lg'>
                  {crewInfo.role}
                </h2>
                <h1 className='text-white text-[24px] xl:text-xl'>
                  {crewInfo.name}
                </h1>
              </article>
              {/* Crew bio */}
              <p className='text-periwinkleBlue text-[15px] font-barlow text-center xl:text-left max-w-md max-xl:mx-auto max-xl:mb-[40px] xl:text-body'>
                {crewInfo.bio}
              </p>
            </article>
          </article>

          {/* crew image */}
          <figure className='max-md:border-b-2 border-[#383B4B] flex justify-center  w-full xl:col-span-2 xl:row-span-2 md:row-span-2 max-md:mb-8'>
            <img
              src={crewInfo.images.webp}
              alt={crewInfo.name}
              className='block object-cover w-1/2 xl:w-auto'
            />
          </figure>
        </section>
      </div>

      {/* bg image */}
      <div className='bg-crew absolute top-0 bottom-0 left-0 right-0 inset-0' />
    </main>
  )
}

export default Crew
