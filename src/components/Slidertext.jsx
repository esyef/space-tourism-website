/* eslint-disable react/prop-types */
const Slidertext = ({ value, path, onClick }) => {
  return (
    <a
      // href={path}
      className='text-sm md:text-base text-white uppercase hover:border-b-4 pb-8'
      onClick={(e) => {
        e.preventDefault()
        onClick()
      }}
    >
      {value}
    </a>
  )
}
export default Slidertext
