import { useReducer } from 'react'
import { DestinationCard } from '../../components'
import data from '../../data.json'

function reducer(state, action) {
  switch (action.type) {
    case 'select_destination': {
      return {
        ...state,
        selectedDestination: action.selectedDestination,
      }
    }
    case 'filter_destination': {
      return {
        ...state,
        destination: state.filter(),
      }
    }
  }
}

const initialState = {
  destination: data.destinations,
  selectedDestination: 'Moon',
}

const Destination = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const selectedDestination = (dest) => {
    dispatch({
      type: 'select_destination',
      selectedDestination: dest,
    })
  }

  const filter = state.destination.filter((dest) =>
    dest.name.toLowerCase().includes(state.selectedDestination.toLowerCase())
  )

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

        {filter.map(({ ...data }) => (
          <DestinationCard
            onClick={selectedDestination}
            key={data.name}
            data={data}
          />
        ))}
      </div>
    </main>
  )
}

export default Destination
