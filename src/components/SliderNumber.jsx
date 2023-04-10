/* eslint-disable react/prop-types */
const SliderNumber = ({ onClick, number }) => {
  return (
    <button
      onClick={onClick}
      className='round-button text-lg flex items-center justify-center p-[10px] '
    >
      <span className='text-white text-[1em] '>{number}</span>
    </button>
  )
}

export default SliderNumber
